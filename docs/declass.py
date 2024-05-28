class Dec:
    def __init__(
        self,
        year=0,
        day=0,
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
        cykl = (year if year >= 0 else year - 399) // 400
        yotc = year - cykl * 400
        zone = zone + utc // 2.4 + 4 + (degree + 162) // 36
        dote = (
            cykl * 146097 + yotc * 365 + yotc // 4 - yotc // 100 + day
            + (153 * (month - 3 if month > 2 else month + 9) + 2) // 5 + dotm - 1
            + week * 7 + dotw - 3 - zone / 10
            + (hour + minute / 60 + second / 3600 + millisecond / 3600000) / 24
            )
        cykl = (dote if dote >= 0 else dote - 146096) // 146097
        dotc = dote - cykl * 146097
        yotc = (dotc - dotc // 1460 + dotc // 36524 - dotc // 146096) // 365
        self.zone = zone
        self.dote = Dote(self, dote)
        self.year = Year(self, (
            dotc - dotc // 1460 + dotc // 36524 - dotc // 146096
        ) / 365 + cykl * 400)
        self.doty = Doty(self,
            dotc + yotc // 100 - yotc * 365 - yotc // 4
        )
        # y = self.year.__floor__() + 1
        # self.leap = y % 4 == 0 and y % 100 != 0 or y % 400 == 0
        # self.nday = 365 + self.leap
        # m = self.doty - self.nday
        # self.plus = f"{y - 1:04}+{abs(self.doty.__floor__()):03}{abs(self.doty % 1 * 10):.4f}{'-' + str(self.zone) if self.zone else ''}"
        # self.down = f"{y:04}-{abs(m.__floor__()):03}{m % 1 * 10:.4f}{'+' + str(self.zone) if self.zone else ''}"
    def __int__(self):
        return int(self.dote.day)
    def __float__(self):
        return float(self.dote.day)
    def __str__(self):
        return str(self.dote.day)
    def __bool__(self):
        return bool(self.dote.day)
    def __gt__(self, other):
        return self.dote.day > other
    def __lt__(self, other):
        return self.dote.day < other
    def __ge__(self, other):
        return self.dote.day >= other
    def __le__(self, other):
        return self.dote.day <= other
    def __add__(self, other):
        return Dec(day=self.dote.day + other)
    def __sub__(self, other):
        if isinstance(other, Dec):
            return Dec(day=int(self.dote.day - other.dote.day))
        return Dec(day=self.dote.day - other)
    def __mul__(self, other):
        return Dec(day=self.dote.day * other)
    def __truediv__(self, other):
        return Dec(day=self.dote.day / other)
    def __mod__(self, other):
        return Dec(day=self.dote.day % other)
    def __floordiv__(self, other):
        return Dec(day=self.dote.day // other)
    def __pow__(self, other):
        return Dec(day=self.dote.day ** other)
    def __matmul__(self, other):
        return Dec(day=self.dote.day @ other)
    def __and__(self, other):
        return Dec(day=self.dote.day & other)
    def __or__(self, other):
        return Dec(day=self.dote.day | other)
    def __xor__(self, other):
        return Dec(day=self.dote.day ^ other)
    def __rshift__(self, other):
        return Dec(day=self.dote.day >> other)
    def __lshift__(self, other):
        return Dec(day=self.dote.day << other)
    def __repr__(self):
        return (
            f"Dec(year={self.year.year.__floor__()}, "
            f"doty={self.doty.day:.5f}, "
            f"zone={int(self.zone)})"
        )

class Dote:
    def __init__(self, dec, day):
        self.dec = dec
        self.day = day
    def __int__(self):
        return int(self.day)
    def __gt__(self, other):
        return Dec(day=self.day > other)
    def __lt__(self, other):
        return Dec(day=self.day < other)
    def __ge__(self, other):
        return Dec(day=self.day >= other)
    def __le__(self, other):
        return Dec(day=self.day <= other)
    def __add__(self, other):
        return Dec(day=self.day + other)
    def __sub__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day - other.dote)
        return Dec(day=self.day - other)
    def __mul__(self, other):
        return Dec(day=self.day * other)
    def __truediv__(self, other):
        return Dec(day=self.day / other)
    def __mod__(self, other):
        return Dec(day=self.day % other)
    def __floordiv__(self, other):
        return Dec(day=self.day // other)
    def __pow__(self, other):
        return Dec(day=self.day ** other)
    def __matmul__(self, other):
        return Dec(day=self.day @ other)
    def __and__(self, other):
        return Dec(day=self.day & other)
    def __or__(self, other):
        return Dec(day=self.day | other)
    def __xor__(self, other):
        return Dec(day=self.day ^ other)
    def __rshift__(self, other):
        return Dec(day=self.day >> other)
    def __lshift__(self, other):
        return Dec(day=self.day << other)
    def __repr__(self):
        return f"Dec(Day of the era={self.day})"


class Year:
    def __init__(self, dec, year):
        self.year = year
        self.dec = dec
    def __floor__(self):
        return self.year.__floor__()
    def __len__(self):
        y = self.year.__floor__() + 1
        return 365 + y % 4 == 0 and y % 100 != 0 or y % 400 == 0
    def __add__(self, other):
        return Dec(day=self.year + other)
    def __sub__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.year - other.dote)
        return Dec(day=self.year - other)
    def __mul__(self, other):
        return Dec(day=self.year * other)
    def __truediv__(self, other):
        return Dec(day=self.year / other)
    def __mod__(self, other):
        return Dec(day=self.year % other)
    def __floordiv__(self, other):
        return Dec(day=self.year // other)
    def __pow__(self, other):
        return Dec(day=self.year ** other)
    def __matmul__(self, other):
        return Dec(day=self.year @ other)
    def __and__(self, other):
        return Dec(day=self.year & other)
    def __or__(self, other):
        return Dec(day=self.year | other)
    def __xor__(self, other):
        return Dec(day=self.year ^ other)
    def __rshift__(self, other):
        return Dec(day=self.year >> other)
    def __lshift__(self, other):
        return Dec(day=self.year << other)
    def __repr__(self):
        return f"Dec(year={self.year:.8f})"


class Doty:
    def __init__(
        self,
        dec,
        day
    ):
        self.dec = dec
        self.day = day
    def __format__(self, specification):
        return f"{self.day:{specification}}"
    def __add__(self, other):
        return Dec(day=self.day + other)
    def __sub__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day - other.dote)
        return Dec(day=self.day - other)
    def __mul__(self, other):
        return Dec(day=self.day * other)
    def __truediv__(self, other):
        return Dec(day=self.day / other)
    def __mod__(self, other):
        return Dec(day=self.day % other)
    def __floordiv__(self, other):
        return Dec(day=self.day // other)
    def __pow__(self, other):
        return Dec(day=self.day ** other)
    def __matmul__(self, other):
        return Dec(day=self.day @ other)
    def __and__(self, other):
        return Dec(day=self.day & other)
    def __or__(self, other):
        return Dec(day=self.day | other)
    def __xor__(self, other):
        return Dec(day=self.day ^ other)
    def __rshift__(self, other):
        return Dec(day=self.day >> other)
    def __lshift__(self, other):
        return Dec(day=self.day << other)
    def __repr__(self):
        return f"Dec(doty={self.day:.5f})"

d = Dec(year=1969, day=306)
d
d.dote
d.doty
d.year
d + 1
d - 1
d += 1
d - 1
d.dote
d.doty
d.year
d.dote += 1
d.doty
d.dote
d.dote + 1
d.doty + 1

y = Dec(day=365)
y * 2

d - y
y - d
d += 1
d
