# Decalendar

## Summary

Decalendar is a calendar system that is
- zero-indexed (starts counting from 0 instead of 1),
- based on the numbers 5, 10, and 73, and
- perennial (uses the same dates for all years).

Declock is a time system that is based on fractional days (quarter-day instead of 6AM).

## Goal

Decalendar and Declock aim to first peacefully co-exist with, but then ultimately replace the [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) and [standard time](https://en.wikipedia.org/wiki/Standard_time) systems.

## Units

### Calendar units

Instead of using 7-day weeks, roughly 30-day months, roughly 90-day quarters, the [day-of-month](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates), and the [day-of-week](https://en.wikipedia.org/wiki/ISO_8601#Week_dates), Decalendar dates only uses the year, the zero-indexed [day-of-year](https://en.wikipedia.org/wiki/ISO_8601#Ordinal_dates), and the following 3 calendar units:
- 5-day pents (pentaday),
- 10-day deks (decaday), and
- 73-day quints (quintiles).

### Time units

Instead of using $\frac{1}{24}$-day hours, $\frac{1}{1444}$-day minutes, and $\frac{1}{86400}$-day seconds, Declock uses the following 3 time units:
- 10<sup>-2</sup>-day cents (centidays),
- 10<sup>-3</sup>-day mils (millidays), or
- 10<sup>-5</sup>-day beats (centimillidays).

## Dates

The Decalendar date format is `yyyy+ddd`, where `yyyy` is the four-digit year and `ddd` is the three-digit day-of-year (DOY). The first 2 digits of the DOY tell us the current dek. For example, the midyear point is always in Dek 18, either at noon on Day 182 in non-leap years or midnight between Day 182 and Day 183 in leap years. To obtain the pent number, double the first two digits of the DOY and then add 1 if the last digit is greater than 4. For example, the midyear point occurs in pent 36.

These calculations work for all Decalendar dates with two notable exceptions:
- Dek 36 does not exist; the last 5 days of non-leap years are in Pent 72 and Quint 4.
- Leap days are considered to be part of Pent -1.
The intuition behind the number -1 is that the leap day is the day before we reset our day count to 0. Negative indexes start from the end of the year, as they do in zero-indexed programming languages, such as Python and JavaScript.

To eliminate the impact of leap days on negative indexes, the final day of 


This means that Day -1 is the last day of the year, Pent -1 is the last 5 days of the year, and Dek -1 is the last 10 days of the year.

Negative indexes tell us how many much time is left in a year and provide a way of describing the final days of any year, regardless of whether or not it is a leap year. Negative day indexes can be used in Decalendar dates. For example, `1977-001` and `1977+364` are both acceptable ways to express the birthday of Korean pop star Psy, who was born on December 31, 1977. We can easily tell that the year `1977` is not a leap year, because odd-numbered years are not evenly divisible by 4 (a necessary but not sufficient [criteria for a leap year](https://en.wikipedia.org/wiki/Leap_year#Gregorian_calendar)).

To prevent the leap day from throwing the system of positive and negative indexes system out of alignment, the negative index of leap days (Day 365) is Day -0. In mathematics and programming, -0 is the same is 0. the first day of a leap year, but does not exist in non-leap years, which start with Day -365. In non-leap years, Pent 0 is synonymous with -73, and Quint 0 is the same as Quint -5, but this pattern does not hold true for leap years, because the leap day throws everything out of alignment.

All the Decalendar units can be negative, but negative numbers have a different meaning for Decalendar years. Negative Decalendar years represent the years prior to Year 1 [BCE (Before Common Era)](https://en.wikipedia.org/wiki/Common_Era), because Decalendar Year 0 is Year 1 BCE. For example,  [Year 776 BCE](https://en.wikipedia.org/wiki/Timeline_of_ancient_history#Classical_antiquity) is the same as Decalendar Year -775.



Decalendar dates are inspired by the [ISO 8601 international standard](https://en.wikipedia.org/wiki/ISO_8601#Ordinal_dates) and use the [ISO 8601 ordinal date](https://en.wikipedia.org/wiki/ISO_8601#Ordinal_dates) . Unlike DOYs in ISO 8601 ordinal dates, Decalendar DOYs are zero-indexed. Therefore, the range of possible Decalender DOY values is 000 to 365, instead of 001 to 366. This is the only difference between Decalendar dates and ISO 8601 ordinal dates. The rules that govern the [year number](https://en.wikipedia.org/wiki/ISO_8601#Years) (1 BC/BCE is Year 0) and [leap years](https://en.wikipedia.org/wiki/Leap_year#Gregorian_calendar) (once every 4 years, on years divisible by 4) are the same.

ISO 8601 describes three date formats:
- `yyyy-ddd`, ordinal dates, which were discussed above,
- `yyyy-Www-d`, week dates, where `ww` is the week number and `d` is the day-of-week number, and
- `yyyy-mm-dd`, calendar dates, where `mm` is the month number and `dd` is the day-of-month number.
Decalendar only uses the ordinal date format, because it does not use weeks or months.

## Parts of the year

Instead of
- 7-day weeks,
- roughly 30-day months, and
- roughly 90-day quarters,
Decalender uses
- 5-day pents (pentaday),
- 10-day deks (decaday), and
- 73-day quints (quintiles).

The three Decalendar units listed above are indexed according to the following formula:

$\lfloor doy \div length \rfloor$, where `doy` is the day-of-year and `length` is 5 for pents, 10 for deks, and 73 for quints.

In plain English, we divide the DOY by the numbers of days in the unit and [drop the remainder](https://en.wikipedia.org/wiki/Division_(mathematics)#Of_integers).

There are two exceptions to this rule:
1. Dek 36, is not a full 10-day dek, and thus should be referred to as Pent 72.
2. Leap days (Day 365) are not considered part of any pent, dek, or quint.
If there is a need to provide the pent, dek, or quint index for Day 365, the number negative one (-1) can used as an alternative to saying Pent 73, Dek 36, or Quint 5. The intuition behind the number -1 is that the leap day is the day before we reset our day count to 0. Avoiding the use Pent 73, Dek 36, or Quint 5, is important to keep logical ranges for the 

divide the DOY by the two digits of the Decalendar DOY represent the dek number, except for dek 36, which is referred to as pent 72. The pent number can be determined by [floor dividing]() the DOY by 5

Decalendar years can be divided into
- 73 pents,
- 36.5 deks, or
- 5 quints.
This is true even for leap years, because .

These parts of the year can easily be determined from the Decalendar date.   It is also possible to express Decalender DOYs in zero-indexed, two-digit hexatridecimal (base 36) form. In this form, the first day of the year is Day 00 and the last day of a leap year is Day A5. The utility of this format goes beyond brevity, but will only become apparent after we discuss the parts of a Decalender year.





## Timestamps

These units can be combined together with [NATO military time zone codes](https://en.wikipedia.org/wiki/Military_time_zone#Description) to create timestamps.
For example, `1970-000.000Z` is the [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time#Definition).
This timestamp has 3 components:
1. `1970` is the year,
2. `000.000` shows
- the zero-indexed day-of-year before the decimal and
- the number of mils that have passed since midnight after the decimal,
3. `Z` is the [Zulu time zone](https://en.wikipedia.org/wiki/UTC%2B00:00).




Decalendar decimal dates evenly line up with deks, in that the first two digits of the DOY is also the dek number. For example, the last DOY is always in Dek 36. Each Dek but Decalender hexatridecimal dates are useful for keeping track of quints. For example, the last day in the first quint is Day 072 or Day 20.

## Times

the same as Both the year and the day-of-year are zero-indexed. Decalendar years greater than zero are the same as Anno Domini (AD) / Common Era (CE) years, because Decalender Year 0 is the same as 1 Before Christ (BC) / Before Common Era (BCE). so one-indexed years in the Common Era (CE) do not need to translated

Each Decalendar day can be divided into
- 100 cents (centidays, 10<sup>-2</sup>),
- 1,000 mils (millidays, 10<sup>-3</sup>), or
- 10,000 beats (centimillidays, 10<sup>-5</sup>).

This time-keeping system, which is called Declock, easily translates into the 24-hour system:
- 1 cent is 14.4 minutes (roughly a quarter hour),
- 1 mil is 1.44 minutes (roughly a minute and a half), and
- 1 beat is 0.864 seconds (a little less than a second).

The goal of Decalendar is to first 



## Dates
Decalendar dates are composed of a 4-digit year and the zero-indexed, 3-digit day-of-year.

## Times

Declock greatly from the  uses the day of year (doy) as its central unit. Unlike the 

A doy is the same as a day except doys are zero-indexed, i.e. we start counting them at 0. 

## Divisions
The divisions in Decalendar
Instead of weeks, months, and quarters, the Dekalendar system uses 5-doy pents (pentadoy), 10-doy deks (decadoy) and 73-doy quints (quintiles). Quints are most useful for yearly accounting, whereas pents and deks are used for scheduling daily life.

## Scheduling
The 73 pents in a year are numbered 0 to 72. Even-numbered pents have 4 workdoys followed by 1 restdoy (a midek), while odd-numbered pents have 3 workdoys followed by 2 restdoys (called a dekend). The first doys of pents 0, 20, 40, and 60 (doys 0, 100, 200, and 300, respectively) are holidoys. Leap doys (doy 365) are also holidoys. The 100-, 200-, 300-, and 365-doy holidays are special because they offer 3 consecutive doys off from work. The Dekalendar dates of special doys, such as birthdoys or religious holidoys, can be calculated programmatically or by hand.

| Month       | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
| ---         | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Common year | 0   | 31  | 59  | 90  | 120 | 151 | 181 | 212 | 243 | 273 | 304 | 334 |
| Leap year   | 0   | 31  | 60  | 91  | 121 | 152 | 182 | 213 | 244 | 274 | 305 | 335 |

## Calculations
Some programming languages provide direct access to ISO ordinal dates. Subtracting 1 from an ISO ordinal date yields the Dekalendar date:

```{python}
from datetime import datetime
datetime("2023-12-25").timetuple().tm_yday - 1
```

```{r}
as.integer(strftime("2023-12-25", format="%j")) - 1
```

```{javascript}
const now = new Date(2023, 11, 25),
start = new Date(now.getFullYear(), 0, 0),
doy = Math.floor((now - start) / 86400000) - 1;
console.log(doy);
```

## Timestamps
Dekalendar dates can become timestamps if fractional doys are included, e.g. 2023-000.500Z is noon (midday) of doy 0. The 5 digits after the decimal (period/dot) indicate that this timestamp has millidoy precision. Timestamps may have a different numbers of digits after the decimal depending on the desired level of precision.

## Levels of precision

A Dekalendar timestamp with doy precision is the same as a Dekalendar date.

## Timezones
The letter Z at the timestamp is the NATO military code for the UTC (Zulu) time zone. Timestamps should always include timezones!


Two hundred fifty six days and five deciday have past in the year.

- h: hectoday is a hekt
- d: decaday is a dek
- p: pentaday is a pent
- c: centiday is a cent (14m24s)
- m: milliday is a mil (1m26.4s)
- b: beat, centimilliday, decamicroday, microdek (.864s) or decond (decimal second, rhymes with second), not to be confused with Swatch .beats which are millidays. Microdeks shouldn’t be abbreviated mic because a mic is a microday. If heart rate is 69.4 bpm, each beat is 1 centimilliday.

A deciday is 10 cents or 100 mils.

Lining up standard and decimal time is a good way to explain decimal time:

12:00:00
 5 00.00

but the Dekalendar system should seek to replace standard time with decimal time entirely, and thus should only show decimal time. The following time formats are useful:

500    : Millidays with milliday precision
500.00 : Millidays with centimilliday precision
50000  : Beats (centimillidays)

2023-256.50000Z

10.0c or 10

Christmas is 358 in a typical year and 359 in a leap year

The typical year can be divided into
- 73 pents (rhymes with cents)
- 36 deks and 1 pent
- 3 hekts and 13 pents

For a leap year, add one leap day (365) to the end.

First dek: 000 to 009
Next dek: 010 to 019

The first pent in every dek has 4 workdays and 1 restday, which is called a midek. The second pent in every dek has 3 workdays and 2 restdays, which are called a dekend.

W-R-W-R
4-1-3-2: work 4 days, rest 1 days, work 3 days, rest 2 day

Rest on days that end in 4, 8, 9.

Advantage: Two-day weekend like everyone is used to.

Note: The last day of the typical year, 364, is a day off according to the 4-1-3-2 holiday. Leap years end on 365, instead of 364. With 5 holidays: 0, 100, 200, 300, 365, there are 3-day dekends 3 times a year and at the end of every leap year.

3 days off in 34 deks, 4 days off in the first dek, 2 of 5 or  3 of 6 days off at the end of the year. That’s 108 out of 365 (29.6%) or 109 out of 366 (29.8%) days resting. Day off on each even hekt, i.e. day 100, 200, 300. That’s 111 out of 365 (30.4%) or 112 out of 366 (30.6%) days resting. With hekt days, there will be a 3-day dekend called a hektend. At the end of each year, there are 3 (363, 364, 0) or 4 (363, 364, 365, 0) consecutive days off.

The day off in the middle is called the midek. The days off at the end are called the dekend.

2024-000.000: midnight January 1, 2024

2024-365.999: one milliday before midnight New Year’s Eve 2025

2025-364.999: one milliday before midnight New Year’s Eve 2026
