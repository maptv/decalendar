# %% imports
from itertools import islice, chain


# %% define class
class Dec:
    """Measure time in years and days instead of months, weeks, hours, etc.

    This class represents either
    - a time span (a duration without a specific start or end),
    - a time point (a specific instant in time),
    - a time period (the duration in between two points in time),
    - a series of time spans, time points, or time periods.

    To instantiate a time span, pass a year and/or a day value to the Dec class.

    Time span instantiation examples:
    >>> one_year = Dec(1)
    >>> one_year
    Dec(day=365)
    >>> one_day = Dec(0, 1)
    >>> one_day
    Dec(day=1)
    >>> one_beat = Dec(day=1e-5)
    >>> one_beat
    Dec(day=0.00001)

    To instantiate a time point, pass a time zone to the Dec class.

    Time point instantiation examples:
    >>> dec_epoch = Dec(0, 0, 0)
    >>> dec_epoch
    Dec(zone=0)
    >>> unix_epoch = Dec(1969, 306, 0)
    >>> unix_epoch
    Dec(year=1969, date=306, zone=0)
    >>> year2K = Dec(2000, 0, 0)
    >>> year2K
    Dec(year=2000, zone=0)
    >>> dayB4year2K = Dec(2000, -1, 0)
    >>> dayB4year2K
    Dec(year=1999, date=365, zone=0)

    To instantiate a time period, pass a stop to the Dec class.

    Period instantiation examples:
    >>> first_decade = Dec(0, 0, 0, Dec(10))
    >>> first_decade
    Dec(zone=0, stop=[3652])
    >>> second_decade = Dec(10, stop=Dec(20, 0, 0))
    >>> second_decade
    Dec(day=3652, stop=[0020+000])
    >>> third_decade = Dec(20, 0, 0, 3652)
    >>> third_decade
    Dec(year=20, zone=0, stop=[3652])

    To instantiate a series instead of a time period, pass a stop and a step.

    Dec series instantiation examples:
    >>> first_five_days = Dec(0, 0, 0, 5, 1)
    >>> first_five_days
    Dec(zone=0, stop=[5], step=[(1)])
    >>> list(first_five_days)
    [0.0, 1.0, 2.0, 3.0, 4.0]
    >>> last_five_days_of_year2K = Dec(2001, -5, 0, 5, 1)
    >>> last_five_days_of_year2K
    Dec(year=2000, date=360, zone=0, stop=[5], step=[(1)])
    >>> list(last_five_days_of_year2K)
    [730845.0, 730846.0, 730847.0, 730848.0, 730849.0]

    You can also create a time period or series by calling a Dec object.
    To create a time period, pass
    - a time point to a time span or a time point or
    - an int, float, or time span to a time point.
    Time point arguments are interpreted as time period stopping points.
    Other argument types are interpreted as time period durations.

    Dec object call examples:
    >>> first_decade = Dec(0, 0, 0)(Dec(10))
    >>> first_decade
    Dec(zone=0, stop=[Dec(day=3652)])
    >>> second_decade = Dec(10)(Dec(20, 0, 0))
    >>> second_decade
    Dec(day=3652, stop=[Dec(year=20, zone=0)])
    >>> third_decade = Dec(20, 0, 0)(3652)
    >>> third_decade
    Dec(year=20, zone=0, stop=[3652])

    To create a series, pass at least one step after a stop.

    You can do arithmetic with any Dec object including series.

    Arithmetic examples:
    >>> one_year + one_beat
    Dec(day=365.00001)
    >>> one_year - one_beat
    Dec(day=364.99999)
    >>> dec_epoch + one_year
    Dec(year=1, zone=0)
    >>> first_five_days + .5
    Dec(time=5, zone=0, stop=[5], step=[(1)])
    >>> list(first_five_days + .5)
    [0.5, 1.5, 2.5, 3.5, 4.5]

    Args:
    year: a common year with 365 days or a leap year with 366 days.
    day: the "day of the era", the total days since the Dec epoch.
    zone: the Dec time zone, 0 to 9 decidays (tenths of a day).
    utc: the UTC time zone offset in hours, a non-Dec unit
    degree: the degrees of longitude, 1 deciday is 36 degrees.
    month: 28, 29, 30, or 31 days, a non-Dec unit
    day_of_the_month: the "day of the month", a non-Dec unit
    week: 7 days, a non-Dec unit, used only for conversion
    day_of_the_week: the "day of the week", a non-Dec unit
    hour: 1/24 of a day, a non-Dec unit
    minute: 1/1440 of a day, a non-Dec unit, used only for conversion
    second: 1/86400 of a day, a non-Dec unit, used only for conversion
    millisecond: 1/86400000 of a day, a non-Dec unit, used only for conversion

    """

    def __init__(
        self,
        year=0.,
        day=0.,
        zone=None,
        stop=None,
        step=None,
        month=3,
        day_of_the_month=1,
        week=0,
        day_of_the_week=3,
        hour=0,
        minute=0,
        second=0,
        millisecond=0,
        utc=None,
        degree=None,
    ):
        self.zone = int(((zone if zone else 0)
            + ((utc * 15 if utc else 0) + (((
                degree + 360 if (degree := degree % 360) < 0 else degree
        ) + 18) if degree else 0)) / 36 % 10) // 1) if any(
            i is not None for i in [zone, utc, degree]) else None
        self.day = (
            self.year2day(year) + day
            + (153 * (month - 3 if month > 2 else month + 9) + 2) // 5
            + day_of_the_month - 1 + week * 7 + day_of_the_week - 3
            - (self.zone / 10 if self.zone is not None else 0)
            + (hour + minute / 60 + second / 3600 + millisecond / 3600000) / 24
        )
        self._save_year_and_date()
        self.stop = [stop] if isinstance(
            stop, (int, float)) else stop if stop else []
        self.step = [(step,)] if isinstance(
            step, (int, float)) else step if step else []
        self._range = iter([self.day])
        self._create_range()

    @staticmethod
    def day2date(day):
        cykl = (day if day >= 0 else day - 146096) // 146097
        dotc = day - cykl * 146097
        yotc = (dotc - dotc // 1460 + dotc // 36524 - dotc // 146096) / 365
        date = int(dotc) + (yotc := int(yotc)) // 100 - yotc * 365 - yotc // 4
        return [yotc + cykl * 400, date]

    @staticmethod
    def year2day(year):
        cykl = (year if year >= 0 else year - 399) // 400
        yotc = year - cykl * 400
        return cykl * 146097 + yotc * 365 + yotc // 4 - yotc // 100

    def _save_year_and_date(self):
        cykl = (
            self._day if self.day >= 0 else self._day - 146096
        ) // 146097
        dotc = self._day - cykl * 146097
        yotc = (dotc - dotc // 1460 + dotc // 36524 - dotc // 146096) / 365
        self._year = yotc + cykl * 400
        self._date = (
            int(dotc) + (yotc := int(yotc)) // 100 - yotc * 365 - yotc // 4
        )

    def __call__(self, stop=None, *steps):
        if stop is not None:
            self.stop += [stop]
            self.step += [steps]
            self._create_range()
        return self

    def _create_range(self):
        starts = (self.day,)
        nsteps = len(self.step)
        for i, stop in enumerate(self.stop):
            starts = self._generate(
                starts, stop, self.step[i] if i + 1 <= nsteps else ()
            )
        self._range = iter(starts)
        return self

    def __getitem__(self, key):
        self._create_range()
        if type(key) == slice and all(
            s is None or s >= 0 for s in (key.start, key.stop, key.step)
        ):
            return islice(self._range, key.start, key.stop, key.step)
        elif type(key) == int and key >= 0:
            return next(islice(self._range, key, None))
        elif type(key) == slice or type(key) == int:
            return tuple(self._range)[key]
        key = self._flatten(key)
        if all(i >= 0 for i in key):
            return chain(islice(self._range, i, None) for i in key)
        else:
            t = tuple(self._range)
            return tuple(t[i] for i in key)

    @property
    def leap(self):
        y = self.year // 1 + 1
        return y % 4 == 0 and y % 100 != 0 or y % 400 == 0

    @property
    def day(self):
        return self._day

    @day.setter
    def day(self, value):
        self._day = value
        self._save_year_and_date()

    @property
    def year(self):
        return self._year

    @year.setter
    def year(self, value):
        self._day = self.year2day(value)
        self._save_year_and_date()

    @property
    def date(self):
        return self._date

    @date.setter
    def date(self, value):
        diff = value - self._date
        self._day += diff
        self._save_year_and_date()

    def __str__(self):
        day = self.day + (self.zone / 10 if self.zone is not None else 0)
        if self.zone is None:
            # Duration in days with optional iteration logic
            return (
                format(day, '.5f').rstrip('0').rstrip('.')
                + "".join(map(str, zip(self.stop, self.step)))
            )
        else:
            year, date = self.day2date(day)
            # Instant (year+deciday-zone) with optional iteration logic
            return (
                f"{int(year):04}+{date:03}"
                + format(day % 1 * 10, '.4f').rstrip('.0')
                + (f"-{self.zone}" if self.zone else "")
                + "".join(map(str, zip(self.stop, self.step)))
            )

    def __repr__(self):
        if self.zone is None:
            pre = "Dec(" + (
                f"day={format(day, '.5f').rstrip('0').rstrip('.')}"
                if (day := self.day + (
                    self.zone / 10 if self.zone is not None else 0)) else ""
            )
        else:
            year, date = self.day2date(day := self.day
                + (self.zone / 10 if self.zone is not None else 0)
            )
            pre = "Dec(" + ", ".join(filter(None, [
                f"year={int(year)}" if year else "",
                f"date={int(date)}" if date else "",
                f"time={time:.4g}" if (time := day % 1 * 10) else "",
                f"zone={int(self.zone)}"
            ]))
        return (
            ", ".join(filter(None, [pre,
                f"stop=[{str(self.stop).replace("[", "").replace("]", "")}]"
                if self.stop else "",
                f"step=[{str(self.step).replace('[', '').replace(']', '')}]"
                .replace(',)', ')') if any(self.step) else ""
                ])) + ")"
        )

    def __int__(self):
        return int(self.day)

    def __float__(self):
        return float(self.day)

    def __bool__(self):
        return bool(self.day)

    def __invert__(self):
        return ~self.day

    def __pos__(self):
        return +self.day

    def __neg__(self):
        return -self.day

    def __round__(self):
        return round(self.day)

    def __floor__(self):
        return self.day // 1

    def __trunc__(self):
        return self.day.__trunc__()

    def __abs__(self):
        return abs(self.day)

    def __ceil__(self):
        return self.day.__ceil__()

    def __eq__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day == other.day)
        return self.day == other

    def __ne__(self, other):
        if isinstance(other, Dec):
            return self.day != other.day
        return self.day != other

    def __gt__(self, other):
        # if comparing against a string try to parse string to day
        if isinstance(other, Dec):
            return self.day > other.day
        return self.day > other

    def __lt__(self, other):
        if isinstance(other, Dec):
            return self.day < other.day
        return self.day < other

    def __ge__(self, other):
        if isinstance(other, Dec):
            return self.day >= other.day
        return self.day >= other

    def __le__(self, other):
        if isinstance(other, Dec):
            return self.day <= other.day
        return self.day <= other

    def __add__(self, other):
        return Dec(
            day=self.day + other.day if isinstance(other, Dec)
            else self.day + other,
            zone=self.zone,
            stop=self.stop,
            step=self.step,
        )._create_range()

    def __sub__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day - other.day)
        return Dec(day=self.day - other)

    def __mul__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day * other.day)
        return Dec(day=self.day * other)

    def __truediv__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day / other.day)
        return Dec(day=self.day / other)

    def __divmod__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day.__divmod__(other.day))
        return Dec(day=self.day.__divmod__(other))

    def __mod__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day % other.day)
        return Dec(day=self.day % other)

    def __floordiv__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day // other.day)
        return Dec(day=self.day // other)

    def __pow__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day**other.day)
        return Dec(day=self.day**other)

    def __matmul__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day @ other.day)
        return Dec(day=self.day @ other)

    def __radd__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day + other.day)
        return Dec(day=self.day + other)

    def __rsub__(self, other):
        if isinstance(other, Dec):
            return Dec(day=other.day - self.day)
        return Dec(day=self.day - other)

    def __rmul__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day * other.day)
        return Dec(day=self.day * other)

    def __rtruediv__(self, other):
        if isinstance(other, Dec):
            return Dec(day=other.day / self.day)
        return Dec(day=other / self.day)

    def __rmod__(self, other):
        if isinstance(other, Dec):
            return Dec(day=other.day % self.day)
        return Dec(day=other % self.day)

    def __rfloordiv__(self, other):
        if isinstance(other, Dec):
            return Dec(day=other.day // self.day)
        return Dec(day=other // self.day)

    def __rpow__(self, other):
        if isinstance(other, Dec):
            return Dec(day=other.day**self.day)
        return Dec(day=other**self.day)

    def __rmatmul__(self, other):
        if isinstance(other, Dec):
            return Dec(day=other.day @ self.day)
        return Dec(day=other @ self.day)

    def __and__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day & other.day)
        return Dec(day=self.day & other)

    def __or__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day | other.day)
        return Dec(day=self.day | other)

    def __xor__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day ^ other.day)
        return Dec(day=self.day ^ other)

    def __rshift__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day >> other.day)
        return Dec(day=self.day >> other)

    def __lshift__(self, other):
        if isinstance(other, Dec):
            return Dec(day=self.day << other.day)
        return Dec(day=self.day << other)

    def _flatten(self, nested):
        for i in nested:
            if isinstance(i, (list, tuple)):
                yield from self._flatten(i)
            else:
                yield i

    def __iter__(self):
        return self

    def __next__(self):
        try:
            return next(self._range)
        except StopIteration:
            self._create_range()
            raise

    def _generate(self, starts, stop, steps=()):
        """Produce a 2-tuple or list of Dec objects.
        Initialize a list of starts with the provided start.
        """
        steps = tuple(self._flatten(steps))
        for start in starts:
            if not steps:
                # Create an interval
                if type(stop) in (int, float):
                    yield start, start + stop
                else:
                    yield start, stop
            else:
                if type(stop) == int:
                    for i in range(stop):
                        yield start
                        start += steps[i % len(steps)]
                else:
                    total = sum(steps) if steps else 0
                    if total == 0:
                        for s in steps:
                            yield start
                            start += s
                    else:
                        c = 0
                        stop = start + stop if type(stop) == float else stop
                        while (total > 0 and start < stop) or (
                            total < 0 and start > stop
                        ):
                            yield start
                            start += steps[c % len(steps)]
                            c += 1

if __name__ == "__main__":
    import doctest
    doctest.testmod()
    d = Dec(year=2000, day=-1, zone=0)
