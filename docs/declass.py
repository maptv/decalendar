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
        self.year, self.date = self.dote2date(self.dote)
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
    def __call__(self):
        return "test"
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
        self._year, self._date = self.dote2date(self._dote)
    @property
    def year(self):
        return self._year
    @year.setter
    def year(self, value):
        self._dote = self.year2dote(value)
        self._year, self._date = self.dote2date(self._dote)
    @property
    def date(self):
        return self._date
    @date.setter
    def date(self, value):
        diff = value - self._date
        self._dote += diff
        self._year, self._date = self.dote2date(self._dote)
        # m = self.doty - self.nday
        # self.down = f"{y:04}-{abs(m.__floor__()):03}{m % 1 * 10:.4f}{'+' + str(self.zone) if self.zone else ''}"
    def __list__(self):
        dote = self.dote + self.zone / 10
        cykl = (dote if dote >= 0 else dote - 146096) // 146097
        dotc = dote - cykl * 146097
        yotc = (dotc - dotc // 1460 + dotc // 36524 - dotc // 146096) / 365
        year = yotc + cykl * 400
        date = int(dotc) + (yotc := int(yotc)) // 100 - yotc * 365 - yotc // 4
        return [year, date, dote, self.zone]
    def __set__(self):
        dote = self.dote + self.zone / 10
        cykl = (dote if dote >= 0 else dote - 146096) // 146097
        dotc = dote - cykl * 146097
        yotc = (dotc - dotc // 1460 + dotc // 36524 - dotc // 146096) / 365
        year = yotc + cykl * 400
        date = int(dotc) + (yotc := int(yotc)) // 100 - yotc * 365 - yotc // 4
        return {year, date, dote, self.zone}
    def __tuple__(self):
        dote = self.dote + self.zone / 10
        cykl = (dote if dote >= 0 else dote - 146096) // 146097
        dotc = dote - cykl * 146097
        yotc = (dotc - dotc // 1460 + dotc // 36524 - dotc // 146096) / 365
        year = yotc + cykl * 400
        date = int(dotc) + (yotc := int(yotc)) // 100 - yotc * 365 - yotc // 4
        return year, date, dote, self.zone
    def __dict__(self):
        dote = self.dote + self.zone / 10
        cykl = (dote if dote >= 0 else dote - 146096) // 146097
        dotc = dote - cykl * 146097
        yotc = (dotc - dotc // 1460 + dotc // 36524 - dotc // 146096) / 365
        year = yotc + cykl * 400
        date = int(dotc) + (yotc := int(yotc)) // 100 - yotc * 365 - yotc // 4
        return {"year": year, "date": date, "dote": dote, "zone": self.zone}
    def __str__(self):
        dote = self.dote + self.zone / 10
        cykl = (dote if dote >= 0 else dote - 146096) // 146097
        dotc = dote - cykl * 146097
        yotc = (dotc - dotc // 1460 + dotc // 36524 - dotc // 146096) / 365
        year = yotc + cykl * 400
        date = int(dotc) + (yotc := int(yotc)) // 100 - yotc * 365 - yotc // 4
        return f"{int(year):04}+{date:03}{dote % 1 * 10:.4f}-{self.zone}"
    def __int__(self):
        return int(self.dote)
    def __float__(self):
        return float(self.dote)
    def __bool__(self):
        return bool(self.dote)
    def __gt__(self, other):
        return self.dote > other
    def __lt__(self, other):
        return self.dote < other
    def __ge__(self, other):
        return self.dote >= other
    def __le__(self, other):
        return self.dote <= other
    def __add__(self, other):
        return Dec(day=self.dote + other)
    def __sub__(self, other):
        if isinstance(other, Dec):
            return Dec(day=int(self.dote - other.dote))
        return Dec(day=self.dote - other)
    def __mul__(self, other):
        return Dec(day=self.dote * other)
    def __truediv__(self, other):
        return Dec(day=self.dote / other)
    def __mod__(self, other):
        return Dec(day=self.dote % other)
    def __floordiv__(self, other):
        return Dec(day=self.dote // other)
    def __pow__(self, other):
        return Dec(day=self.dote ** other)
    def __matmul__(self, other):
        return Dec(day=self.dote @ other)
    def __and__(self, other):
        return Dec(day=self.dote & other)
    def __or__(self, other):
        return Dec(day=self.dote | other)
    def __xor__(self, other):
        return Dec(day=self.dote ^ other)
    def __rshift__(self, other):
        return Dec(day=self.dote >> other)
    def __lshift__(self, other):
        return Dec(day=self.dote << other)
    def __repr__(self):
        dote = self.dote + self.zone / 10
        cykl = (dote if dote >= 0 else dote - 146096) // 146097
        dotc = dote - cykl * 146097
        yotc = (dotc - dotc // 1460 + dotc // 36524 - dotc // 146096) / 365
        year = yotc + cykl * 400
        date = int(dotc) + (yotc := int(yotc)) // 100 - yotc * 365 - yotc // 4
        return (
            f"Dec(year={int(year)}, date={int(date):03}, "
            f"time={dote % 1 * 10:.4f}, zone={int(self.zone)})"
        )


d = Dec(year=1969, day=306, zone=4)
d.dote += 1
d.date += 1
d.year += 1.5
d.dote