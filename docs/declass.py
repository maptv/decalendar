from itertools import islice, chain

class Dec:
    """Represents either a duration, instant, interval, or series.
    To create
    - a duration, instantiate without a time zone, e.g. Dec(day=9).
    - an instant, instantiate with a time zone, e.g. Dec(day=719468, zone=0).
    - an interval, pass a limit to an instance, e.g. Dec(day=9)(5).
    - a series, pass a limit and a step to an instance, e.g. Dec(day=9)(5, 2).
    Both instants and durations can create intervals and series.
    Intervals consist of two instants or an instant and a duration.
    A series can consist of durations, instants, or intervals.
    The provided time is converted into Zone 0 decimal years and days.
    Time zones are stored as integer decidays separately from the time.
    The time zone is added back to the time when methods are called.
    """
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
        zone=None,
        utc=-9,
        degree=-162,
    ):
        if any(i is not None for i in [zone, utc, degree]):
            self.zone = (
                (zone if zone else 0)
                + ((utc * 15 if utc else 0)
                    + (((degree + 360 if (degree := degree % 360) < 0 else degree)
                        + 18) if degree else 0)) / 36 % 10
            ) // 1
        self.dote = (self.year2dote(year) + day
            + (153 * (month - 3 if month > 2 else month + 9) + 2) // 5 + dotm - 1
            + week * 7 + dotw - 3 - (self.zone / 10 if self.zone is not None else 0)
            + (hour + minute / 60 + second / 3600 + millisecond / 3600000) / 24
            )
        self._save_year_and_date()
        self._stops = []
        self._steps = []
        self._calls = []
        self._range = iter([self.dote])
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
        self._stops += [stop]
        self._steps += [steps]
        self._calls += [(stop, *steps)]
        self._create_range()
        return self
    def _create_range(self):
        starts = self.dote,
        nsteps = len(self._steps)
        for i, stop in enumerate(self._stops):
            starts = self._generate(starts, stop,
                                    self._steps[i] if i + 1 <= nsteps else ())
        self._range = iter(starts)
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
    def __str__(self):
        dote = self.dote + (self.zone / 10 if self.zone is not None else 0)
        if self.zone is None:
            # Duration in days with optional iteration logic
            return f"{format(dote, '.5f').strip('0').rstrip(".")}{''.join(map(str, self._calls)).replace(' ', '')}"
        else:
            year, date = self.dote2date(dote)
            # Instant (year+deciday-zone) with optional iteration logic
            return (
                f"{int(year):04}+{date:03}{format(dote % 1 * 10, ".4f").strip("0").rstrip(".")}"
                f"-{self.zone}{''.join(map(str, self._calls)).replace(' ', '')}"
            )
    def __repr__(self):
        dote = self.dote + (self.zone / 10 if self.zone is not None else 0)
        if self.zone is None:
            pre = f"Dec(day={format(dote, '.5f').strip('0').rstrip(".")}"
        else:
            year, date = self.dote2date(dote)
            pre = (
                f"Dec(year={int(year)}, date={int(date)}, "
                f"time={dote % 1 * 10:.4g}, zone={int(self.zone)}"
            )
        return (
            pre + (f", stop={str(self._stops).replace(' ', '')}" if self._stops else "")
            + (f", step={str(self._steps).replace(' ', '').replace(',)', ')').replace('),(', ')(')}"
               if self._steps else "") + ")"
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
        # if comparing against a string try to parse string to dote
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
                        while (total > 0 and start < stop) or (total < 0 and start > stop):
                            yield start
                            start += steps[c % len(steps)]
                            c += 1

    # @property
    # def iter(self):
    #     start = self.dote
    #     starts = [start]
    #     # result = []
    #     for i, limit in enumerate(self.stop):
    #         steps = self.step[i]
    #         total = sum(steps)
    #         c = 0
    #         for j, s in enumerate(starts):
    #             if not list(self._flatten(steps)):
    #                 if isinstance(limit, (int, float, Dec)):
    #                     yield (s, limit + s)
    #                 else:
    #                     yield (s, limit)
    #             elif isinstance(limit, int):
    #                 for c in range(limit):
    #                     yield s
    #                     starts.append(s)
    #                     s += steps[c % len(steps)]
    #             else:
    #                 if isinstance(limit, float):
    #                     l = s + limit
    #                 elif isinstance(limit, Dec):
    #                     l = limit
    #                 while (total > 0 and s < l) or (total < 0 and s > l):
    #                     yield s
    #                     starts.append(s)
    #                     s += steps[c % len(steps)]
    #                     c += 1



# class Interval:
#     def __init__(self, start=Dec(day=719468), stop=Dec(day=730485)):
#         self.start = start
#         self.stop = stop
#         self.range = stop - start


# i = Interval()
# i.start
# from decimal import Decimal

# # d = Dec(year=Decimal(1969), day=Decimal(306.54), zone=1)
# Decimal("306.54") * Decimal("2.4")
# # time is included in the dote, but
# # rounding errors are introduced when
# # we change the time zone to Zone 0
i = Dec(year=1969, day=306.54, zone=1)
i.dote # broken
# # We can fix this by returning to the
# # original time zone
i.dote + i.zone / 10 # healed
i
d = Dec(year=9969, day=1/3)
d
str(i)
str(d)
# str(u.dote + u.zone / 10).split(".")
# I decided to convert all attributes
# to Zone 0 before assigning them
# so that calculations can be
# u = Dec(year=1969, day=306.54, zone=1)
# eval(str(u)[:-2] + "/3650")
# m = Dec(year=2000)
# m(3, 2, 1)(4.3,3,2,1)
m = Dec(year=2000)
m(3.4, 2, 1)
list(m)
list(m[-2:])
m = Dec(year=2000)
half_year_eod = m(Dec(year=2000.5), 2)
half_year_eod
len(set(half_year_eod))
# str(m)
# u
# m
# i = m.iter
# list(i)
# m.step

# s = slice(3, 7, None)
# if (
#     type(s) == slice and
#     (s.start is None or s.start >= 0) and
#     (s.stop is None or s.stop >= 0) and
#     (s.step is None or s.step >= 0)
# ):
#     print("OK")
# else:
#     print("Not OK")

# u.zone += 4
# u
# u + 1
# 1 + u
# u.dote
# u.year += 1.2
# m.year += 1.1
# u.date
# m.date
# m.dote
# m.year
# m - u

# u.dote += 1
# u.date += 1
# list(u)
# dict(u)
# len([()])


# def iterate(start:int|float, stops=[], steps=[()]):
#     """Produce a 2-tuple or list of Dec objects.
#     Initialize a list of starts with the provided start.
#     """
#     starts = [start]
#     result = []
#     for i, stop in enumerate(stops):
#         if i + 1 > len(steps) or not list(flatten(steps[i])):
#             result = []
#             for start in starts:
#                 if isinstance(stop, (int, float)):
#                     result.append((start, stop + start))
#                 else:
#                     result.append((start, stop))
#             break
#         else:
#             step = tuple(flatten(steps[i]))
#             total = sum(step)
#             for start in starts:
#                 if isinstance(stop, int):
#                     for j in range(stop):
#                         result.append(start)
#                         start += step[j % len(step)]
#                 else:
#                     c = 0
#                     stop = start + stop if isinstance(stop, float) else stop
#                     while (total > 0 and start < stop) or (total < 0 and start > stop):
#                         result.append(start)
#                         start += step[c % len(step)]
#                         c += 1
#         starts = list(flatten(result))
#     return result

# def flatten(nested):
#     if isinstance(nested, (int, float, str, bool)):
#         nested = [nested]
#     for i in nested:
#         if isinstance(i, (list, tuple)):
#             yield from flatten(i)
#         else:
#             yield i


# def generate(starts, stop, steps=()):
#     """Produce a 2-tuple or list of Dec objects.
#     Initialize a list of starts with the provided start.
#     """
#     steps = tuple(flatten(steps))
#     for start in starts:
#         if not steps:
#             # Create an interval
#             if type(stop) in (int, float):
#                 yield start, start + stop
#             else:
#                 yield start, stop
#         else:
#             if type(stop) == int:
#                 for i in range(stop):
#                     yield start
#                     start += steps[i % len(steps)]
#             else:
#                 total = sum(steps) if steps else 0
#                 if total == 0:
#                     for s in steps:
#                         yield start
#                         start += s
#                 else:
#                     c = 0
#                     stop = start + stop if type(stop) == float else stop
#                     while (total > 0 and start < stop) or (total < 0 and start > stop):
#                         yield start
#                         start += steps[c % len(steps)]
#                         c += 1

# list(generate([0], 5, [[1, 2]]))
# # working
# t = 3,
# def repeat(start, stops, steps):
#     starts = start,
#     for i, stop in enumerate(stops):
#         starts = tuple(generate(starts, stop, steps[i] if i +1 <= len(steps) else ()))
#     return starts

# class testClass:
#     def __init__(self, seq):
#         self.seq = seq
#         self.stop = []
#         self.step = []
#         self.call = []
#     def __getitem__(self, key):
#         if type(key) in (int, slice):
#             return self.__class__(self.seq[key])
#         return [self.seq[i] for i in key]
#     def __delitem__(self, key):
#         if type(key) == int:
#             self.seq = [j for i, j in enumerate(self.seq) if i != key]
#         elif type(key) == slice:
#             self.seq = [j for i, j in enumerate(self.seq) if i not in list(range(key.start or 0, key.stop or len(self.seq), key.step or 1))]
#         else:
#             indices = [i if type(i) == int else tuple(range(*i.indices(len(self.seq)))) if type(i) == slice else i for i in key]
#             self.seq = [j for i, j in enumerate(self.seq) if i not in tuple(flatten(indices))]
#     def __setitem__(self, key, val):
#         if type(key) == int:
#             self.seq[key] = val
#         elif type(key) == slice:
#             for i in range(key.start or 0, key.stop or len(self.seq), key.step or 1):
#                 self.seq[i] = val
#         else:
#             for i in key:
#                 self.__setitem__(i, val)
#     def __call__(self, stop, *steps):
#         self.stop += [stop]
#         self.step += [steps]
#         self.call += [(stop, *steps)]
#         return self

# [
#     i if type(i) == int else
#     tuple(range(*i.indices(15))) if type(i) == slice else i
#     for i in [slice(0, 3), slice(5, 9)]]


# tc = testClass([1, 2, 3, 4, 5, 6, 7, 8, 9])
# del tc[2]
# tc.seq
# tc = testClass([1, 2, 3, 4, 5, 6, 7, 8, 9])
# del tc[0, 2]
# tc.seq
# tc = testClass([1, 2, 3, 4, 5, 6, 7, 8, 9])
# del tc[:2]
# tc.seq
# tc = testClass([1, 2, 3, 4, 5, 6, 7, 8, 9])
# del tc[:2, 4:]
# tc.seq
# tc = testClass([1, 2, 3, 4, 5, 6, 7, 8, 9])
# tc[:4] = 0
# tc.seq

# 3 in range(*slice(0, 5).indices(5))
# # not working
# tc = testClass([1, 2, 3, 4, 5, 6, 7, 8, 9])
# del tc[1:3, 7:9]
# tc.seq
# # skip item 2
# del tc[2]
# tc.seq
# # combine these slices to skip item 2
# tc[:1,2:]
# # combine these indexes
# tc[1, 0, 2]
# # combine these indexes with slices
# tc[1, 0, 2, :3, 5:]
# # overwrite these indexes and slices
# tc[1, 0, 2, :3, 5:] = 100
# tc.seq
# # delete these indexes and slices
# del tc[1, 0, 5:]
# tc.seq
# # allow for cycling through steps
# tc(2, 3, 4, 5, 6)
# tc.step
# tc.stop

# s = slice(0, 9, 3)
# s.stop
# # range(*.indices(19))
# repeat(0, [5], [[1, 2]])
# repeat(0, [5.], [[1, 2]])
# repeat(0, [3], [[1, 2], [3, 4]])
# repeat(0, [3.], [[1, 2], [3, 4]])
# repeat(0, [4, .3], [[2, 1]])
# repeat(0, [4., .3], [[2, 1]])
# repeat(0, [4, 3], [[1], [2]])
# repeat(0, [4., 3], [[1], [2]])
# repeat(0, [3, 2], [[1, 2], [3, 4]])
# repeat(0, [2, 3], [[1, 2], [3, 4]])
# repeat(0, [4, .3], [[1]])
# repeat(0, [4., .3], [[1]])
# repeat(0, [5, -3], [[-1]])
# repeat(0, [-5., -3], [[-1]])
# repeat(0, [6, 3], [[1, 2], [[]]])
# repeat(0.3, [6, .4], [[1, 2], [[]]])
# repeat(0.3, [4.8, .4], [[1, 2], [[1]]])
# repeat(0.3, [4.8, .4], [[1, 2], [[1, 3.5]]])
# repeat(0.3, [4.8, .4], [[1, 2], [[]]])
