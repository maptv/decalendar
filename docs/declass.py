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
eval(str(u)[:-2] + "/3650")
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


def iterate(start:int|float|Dec, stops=[], steps=[()]):
    starts = [start]
    result = []
    for i, stop in enumerate(stops):
        if i + 1 > len(steps) or not list(flatten(steps[i])):
            result = []
            for start in starts:
                if isinstance(stop, (int, float, Dec)):
                    result.append((start, stop + start))
                else:
                    result.append((start, stop))
            break
        else:
            step = steps[i]
            total = sum(step)
            c = 0
            for start in starts:
                if isinstance(stop, int):
                    for c in range(stop):
                        result.append(start)
                        start += step[c % len(step)]
                else:
                    stop = start + stop if isinstance(stop, float) else stop
                    while (total > 0 and start < stop) or (total < 0 and start > stop):
                        result.append(start)
                        starts.append(start)
                        start += step[c % len(step)]
                        c += 1
        starts = list(flatten(result))
    return result

# working
iterate(0, [5], [[1, 2]])
iterate(0, [3], [[1, 2], [3, 4]])
iterate(0, [4, 3], [[2, 1]])
iterate(0, [4, 3], [[1], [2]])
iterate(0, [3, 2], [[1, 2], [3, 4]])
iterate(0, [2, 3], [[1, 2], [3, 4]])
iterate(0, [4, 3], [[1]])
iterate(0, [4, -3], [[-1]])
iterate(0, [8, 3], [[1, 2], [[]]])
iterate(0.3, [8, .4], [[1, 2], [[]]])
iterate(Dec(day=.3), [8, .4], [[1, 2.5], [[]]])

# ???

def flatten(nested):
    if isinstance(nested, (int, float, str, bool)):
        nested = [nested]
    for i in nested:
        if isinstance(i, (list, tuple)):
            yield from flatten(i)
        else:
            yield i
            
            
list(flatten(1))
import re

def multilimit_slice(arr, string):
    string = string.lower().replace(r'[^\d.\-#*:<>hilnsx^]', '')
    length = len(arr)
    first, *others = re.split(r'([#*:<>hilnsx].*)', string, 1)
    starts = []
    results = []
    if not others:
        return int(first)
    others = [o for o in re.split(r'(?=[#*<>hlnsx])', others[0]) if o]
    for i, other in enumerate(others):
        results.append([])
        limit, *steps = re.split(r'(?=[#*:<>hilnsx])', other)
        steps = [int(s[1:]) if not (s := int(s[1:])) else 1 for s in steps]
        steps = [-s if '/^[<h#n]/' else s for s in steps] or [1]
        total = sum(steps)
        if total == 0:
            steps = [1]
            total = 1
        if i == 0:
            starts = [int(first)]
        for j, start in enumerate(starts):
            if isinstance(limit, int):
            results[i].append([])
            if not isinstance(start, int):
                start = 0 if total > 0 else length - 1
            elif start < 0 and start + length >= 0:
                start += length
            stop = int(limit[1:])
            if '/^[*#xn]/' in limit:
                if not isinstance(stop, int):
                    count = 0
                    while (total > 0 and start < length) or (total < 0 and start >= 0):
                        if 0 <= start < length:
                            starts.append(start)
                        start += steps[count % len(steps)]
                        count += 1
                else:
                    for c in range(stop):
                        if 0 <= start < length:
                            starts.append(start)
                        start += steps[c % len(steps)]
            elif '/^[<>hl]/' in limit:
                stop = stop * (-1) ** ('/^[<h]/' in limit) + start
            if stop < 0 and stop + length >= 0:
                stop += length
            elif stop < 0 and stop + length < 0:
                stop = float('nan')
            if (float('nan') == stop and total > 0) or stop > length:
                stop = length
            count = 0
            while (float('nan') == stop and total < 0 and start >= 0) or (total > 0 and start < stop) or (total < 0 and start > stop):
                if 0 <= start < length:
                    starts.append(start)
                start += steps[count % len(steps)]
                count += 1
            results[i][-1].extend(starts)
    return [item for sublist in results[1:] for item in sublist] if len(results) > 1 else [item for sublist in results[0] for item in sublist]

