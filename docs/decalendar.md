Dekalendar

# Decalendar and Declock

## Summary

Decalendar is a calendar system that is
- starts counting from 0 instead of 1,
- based on the numbers 5, 10, 36, and 73, and
- does not change year to year, except for an additional day on leap years.

Declock is a time system that uses metric prefixes to define units of time in which the base unit is a day.

## Goal

Decalendar and Declock aim to first peacefully co-exist with, but then ultimately replace the [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) and [standard time](https://en.wikipedia.org/wiki/Standard_time) systems.

## Examples

The first day of the year 2000 can be written four different but equivalent ways:

```
2000+000
2000-366
  VG+00
  VG-A6
```

Quarterday (the time at which 1/4 of the day has passed) can be written 2 different but equivalent ways:

```
+250
-750
```

A Declock time preceded by a Decalendar date forms a timestamp called a datetime. Quarterday on the first day of the year 2000 could be written 4 different but equivalent ways:

```
2000+000.002
2000-365.998
   VG+00.002
   VG-A5.ONO
```

To see the current datetime in these formats, visit this codepen:

## Units

### Calendar units

Instead of using 7-day weeks, roughly 30-day months, roughly 90-day quarters, the [day-of-month](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates), and the [day-of-week](https://en.wikipedia.org/wiki/ISO_8601#Week_dates), Decalendar dates only uses the year, the zero-indexed [day-of-year](https://en.wikipedia.org/wiki/ISO_8601#Ordinal_dates) (doy).

Four additional calendar units are derived from the doy:
- 5-day pents (pentaday),
- 10-day deks (decaday),
- 36-day heks (hexatrigesimal), and
- 73-day quints (quintiles).

### Time units

Instead of using $\frac{1}{24}$-day hours, $\frac{1}{1444}$-day minutes, and $\frac{1}{86400}$-day seconds, Declock uses the following four decimal time units:
- 10<sup>-1</sup>-day dimes (decidays),
- 10<sup>-2</sup>-day cents (centidays),
- 10<sup>-3</sup>-day mils (millidays), and
- 10<sup>-5</sup>-day beats (centimillidays).

Declock also includes two additional quadrasexigesimal (base64) time units that use beats as the base unit instead of days:
- 64-beat hits and
- 4096-beat sets.

Declock uses mils as the main time unit and dimes for time zone offsets. The other units can serve as reasonably close equivalents to standard time units:
- 1 set = 0.98304 hours
- 1 cent = 0.96 quarter-hours
- 1 hit = 0.9216 minutes
- 1 beat = 0.864 seconds

While mils should be precise for most timekeeping tasks, Declock decimal times can support any level of precision. For example, two additional digits can be added at the end of a decimal time to show beats. Units smaller than beats can be derived using metric prefixes and may be useful for scientific and technical purposes:
-  1 decibeat = 1 microday = 86.4 milliseconds
-  1 millibeat = 10 nanoday = 0.864 milliseconds
-  1 microbeat = 10 picoday = 0.864 microseconds
-  1 nanobeat = 10 femtoday = 0.864 nanoseconds

## Decimal Dates

The two main Decalendar date formats are `yyyy+ddd` and `yyyy-ddd`, in which the four-digit year is followed by a positive or negative three-digit day-of-year (DOY) index. Each day in a year can be described by both a positive and a negative index.

The first day of every year has a positive index of 0 and a negative index of either -365 or -366. For example, the first day of the third millennium can be written `2000+000` or `2000-366`.

While positive indexes start at zero, while negative indexes start at -1.  For example, `1977-001` and `1977+364` are both acceptable ways to express the birthday of Korean pop star Psy, who was born on the last day of 1977.

The additional day in leap years throws Decalendar day indexes out of alignment with Gregorian calendar dates. For example, December 25th is Day 358 in non-leap years and Day 359 in leap years.

To consistently define Gregorian calendar dates with Decalendar indexes, we should use positive indexes before Day 59 and negative indexes thereafter. For example, December 25th is always Day -7, regardless of whether or not there is a leap year.

## Decimal Times

Like Decalendar date indexes, Declock times can be both positive and negative. Positive times show how much time has passed, while negative times show how much time remains. For example, at 6AM we could say that 250 mils, a quarter of a day, have passed in the current day or that 750 mils, three quarters of a day, remain:

```
+250
-750
```

In the time above, the first digit is the current dime, the first two digits are the current cent, the first three digits are the current mil. If an additional two digits were added to the end, the resulting five digits would be the current beat. Showing beats is optional and typically only done in stopwatches and timers. Declock decimal times can have any number of digits.


The example above only tells us the time of day. If we add a day-of-year (doy) index before the time we obtain a doyt (day-of-year-time). The doyts below tells us that the current year is not a leap year (because the sum of the positive day index and the absolute value of the negative day index is 365, not 366):

```
+360.250
-005.750
```

If we add a year to the example above, we have a timestamp called a datetime that defines a specific moment in time in a specific year:

```
1999+360.250
1999-005.750
```

The datetimes above do not include time zone offsets. To avoid ambiguity, timestamps can include a time zone offset. For example, the timestamps below are in the +1 Declock time zone that includes Eastern European Time and Central African Time:

```
1999+360.250+1
1999-005.750+1
```

## Decimal Calculations

### Decimal Time Calculations

#### Decimal Time Zone Conversion

The times in the previous example are one dime later than than times in the +0 time zone that matches Coordinated Universal Time (UTC). To convert a UTC offset into a Declock offset, divide the UTC offset by 2.4 and round to the nearest whole number.

To obtain the time in the +0 time zone, subtract the offset from the first digit of the time. In the +0 time zone, the timestamp from the previous example would be:

```
1999+360.150+0
1999-005.850+0
```

Declock times in the +0 time zone can be converted to and from standard times in the UTC time zone.

#### Decimal Time to Standard Time Conversion

Converting from decimal time to standard time is discouraged, because in doing so we are putting effort into taking something perfect and making it imperfect. Nevertheless, beats are not yet the official International System of Units (SI) time unit, so converting to seconds may be useful:

$$y \cdot 86400 \cdot 10^x$$

In plain text, this equation is `y*86400*10^x`.

In the equation above, `y` is the decimal time and `x` should be modified to match the decimal time units:
- -1: deks
-  0: days
-  1: dimes
-  2: cents
-  3: mils
-  4: decimils
-  5: beats
-  6: decibeats

After converting decimal time, the additional steps of converting those seconds to hours and then fractional hours into minutes should hopefully convince anyone that Declock is a superior system to standard time. If anyone remains unconvinced after such as exercise, they are invited to take any Decalendar datetime or doyt and convert the days into months, days, hours, and minutes.

#### Standard Time to Decimal Time Conversion

The general formula for conversion of standard time to decimal time is:

$$(\frac{hours}{24} + \frac{minutes}{1440} + \frac{seconds}{86400} + \frac{milliseconds}{86400000}) \cdot 10^x$$

In plain text, this equation is `(hours/24+minutes/1440+seconds/86400+milliseconds/86400000)*10^x`.

In the equation above, `x` can be modified to obtain different units:
- -1: deks
-  0: days
-  1: dimes
-  2: cents
-  3: mils
-  4: decimils
-  5: beats
-  6: decibeats

This type of calculation is best left up to computers, but some simple conversions between analogous units can easily be done with a calculator, by hand, or even mentally. For example:

- Dimes to hours: `dimes * 2.4`
- Hours to decidays: `hours / 2.4`
- Minutes to mils: `minutes / 1.44`
- Mils to Minutes: `mils * 1.44`

### Decimal Calendar Calculations

### Obtaining Negative Day Indexes From Positive Day Indexes

To facilitate comparison of Decalendar dates with Gregorian calendar dates, we should convert positive day indexes greater than 59 to negative day indexes. To obtain a negative index from a positive index, subtract the number of days in the year from the positive index. For example, the two possible positive indexes for December 25th both equal -7 after we subtract the number of days in the year:
- 359 - 366 = -7
- 358 - 365 = -7


### Obtaining Positive Day Indexes From Negative Day Indexes

To facilitate comparison of Decalendar dates with Gregorian calendar dates, we should convert negative day indexes less than -306 to positive day indexes. To obtain a positive index from a negative index, subtract the absolute value of the negative index from the number of days in the year. For example, the two possible negative indexes for February 14th both equal 44 after we add the number of days in the year:
- 366 - 322 = 44
- 365 - 321 = 44

### Obtaining Decimal Calendar Unit Indexes

Similar to reading the time units directly from a decimal time, it is possible to look at a day index and describe the dek and pent to which it belongs. The first 2 digits of the positive day index tell us the current dek. For example, the midyear point is always in Dek 18, either at noon on Day 182 in non-leap years or midnight between Day 182 and Day 183 in leap years. To obtain the pent number, double the first two digits of the day index and then add 1 if the last digit is greater than 4. For example, the midyear point occurs in pent 36.

Calculating negative dek and pent indexes works a little differently. If the last digit in the negative index ends in zero, the negative first two digits are the dek index, otherwise subtract one from the negative first two digits to obtain the dek index. To calculate the negative pent index, multiply the negative dek index by 2 and then subtract 1 if the last digit is 1-5.

A more programmatic way to obtain these indexes is to floor divide the day index by 5 and 10 to get the pent and dek index, respectively. [Floor division](https://en.wikipedia.org/wiki/Division_(mathematics)#Of_integers), also called integer division, is the same as regular division except any remainder is discarded. The general equation for the obtaining calendar unit indexes is $\lfloor x \div y \rfloor$, where `x` is the day-of-year index and `y` is the length of the calendar unit:
- 5 for pents,
- 10 for deks,
- 36 for heks, and
- 73 for quints.

These index calculations work for all Decalendar dates but positive indexes at the very end of the year and negative indexes at the very beginning of the year can mix days from different years. The rules below prevent cross-contamination of days across different years:
- Dek indexes range between -36 and 35; exceeding these ranges results in deks that include 4 days from an adjacent year if the current year is a leap year or 5 from an adjacent year if the current year is not a leap year.
- Pent indexes range between -73 and 72; exceeding these ranges results in pents that are synonymous with pents from adjacent years if the current year is not a leap year and pents that include 4 days from an adjacent year if the current year is a leap year.

Following these rules means that
- the first 5 days in non-leap years and the first 6 days in leap years do not have a negative dek index
- the last 5 days in non-leap years and the last 6 days in leap years do not have a positive dek index
- the first day in leap years do not have a negative pent index
- the last day in leap years do not have a positive pent index

#### Counting days by sevens

Keeping track of every 7th day is also possible with decimal day indexes, but it may take a little practice. Subtracting 3 from the last digit of the current day index can tell us the last digit of the day index 7 days from now. For example, if the last digit of the current day index is 8, the last digit of the day index will be 5 (8-3) in 7 days. If the last digit of the current day index is less than 3, we add 10 to the difference. For example, if the last digit of the current day index is 1, the last digit of the day index will be 8 (1-3+10). After Day 357 in non-leap years we need to add 1 instead of subtracting 3. After Day 358 in leap years, we need to add 2 instead of subtracting 3.

When performing this calculation in your head, it may be helpful to visualize a ring with 10 points numbered 0 through 9. Moving three points from point 1, we cross over point 0 and 9 to arrive at point 8. Instead mental calculations, it’s also possible to use an illustration, a physical ring, a calculator, or our fingers.

The key to doing decimal date calculations on our fingers is to use a zero-based numbering system for our fingers. The recommended system is to number fingers from left to right with palms facing down as would be went typing or playing piano:
- 0: left pinky
- 1: left ring finger
- 2: left middle finger
- 3: left pointing finger
- 4: left thumb
- 5: right thumb
- 6: right pointing finger
- 7: right middle finger
- 8: right ring finger
- 9: right pinky

 To do the calculation above on our fingers, we would start on the ring finger of our left hand and move to the left, counting our left pinky as one, our right pinky as two, and settling on right ring finger as three. The number that corresponds to our right ring finger is 8.

 Some people may prefer to number fingers with their palms facing them:
- 0: left thumb
- 1: left pointing finger
- 2: left middle finger
- 3: left ring finger
- 4: left pinky
- 5: right pinky
- 6: right ring finger
- 7: right middle finger
- 8: right pointing finger
- 9: right thumb

 It is also possible to number fingers from right to left. The lists below are the same as above except in reverse order:
- 0: right pinky
- 1: right ring finger
- 2: right middle finger
- 3: right pointing finger
- 4: right thumb
- 5: left thumb
- 6: left pointing finger
- 7: left middle finger
- 8: left ring finger
- 9: left pinky

- 0: right thumb
- 1: right pointing finger
- 2: right middle finger
- 3: right ring finger
- 4: right pinky
- 5: left pinky
- 6: left ring finger
- 7: left middle finger
- 8: left pointing finger
- 9: left thumb

#### Counting days by thirties

For tracking lunar phases, menstrual cycles, and months, it can be helpful to count days by 30. Adding 30 to the day index is easy, but we can easily move from one year to another. If we obtain a day index greater than the highest day index in the year, we can simply subtract the number of days in the current year to get the index in the next year. To count by a different number, such as 28, we would use the approach above and then subtract 2.

While the calculations for pent and dek indexes are easy, no one could be expected to calculate the hek and quint indexes in their heads. Counting by 36 and 73 is not as easy as counting by 5 and 10. To make it easier to determine the current hek and quint, provides a .

### Hexatrigesimal date calculations

The counting by thirties approach can be modified to work for heks and quints, but Decalendar includes a hexatrigesimal day index to aid with counting and indexing heks and quints.

Hexatrigesimal (base36) is an encoding that includes all ten single-digit numbers and all 26 uppercase letters in the English alphabet. When a day index is encoded in base36, the first character is the hek index.

To calculate the quint index, we subtract 

To calculate the
quint index …

WIP

- Dek indexes range between -36 and 35; exceeding these ranges results in deks that include 4 days from an adjacent year if the current year is a leap year or 5 from an adjacent year if the current year is not a leap year .
- Pent indexes range between -73 and 72; exceeding these ranges results in pents that are synonymous with pents from adjacent years if the current year is not a leap year and pents that include 4 days from an adjacent year if the current year is a leap year
- Quint indexes range from -5 to 4; exceeding these ranges results in quints that

## Quadrasexagesimal

Beats can be converted into sets and hits by dividing by 4096 and 64, respectively.

Quadrasexagesimal

Time
Imagine you’re a DJ preparing a a 58.9824-minute-long music set. Your setlist has 64 hits in it, each hit is 55.296 seconds long and has 64 beats. The entire set has 4096 beats and the tempo remains constant throughout the set at 69 4/9 (625/9) beats per minute. If we continued the playing at this tempo all day, there would be 100,000 beats in one day.



last digit is beat, second to last is quat or quasiminute (64 beats or 0.9216m or 55.296s), first digit is quar or quasihour (4096 beats or 40.96mil or 0.98304hours or 58.9824minutes)

## Dekdays



## Holidays

Dekends and Mideks versus Weekends







These calculations work for all Decalendar dates with two notable exceptions:
- Dek 36 does not exist; the last 5 days of non-leap years are in Pent 72 and Quint 4.
- Leap days are considered to be part of Pent -1.







In the example above, the top clock tells us

## Timestamps

* Day 58 is always February 28th and 
* Day -306 is always March 1, whereas 
* Day 59 is
  * March 1 in non-leap years and
  * February 29th in leap years.

that occur after February 29th, the Gregorian calendar leap day.

For
Negative indexes tell us how many days are left in the year and provide consistent equivalents of Gregorian calendar dates that may occur a leap day. is Day 59 or Day -307 in leap years, but in non-leap years, and Day -307 is February 28th. To avoid confusion when comparing Decalendar dates and Gregorian calendar dates, we should only use positive indexes before Day 59 and use negative indexes thereafter. Day 58 is always February 28th and Day -306 is always March 1.

Remembering the number -7 is a lot easier than remembering that

The intuition behind the number -1 is that the leap day is the day before we reset our day count to 0. Negative indexes start from the end of the year, as they do in [zero-based](https://en.wikipedia.org/wiki/Zero-based_numbering) [programming languages](https://en.wikipedia.org/wiki/Zero-based_numbering#Usage_in_programming_languages), such as Python and JavaScript.


This illustrates a simple rule:

The

Dates after Day 58 should use a negative index for consistent conversion to the equivalent Gregorian calendar dates. This is because Day 58 is February 28th, the day after which a leap day is added in Gregorian calendars. Negative indexes below (less than) -306 are safe from the scourge of the Gregorian calendar leap day. The 

The first 2 digits of the DOY tell us the current dek. For example, the midyear point is always in Dek 18, either at noon on Day 182 in non-leap years or midnight between Day 182 and Day 183 in leap years. To obtain the pent number, double the first two digits of the DOY and then add 1 if the last digit is greater than 4. For example, the midyear point occurs in pent 36.

These calculations work for all Decalendar dates with two notable exceptions:
- Dek 36 does not exist; the last 5 days of non-leap years are in Pent 72 and Quint 4.
- Leap days are considered to be part of Pent -1.

To eliminate the impact of leap days on negative indexes, the final day of 

Negative timestamps start at -365.00000, but then change to +364.99999 in the next beat.


This means that Day -1 is the last day of the year, Pent -1 is the last 5 days of the year, and Dek -1 is the last 10 days of the year.

Negative indexes tell us how many much time is left in a year and provide a way of describing the final days of any year, regardless of whether or not it is a leap year. Negative day indexes can be used in Decalendar dates. We can easily tell that the year `1977` is not a leap year, because odd-numbered years are not evenly divisible by 4 (a necessary but not sufficient [criteria for a leap year](https://en.wikipedia.org/wiki/Leap_year#Gregorian_calendar)).

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
