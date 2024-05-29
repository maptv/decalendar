class Dec:
    def __init__(
        self,
        year=0.,
        day=0.,
        month=3,
        dotm=1,
        week=0,
        dotw=3,
        hour=0,
        minute=0,
        second=0,
        millisecond=0,
        zone=0,
        utc=-9,
        degree=-162,
    ):
        self.zone = int(zone // 1 + utc // 2.4 + 4 + (degree + 162) // 36)
        self.dote = (self.year2dote(year) + day
            + (153 * (month - 3 if month > 2 else month + 9) + 2) // 5 + dotm - 1
            + week * 7 + dotw - 3 - self.zone / 10
            + (hour + minute / 60 + second / 3600 + millisecond / 3600000) / 24
            )
        self._save_year_and_date()
        self.stop = []
        self.step = []
        self.call = []
    @staticmethod
    def dote2date(dote):
        cykl = (dote if dote >= 0 else dote - 146096) // 146097
        dotc = dote - cykl * 146097
        yotc = (dotc - dotc // 1460 + dotc // 36524 - dotc // 146096) / 365
        date = int(dotc) + (yotc := int(yotc)) // 100 - yotc * 365 - yotc // 4
        return [yotc + cykl * 400, date]
    @staticmethod
    def year2dote(year):
        cykl = (year if year >= 0 else year - 399) // 400
        yotc = year - cykl * 400
        return cykl * 146097 + yotc * 365 + yotc // 4 - yotc // 100
    def _save_year_and_date(self):
        cykl = (self._dote if self.dote >= 0 else self._dote - 146096) // 146097
        dotc = self._dote - cykl * 146097
        yotc = (dotc - dotc // 1460 + dotc // 36524 - dotc // 146096) / 365
        self._year = yotc + cykl * 400
        self._date = int(dotc) + (yotc := int(yotc)) // 100 - yotc * 365 - yotc // 4
    def __call__(self, stop, *steps):
        self.stop += [stop]
        self.step += [steps]
        self.call += [(stop, *steps)]
        return self
    @property
    def leap(self):
        y = self.year // 1 + 1
        return y % 4 == 0 and y % 100 != 0 or y % 400 == 0
    @property
    def dote(self):
        return self._dote
    @dote.setter
    def dote(self, value):
        self._dote = value
        self._save_year_and_date()
    @property
    def year(self):
        return self._year
    @year.setter
    def year(self, value):
        self._dote = self.year2dote(value)
        self._save_year_and_date()
    @property
    def date(self):
        return self._date
    @date.setter
    def date(self, value):
        diff = value - self._date
        self._dote += diff
        self._save_year_and_date()
    def __iter__(self):
        yield from zip(
            ["year", "date", "dote", "zone", "stop", "step"],
            [*self.dote2date(dote := self.dote + self.zone / 10),
            dote, self.zone, self.stop, self.step])
    def __str__(self):
        year, date = self.dote2date(dote := self.dote + self.zone / 10)
        return (
            f"{int(year):04}+{date:03}{dote % 1 * 10:.4f}-{self.zone}"
            f"{''.join(map(str, self.call)).replace(' ', '')}"
        )
    def __int__(self):
        return int(self.dote)
    def __float__(self):
        return float(self.dote)
    def __bool__(self):
        return bool(self.dote)
    def __invert__(self):
        return ~self.dote
    def __pos__(self):
        return +self.dote
    def __neg__(self):
        return -self.dote
    def __round__(self):
        return round(self.dote)
    def __floor__(self):
        return self.dote // 1
    def __trunc__(self):
        return self.dote.__trunc__()
    def __abs__(self):
        return abs(self.dote)
    def __ceil__(self):
        return self.dote.__ceil__()
    def __eq__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote == other.dote)
        return self.dote == other
    def __ne__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote != other.dote)
        return self.dote != other
    def __gt__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote > other.dote)
        return self.dote > other
    def __lt__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote < other.dote)
        return self.dote < other
    def __ge__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote >= other.dote)
        return self.dote >= other
    def __le__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote <= other.dote)
        return self.dote <= other
    def __add__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote + other.dote)
        return Dec(day=self.dote + other)
    def __sub__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote - other.dote)
        return Dec(day=self.dote - other)
    def __mul__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote * other.dote)
        return Dec(day=self.dote * other)
    def __truediv__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote / other.dote)
        return Dec(day=self.dote / other)
    def __divmod__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote.__divmod__(other.dote))
        return Dec(day=self.dote.__divmod__(other))
    def __mod__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote % other.dote)
        return Dec(day=self.dote % other)
    def __floordiv__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote // other.dote)
        return Dec(day=self.dote // other)
    def __pow__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote ** other.dote)
        return Dec(day=self.dote ** other)
    def __matmul__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote @ other.dote)
        return Dec(day=self.dote @ other)
    def __radd__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote + other.dote)
        return Dec(day=self.dote + other)
    def __rsub__(self, other):
        if isinstance(other, Dec):
            return Dec(day=other.dote - self.dote)
        return Dec(day=self.dote - other)
    def __rmul__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote * other.dote)
        return Dec(day=self.dote * other)
    def __rtruediv__(self, other):
        if isinstance(other, Dec):
            return Dec(day=other.dote / self.dote)
        return Dec(day=other / self.dote)
    def __rmod__(self, other):
        if isinstance(other, Dec):
            return Dec(day=other.dote % self.dote)
        return Dec(day=other % self.dote)
    def __rfloordiv__(self, other):
        if isinstance(other, Dec):
            return Dec(day=other.dote // self.dote)
        return Dec(day=other // self.dote)
    def __rpow__(self, other):
        if isinstance(other, Dec):
            return Dec(day=other.dote ** self.dote)
        return Dec(day=other ** self.dote)
    def __rmatmul__(self, other):
        if isinstance(other, Dec):
            return Dec(day=other.dote @ self.dote)
        return Dec(day=other @ self.dote)
    def __and__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote & other.dote)
        return Dec(day=self.dote & other)
    def __or__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote | other.dote)
        return Dec(day=self.dote | other)
    def __xor__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote ^ other.dote)
        return Dec(day=self.dote ^ other)
    def __rshift__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote >> other.dote)
        return Dec(day=self.dote >> other)
    def __lshift__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.dote << other.dote)
        return Dec(day=self.dote << other)
    def __repr__(self):
        year, date = self.dote2date(dote := self.dote + self.zone / 10)
        return (
            f"Dec(year={int(year)}, date={int(date)}, "
            f"time={dote % 1 * 10:.4g}, zone={int(self.zone)}"
            + (f", stop={str(self.stop).replace(' ', '')}"
                if self.stop else "")
            + (f", step={str(self.step).replace(' ', '').replace(',)', ')').replace('),(', ')(')}"
                if self.step else "") + ")"
        )
    @property
    def iter(self):
        start = self.dote
        starts = [start]
        # result = []
        for i, limit in enumerate(self.stop):
            steps = self.step[i]
            total = sum(steps)
            c = 0
            for j, s in enumerate(starts):
                if not list(self.flatten(steps)):
                    if isinstance(limit, (int, float, Dec)):
                        yield (s, limit + s)
                    else:
                        yield (s, limit)
                elif isinstance(limit, int):
                    for c in range(limit):
                        yield s
                        starts.append(s)
                        s += steps[c % len(steps)]
                else:
                    if isinstance(limit, float):
                        l = s + limit
                    elif isinstance(limit, Dec):
                        l = limit
                    while (total > 0 and s < l) or (total < 0 and s > l):
                        yield s
                        starts.append(s)
                        s += steps[c % len(steps)]
                        c += 1
    @property
    def list(self):
        list(self.iter)
    @property
    def tuple(self):
        tuple(self.iter)
    @property
    def set(self):
        tuple(self.iter)
    @property
    def float(self):
        list(map(float, self.flatten(self.iter)))
    @property
    def int(self):
        list(map(int, self.flatten(self.iter)))
    def flatten(self, nested):
        for i in nested:
            if isinstance(i, (list, tuple)):
                yield from self.flatten(i)
            else:
                yield i

        


class Interval:
    def __init__(self, start=Dec(day=719468), stop=Dec(day=730485)):
        self.start = start
        self.stop = stop
        self.range = stop - start


i = Interval()
i.start
u = Dec(year=1969, day=306.54, zone=1)
u
m = Dec(year=2000)
m.dote
m(3, 2, 1)#(4.3,3,2,1)
str(m)
u
m
i = m.iter
list(i)
m.step

u.zone += 4
u
u + 1
1 + u
u.dote
u.year += 1.2
m.year += 1.1
u.date
m.date
m.dote
m.year
m - u

u.dote += 1
u.date += 1
list(u)
dict(u)
len([()])