# `Decalendar` and `Declock`

## Summary {#sec-summary}

`Decalendar` is a calendar system that aims to first peacefully co-exist with, but then ultimately replace the [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar). Similarly, `Declock` is a timekeeping system designed to replace [standard time](https://en.wikipedia.org/wiki/Standard_time). Both system use days as their base unit and derive other units from days using prefixes inspired by the metric system. To create the necessary calendar and time units, `Decalendar` groups days together, while `Declock` divides days up.

## Basic concepts {#sec-basics}

### Fractions analogy {#sec-frac}

In the simplest terms, `Decalendar` counts fractions of a year, while Declock counts fractions of a day. The denominator for `Decalendar` is the number of days in the year, while for `Declock` the denominator is $10^x$, where $x$ is the number of digits in the numerator. In both systems, only the numerator, not the denominator, is provided. In the context of` Decalendar`, the numerator is the days that have passed in the year, while in the context of` Declock`, the numerator is the parts of the day that have passed.

To avoid any confusion between the two, we can say "`Day 5`" to mean the date when 5 days have passed this year or `Day 0` to mean the first day of the year (`doty`). This is like the use of the term "day zero" in other contexts, such as epidemiology. The analogous term for times is `Dot`. The word `Dot` conveys that at its core `Declock` is a system built on fractional days expressed as decimal numbers. The 5 in `Dot 5` can be thought of as a number after a decimal (0.5) or a numerator (⁵/₁₀), either way it means noon, the time when half the day has passed.

### Implied duration {#sec-duration}

The analogy to decimals or fractions is important, because it explains why adding a zero at the end a time does not change the time,  only the implied duration. Providing only a single digit for a `Declock` time indicates that the duration is expected to be 10% of the day. Every additional digit we add decreases the implied duration 10-fold. Essentially, the higher the precision, the lower the implied duration. For example, `Dot 5` and `Dot 50` both mean noon, but `Dot 5` implies that the duration will be an interval starting at `Dot 5` and ending before `Dot 6`, whereas the interval represented by `Dot 50` ends before `Dot 51`.

### Context clues {#sec-context}

Not saying "`Day`" or "`Dot`" in general is acceptable, because it is convenient and often the numbers make perfect sense in context. If someone says "let's have lunch at 5", it is clear that they are referring to noon (`Dot 5`) and not the sixth `doty` (`Day 5`). Also, the number itself may provide a clue. Numbers greater than 365 could still be a `doty` date, but such dates would be in an upcoming year, not the current year. The meaning of such dates depends on whether the current year is a common year (n=365) or a leap year (n=366). Saying "500" could mean `Day 134` (if n=366) or `Day 135` (if n=365) of the subsequent year, but it would most likely mean noon (`Dot 500`).

### `Stamps`

If a date and a time are combined they form a time `stamp`. The date always goes before the time in any `stamp`. When said together, the numbers "0" and "500" mean the first `doty` (`Day 0`) at noon (`Dot 500`). In written form, this would be `000.500`. This format is called `.y`, which is read the same way as `doty`, but emphasizes that the `.` is used in a floating point decimal `doty`. In other words, `doty` can be used instead of "day of the year" in a sentence, whereas `.y` indicates a `stamp`, such as `000.500`. Ideally, a stamp will include all of the information needed to identify a singular point in time, and thus should include a year and time zone.

### Specific dates and times {#sec-specific}

The dates and times above assume that the year and time zone are known. A date without a year is like a time without a time zone, both depend on the context. Most likely, we are talking about the current year and the local time zone, but it may be unclear. Including a year allows us to pinpoint a specific day, instead of a day that could happen any year. Similarly, a time with a time zone occurs once a day, rather than once in every time zone per day. The first `doty` 2000, would be written `2000+000` and said "`Year 2000 Day 0`" or simply "`2000 0`", while noon in `Zone 0` would be written `.500+0` or `500+0` and said "`Dot 500 Zone 0`", "`500 Zone 0`", or "`500 0`".

### Negative numbers {#sec-neg}

The plus signs in the date and time above indicate that the `doty` date and the time zone can also be negative. In fact, all of the units above can be negative. A negative year is before 1 BCE (Before Common Era) and a negative time zone is West of `Zone 0`. Negative dates and times show the number of parts that are left in the whole (day or year). To extend the fractions analogy used above to negative numbers, the negative number added to the whole gives us the numerator of the positive fraction. Essentially, these numbers arrive at the same answer from opposite directions.

Negative `doty` numbers can be especially useful at the end of the year, because `Day -1` is always the last `doty`, regardless of how many days the year has (365 or 366). In certain contexts, the choice of using a negative number over a positive number may mean that we want to emphasize how much time is left instead of how much has passed. Even though `Dot -1` and `Dot 9` are synonymous `Declock` times, the former could highlight that there is only 1 tenth (⅒ or .1) of the day remaining before midnight.

The `.y` format can include positive and negative numbers, most commonly in the form `±year±day.day±z`, where `.day` is the time and `z` is the time zone. The year is usually provided without a sign, because most people rarely discuss years before 1 BCE. The other two signs are required in written form, but plus signs can be omitted when speaking. For example, the `stamp` `2000+000.500+0` is pronounced "`Year 2000 Day 0 Dot 500 Zone 0`" or "`2000 0 500 0`", while `2000-366.600-1` (the same `stamp` in negative form and in `Zone -1`) would be said "`Year 2000 Day Minus 366 Dot 600 Zone Minus 1`" or "`2000 -366 600 -1`".

## Units {#sec-units}

In the `datetimes` above, the time has 3 digits, because this is the best level of precision for displaying time on clocks and watches, but times can have any number of digits, depending on the desired precision level. `Declock` provides names for extremely precise time units, but the most relevant units are within a few orders of magnitude from a day, which is the base unit of both `Declock` and `Decalendar`. Listing the units of each highlights the relationship between the two:

| Base 10              | Name     | Symbol | Formal Name       |
| -------------------- | -------  | ------ | ----------------- |
| 10<sup>2</sup>       | `hekt`   | ρ      | `hectoday`        |
| 9.1 x 10<sup>1</sup> | `delt`   | δ      | `deltayear`       |
| 9 x 10<sup>1</sup>   | `qop`    | ϟ      | `qoppaday`        |
| 8 x 10<sup>1</sup>   | `pi`     | π      | `piday`           |
| 7.3 x 10<sup>1</sup> | `ep`     | ε      | `epsilonyear`     |
| 7 x 10<sup>1</sup>   | `om`     | ο      | `omicronday`      |
| 6.1 x 10<sup>1</sup> | `zet`    | ζ      | `zetayear`        |
| 6 x 10<sup>1</sup>   | `xi`     | ξ      | `xiday`           |
| 5 x 10<sup>1</sup>   | `nu`     | ν      | `nuday`           |
| 4 x 10<sup>1</sup>   | `mu`     | Μ      | `muday`           |
| 3 x 10<sup>1</sup>   | `lam`    | λ      | `lamdaday`        |
| 2 x 10<sup>1</sup>   | `kap`    | κ      | `kappaday`        |
| 10<sup>1</sup>       | `dek`    | ι      | `decaday`         |
| 10<sup>0</sup>       | `day`    | d      | `day`             |
| 10<sup>-1</sup>      | `dime`   | ⅒      | `deciday`         |
| 10<sup>-2</sup>      | `cent`   | ¢ or % | `centiday`        |
| 10<sup>-3</sup>      | `mil`    | m or ‰ | `milliday`        |
| 2 x 10<sup>-4</sup>  | `period` | .      | `didecimilliday`  |
| 10<sup>-4</sup>      | `phrase` |  ̑ or ‱ | `decimilliday`    |
| 2 x 10<sup>-5</sup>  | `bar`    | \|     | `dicentimilliday` |
| 10<sup>-5</sup>      | `beat`   | ࿁      | `centimilliday`   |
| 10<sup>-6</sup>      | `mic`    | μ      | `microday`        |
| 10<sup>-7</sup>      | `liph`   | m̑      | `decimicroday`    |
| 10<sup>-8</sup>      | `lib`    | m̊      | `centimicroday`   |
| 10<sup>-9</sup>      | `nan`    | n      | `nanoday`         |
| 10<sup>-10</sup>     | `roph`   | μ̑      | `decinanoday`     |
| 10<sup>-11</sup>     | `rob`    | μ̊      | `centinanoday`    |
| 10<sup>-12</sup>     | `pic`    | p      | `picoday`         |
| 10<sup>-13</sup>     | `noph`   | n̑      | `decipicoday`     |
| 10<sup>-14</sup>     | `nob`    | n̊      | `centipicoday`    |
| 10<sup>-15</sup>     | `femt`   | f      | `femtoday`        |
| 10<sup>-16</sup>     | `coph`   | p̑      | `decifemtoday`    |
| 10<sup>-17</sup>     | `cob`    | p̊      | `centifemtoday`   |
| 10<sup>-18</sup>     | `att`    | a      | `attoday`         |
| 10<sup>-19</sup>     | `foph`   | f̑      | `deciattoday`     |
| 10<sup>-20</sup>     | `fob`    | f̊      | `centiattoday`    |
| 10<sup>-21</sup>     | `zept`   | z      | `zeptoday`        |
| 10<sup>-22</sup>     | `toph`   | ȃ      | `decizeptoday`    |
| 10<sup>-23</sup>     | `tob`    | å      | `centizeptoday`   |
| 10<sup>-24</sup>     | `yokt`   | y      | `yoctoday`        |
| 10<sup>-25</sup>     | `zoph`   | z̑      | `deciyoctoday`    |
| 10<sup>-26</sup>     | `zob`    | z̊      | `centiyoctoday`   |
| 10<sup>-27</sup>     | `ront`   | r      | `rontoday`        |
| 10<sup>-28</sup>     | `yoph`   | y̑      | `decirontoday`    |
| 10<sup>-29</sup>     | `yob`    | ẙ      | `centirontoday`   |
| 10<sup>-30</sup>     | `quek`   | q      | `quectoday`       |

: The units of `Decalendar` and `Declock` {#tbl-units}

In the table above, the units with positive exponents are used for `Decalendar`, while the ones with negative exponents are used for `Declock`. `Cents` (`¢`) can serve as a useful point of comparison to understand the scale of some of the units in the table above, because each `cent` is 1 percent of the day, which is about a quarter hour (1% = 14.4 minutes). In comparison to `cents`, `mils` are ten times smaller (.1% = 1.4 minutes), `dimes` (`⅒`) are ten times larger (10% = 144 minutes), and `deks` (`ι`) are 1000 times larger (1000% = 14400 minutes). To be clear, 1 `dek` contains 10 whole days while the other units are fractions of days.

`Declock` units smaller than `mils` are not easy to think of as percents of a day. For `phrases` (` ̑`) and `beats` (`࿁`), music serves as a much more useful analogy. In fact, `phrases` and `beats` are musical terms. The duration of a musical beat depends on the tempo, but a `Declock beat` is always precisely 0.864 seconds long. This translates to a tempo of 69.4̅ (69⁴/₉ or 625/9) beats per minute, which is coincidentally also within the normal range of a resting heart rate. `Declock beats` are organized into groups of 2 called `bars` or `measures`, groups of 10 called `phrases`, and groups of 20 called `periods`. A real example of music that follows this exact pattern is Haydn's [Feldpartita](https://en.wikipedia.org/wiki/Period_(music)).

`Declock` units smaller than `beats` are too small for typical daily use. For example, a `mic` (`microday`, `μ`) is faster than a blink of an eye. Each frame in a video playing at 60 frames per second will be shown for about 1.93 `liphs` (`milliphrases`, `m̑`). A `lib` (`millibeat`, `m̊`) is not enough time for a neuron in a human brain to fire and return to rest. Sound can travel from a person's ear to their other ear in about 7 `nans` (`nanodays`). Noticing that a sound reaches one ear before the other can help humans to localize the source of the sound, but a `roph` (`microphrase`, `μ̑`) difference might be too fast to notice. In a `rob` (`microbeat`, `μ̊`), a USB 3.0 cable transferring 5 gigabytes per second can send 4.32 kilobytes, the equivalent of a text file with 4320 characters.

### Time Zones {#sec-zones}

Of the units discussed above, `dimes` are notable, because they are the units of `Declock` time zones. The times in `Zone 1` are one `dime` later than `Zone 0` and two `dimes` later than `Zone -1`. Time zones are important, because different time zones could have very different times and even different dates. Mexico City is in `Zone -3` and Tokyo is in `Zone 4`, meaning for the majority of the day (`Dot 7` to be exact) Tokyo is one day ahead of Mexico City. If it is noon on the last day of the year 1999 in Mexico City, it will be `Dot 200` on the first day of the year 2000 in Tokyo. This date and time in Mexico City can be written `2000+000.200+4` or `2000-366.800+4`, while the equivalent date and time for Tokyo is `1999+364.500-3` or `1999-001.500-3`. If we removed the time zone from the end, we would not know that all of these `datetimes` describe the same moment in time.

### The Dot Formats {#sec-formats}

The `datetimes` shown above are in the decimal days of the year (`.y`) format, which is the main `Decalendar` format. In addition to the `.y` format, there are 2 other supplemental `datetime` formats, which are based on decimal days of the month (`.m`), and fractional days of the week (`.w`). The table below summarizes the three decimal day-of-the ( `dot` or `.`) formats:

| Day of the |  `.`  | General Form      | Specific Example  |
| ---------- | ----- | ----------------- | ----------------- |
| Year       |  `y`  | `year±day.day±z`  | `1999+364.500-3`  |
| Month      |  `m`  | `year±m±dd.day±z` | `1999+B+31.500-3` |
| Week       |  `w`  | `year±ww±d.day±z` | `1999+52+5.500-3` |

: The three dot formats {#tbl-formats}

In the table above, `day` is the 3-digit day of the year (`doty`) number, `dd` is the 2-digit day of the month (`dotm`) number, `d` is the 1-digit day of the week (`dotw`) number, and `.day` is the time in `mils`.

### The `.m` format {#sec-dotm}

The `m` in the `.m` format is the 1-digit month number. To fit all of the months in a single digit, `m` is in hexadecimal form (Base16 encoded). This means that the first 10 months are represented by the numbers 0 through 9 while the last two months of the year are represented by the letters "A" and "B" instead of numbers. The negative month numbers range from -C (-13) to -1, as shown in the table below.

| Month     | pos | neg |
| --------- | --- | --- |
| January   | 0   | -C  |
| February  | 1   | -B  |
| March     | 2   | -A  |
| April     | 3   | -9  |
| May       | 4   | -8  |
| June      | 5   | -7  |
| July      | 6   | -6  |
| August    | 7   | -5  |
| September | 8   | -4  |
| October   | 9   | -3  |
| November  | A   | -2  |
| December  | B   | -1  |

: The months in the `.m` format {#tbl-dotm}

### The `.w` format {#sec-dotw}

The week number in the `.w` format, `ww`, ranges from 0 to 53 or -54 to -1. Weeks in the `.w` format start from Sunday. The table below shows the possible `dotw` values, which range from 0 to 6 or -7 to -1.

| Day       | pos | neg |
| --------- | --- | --- |
| Sunday    | 0   | -7  |
| Monday    | 1   | -6  |
| Tuesday   | 2   | -5  |
| Wednesday | 3   | -4  |
| Thursday  | 4   | -3  |
| Friday    | 5   | -2  |
| Saturday  | 6   | -1  |

: The weeks in the `.w` format {#tbl-dotw}

### `.` format examples {#sec-dotex}

The table below builds on the example from the ["Time Zones" section](#Time-Zones) section to compare all three `.` formats. The 3 `.` formats differ only in their approach to the date, not the time. Therefore, the times below are all shown to 1-digit `dime` precision (same as time zones) instead of the typical 3-digit `mil` precision. In Mexico City, the time is `+5-3` or `-5-3`, while the time in London is `+8+0` or `-2+0` and time in Tokyo is `+2+4` is `-8+4`.

| Day of the |  `.`  | Mexico City     | London          | Tokyo           |
| ---------  | ----- | --------------- | --------------- | --------------- |
| Year       |  `y`  | `1999+364.5-3`  | `1999+364.8-3`  | `2000+000.2+4`  |
| Year       |  `y`  | `1999-001.5-3`  | `1999-001.2-3`  | `2000-366.8+4`  |
| Month      |  `m`  | `1999+B+31.5-3` | `1999+B+31.8-3` | `2000+0+00.2+4` |
| Month      |  `m`  | `1999-1-01.5-3` | `1999-1-01.2-3` | `2000-C-31.8+4` |
| Week       |  `w`  | `1999+52+5.5-3` | `1999+52+5.8-3` | `2000+00+6.2+4` |
| Week       |  `w`  | `1999-01-2.5-3` | `1999-01-2.2-3` | `2000-53-1.8+4` |

: The time in Mexico City, London, and Tokyo in all three dot formats {#tbl-dotex}

In the table above, the `.m` format tells us that the month in Tokyo is January (`Month 0`) and the month in Mexico City and London is December (`Month B`). We could say the `.m` dates in Mexico City and London as "`Year 1999 Month B Day 31`" or "`Year 1999 Month -1 Day -1`" and the Tokyo date as "`Year 2000 Month 0 Day 0`" or" `Year 2000 Month -C Day -31`".

The `.w` format always starts the year with `Week 0`, but the year can start on any day of the week. The table above shows that the year 2000 starts on a Saturday (`Week 0 Day 6`). The `.w` dates in Mexico City and London could be said "`Year 1999 Week 52 Day 5`" or "`Year 1999 Week -1 Day -2`", while the date in Tokyo could be pronounced "`Year 2000 Week 0 Day 0`" or "`Year 2000 Week -52 Day -1`" in Tokyo.

In contrast to the `.m` and the `.w` formats, the dates in the `.y` format are one character shorter and a little easier to say. The spoken form of the `.y` date in Mexico City and London is  "`Year 1999 Day 364`" or "`Year 1999 Day -1`" and the spoken form of the Tokyo date is "`Year 2000 Day 0`" or "`Year 2000 Day -366`".

### `Deks` {#sec-deks}

Even though it provides formats for months and weeks, `Decalendar` envisions a world in which these units are replaced by `deks`. In terms of scale, `deks` are somewhere between a week and a month, precisely half a day less than a week and a half (1.5 weeks - 0.5 days) and approximately a third of month. `Deks` could provide the functionality of both weeks and months if we followed a `dekly` schedule instead of `weekly` and `monthly` schedules. The transition to a `dekly` schedule would be a massive undertaking, but could start with the creation of the digital infrastructure needed for the new system. Every desktop and mobile application that uses dates could be adapted to optionally use `deks` instead of weeks and months.

A major difficulty with our current calendar system is that the date is disconnected from the day of the week. In contrast, the day of the `dek` (`dotd`) is simply the last digit of the day number in the `.y` format. For example, the first day of the year (`Day 0`) is always a `Zeroday`, the last day of common years (`Day 364`) is always a `Fourday`, and the last day of leap years (`Day 365`) is always a `Fiveday`. The day number allows us to distinguish workdays from restdays. `Decalendar` defines `Threeday`, `Fourday`, `Eightday`, and `Nineday` as restdays, which means that days with numbers that end in 3, 4, 8, or 9 are days off from work and school. In total, there are 219 workdays and 146 restdays in a `Decalendar` year, not counting the only obligatory holiday, Leap Day (`Day 365`).

#### Gregorian calendar leap day considerations {#sec-leap}

New Year's Day is always `Day 0` in `Decalendar` and always January 1 in the Gregorian calendar. Therefore, we can say that `Day 0` is synonymous with January 1. Every Gregorian calendar date can be represented unequivocally by a positive or a negative day number except for February 29, the Gregorian calendar leap day. In leap years, February 29 is `Day 59` and `Day -307`, but in common years `Day 59` is March 1 and `Day -307` is February 28. We can write February 29 in the `.m` format as `+1+28` or `-B-01`, but this date cannot exist in the `.y` format without a year.

The Gregorian calendar leap day represents a threshold in finding the day number equivalents of Gregorian calendar dates. If a Gregorian calendar date is below the threshold, we can count on its positive day number to always stay the same, but its negative day number will differ between common years and leap years. Conversely, if a Gregorian calendar date is above the threshold, its positive day number will vary between common years and leap years while its negative day number will always remain constant. In other words, day numbers greater than -307 and less than 59 (-307 < d < 59) are always synonymous with their corresponding Gregorian calendar dates. Numbers below the threshold (-366 <= d <= -307) will decrease by 1 day in leap years, while numbers above the threshold (59 <= d <= 365) will increase by 1 day in leap years.

Valentine's Day and Christmas are on opposite sides of the Gregorian calendar leap day threshold and thus can serve as opposing examples of the leap year variation in the day numbers of Gregorian calendar dates. The positive day number of Valentine's Day (`Day 44`) and the negative day number of Christmas (`Day -7`) never change, but their respective negative day numbers are `Day -321` and `Day 358` in common years and `Day -322` and `Day 359` in leap years. To be clear, we only have to deal with the Gregorian calendar leap day when we are working with Gregorian calendar dates. Since the `Decalendar` leap day is at the end of the year and everything resets after the end of each year, `Decalendar` leap days do not affect the positive day numbers of any other `Decalendar` days.

If we do not want to bother with accounting for the Gregorian calendar leap day, we can add an asterisk (`*`) after the day number to mean: if it is a leap year, add 1 to this day number if it is greater than 58 or subtract 1 from it if it less than -306. Whether these instructions are carried out depends on the recipient, who could simply ignore them. The recipient could decide that staying faithful to the Gregorian calendar exactly is not important to them. For example, if someone's birthday is after the threshold, they might prefer to celebrate their birthday on the same day number every year instead of incrementing their birthday day number during leap years to avoid celebrating their birthday a day earlier than in the Gregorian calendar. Essentially, if we are not required to match the Gregorian calendar exactly, we can get forget about the asterisks and just use the `.y` numbers as they are without thinking about whether the current year is a leap year or not.

#### Gregorian calendar date to `dotd` conversion {#sec-dotd}

Using the asterisk with positive day number allows us to determine what the `dotd` would be in a common year and in a leap year. For example, `Day 358*` falls on an `Eightday` in common years and on a `Nineday` in leap years. Coincidentally, both of these days are restdays. In fact, many holidays just so happen to fall on `Decalendar` restdays. The table below lists 8 such holidays and their day of the year (`doty`) and day of the month (`dotm`) numbers.

| name             | date        | doty | dotm |
| ------           | ------      | ---- | ---- |
| Valentine's Day  | February 14 | 44   | 1+13 |
| Cinco de Mayo    | May 5       | 124* | 4+04 |
| Flag Day         | June 14     | 164* | 5+13 |
| Juneteenth Day   | June 19     | 169* | 5+18 |
| Independence Day | July 4      | 184* | 6+03 |
| All Saints' Day  | November  1 | 304* | A+00 |
| Veterans’ Day    | November 11 | 314* | A+10 |
| Christmas Day    | December 25 | 358* | B+24 |

: Gregorian calendar holidays that happen to fall on `Decalendar` restdays {#tbl-holidays}

In the table above, the last digit of the day of the month numbers of dates in February, June, and July are the same as the last digit of their day numbers. This pattern is maintained in all common years, but in leap years the last digits of the day of the month and day of the year numbers match in February, April, and May. The table below shows the number that has to be added to the day of the month number to get the corresponding `dotd` number in each month in common years (365) and leap years (366).

| Month     | 365 | 366 |
| ------    | --- | --- |
| January   | -1  | -1  |
| February  | 0   | 0   |
| March     | -2  | 1   |
| April     | -1  | 0   |
| May       | -1  | 0   |
| June      | 0   | 1   |
| July      | 0   | 1   |
| August    | 1   | 2   |
| September | 2   | 2   |
| October   | 2   | 3   |
| November  | 3   | 4   |
| December  | 3   | 4   |

: Difference between last digits of Gregorian calendar day of month and `Decalendar` day of year {#tbl-holidays}

#### Gregorian calendar week date to `doty` conversion {#sec-dotw}

We can use this method to find out what `dotd` a holiday falls on. Holidays with dates are based on the days of the week will fall on a different day number every year. `Decalendar` recommends redefining such dates to always be on the same day number. We can determine a range of possible new dates using the original date definition as a guide. For example, Thanksgiving is the fourth Thursday in November. Taking the number of the first day of November (303) from the table below month, we can calculate the earliest possible date to be `Day 324` (303 + 3 * 7) and the latest to be `Day 330` (303 + 4 * 7 - 1). From this range, we can pick `Day 328*` (November 25), because it falls on a `Decalendar` restday and will be exactly 30 days before Christmas (December 25). This new date will coincide with the original date of Thanksgiving whenever November begins on a Sunday.

|        | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
| -----  | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| n=365  | 0   | 30  | 58  | 89  | 119 | 150 | 180 | 211 | 242 | 272 | 303 | 333 |
| n=366  | 0   | 30  | 59  | 90  | 120 | 151 | 181 | 212 | 243 | 273 | 304 | 334 |

: Cumulative day counts the end of each Gregorian calendar month {#tbl-cumulative}

#### Gregorian calendar date to `doty` conversion {#sec-common}

The table above is small and portable, but using it requires some calculation. To avoid manual calculation entirely, we could use a computer program or a comprehensive conversion table like the ones below. The first table shows the day numbers for all of the days in common years, while the second table does the same for leap years. In both of these tables, the columns are labeled by month while the rows are labeled by the day of the month.

|     | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|  1  |  0  | 31  | 59  |  90 | 120 | 151 | 181 | 212 | 243 | 273 | 304 | 334 |
|  2  |  1  | 32  | 60  |  91 | 121 | 152 | 182 | 213 | 244 | 274 | 305 | 335 |
|  3  |  2  | 33  | 61  |  92 | 122 | 153 | 183 | 214 | 245 | 275 | 306 | 336 |
|  4  |  3  | 34  | 62  |  93 | 123 | 154 | 184 | 215 | 246 | 276 | 307 | 337 |
|  5  |  4  | 35  | 63  |  94 | 124 | 155 | 185 | 216 | 247 | 277 | 308 | 338 |
|  6  |  5  | 36  | 64  |  95 | 125 | 156 | 186 | 217 | 248 | 278 | 309 | 339 |
|  7  |  6  | 37  | 65  |  96 | 126 | 157 | 187 | 218 | 249 | 279 | 310 | 340 |
|  8  |  7  | 38  | 66  |  97 | 127 | 158 | 188 | 219 | 250 | 280 | 311 | 341 |
|  9  |  8  | 39  | 67  |  98 | 128 | 159 | 189 | 220 | 251 | 281 | 312 | 342 |
| 10  |  9  | 40  | 68  |  99 | 129 | 160 | 190 | 221 | 252 | 282 | 313 | 343 |
| 11  | 10  | 41  | 69  | 100 | 130 | 161 | 191 | 222 | 253 | 283 | 314 | 344 |
| 12  | 11  | 42  | 70  | 101 | 131 | 162 | 192 | 223 | 254 | 284 | 315 | 345 |
| 13  | 12  | 43  | 71  | 102 | 132 | 163 | 193 | 224 | 255 | 285 | 316 | 346 |
| 14  | 13  | 44  | 72  | 103 | 133 | 164 | 194 | 225 | 256 | 286 | 317 | 347 |
| 15  | 14  | 45  | 73  | 104 | 134 | 165 | 195 | 226 | 257 | 287 | 318 | 348 |
| 16  | 15  | 46  | 74  | 105 | 135 | 166 | 196 | 227 | 258 | 288 | 319 | 349 |
| 17  | 16  | 47  | 75  | 106 | 136 | 167 | 197 | 228 | 259 | 289 | 320 | 350 |
| 18  | 17  | 48  | 76  | 107 | 137 | 168 | 198 | 229 | 260 | 290 | 321 | 351 |
| 19  | 18  | 49  | 77  | 108 | 138 | 169 | 199 | 230 | 261 | 291 | 322 | 352 |
| 20  | 19  | 50  | 78  | 109 | 139 | 170 | 200 | 231 | 262 | 292 | 323 | 353 |
| 21  | 20  | 51  | 79  | 110 | 140 | 171 | 201 | 232 | 263 | 293 | 324 | 354 |
| 22  | 21  | 52  | 80  | 111 | 141 | 172 | 202 | 233 | 264 | 294 | 325 | 355 |
| 23  | 22  | 53  | 81  | 112 | 142 | 173 | 203 | 234 | 265 | 295 | 326 | 356 |
| 24  | 23  | 54  | 82  | 113 | 143 | 174 | 204 | 235 | 266 | 296 | 327 | 357 |
| 25  | 24  | 55  | 83  | 114 | 144 | 175 | 205 | 236 | 267 | 297 | 328 | 358 |
| 26  | 25  | 56  | 84  | 115 | 145 | 176 | 206 | 237 | 268 | 298 | 329 | 359 |
| 27  | 26  | 57  | 85  | 116 | 146 | 177 | 207 | 238 | 269 | 299 | 330 | 360 |
| 28  | 27  | 58  | 86  | 117 | 147 | 178 | 208 | 239 | 270 | 300 | 331 | 361 |
| 29  | 28  |     | 87  | 118 | 148 | 179 | 209 | 240 | 271 | 301 | 332 | 362 |
| 30  | 29  |     | 88  | 119 | 149 | 180 | 210 | 241 | 272 | 302 | 333 | 363 |
| 31  | 30  |     | 89  |     | 150 |     | 211 | 242 |     | 303 |     | 364 |

: Common year Gregorian calendar date to `doty` conversion {#tbl-common}

#### Leap year date to `doty` conversion {#sec-leap}


| Day | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|  1  |  0  | 31  | 60  |  91 | 121 | 152 | 182 | 213 | 244 | 274 | 305 | 335 |
|  2  |  1  | 32  | 61  |  92 | 122 | 153 | 183 | 214 | 245 | 275 | 306 | 336 |
|  3  |  2  | 33  | 62  |  93 | 123 | 154 | 184 | 215 | 246 | 276 | 307 | 337 |
|  4  |  3  | 34  | 63  |  94 | 124 | 155 | 185 | 216 | 247 | 277 | 308 | 338 |
|  5  |  4  | 35  | 64  |  95 | 125 | 156 | 186 | 217 | 248 | 278 | 309 | 339 |
|  6  |  5  | 36  | 65  |  96 | 126 | 157 | 187 | 218 | 249 | 279 | 310 | 340 |
|  7  |  6  | 37  | 66  |  97 | 127 | 158 | 188 | 219 | 250 | 280 | 311 | 341 |
|  8  |  7  | 38  | 67  |  98 | 128 | 159 | 189 | 220 | 251 | 281 | 312 | 342 |
|  9  |  8  | 39  | 68  |  99 | 129 | 160 | 190 | 221 | 252 | 282 | 313 | 343 |
| 10  |  9  | 40  | 69  | 100 | 130 | 161 | 191 | 222 | 253 | 283 | 314 | 344 |
| 11  | 10  | 41  | 70  | 101 | 131 | 162 | 192 | 223 | 254 | 284 | 315 | 345 |
| 12  | 11  | 42  | 71  | 102 | 132 | 163 | 193 | 224 | 255 | 285 | 316 | 346 |
| 13  | 12  | 43  | 72  | 103 | 133 | 164 | 194 | 225 | 256 | 286 | 317 | 347 |
| 14  | 13  | 44  | 73  | 104 | 134 | 165 | 195 | 226 | 257 | 287 | 318 | 348 |
| 15  | 14  | 45  | 74  | 105 | 135 | 166 | 196 | 227 | 258 | 288 | 319 | 349 |
| 16  | 15  | 46  | 75  | 106 | 136 | 167 | 197 | 228 | 259 | 289 | 320 | 350 |
| 17  | 16  | 47  | 76  | 107 | 137 | 168 | 198 | 229 | 260 | 290 | 321 | 351 |
| 18  | 17  | 48  | 77  | 108 | 138 | 169 | 199 | 230 | 261 | 291 | 322 | 352 |
| 19  | 18  | 49  | 78  | 109 | 139 | 170 | 200 | 231 | 262 | 292 | 323 | 353 |
| 20  | 19  | 50  | 79  | 110 | 140 | 171 | 201 | 232 | 263 | 293 | 324 | 354 |
| 21  | 20  | 51  | 80  | 111 | 141 | 172 | 202 | 233 | 264 | 294 | 325 | 355 |
| 22  | 21  | 52  | 81  | 112 | 142 | 173 | 203 | 234 | 265 | 295 | 326 | 356 |
| 23  | 22  | 53  | 82  | 113 | 143 | 174 | 204 | 235 | 266 | 296 | 327 | 357 |
| 24  | 23  | 54  | 83  | 114 | 144 | 175 | 205 | 236 | 267 | 297 | 328 | 358 |
| 25  | 24  | 55  | 84  | 115 | 145 | 176 | 206 | 237 | 268 | 298 | 329 | 359 |
| 26  | 25  | 56  | 85  | 116 | 146 | 177 | 207 | 238 | 269 | 299 | 330 | 360 |
| 27  | 26  | 57  | 86  | 117 | 147 | 178 | 208 | 239 | 270 | 300 | 331 | 361 |
| 28  | 27  | 58  | 87  | 118 | 148 | 179 | 209 | 240 | 271 | 301 | 332 | 362 |
| 29  | 28  | 59  | 88  | 119 | 149 | 180 | 210 | 241 | 272 | 302 | 333 | 363 |
| 30  | 29  |     | 89  | 120 | 150 | 181 | 211 | 242 | 273 | 303 | 334 | 364 |
| 31  | 30  |     | 90  |     | 151 |     | 212 | 243 |     | 304 |     | 365 |

: Leap year Gregorian calendar date to `doty` conversion {#tbl-leap}

### `Subyear` units {#sec-subyear}

#### Seasons {#sec-seasons}

We can use the tables above to convert any Gregorian calendar date to a day number. This is especially useful for variable dates that have to be converted every year. For example, the dates of the solstices, the longest and shortest days of the year, vary slightly every year. Instead of calculating the exact day number of the solstices ourselves we could translate from existing Gregorian calendar dates. Solstices and equinoxes (the points in between the solstices) are the basis of the some holidays, such as [Nowruz](https://en.wikipedia.org/wiki/Nowruz).

The dates of the solstices and the equinoxes can be used as definitions of the seasons. Each season has an opposite. The opposite of Spring is Fall and the opposite of Summer is Winter. These opposites are always occurring simultaneously, one opposing season in the Northern hemisphere and the other in the Southern hemisphere. The table below lists the opposing seasons in the North and South columns (which correspond to the Northern and Southern hemispheres) and the approximate dates of the solstices and the equinoxes that mark the start of each season.

| Code | North  | South  | `doty` | `dotm` | Date         | Event              |
| ---- | ------ | ------ | ----   | ------ | ------------ | ------------------ |
| S0   | Spring | Fall   | 78     | 2+19   | March 20     | Northward Equinox  |
| S1   | Summer | Winter | 170    | 5+19   | June 20      | Northward Solstice |
| S2   | Fall   | Spring | 264    | 8+21   | September 22 | Southward Equinox  |
| S3   | Winter | Summer | 354    | B+21   | December 21  | Southward Solstice |

: Solstice and equinox Gregorian calendar and `doty` dates {#tbl-soleq}

Using the information in the table above, we can group the `deks` in a year according to the seasons in which they occur. We identify `deks` using the first 2 digits of the 3-digit day number of any day in that `dek`. For example, `Day 78` is the second to last day in `Dek 7`, while `Day 170` is the first day in `Dek 17`. Therefore, Spring starts in the northern hemisphere at the end of `Dek 7` and ends before `Dek 17`. Winter starts in `Dek 35` of one year and ends at the end of `Deks 7` of the subsequent year. The table below summarizes the division of `deks` by season.

| Code | North  | South  | Start | End |
| ---- | -----  | -----  | ----- | --- |
| S0   | Spring | Fall   | 8     | 16  |
| S1   | Summer | Winter | 17    | 25  |
| S2   | Fall   | Spring | 26    | 34  |
| S3   | Winter | Summer | 35    | 7   |

: The `deks` that begin and end each season {#tbl-seasons}

#### `Qops`, `Delts`, `Eps` and `Zets` {#sec-qdez}

Each season in the table above has 9 `deks` and exactly 90 days, except for the seasons in the last row, which have 10 `deks` and 95 days in common years or 96 days in leap years. To more closely reflect the actual seasons, the extra days from the last row should be split among the first two rows. Nevertheless, the seasons shown above work well, because the first `dek` of each season is the last `dek` in a `qop` (`qoppa`). Like seasons, `qops` divide the year into four parts, but unlike seasons, `qops` do not include `Dek 36`. The table below shows the division of `deks` by `qoppa`.

| Code | Start | End |
| ---- | ----- | --- |
| Q0   | 0     | 8   |
| Q1   | 9     | 17  |
| Q2   | 18    | 26  |
| Q3   | 27    | 35  |

: The `deks` that begin and end each `qop` {#tbl-q}

`Dek 36`, the last `dek` of the year, is not included in the last `qop` so that each `qop` is 9 `deks` and 90 days long. The omission of `Dek 36` also maintains the pattern of alternating even and odd numbers in each row. This omission leaves out only 5 or 6 days per year, because `Dek 36` overlaps with `Dek 0`. In addition to `qops` shown above, `Decalendar` describes 3 other similar units called `delts` (`deltas`), `eps` (`epsilons`), and `stigs` (`stigmas`). These units do not leave out as many days in each year, because these units split the year by day, rather than by `dek`. `Delts`, `eps`, and `stigs` split the year into 4, 5, and 6 parts, respectively. The table below list the numbers of the days that begin and end each `delt`.

| Code | Start | End |
| ---- | ----- | --- |
| D0   | 0     | 90  |
| D1   | 91    | 181 |
| D2   | 182   | 272 |
| D3   | 273   | 363 |

: The days that begin and end each `delt` {#tbl-d}

`Delts` are 91 days long and leave out one day at the end of common years and two days at the end of leap years. Just as above, leaving out a small number of days at the end of the year preserves a pattern that can be useful for remembering the days on which `delts` start and end. In the table above, not only do rows alternate between even and odd numbers, but the `delt` number is the last digit of both the start and the end day of the `delt`. Unlike `delts`, `eps` are 73 days long and do not leave out any days from common years. `Qops`, `delts`, and `eps` all leave out leap days in leap years. The table below list the numbers of the days that begin and end each `ep`.

| Code | Start | End |
| ---- | ----- | --- |
| E0   | 0     | 72  |
| E1   | 73    | 145 |
| E2   | 146   | 218 |
| E3   | 219   | 291 |
| E4   | 292   | 364 |

: The days that begin and end each `ep` {#tbl-e}

The only unit that can include the leap year is a `zet`, which is 61 days long and follows a similar pattern as a `delt`, except the last `zet` in common years is 1 day short than all the others. The table below list the numbers of the days that begin and end each `zet`. As with `delts`, the `zet` number is the last digit of the numbers of its first and last day.

| Code | Start | End |
| ---- | ----- | --- |
| Z0   | 0     |  60 |
| Z1   | 61    | 121 |
| Z2   | 122   | 182 |
| Z3   | 183   | 243 |
| Z4   | 244   | 304 |
| Z5   | 305   | 365 |

: The days that begin and end each `zet` {#tbl-z}

All of the `subyear` unit codes can be preceded by a year and followed by a day number. The midpoint of common years is noon on the first day of `Delt 2`, `D2+00.5` or `+182.5`, and the midpoint of leap years is midnight of the first day of `Zet 3`, `Z3+00.0` or `+183.0`. The first day of Spring in northern hemisphere and Fall in the southern hemisphere in the year 2000 is `2000S0+00` or `2000+078`. The `subyear` units are essentially date intervals, series of contiguous dates. `Decalendar` includes very powerful approaches to describing series of dates, times, and `stamps`.

## Series {#sec-series}

A single `doty` number, such as `Day 0`, implies a duration on 1 day. We can indicate a duration of multiple days by listing consecutive days in a `series`. A `series` consists of dates, times, or `stamps` separated by commas (`,`). The items in a `series` should all be of the same type. In other words, `series` should be homogeneous and not mix dates, times, and `stamps`. The first 3 days of the year in the form of a `series` would be written `000,001,002`, while the last three days would be `-003,-002,-001`. The first half a day, from midnight to noon, could be written `0,.1,.2,.3,.4`.

### Slices {#sec-slices}

Instead of listing every single day in a `series`, we can "slice" from `Day 0` up to but not including `Day 3` by writing `:003`. `Simple slices` consist of a `start` and a `stop` separated by a colon (`start:stop`). When the `start` is omitted, `slices` begin at the first value, which in the context of a year is `Day 0` and in the context of a day is midnight. Therefore, writing `:003` is the same as writing `000:003`, both represent the first 3 days of the year: `000,001,002`. Using this approach, we can shorten the series `0,.1,.2,.3,.4` to `:.5`.

If we omit the `stop`, instead of the `start`, we would "slice" up to and including the last value. In the context of `doty` dates, omitting the `stop` value obtains all of the days in the year after the `start`, because the default `stop` is the number of days in the year (`n`). For example, the `slice` `003:` has a `start` of `Day 3` and a `stop` of `n`, and thus represents every day in the year except the first 3. The number of days we obtain from a `slice` is called a `span`. To calculate the `span`, we subtract the `start` from the `stop` ($stop-start$). In a common year, the `span` of `003:` is $n-3=362$, while in a leap year it would be $n-3=363$. The tables below lists the seasons, `qops`, and `delts` in the form of `slices`:

| Index | Season  | Qop     | Delt    |
| ----- | ------- | ------- | ------- |
| 0     | 78:170  | :90     | :91     |
| 1     | 170:264 | 90:180  | 91:182  |
| 2     | 264:354 | 180:270 | 182:273 |
| 3     | 354:78  | 270:360 | 273:364 |

: The slices that represent the 4-part subyear units {#tbl-fourpart}

### Steps {#sec-steps}

The `simple slices` (`start:stop`) described above are a type of time `segment`, an unbroken time interval. To break up a `simple slice` into a non-consecutive `series`, we can add a `step` value and create a `stepped slice` (`start:stop:step`). `Stepped slices` move in `step`-sized "steps" starting from `start`, skipping over $step-1$ items with each "step", keeping only items that are "stepped" on. In other words, `stepped slices` keep items whose index (zero-based position) in the `slice` is evenly divisible by `step`. A `step` value of 1 keeps every item, because every index is divisible by 1, and a `step` of 2 keeps every other item, those with even-numbered indexes. `Day 0` and every other third day in the year thereafter (`Day 3`, `Day 6`, etc.) can be represented by the `slice` `::3`.

To create a `series` of times on days throughout the year, we can use a `slice` with a `series` of "steps". The `slice` `:365:1,1,3` represents all of the `Decalendar` workdays in a year. It is necessary to specify 365 as the `stop`, so that Leap Day (`Day 365`) is not included as a workday in leap years. Similarly, `003::1,4` is a `seq` that represents all of the regular restdays, not including the Leap Day holiday.

### Spreads {#sec-spreads}

Another way we could create a `series` is with a `spread`. `Simple spreads` consist of a `start` and a `span` (`start»span`) separated by a right [guillemet](https://en.wikipedia.org/wiki/Guillemet) (hex: `bb`, html: `&raquo;`, vim/compose: `>>`)  or a `stop` and a `span` (`stop«span`) separated by a left [guillemet](https://en.wikipedia.org/wiki/Guillemet) (hex: `ab`, html: `&laquo;`, vim/compose: `<<`). The default `start` and `stop` values are the same for both `slices` and `spreads`. We can `spread` forward from the default `start` to capture the first `span` days in a year. For example, the first 3 days in a year can be represented by the `spread` `>003`, which is synonymous with the `slice` `:003`. In this example, the `start` is 0, while the `stop` and the `span` are both 3.

In addition to default `start` and `stop` values, `spreads` also have default `span` values. If we "spread" forward from a positive `start`, the default `span` is $n-start$. If we spread backward from a positive `stop`, the default `span` is `stop`. We can `spread` backward from the default `stop` to capture the last `span` days in a year. For example, `«003` represents the last 3 days of any year. We could also use a negative `start` of `-003`, the third to last day of any year, to create the `slice` `-003:` and the `spread` `-003»`, both of which are synonymous with `«003`. One advantage of `spreads` over `slices` is the ability to access days from the end of a year without negative numbers.

### Splits {#sec-splits}

As with `stepped slices`, we create non-consecutive `series` by "splitting" a `simple spread` (`start»span` or `stop«span`) into `split spread` (`start»span»split` or `stop«span«split`) with a `split` value that works like the opposite of a `step`. While `steps` keep items that are "stepped" on, `splits` exclude items that are used to create the boundaries of the `splits`. `Split spreads` with a `split` greater than 1 will yield a `series` of `segments`. The `split spread` `»»4` that skips every 5th day to create groups of 4 days throughout the year. The first 3 `splits` in `»»4` can be written as three different `series` of `segments`: `:004,005:009,010:014`, `»004,005»004,010»004`, or `004«,009«004,010«004`. Notably, `»»4` will always end with a `segment` containing the last 4 days of common years, `360:364`, `360»004`, or `364«004`, even in leap years, because partial splits are no allowed.

### Spaces {#sec-spaces}

The pattern above requires that the `splits` are separated by the default `space` value of 1. We can specify a different `space` value in the form `start»span»split»space` or `stop«span«split«space`. The `split spread` `»»3»2` creates 3-day `splits` separated by 2-day `spaces`. This is the pattern of workdays in the `Decalendar` system. The first `segment` of `»»3»2` can be written as `:003`, `»003`, or `003«`, while the last `segment` is `360:363`, `360»003`, or `363«003`. The patterns created by `»»4` and `»»3»2` can be mixed if we use a `series` of `splits` and `spaces`. The `split spread` `»»4,3»1,2` alternates between `»»4` and `»»3»2`. The workdays in the first `dek` of `»»4,3»1,2` can be written as the following `series` of `segments`: `:004,005:008`, `»004,005»003`, or `004«,008«003`. A `space` value of 0 may also be useful. For example, `delts`, `qops`, `eps`, and `zets` can be summarized as `split spreads` as shown in the following table:

| Unit | Spread   |
| ---- | -------- |
| Delt | `»»91»0` |
| Qop  | `»»90»0` |
| Ep   | `»»73»0` |
| Zet  | `»»61»0` |

: The spread that represent the constant length subyear units {#tbl-constant}

### Pomodoro {#sec-pom}

Another real-life application of `spreads` can be to intersperse breaks in between periods of work. `Declock` uses the term `pom`, which is short for [Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique), to describe a combined unit of work and rest. The times spent working and resting can vary, but a reasonable translation of the original Pomodoro into the `Declock` units would be to have `poms` that consist of 17 `mils` of work and 3 `mils` of rest, with a 17 `mil` break after every 4 `poms`. If we did not include the longer break, we could write infinite `poms` as this `split spread`: `»».017».003`. The longer break complicates the pattern and introduces repetition to the `split spread`: `»».017,.017,.017,.017».003,.003,.003,.02`.

#### Replication operator {#sec-rep}

Repetition of values is the price we pay for breaking a pattern, but we can mitigate this repetition by using the `rep` (replication) operator (`*`) to replace the repetitive values. When we apply this approach to the `spread` above: `»».017,.017,.017,.017».003,.003,.003,.02`, it becomes easier to read and understand: `»»4*.017»3*.003,.02`. The rep can also be used in the `span` of a `split spread` or the `stop` of a `stepped slice` to indicate has many cycles of `splits` or `steps` we want to complete. For example, instead of writing `.35».4»4*.017»3*.003,.02` to indicate sets of 4 `poms` that start at `Dot 35` and last 4 `dimes`, we can write `.35»4*»4*.017»3*.003,.02` to mean that we will start at `Dot 35` and end after completing four cycles (`4*`).

#### Percent, permil, and permyr operator {#sec-per}

We can make the `split spread` above even shorter by using the `per` operators: `%`, `‰`, and `‱`. All of the values in `.35».4».017*4».003*3,.02` are either percents (.01 or ¹/₁₀₀) or permils (.001 or ¹/₁₀₀₀) of a day, we can therefore rewrite this `split spread` as `.35».4»4*17‰»3*3‰,2%`. It may be difficult to write the permil (`‰`) operator (hex: `2030`, html: `&permil;`, vim: `%0`, compose: `%o`), because it does not appear on a typical keyboard, so it is also possible to write `.35».4»4*17‰»3*3‰,2%` as `.35».4»4*17m»3*3m,2%`, with the letter `m`, which stands for `mil`, replacing `‰`. In addition to the percent (`%`) and permil (`‰`) operators, there is also the permyr (`‱`) operator (hex: `2031`, html: `&pertenk;`), which is short for permyriad and represents `Declock phrases`.

### Slice and spread hybrids {#sec-hybrids}

`Split spreads` can be useful for planning 1 day of `poms`, but the easiest way to plan multiple days is with a `slice`-`spread` hybrid called a `sled` or a `spread`-`slice` hybrid called a `splice`. These hybrids have all of the elements of both `spreads` and `slices`: `start`, `stop`, `step`, `span`, `split`, and `space`. The only different between the hybrids is the order of these elements. `Sleds` put the `slice` elements first (`start:stop:step»span»split»space` or `start:stop:step«span«split«space`), while `splices` start with the `spread` elements (`start»span»split»space:stop:step` or `stop«span«split«space:start:step`).

Both of these hybrids either `spread` forward (`start:stop:step»span»split»space` or `start»span»split»space:stop:step`) or `spread` backward (`start:stop:step«span«split«space` or `stop«span«split«space:start:step`) from each `step` of the `slice`. In all cases, the `slice` elements are used for dates and the `spread` elements are used for times. When put together, these elements replicate a `segment` or a series of `segments` a series of days. Between the two hybrid approaches, `Decalendar` recommends `sleds`, instead of `splices`, because they follow the convention of largest-to-smallest in `dot` format dates (`±year±day.day±z`, `year±m±dd.day±z`, and `year±ww±d.day±z`).

### Brackets {#sec-brackets}

Using square brackets (`[]`), we can replicate a 
Another advantage of `sleds` is they keep dates closer together. For example, the `sled` `000.35::3*1,2,2*1,3».34` and `splice` `000.35».34::3*1,2,2*1,3` both begin with a start time of `Dot 35` on the first `Zeroday` of the year, but the `sled` first specifies all of the days before providing the `span`, whereas the `splice` focuses on describing the first `segment` before saying how it should be replicated.

The `sled` and `slice` above represent the recommended `Decalendar` work schedule. `Decalendar` specifies every day except `Threeday`, `Fourday`, `Eightday`, and `Nineday` as workdays. The restdays in the form of a `slice` are `4::4,1,5`, while the workdays in `slice` form are `::3*1,2,2*1,3`. The 3.4-`dime` long `Decalendar` workday starts at `Dot 35`, ends at `Dot 69`, and can be summarized by the `spread` `.35».34`. This work schedule is 6̅ `mils` longer than the typical 9 to 5 schedule, because it starts 2.5 `cents` earlier than 9AM (`Dot 375`) and ends 1.83̅ `cents` earlier than 5PM (`Dot 7083̅`).

### Slice and spread hybrids {#sec-hybrids}

Following this schedule, a worker would spend 2.38 days at work per `dek`, which is 238 `mils` per day on average. In a typical 40-hour workweek, a worker would spend 238.0952381 `mils` per day at work. Interestingly, the difference is only 9.52381 beats (8.22857184 seconds) long. If a worker spends an extra 5 `cents` at work for 6 days, they should be entitled to an extra day off. This schedule would be Starting at  days instead of 10, which is almost exactly the same as if we extended the typical workweek to `000.3::2[3*1,2]».39»2*.15».4`.
Instead of just a single `segment` per day, we could add a `split` and a `space` to the `sled` above and include breaks throughout the day. A typical workday would be two blocks of work separated by a lunch break in the middle of the day. We could combine the `spread` `.35».34»2*.15».4` with the `sled` above to create a new `sled` with two 15-`cent`-long work sessions with one 4-`cent`-long lunch break in between: `000.35::3*1,2,2*1,3».34»2*.15».4`.

We can adjust the time spent at work while keeping the lunch break at `Dot 5` by changing the length of the work sessions, the start time, and the duration. If we expect 3 `dimes` of work per day and we can  dimes is too much time to spend at work or in school
Another option is to spend 
If more time at work is required dimes is too much time to spend at work or in school, the first and/or last 5 `cents` can be skipped to start the workday at `Dot 4` (2.5% later than 37.5%) and/or end it at `Dot 7` (.83̅% earlier than 70.83̅%).

(`000.4::3*1,2,2*1,3».3»4%,2*5%»1%,4%,2*1%`)
`000.4».3»4%,4%,5%,5%»1%,1%,4%,1%:2,8`
`000.35».4»4%,4%,5%,5%»1%,1%,4%,1%:2,8`
It is possible to  option is to take more The table below summarizes the recommended daily work schedule.

 When combined together, the workdays `slice` and workday `spread` create the `sled` `000.35::3*1,2,2*1,3».4`.
`Sleds` first specify the days and then define the `segments`. 

#### Percent operator {#sec-operator}

A more realistic workday or school day would have a longer break for lunch. We could achieve this with a `series` of `splits` and a `series` of `spaces`. Instead of listing all of the times in a `splice` like this: `000.35».4».04,.04,.05,.05,.04,.04,.05».01,.01,.04,.01,.01,.01:2,8`, we can use cycling to remove some of the values that repeat as in this `slice`: `000.35».4».04,.04,.05,.05».01,.01,.04,.01:2,8`.  Repetition of values is the price we pay for breaking the pattern, but we can mitigate this repetition by using the `%` operator, because all of the values in each of the series are percents of the day. The resulting `splice `, `000.35».4»4%,4%,5%,5%»1%,1%,4%,1%:2,8`, is shorter and easier to read.

| slice   | spread | spread | label |
| ------- | ------ | ------ | ----- |
| 36%:44% | 36%»8% | 44%«8% | work0 |
| 44%:45% | 44%»1% | 45%«1% | rest0 |
| 45%:50% | 45%»5% | 50%«5% | work1 |
| 50%:54% | 50%»4% | 54%«4% | lunch |
| 54%:59% | 54%»5% | 59%«5% | work3 |
| 59%:60% | 59%»1% | 60%«1% | rest2 |
| 60%:64% | 60%»4% | 64%«4% | work4 |
| 64%:65% | 64%»1% | 65%«1% | rest3 |
| 65%:69% | 65%»4% | 69%«4% | work5 |
| 69%:70% | 69%»1% | 70%«1% | rest4 |
| 70%:75% | 70%»5% | 75%«5% | work6 |

| slice   | spread | spread | label |
| ------- | ------ | ------ | ----- |
| 40%:44% | 40%»4% | 44%«4% | work0 |
| 44%:45% | 44%»1% | 45%«1% | rest0 |
| 45%:50% | 45%»5% | 50%«5% | work1 |
| 50%:54% | 50%»4% | 54%«4% | lunch |
| 54%:59% | 54%»5% | 59%«5% | work2 |
| 59%:60% | 59%»1% | 60%«1% | rest1 |
| 60%:64% | 60%»4% | 64%«4% | work3 |
| 64%:65% | 64%»1% | 65%«1% | rest2 |
| 65%:70% | 65%»5% | 70%«5% | work4 |

| slice   | spread | spread | label |
| ------- | ------ | ------ | ----- |
| 35%:39% | 35%»4% | 39%«4% | work0 |
| 39%:40% | 39%»1% | 40%«1% | rest0 |
| 40%:44% | 40%»4% | 44%«4% | work1 |
| 44%:45% | 44%»1% | 45%«1% | rest1 |
| 45%:50% | 45%»5% | 50%«5% | work2 |
| 50%:54% | 50%»4% | 54%«4% | lunch |
| 54%:59% | 54%»5% | 59%«5% | work3 |
| 59%:60% | 59%»1% | 60%«1% | rest2 |
| 60%:64% | 60%»4% | 64%«4% | work4 |
| 64%:65% | 64%»1% | 65%«1% | rest3 |
| 65%:69% | 65%»4% | 69%«4% | work5 |
| 69%:70% | 69%»1% | 70%«1% | rest4 |
| 70%:75% | 70%»5% | 75%«5% | work6 |

#### Replication operator {#sec-operator}

We can make the `splice` above even shorter by using the replication operator `*` to replace a repetitive values. The result, `000.35»4%»2*4%,2*5%»2*1%,4%,1%::2,8`, is a bit easier to read and understand. We can modify the step to extend this splice to every workday in a `dek` by `000.35»4%»4%*2,5%*2»1%*2,4%,1%::1,1,1,2,1,1,3`. This represents another opportunity to use the replication operator. The final result, `000.35»4%»2*4%,2*5%»2*1%,4%,1%::3*1,2,2*1,3`, is the recommended `Decalendar` work schedule. This work schedule starts a 2.5% earlier and ends 4.16̅% later than a typical 9 to 5 (9AM=37.5%, 5PM=70.83̅%), but includes 4% of the day worth of breaks. The entire workday is 4 `dimes` long. If that is too much time to spend at work or in school, the first or last work session can be skipped to either start the workday at `Dot 4` or end it at  `Dot 7`. The table below summarizes the recommended daily work schedule.

| slice   | spread | spread | label |
| ------- | ------ | ------ | ----- |
| 35%:39% | 35%»4% | 39%«4% | work0 |
| 39%:40% | 39%»1% | 40%«1% | rest0 |
| 40%:44% | 40%»4% | 44%«4% | work1 |
| 44%:45% | 44%»1% | 45%«1% | rest1 |
| 45%:50% | 45%»5% | 50%«5% | work2 |
| 50%:54% | 50%»4% | 54%«4% | lunch |
| 54%:59% | 54%»5% | 59%«5% | work3 |
| 59%:60% | 59%»1% | 60%«1% | rest2 |
| 60%:64% | 60%»4% | 64%«4% | work4 |
| 64%:65% | 64%»1% | 65%«1% | rest3 |
| 65%:69% | 65%»4% | 69%«4% | work5 |
| 69%:70% | 69%»1% | 70%«1% | rest4 |
| 70%:75% | 70%»5% | 75%«5% | work6 |

: The recommend `Decalendar` daily work schedule {#tbl-schedule}


### Slides {#sec-slides}

Similar to the 

`start»span»split»space:step`
`stop«span«split«space:step`
split  special `slices` and `spreads` called `stepped slices` and. 
into `series` of `seqments` called `a`. `split spread` `stepped slices`  `Slices` `Slices` and `spreads` can also form that are not `simple` create `series` instead of `segments`. are called `stepped slices` and `split spreads`. `spaced spreads`. `Slices` can create `series` of non-consecutive dates, times, or `stamps` by `stepping`, w

Spread-seqs
Spreeqs
 spread::seq

### Slides {#sec-slides}

`start:stop:step»span»split»space`
`0.5».6::2,8`



span space span skip

`start:stop:step:step:step:step»span»split»space`
`start>span>space>split`
Beyond `simple slices` and `simple spreads`
`start>span>split>space>`

start»span«split: spread to the right, but split to the left
The default space is 0
The default skip is None, meaning do not skip any
skip is 1: 1 0 1 0 1 0 1 0
skip is 2: 1 1 0 1 1 0 1 1
skip can be a step or another spread
A 5 cent span with a 1 cent break in between
0»5»2
A 9 cent span with a 1 cent break in between
0»9»4
A 9 cent span with a 2 cent break in between
0»9»4:6
0»9»4»2

Negative numbers 
If the `span` were negative, it would simple reverse the direction of the angle bracket.


`stepping slice` `:-4:-1`. Unlike `simple slices`, `stepping slices` have more than 1 colon. Any values after the `start` and the `stop` are called `steps`. A negative `step`  possible with a simple `slice`. To obtain the last 3 days of any year we include a  would have to `slice` in reverse

is synonymous with the `slice` `:003`. All of the remaining days in the year can be expressed as `003<` or `003:`. If we do not want to `spread` all the way to the first or last value, we can provide a `span` after the left or right angle bracket (`<` or `>`) in the form `stop<span` or `start>span`. This is especially useful when combined with the default `stop`. For example, `>3` is synonymous with `000>3`, `003<` and `:003`. from the `start` by writing `000>3`, but then we have to specify that we only want 3 days instead of all of the days in the year. the `stop`, by writing. If we `spread` from the `start`,  `stop` is We could also `spread` starting from `start`. The value after `<` is called  to the way we could write the  , whereas `003:` uses the default stop and gives us

When the `stop` is omitted, the `slice` goes up to and including the last value. 

We can `slice` up to but not including `Day 3` by writing `:003`. `Day 3` in this is synonymous with the `series` `000,001,002`. This In addition to `slicing`, we can also replace the series with `Slices` cut out the `span` in between a `start` and a `stop` (`start:stop`), whereas `spreads` use the `span` to extend either forward from a `start` (`start>span`) or backward from a `stop` (`stop<span`). `Slices` can omit their `start` `stop` `span` `stop` is never included in `slices` and `spreads`. , `000:003` as a `slice`, and `000>3` or `003<3` as a `spread`.


We can shorten the `slice` above from `000:003` to `:003` by omitting the `start` value, because the default `start` value of `slices` is the first value. Similarly, we can shorten `003<3` to `003<` because if a `span` is omitted, `spreads` will extend as far as possible, in this case to the first value.

All of three of these approaches can be combined together in the form `start:stop:step>span`. 

 in part to enable simple algebraic reasoning about the `stop`, `start`, and `span`. The `stop` is the sum of the `start` and the `span` (`stop` = `start` + `span`), the `start` is the difference between the `stop` and the `span` (`start` = `stop` - `span`), and the `span` is the difference between the `stop` and the `start` (`span` = `stop` - `start`). Excluding the `stop` is even more useful when combined with the default values of `slices` and `spreads`. The default `start` and `stop` values of `slices` are the first and last values, respectively. Similarly, default `span` of `spreads` is `n`, the difference between the last value and the first value. The first three days of the year can written `:003` as a `slice`, and `000>3` or `003<`In the context of the days in a year, 


If a `stamp` has a duration, it is called a time `segment`. A group of `stamps` or `segments` is called a time `series`. A `series` can be synonymous with a `segment` if it contains only unique, consecutive, and chronologically ordered `stamps`.  `segments` are uninterrupted time intervals,  The main difference between between a `segment` and a `series`, is that a  A `series` of `segments` can describe. While a time `segment` can de If we specified `datetime` with a duration is called a time `segment` and  have a beginning (`start`), an end (`stop`), and a duration (`span`). we could decide when to meet for lunch, but not how much time we would spend eating lunch. 

Dates, times, and `datetimes` can be grouped together into time `segments` or time `series`. Time `segments` are uninterrupted time intervals, and thus the items in a `segment` must be unique, consecutive, and in chronological order. Time `series` do not have any of these restrictions and can contain anything, including time `segments`. A `series` of `segments` is called a `segment series` and can be useful for describing recurring events. `Segment series` will have For example, a group of friends may agree to meet for lunch on New Year's Day every year starting from the year 2000. `2000:+000.50:54`
 `2000:+000.50>4`
 `2000:+000.54<4`
We can express a `segment` either as a comma-separated list of items or as a slice.  breaks, duplicates, missing values,   items in time `segments` must be unique and in chronological order, because kb. In contrast, the items consist of items that are . whereas the items in time `series` do not have to be related or even in chronological order. All of the items in a `segments` have to be unique, but a `series` can contain duplicates. 


Items must be Segment  Series  Set
Continuous    Yes      No      No
Ordered       Yes      No      No
Unique        Yes      No      Yes


only difference between a series and a set In fact, the times in a  `series` because they simply list time points separated by commas. There 2 types of `segments`  or one of three types   The first 3 years of the second millennium  contrast, time because they  Time `segments` can be defined using any two of these three values either by `slicing` or `spreading`. For example, a time `segment` that includes the years 2000 and 2001, but not the year 2002, can be written as `2000>2`, `2000:2002`, or `2002<2`.

Unlike the intervals above, above could be written in the form of a `series`: `2000,2001`. the `slice` and `spread` intervals shown above, a `series` can contain discontinuous time points. his are of time from   we cut out a certain portion of `start:stop`, `start>span`, or `stop<span`.


but they could mark the beginning or end of a time interval. There are 3 ways to express intervals in `Decalendar` and `Declock`: we could 
We can turn any date, time, or `datetime` into an interval in one of three ways: `start:stop`, `start>shift`, `stop<shift`. If we were planning take a vacation for 3 days at the beginning of the year 2000, we could express to celebrate the end of the year 1999, we could provide the planned duration of the party in three ways: `start:stop`, `start>shift`, `stop<shift`. `1999+364.9>2+0` on the invitation.
`2000-360` = 360 days have passed in the year

`2000-360>4` = 360 days have passed in the year

`2000-360.250` = 6.25 days left in the year

`2000-007` = 7 days left in the year

`2000-007.500` = 6.5 days left in the year

`2000-007.250` = 6.25 days left in the year

`2000-007.250` = 6.25 days left in the year

Positive `doty` numbers keep track of how much has passed in a year, while negative `doty` numbers keep track of how much time is left in a year.
The date `2000+000` essentially means that 2000 years have passed since `Year 0`, a duration of 2000 years. Typically small amounts of time are durations, while We could say that a meeting will last 4 `cents` or,
««»
### Slices and series

500>040 = 500:540
500<040 = 460:500
50<04 = 46:50
50<4 = 46:50 or 10:50

Each component of a `datetime`, except for the time zone, can be turned into a `slice`, an interval between two points in time. Providing only a `start` value and a `stop` value can be much more succinct than explicitly listing all of the time points in between. For example, the first 4 days of the year in `slice` form would be `:004`. This `slice` can also be written in the form of a `series`, a list of time points: `000,001,002,003`. The `slice` is much shorter than the `series`, but can be harder to understand.

`Slices` that start with the very first value can omit the `start` value, like the `slice` in the example above. Similarly, omitting the `stop` value means that a `slice` goes up to and including the very last value. For example, `360:` includes `Day 360` and all of the days thereafter in a year. The `slice` above could also be written `:010`, which is almost ten times shorter than listing all. is a left-open, right-closed intervals, which means the `start` value is included, but the `stop` value is not. This is why the year 2010 is not included in `2000:2010` example above. It may be useful to not include a `stop` value, which means to go up to and including the last value. For example,

`Slices` in which `start` does not occur before `stop` are empty, meaning that they do not contain any time points. For example, `2000:2000` is a `slice` that does not contain any years. `Series` can also be empty. While an empty `series` can be represent by a single comma (`,`), a single colon (`:`) represents a `slice` that starts at beginning and goes up to and including the end. Without any context, this could mean an infinite slice that contains all of time, but in the context of a date, we  all time points  Unlike `slices`, `series` can include dates  The stop We could also describe The first ten days of the year 2000 would be `2000+000:010`. If a `datetime` has more than 1 `colon`, it represents more than 1 interval. For example, `2000:2003+000:010` is synonymous with `2000+000:010,2001+000:010,2002+000:010` The first singular points in time, but could also represent durations. The date `2000+000` essentially means that 2000 years have passed since `Year 0`, a duration of 2000 years. Typically small amounts of time are durations, while We could say that a meeting will last 4 `cents` or, in other words, 4 percent of the day. If we say `Dot 04` or 4 `cents`, it is unlikely we mean The time between two dates is called a date interval, while the  the time in between two dates  between two times is called an interval. For example, if we plan to meet at noon and spend 4 percent of the day eating lunch together, we could write this time interval as `50:54`. This time interval can be combined with a date like the first day of the year 2000: `2000+000.50:54`. 

### Series

A group of dates, times, or `datetimes` is called a series. The items in a series are separated by commas. If we planned to meet for lunch on the first and last day of the year 2000, we could summarize our lunch plans with a series: `2000+000.5,2000+365.5`. This series tells us when we plan to meet for lunch, but not for how long. A series amount to lunch, we could add time intervals to this series. k was 4 `cents` long there is a pattern to the items in a series, it could be expressed as an interval. is called a time interval. A series an interval is a series of datetimes


### Yearly transition




`Dek 36`


`Dekalendar` treats leap days like outliers or anomalies that should not be included in any sample of days. Every leap days is always a holiday, always a `Fiveday`, and always followed by a `Zeroday`. The end of the year is sensitive time for the



`Dek 0`, the first `dek` of the year, contains `Day 0` through `Day 9`. `Dek 36`, the last `dek` of the year, contains the last days of the current year and the first days of the subsequent year. This means that `Dek 36` overlaps with `Dek 0`. The table below shows the name and numbers of the days in `Dek 0` and `Dek 36`. The table includes columns for both common years (n=365) and leap years (n=366).

<table>
    <tr>
    <th colspan="6">Dek 0</th>
    <th colspan="6">Dek 36</th> </tr>
    <tr>
    <th colspan="3">n=365</th>
    <th colspan="3">n=366</th>
    <th colspan="3">n=365</th>
    <th colspan="3">n=366</th>
    </tr>
    <tr>
    <th>name</th>
    <th>pos</th>
    <th>neg</th>
    <th>name</th>
    <th>pos</th>
    <th>neg</th>
    <th>name</th>
    <th>pos</th>
    <th>neg</th>
    <th>name</th>
    <th>pos</th>
    <th>neg</th>
    </tr>
    <tr>
    <td>Zeroday</td>
    <td>0</td>
    <td>-365</td>
    <td>Zeroday</td>
    <td>0</td>
    <td>-366</td>
    <td>Zeroday</td>
    <td>360</td>
    <td>-5</td>
    <td>Zeroday</td>
    <td>360</td>
    <td>-6</td>
    </tr>
    <tr>
    <td>Oneday</td>
    <td>1</td>
    <td>-364</td>
    <td>Oneday</td>
    <td>1</td>
    <td>-365</td>
    <td>Oneday</td>
    <td>361</td>
    <td>-4</td>
    <td>Oneday</td>
    <td>361</td>
    <td>-5</td>
    </tr>
    <tr>
    <td>Twoday</td>
    <td>2</td>
    <td>-363</td>
    <td>Twoday</td>
    <td>2</td>
    <td>-364</td>
    <td>Twoday</td>
    <td>362</td>
    <td>-3</td>
    <td>Twoday</td>
    <td>362</td>
    <td>-4</td>
    </tr>
    <tr>
    <td>Threeday</td>
    <td>3</td>
    <td>-362</td>
    <td>Threeday</td>
    <td>3</td>
    <td>-363</td>
    <td>Threeday</td>
    <td>363</td>
    <td>-2</td>
    <td>Threeday</td>
    <td>363</td>
    <td>-3</td>
    </tr>
    <tr>
    <td>Fourday</td>
    <td>4</td>
    <td>-361</td>
    <td>Fourday</td>
    <td>4</td>
    <td>-362</td>
    <td>Fourday</td>
    <td>364</td>
    <td>-1</td>
    <td>Fourday</td>
    <td>364</td>
    <td>-2</td>
    </tr>
    <tr>
    <td>Fiveday</td>
    <td>5</td>
    <td>-360</td>
    <td>Fiveday</td>
    <td>5</td>
    <td>-361</td>
    <td>Zeroday</td>
    <td>365</td>
    <td>0</td>
    <td>Fiveday</td>
    <td>365</td>
    <td>-1</td>
    </tr>
    <tr>
    <td>Sixday</td>
    <td>6</td>
    <td>-359</td>
    <td>Sixday</td>
    <td>6</td>
    <td>-360</td>
    <td>Oneday</td>
    <td>366</td>
    <td>1</td>
    <td>Zeroday</td>
    <td>366</td>
    <td>0</td>
    </tr>
    <tr>
    <td>Sevenday</td>
    <td>7</td>
    <td>-358</td>
    <td>Sevenday</td>
    <td>7</td>
    <td>-359</td>
    <td>Twoday</td>
    <td>367</td>
    <td>2</td>
    <td>Oneday</td>
    <td>367</td>
    <td>1</td>
    </tr>
    <tr>
    <td>Eightday</td>
    <td>8</td>
    <td>-357</td>
    <td>Eightday</td>
    <td>8</td>
    <td>-358</td>
    <td>Threeday</td>
    <td>368</td>
    <td>3</td>
    <td>Twoday</td>
    <td>368</td>
    <td>2</td>
    </tr>
    <tr>
    <td>Nineday</td>
    <td>9</td>
    <td>-356</td>
    <td>Nineday</td>
    <td>9</td>
    <td>-357</td>
    <td>Fourday</td>
    <td>369</td>
    <td>4</td>
    <td>Threeday</td>
    <td>369</td>
    <td>3</td>
    </tr>
</table>



`Dek 36` serves as the bridge from the current year to the next. In `Dek 36`, it may be more convenient to use negative day numbers, because while the positive day number counts up to 364 or 365, the negative day number always counts up to -1. After the last day of the year, `Day -1`, the negative day number of the current year naturally transforms into the positive day number of the next year, whereas the positive day number jumps from 364 or 365 to 0. This jump represents a change in the rhythm of the `dekly` schedule because we go from `Fourday` (if n=365) or `Fiveday` (if n=366) to `Zeroday`.

To make it easier to adapt to the new rhythm, New Year's Day (`Day 0`) and Leap Day (`Day 365`), are holidays in the `Decalendar` system. With the New Year's Day and Leap Day holidays, there are 110 days off in common years and 111 days off in leap years, because every `Fourday`, `Eightday`, and `Nineday` is also a restday. Resting on `Fourday` helps to smooth the transition between years, because the last `Fourday` of the year (`Day 364`) combines with New Year's Day and Leap Day to form a buffer of restdays (2 if n=365 or 3 if n=366) around the time the year is changing.

`Decalendar` focuses on New Year's Day and Leap Day, but other holidays can be tracked using. The positive day number of New Year's Day (0) never changes, but its negative day number is -365 in common years and -366 in leap years. A similar shift occurs in leap years to Gregorian calender dates that occur before `Day 59`, the Gregorian calendar leap day. For example, Valentine's Day is always `Day 44`, but it is also `Day -321` in common years or `Day -322` in leap years. Conversely, the positive day numbers of Gregorian calendar that occur after `Day 59` increment by 1 in leap years, but their negative day numbers are unaffected. Essentially, the Gregorian calendar leap day throws `Decalendar` day numbers out of alignment with Gregorian calendar dates.

Holidays with fixed dates in the Gregorian calendar dates can have a fixed `Decalendar` date, but the Gregorian calendar leap day a 1-day shift. often requires using a negative day number date to avoid a 1-day shift during leap years. To consistently define Gregorian calendar dates with `Decalendar` day numbers, we should use positive day numbers before and negative day numbers thereafter.

The negative day number of the last day of the year (-1) is always the same, but its positive day number increments during leap years (364 if n=365 or 365 if n=366). 

but eventually the way the dates of these holidays are defined should be changed to fit better in `Decalendar`. It will not be possible to have fixed dates for holidays that are not based on the Gregorian calendar, such as Chinese New Year or Hanukkah, will never have fixed dates vary from year to year. can include many other holidays can be easily defined by the day of the to translate other holidays into  provide an example of how can handle other holidays, the table below translates the federal holidays in the United States of America into `.y` or `.w` format dates. The holidays in `.w` format  vary from year to year


 Holidays with dates that vary from year to year. June 19 and July 4 are federal holidays. It is an funny coincidence that in common years June 19 falls on a `Nineday` and July 4th falls on  `Day 169` and `Day 184` (if n=365) or `Day 170` and `Day 185` (if n=366), respectively. 
 Nevertheless, `Decalendar` highlights a few special moments in a year:

* `012.34578`: Small series day
* `111.11111`: Singles day
* `123.45789`: Medium series day
* `183.50000`: Dyad Day (leap years only)
* `222.22222`: Couples day
* `234.57890`: Big series day
* `314.15926`: Pi day
* `333.33333`: Triples day

`Deks` can divided up into 2 halves called the `prot` and the `deut`. The `prot` has 4 workdays and 1 restday, while the `deut` has 3 workdays and 2 restdays. The 4 workdays in the `prot` are called the `tet`, while the 3 workdays in the `deut` are called the `trep`. The inspiration for the word `tet`, table below lists the positive and negative day numbers for the b`dekly` schedule provides of remembering a month and a day of month, we could just  the `.y` format, the `dek` number is the first two of the day number. the `.w` week number can be approximated by dividing the `.y` day number by 7. month can be approximate third of a month or about a week and a half. `Deks` are  The day number in the `.y` format could replace  Instead, the would provides all of the information we need.

## Implementation

The timestamp formats described above should be easy to implement in any high-level programming language, but the implementation examples below will focus on JavaScript and Python. JavaScript is the language of the web, while Python is a versatile language with strong builtin support for dates and times in its standard library. To implement the 

The three formats shown above are essentially zero-based versions of [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Ordinal_dates) international standard date formats. `Decalendar` also permits the use of other timestamp format which is based on fractional years. The timestamp in Mexico City from the table above would be `1999.99863` in fractional years. The interpretation of this number could be that the year 1999 is 99.863% complete. The last digit in the fractional year format centimilliyears which are roughly 5 minutes longs, but the exact duration varies slightly between common years and leap years.

The format above is 
To achieve is ultimate goal of replacing the Gregorian calendar, `Decalendar` will have to replace monthly and weekly schedules with the `dekly` schedule described above. To provide a Months and weeks are deeply entrenched in daily life. format can described as a zero-indexed version of the 's [ordinal date format](https://en.wikipedia.org/wiki/ISO_8601#Ordinal_dates). Zero-indexing allows `Decalendar` to organize every day of the year into groups of 10 days deks.  day of the year from 0 to 9.  the last digit of the day number ISO 8601 also offers The ultimate goal of `Decalendar` is to have its ordinal date format replace all other formats. months and weeks should be replaced by groups  of is to replace the Gregorian calendar. This goal will require switching  months and weeks with `deks`. Until this goal is fully realized, `Decalendar` dates will not provide sufficient information on its own. supplement with a date format based on months and weeks. It is easiest to discuss these three formats in terms of the ISO 8601 international standard. The main  monthly, weekly, and daily date format The monthly date format consists of a 1-digit Base12 month of the year and a 2-digit day of the month, while the weekly format has a 2-digit week of the year and a 1-digit day of the week number. In contrast, the main `Decalendar` date format only has a 3-digit day of the year. These three formats are essentially zero-indexed versions of the ISO 8601 date format. The main `Decalendar` date format is essentially a zero-indexed version of the ISO 8601 ordinal date format.

zero-indexed version of the ISO calendar dates and week dates The `Decalendar` week-based format starts from `Week 0` on the first day of the year and adds one to the week number every Sunday. The first two digits of of the week-based format shows the week number while the last digit shows the weekday number. The table below shows the meaning of the weekday numbers:

These dates tell us that Mexico City and Tokyo have different times, time zones, and days, but both are in the `Year 2000` and in `Dek 0`, the first 10 days of the year. One day earlier, when its date was `1999+364.500-3`, Mexico City was in `Year 1999` and in `Dek 36`.

### `Deks`

The `dek` number is typically just the first two digits of the day number, but `Dek 36` of leap years includes 4 days from the subsequent year and `Dek 36` of common years is evenly split between years! In the example above, both Tokyo and Mexico were in `Dek 36`, even when they were in separate years. Saying `Dek 36` implies that we want to include days from both the current year and the next. If it is not our intention to combine days across years, we should instead say `Dek -1`. Just like `Day -1`, `Dek -1` retains the same meaning across common years and leap year, it is always the last 10 days of the year and only contains days from a single year.

Negative numbers are useful towards the end of the year, but may be confusing at the beginning. For this reason, the days in each `dek` are named after the last digit of their positive number, not their negative number. The table below shows the names and numbers of the days in `Dek 0` and `Dek 36` in both common years (n=365) and leap years (n=366).

<table>
    <tr>
    <th></th>
    <th colspan="4">Dek 0</th>
    <th colspan="4">Dek -1</th>
    <th colspan="4">Dek 36</th>
    </tr>
    <tr>
    <th></th>
    <th colspan="2">n=365</th>
    <th colspan="2">n=366</th>
    <th colspan="2">n=365</th>
    <th colspan="2">n=366</th>
    <th colspan="2">n=365</th>
    <th colspan="2">n=366</th>
    </tr>
    <tr>
    <th>Name</th>
    <th>pos</th>
    <th>neg</th>
    <th>pos</th>
    <th>neg</th>
    <th>pos</th>
    <th>neg</th>
    <th>pos</th>
    <th>neg</th>
    <th>pos</th>
    <th>neg</th>
    <th>pos</th>
    <th>neg</th>
    </tr>
    <tr>
    <td>Zeroday</td>
    <td>0</td>
    <td>-365</td>
    <td>0</td>
    <td>-366</td>
    <td>355</td>
    <td>-10</td>
    <td>356</td>
    <td>-10</td>
    <td>360</td>
    <td>-5</td>
    <td>360</td>
    <td>-6</td>
    </tr>
    <tr>
    <td>Oneday</td>
    <td>1</td>
    <td>-364</td>
    <td>1</td>
    <td>-365</td>
    <td>356</td>
    <td>-9</td>
    <td>357</td>
    <td>-9</td>
    <td>361</td>
    <td>-4</td>
    <td>361</td>
    <td>-5</td>
    </tr>
    <tr>
    <td>Twoday</td>
    <td>2</td>
    <td>-363</td>
    <td>2</td>
    <td>-364</td>
    <td>357</td>
    <td>-8</td>
    <td>358</td>
    <td>-8</td>
    <td>362</td>
    <td>-3</td>
    <td>362</td>
    <td>-4</td>
    </tr>
    <tr>
    <td>Threeday</td>
    <td>3</td>
    <td>-362</td>
    <td>3</td>
    <td>-363</td>
    <td>358</td>
    <td>-7</td>
    <td>359</td>
    <td>-7</td>
    <td>363</td>
    <td>-2</td>
    <td>363</td>
    <td>-3</td>
    </tr>
    <tr>
    <td>Fourday</td>
    <td>4</td>
    <td>-361</td>
    <td>4</td>
    <td>-362</td>
    <td>359</td>
    <td>-6</td>
    <td>360</td>
    <td>-6</td>
    <td>364</td>
    <td>-1</td>
    <td>364</td>
    <td>-2</td>
    </tr>
    <tr>
    <td>Fiveday</td>
    <td>5</td>
    <td>-360</td>
    <td>5</td>
    <td>-361</td>
    <td>360</td>
    <td>-5</td>
    <td>361</td>
    <td>-5</td>
    <td>365</td>
    <td>0</td>
    <td>365</td>
    <td>-1</td>
    </tr>
    <tr>
    <td>Sixday</td>
    <td>6</td>
    <td>-359</td>
    <td>6</td>
    <td>-360</td>
    <td>361</td>
    <td>-4</td>
    <td>362</td>
    <td>-4</td>
    <td>366</td>
    <td>1</td>
    <td>366</td>
    <td>0</td>
    </tr>
    <tr>
    <td>Sevenday</td>
    <td>7</td>
    <td>-358</td>
    <td>7</td>
    <td>-359</td>
    <td>362</td>
    <td>-3</td>
    <td>363</td>
    <td>-3</td>
    <td>367</td>
    <td>2</td>
    <td>367</td>
    <td>1</td>
    </tr>
    <tr>
    <td>Eightday</td>
    <td>8</td>
    <td>-357</td>
    <td>8</td>
    <td>-358</td>
    <td>363</td>
    <td>-2</td>
    <td>364</td>
    <td>-2</td>
    <td>368</td>
    <td>3</td>
    <td>368</td>
    <td>2</td>
    </tr>
    <tr>
    <td>Nineday</td>
    <td>9</td>
    <td>-356</td>
    <td>9</td>
    <td>-357</td>
    <td>364</td>
    <td>-1</td>
    <td>365</td>
    <td>-1</td>
    <td>369</td>
    <td>4</td>
    <td>369</td>
    <td>3</td>
    </tr>
</table>

The days in the bottom right of the table do not belong to the current year. To prevent mixing days from different years, we should follow some common sense on the limits of `dek` and day numbers:

In any given year,
- positive `dek` numbers start at $0$ and go up to $35$,
- negative `dek` numbers start at $-1$ and go up to $-36$,
- positive day numbers start at $0$ and go up to $n-1$
- negative day numbers start at $-1$ and go up to $-n$,
where $n$ is the number of days in the year.

The negative day numbers can tell us if we have crossed over into another year. If the negative number stops being negative, we have gone past the end of the current year. Negative day numbers are useful when we are converting dates to and from the Gregorian calendar. The additional day in leap years throws `Decalendar` day indexes out of alignment with Gregorian calendar dates. December 25th is `Day 358` in non-leap years and `Day 359` in leap years. To consistently define Gregorian calendar dates with `Decalendar` day numbers, we should use positive day numbers before `Day 59` and negative day numbers thereafter. December 25th is always `Day -7`, both in leap years and in common years.

December 25th always falls on an `Eightday` or a `Nineday`. These two days are called the `dekend` and serve as a break from work and school. To avoid 8 consecutive days of work or study, `Decalendar` defines `Fourday` as an additional day off. Resting on `Fourday`
a. creates the shortest possible sequences of consecutive workdays,
b. combines work and restdays into convenient groups of 5 days, and
c. yields a smooth transition between years.
a) The 4 consecutive workdays before `Fourday` are called called the `tet`, while the 3 consecutive workdays before the `dekend` are called the `trep`. Together with the `Fourday`, these two sequences of workdays are known as the `okt`.
b) The `tet` and `Fourday` form the first half of the `dek`, which is called the `prot`. The second half, which consists of the `trep` and the `dekend`, is called the `deut`. A general term for `prots` and `deuts` is `pent`.
c)



The week number and weekday number can be written by themselves. `+00+0` means the Sunday that starts the week that includes the 1st day of the year. This date is before the first day of the year unless the year starts on a Sunday. This means that the week number always starts from "0" or "-53", while the weekday number will only be "0" or "-7" if the first day of the year is a Sunday. If we do not include a year in the week date, we can drop the first delimiter, because the second delimiter should be sufficient, but if we include the year, both delimiters are required. `00+0` and `53-6` should be written `2000+00+1` and `2000-53-6` when combined with the year 2000.

### Months

`Decalendar` also has a date format for Gregorian calendar dates. To match the other formats, the month and day-of-the-month counts start at 0 and to save space, the month is duodecimal (Base12) encoded. This changes may be confusing 



If the year is already known, we






Both of the `Decalendar` date formats can be combined with a `Declock` time.

While each of the two `Decalendar` date formats can identify any date on their own, they are so different that they can be shown together without appearing redundant. Even when shown together, the two formats are easy to distinguish, because the weekly format has one digit fewer:

weekly first day of the first week of the year 2000 would be 2000+0+0 This format is easy to distinguish from the main `Decalendar` date format, because it combines a single-digit Base53 week number and a single-digit weekday number.

Week counts start on the Sunday before January 1st.

The week numbers range from 0 to "q" or -1 to -p, while the weekday numbers range from 0 to 6 or -1 to -7. 
To support tracking of groups of 7 days, instead of 10 days, Decalendar includes a supplemental format that combines a week number and . To be clear, the main Calendar unit  The week number is `Base53` encoded so that all of the weeks in a year can fit in a single digit. A year can have 52 or 53 weeks, because of the need to insert a leap week. The 


it easier to track weeks, addition to `Deks`, Decalendar has Day numbers are very useful for tracking `Deks` and `Declock` are systems built on powers of ten.

To identify a particular week in a year or a particular day in a week, Decalendar uses a different.  dates we want to track differ from year. such as Thanksgiving, which is celebrated on the fourth Thursday in November. The Base28 day counter starts from ISO week year and thus and thus it only lines up with the Base10 day counter when the first day of the year is a Monday. The ISO week date of Thanksgiving is always W47-4.  Start counting Base28 days from the start of the ISO Week Year. Convert ISO week dates It is difficult to to translate into the are easy to translate into  December 25th  days in a `dek` will not have much meaning for us

// If first Thursday is before January 4, Thanksgiving is in W48, not W47
// Need to find first Monday after January 4 and start the counter one week earlier


### Okts


Day indexes can be Base28 encoded to make it easier to track groups of 7, 14, or 28-days.

Towards the initial goal of peaceful co-existence, Declock describes methods for converting to and from standard time, while Decalendar includes methods for keeping track of Gregorian calendar weekdays and dates. Nevertheless,  7-day weeks are  does not fit naturally in a decimal calendar system based. translating dates into 




misunderstandings
When we look at `Dek 36`, we can see that the negative turn into positive numbers, while the positive numbers continue past the end of the year.

The days in 
We can use the terms described above to combine `Decalendar` dates and `Declock` times when speaking. For example, we could say "`Dek 0 Day 0 Dot 500`" or simply "`Day 0 Dot 500`" to mean the first day of the year (`000.500`).

## Day indexes

Each Decalendar day has a positive and a negative index. Negative indexes provide functionality that is discussed later, but for now, we will focus on positive indexes, but . we would refer to a day simply with its 3 digit `doy`. For example, New Year's Day is `000`. When speaking, we identify a given day by its `dekday` name and `dek` index. A `dek`

The Decalendar days are named after the last digit of their `doy`:

- 0: `Zeroday`
- 1: `Oneday`
- 2: `Twoday`
- 3: `Threeday`
- 4: `Fourday`
- 5: `Fiveday`
- 6: `Sixday`
- 7: `Sevenday`
- 8: `Eightday`
- 9: `Nineday`

This approach naturally puts days together in groups of 10. Each 10-day group is called a `dek`. The last digit of a `doy` is the `dekday` number, while the first two digits are the `dek` index.

If we want to show a preceeding year, We also use this approach to read full Decalendar dates. For example, the first day of the year 2000 is `Year 2000 Zeroday 0` reading full Decalendar dates.

consist of a 4-digit year and a 3-digit doy separated by a plus sign: `year+doy`.

The main Decalendar date format . For example, the first day of the year 2000 is `2000+000`.

The separator indicates whether the doy is positive (`+doy`) and negative (`-doy`).

In any given year,
- positive doys start at $0$ and go up to $n-1$
- negative doys start at $-n$ and go up to $-1$,
where $n$ is the number of days in the year.

Last digits day has a positive doy and a negative doy. Each day is organized in groups of 10

The last digits of the positive and negative doys follow a pattern that differs by one day in common years (n=365) and leap years (n=365):

| n=365  | n=366  |
| ------ | ------ |
| 0   -5 | 0   -6 |
| 1   -4 | 1   -5 |
| 2   -3 | 2   -4 |
| 3   -2 | 3   -3 |
| 4   -1 | 4   -2 |
| 5  -10 | 5   -1 |
| 6   -9 | 6  -10 |
| 7   -8 | 7   -9 |
| 8   -7 | 8   -8 |
| 9   -6 | 9   -7 |

The last digit of the doy is the index of that day in groups of 10
Based on the table above,  This pattern determines the 


The last digit of the doy is called the dekday. Deks are groups of 10 days that can 
- 0

Dekdays 4, 8, and 9 are restdays.


A core aspect of Decalendar organizes days into groups of 10. Each 10-day group is called a dek. The first two digits of the doy index is the dek index. The last digit of the doy index is the dekday, the ordinal number of the day in the dek.

### Date formats

Decalendar dates are composed of only a year and day index. The day index can be in any of four different, but equivalent formats:
- Base10 positive (B10+)
- Base10 negative (B10-)
- Base28 positive (B28+)
- Base28 negative (B28-)

Positive indexes show the number of days that have passed in the year since Day 0, while negative indexes count down the number of days remaining in the year.


On New Year's Day, the positive indexes are all 0, while the negative indexes show the total days in the year (n). Leap years (like the year 2000) have 366 days while all other years have 365 days. On New Year's Eve, the positive day indexes display the number of days in the year minus one (n-1), while the negative day index is -1.

On Day 183 of leap years, the negative day indexes are the same as the positive day indexes. For this reason, Day 183 is a special Mid-Year's Day holiday called Dyad Day.

Using a Base10 day index, it is easy to track events that repeat on a yearly basis, like Dyad Day, or events with daily frequencies of 5 or 10. For events that occur at frequencies that are not divisible by 5, the Base28 day index can be helpful.

Events that occur every 28 days will end in the same second character in the Base28 day index. For example, if an event starts on Day 2 and occurs on every 28th day, its Base28 day index will always end in a two (e.g. 02, 12, 22, 32, etc.).

If an event does not occur with a frequency of 28 days, the Base28 may still be helpful. For example, to track events that happen every 7 days, we can organize a single Base28 digit (list that contains every number 0-9 and capital letters A-R) in the form of a 4 by 7 matrix:

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| 7 | 8 | 9 | A | B | C | D |
| E | F | G | H | I | J | K |
| L | M | N | O | P | Q | R |



In the table above, events that take place every 7 days will stay in the same column throughout the year. The order of the columns changes from year to year, but the contents of the columns do not, meaning we always have the same 7 strings: `07EL`, `18FM`, `29GN`, `3AHO`, `4BIP`, `5CJQ`, `6DKR`. This is too many strings to remember. In the next year, we could continue the same approach after shifting to the left by one column in a non-leap year or two columns in a leap year. For example, if we wanted to track Sundays in the ISO system, we could memorize the 


Using a similar approach, we could create a 2 x 14 matrix and see that events which occur every 14 days would alternate between two Base28 characters:

|   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| - | - | - | - | - | - | - | - | - | - | - | - | - | - |
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D |
| E | F | G | H | I | J | K | L | M | N | O | P | Q | R |

Base28 dates work so well that we may be tempted to create new indexes based on different numbers. For example, we could imagine a single-digit index that would reset every 6, 7, 8, or 9 days. This would not add much value, because Decalendar describes a method of using the last digit of the Base10 index to [count small numbers of days](). Similarly, a new double-digit day indexes, for example Base36, would not be a good addition to Decalendar, because it would be hard to distinguish two different double-digit day index.

If we wanted both Base28 and Base10 indexes displayed at the same time, instead of switching between the formats as needed, we could use a hybrid B28+B10+ or B28-B10- format.

New Year Day's (NYD), Mid-Year's Day (MYD), and New Year's Eve (NYE)

|  Format  | New Year Day's | Mid-Year's Day  | New Year's Eve |
| -------- | -------------  | -------------   | -------------- |
| B28+B10+ |  2000+00+000   |  2000+53+183    |  2000+D1+365   |
| B28-B10- |  2000-D2-366   |  2000-53-183    |  2000-01-001   |


These hybrid formats shown above are not official Decalendar formats, because they are redundant (provide more information than is necessary to pinpoint a day in time). On the other hand, displaying hybrid formats may be a good way to practice reading Base28 day indexes.

### Time formats

Declock times, like Decalendar day indexes, can be positive or negative. Positive times show how much time has passed since midnight, while negative indexes count down the time remaining in the day. For example, noon can be written as either a positive `+50` or negative number `-50`. These numbers mean that 50 percent of the day has passed and 50 percent is left.

Unlike a percent, Declock times do change in precision, and not magnitude, when there are more digits in a number. For example, noon could also be written as `+5` or number `-5`.
Using only a single digit for time indicates that we are providing a ballpark estimate of time. More specifically, a single digit indicates a tolerance for error of up to 5% of the day.
Each digit provided in the time has a specific name. The three least precise terms are
- 10<sup>-1</sup>-day `dimes` (decidays),
- 10<sup>-2</sup>-day `cents` (centidays), and
- 10<sup>-3</sup>-day `mils` (millidays),

In the table below, we can see how the three least precise units look at different times of the day. An added benefit of the table below is that we can see how positive and negative times complement each other.

| Latin Name   | Frac  | Value  | Dime+ | Dime-  | Cent+  | Cent-  | Mil+   | Mil-   |
| ------------ | ----- | ------ | ----- | ------ | ------ | ------ | ------ | ------ |
| Semuncia     | 1/24  | 0.0416̅ | +0    | -9     | +04    | -96    | +042   | -958   |
| Uncia        | 1/12  | 0.083̅  | +1    | -9     | +08    | -92    | +083   | -917   |
| Sescuncia    | 1/8   | 0.125  | +1    | -9     | +13    | -97    | +125   | -875   |
| Sextans      | 1/6   | 0.16̅   | +2    | -8     | +17    | -83    | +167   | -833   |
| Quadrans     | 1/4   | 0.25   | +3    | -7     | +25    | -75    | +250   | -750   |
| Semseptunx   | 7/24  | 0.2916̅ | +3    | -7     | +29    | -71    | +292   | -708   |
| Triens       | 1/3   | 0.3̅    | +3    | -7     | +33    | -67    | +333   | -667   |
| Sescquadrans | 3/8   | 0.375  | +4    | -6     | +38    | -62    | +375   | -625   |
| Quincunx     | 5/12  | 0.416̅  | +4    | -6     | +42    | -58    | +417   | -583   |
| Semdeunx     | 11/24 | 0.4583̅ | +5    | -5     | +46    | -54    | +458   | -542   |
| Semis        | 1/2   | 0.5    | +5    | -5     | +50    | -50    | +500   | -500   |
| Septunx      | 7/12  | 0.583̅  | +6    | -4     | +58    | -42    | +583   | -417   |
| Sescquincunx | 5/8   | 0.625  | +6    | -4     | +63    | -37    | +625   | -375   |
| Bes          | 2/3   | 0.6̅    | +7    | -3     | +67    | -33    | +667   | -333   |
| Dodrans      | 3/4   | 0.75   | +8    | -2     | +75    | -25    | +750   | -250   |
| Dextans      | 5/6   | 0.83̅   | +8    | -2     | +83    | -17    | +833   | -167   |
| Sescseptunx  | 7/8   | 0.875  | +9    | -1     | +88    | -12    | +875   | -125   |
| Deunx        | 11/12 | 0.916̅  | +9    | -1     | +92    | -08    | +917   | -083   |

The table above shows various levels of time precision. Declock uses mils as its main time unit, because mils are precise enough for daily use without being too long to read comfortably. Units more precise than mils (such as beats) are not really suitable for watches and clocks, but can work well for stopwatches and timers.

Using a single number to specify a time can be very convenient but can also be very imprecise. The first three negative single digit times are all the same in the table above. The meaning of `-9` could therefore be interpreted as sometime after midnight before an eighth (⅛, ¹/₈) of the day has passed. Single-digit times could be useful for situations that prioritize brevity. For example, if we want to include a date and time in a smartphone application and have very limited space.

### Combined formats

A Declock time preceded by a Decalendar date is called a datetime. The 5th time from the table above (quadrans) on the first day of the year 2000 could be written 4 different but equivalent ways:

| Format | New Year Day's | Mid-Year's Day | New Year's Eve |
| -----  | -------------  | -------------  | -------------- |
| B10+   | 2000+000.250   | 2000+183.250   | 2000+365.250   |
| B10-   | 2000-366.750   | 2000-183.750   | 2000-001.750   |
| B28+   | 2000+00.250    | 2000+53.250    | 2000+D1.250    |
| B28-   | 2000-D2.750    | 2000-53.750    | 2000-01.750    |

If the year is dropped from the datetimes above, the resulting yearless datetime is called a day-of-year-time (doyt):

| Format | New Year Day's | Mid-Year's Day | New Year's Eve |
| -----  | -------------  | -------------  | -------------- |
| B10+   | +000.250       | +183.250       | +365.250       |
| B10-   | -366.750       | -183.750       | -001.750       |
| B28+   | +00.250        | +53.250        | +D1.250        |
| B28-   | -D2.750        | -53.750        | -01.750        |

Doyts may be useful to indicate the same time across multiple years, save space or to simply to avoid repetition if the year is also evident.

The examples above show how times are really just fractional days. The connection between day indexes and times is symbolized by the use of the decimal point as the delimiter when day indexes and time are combined. A decimal point is also used to combined times with Base28 day indexes, even though times are always Base10 and never in Base28.

To avoid confusion, it is important that Base10 day indexes are always 3-digits long and Base28 are always 2-digits long. This strict rule is in contrast to the flexibility of times, which can have any number of digits depending on the desired level of precision.

While mils should be sufficiently precise for most timekeeping tasks, Declock decimal times can support any level of precision. For example, two additional digits can be added at the end of a decimal time to show beats. Units smaller than beats can be derived using metric prefixes and may be useful for scientific and technical purposes:

- D: 10<sup>-1</sup>-day dimes (decidays)
- C: 10<sup>-2</sup>-day cents (centidays)
- M: 10<sup>-3</sup>-day mils (millidays)
- B: 10<sup>-4</sup>-day bars (decimillidays)
- b: 10<sup>-5</sup>-day beats (centimillidays)
- d: 10<sup>-6</sup>-day mics (microdays)
- c: 10<sup>-7</sup>-day cebs (centibeats)
- m: 10<sup>-8</sup>-day mibs (millibeats)
- N: 10<sup>-9</sup>-day nans (nanodays)
- U: 10<sup>-10</sup>-day mars (microbars)
- u: 10<sup>-11</sup>-day mics (microbeats)
- P: 10<sup>-12</sup>-day pics (picodays)


If the level of time precision needs to written the single letter codes listed above may be useful. Even smaller units are possible (e.g. picobeats, femtodays, etc.), but such extremely small time units only going to be useful in very niche contexts.

### Reading dates

It should be possible to derive all of the above units simply looking at a Declock time, because each unit is simply a name each digit. Visually parsing Decalendar dates works in a similar fashion. The Base10 day indexes in the table below can provide us with information on Decalendar units called deks. Each dek has 10 days that are numbered 0-9. consists of two 5-day pents.

| Format | New Year Day's | Mid-Year's Day | New Year's Eve |
| -----  | -------------  | -------------  | -------------- |
| B10+   | 2000+000       | 2000+183       | 2000+365.250   |
| B10-   | 2000-366       | 2000-183       | 2000-001.750   |

Okts have too many days to be useful 

### Obtaining Decimal Calendar Unit Indexes

Similar to reading the time units directly from a decimal time, it is possible to look at a day index and describe the dek and pent to which it belongs. The first 2 digits of the positive day index tell us the current dek. For example, the midyear point is always in Dek 18, either at noon on Day 182 in non-leap years or midnight between Day 182 and Day 183 in leap years. To obtain the pent number, double the first two digits of the day index and then add 1 if the last digit is greater than 4. For example, the midyear point occurs in pent 36.

Calculating negative dek and pent indexes works a little differently. If the last digit in the negative index ends in zero, the negative first two digits are the dek index, otherwise subtract one from the negative first two digits to obtain the dek index. To calculate the negative pent index, multiply the negative dek index by 2 and then subtract 1 if the last digit is 1-5.

A more programmatic way to obtain these indexes is to floor divide the day index by 5 and 10 to get the pent and dek index, respectively. [Floor division](https://en.wikipedia.org/wiki/Division_(mathematics)#Of_integers), also called integer division, is the same as regular division except any remainder is discarded. The general equation for the obtaining calendar unit indexes is $\lfloor x \div y \rfloor$, where `x` is the day-of-year index and `y` is the length of the calendar unit:
- 5 for pents,
- 10 for deks,
- 28 for okts, and
- 73 for quints.

These index calculations work for all Decalendar dates but positive indexes at the very end of the year and negative indexes at the very beginning of the year can mix days from different years. The rules below prevent cross-contamination of days across different years:
- Dek indexes range between -36 and 35; exceeding these ranges results in deks that include 4 days from an adjacent year if the current year is a leap year or 5 from an adjacent year if the current year is not a leap year.
- Pent indexes range between -73 and 72; exceeding these ranges results in pents that are synonymous with pents from adjacent years if the current year is not a leap year and pents that include 4 days from an adjacent year if the current year is a leap year.

Following these rules means that
- the first 5 days in non-leap years and the first 6 days in leap years do not have a negative dek index
- the last 5 days in non-leap years and the last 6 days in leap years do not have a positive dek index
- the first day in leap years do not have a negative pent index
- the last day in leap years do not have a positive pent index

## Dekdays

The motivation for tracking pent and dek indices is that the 


## Holidays

Dekends and Mideks versus Weekends




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



Decalendar dates are inspired by the . Unlike DOYs in ISO 8601 ordinal dates, Decalendar DOYs are zero-indexed. Therefore, the range of possible Decalender DOY values is 000 to 365, instead of 001 to 366. This is the only difference between Decalendar dates and ISO 8601 ordinal dates. The rules that govern the [year number](https://en.wikipedia.org/wiki/ISO_8601#Years) (1 BC/BCE is Year 0) and [leap years](https://en.wikipedia.org/wiki/Leap_year#Gregorian_calendar) (once every 4 years, on years divisible by 4) are the same.

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

while time zones do not have to be  The other units can serve as reasonably close equivalents to standard time units:


- 1 cent = 0.96 quarter-hours
- 1 beat = 0.864 seconds

The times above are in centiday units, which are roughly equivalent to a quarter-hour, and can serve as a For everyday timekeeping tasks, a 3-digit millidays or 5-digit centimillidays are displayed.

At midday (the time at which 1/2 of the day has passed), the positive and negative times are the same.

```
+500
-500
```

All of these units have positive and negative indexes with set ranges.

## Decimal Dates

The two main Decalendar date formats are `yyyy+ddd` and `yyyy-ddd`, in which the four-digit year is followed by a positive or negative three-digit day-of-year (DOY) index. Each day in a year can be described by both a positive and a negative index.

The first day of every year has a positive index of 0 and a negative index of either -365 or -366. For example, the first day of the third millennium can be written `2000+000` or `2000-366`.

While positive indexes start at zero, while negative indexes start at -1.  For example, `1977-001` and `1977+364` are both acceptable ways to express the birthday of Korean pop star Psy, who was born on the last day of 1977.

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

All of these units have positive and negative indexes with set ranges.

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

### Introduction to hexatrigesimal and quadrasexagesimal

The counting by thirties approach described directly above can be modified to work for heks and quints, but Decalendar includes a hexatrigesimal day index to aid with counting and indexing heks and quints.

Hexatrigesimal (base36) is an encoding that includes all ten single-digit numbers and all 26 uppercase letters in the English alphabet. Every 36 days the first character of the base36 day index increments. The base36 day index is often provided along with a quadrasexagesimal (base64) year in a format called `64-36`. For example, the first day of year 2000 in the `64-36` format is `VG+00` or `VG-A6`, while the last day of that year is `VG+A5` or `VG-01`.

The `64-36` date format can be combined with a base64 time in a format called `64-36-b64`. For example, quarterday on the first day of 2000 would `VG+00.66e` or `VG-A6.IJu`. These formats are very compact and base64 time has a particular use in the Declock system, but for now we will focus on how to use base36 to determine the indexes of heks and quints.

### Hexatrigesimal date calculations

#### Obtaining hek indexes

The first character of the base36 day index is the hek index. The only caveat to this rule is that after Day 359, the base36 day index will start with an A, and the range of hek indexes to be 0-9. If we allowed for the existence of a Hek A, 30 or 31 out of its 36 days would be from the subsequent year. For this reason, days after Day 359 have a negative hek index, but not have a positive hek index. Negative hek indexes range from -1 to -10. Hek -10 ends before the first 5 days of non-leap year and before the first 6 days of leap years.

#### Obtaining Quint Indexes

The base36 day indexes of quints follow a clear pattern that is apparent when we list the Quint indexes alongside their base36 day index ranges:
- 0: 00-20
- 1: 21-41
- 2: 42-62
- 3: 63-83
- 4: 83-A4

To obtain the base36 day index ranges above we plug the quint index as `q` into the equations below:
- the first day is `20 * q + q`, and
- the last day is `20 + 20 * q + q`.

The result of this last equation for Quint 4 is 104, which we translate into A4. Leap days have a base36 index of A5. If leap days started a new quint, 72 out of 73 of its days would be in the subsequent year. For this reason, Quint indexes should only range from 0 to 4. Leap days do not have a positive Quint index, but are included in Quint -1. Conversely, the first day of leap years is not included in Quint -5. In non-leap years, all days have both a positive and negative quint index.

### Quadrasexagesimal Time Calculations

The [Introduction to hexatrigesimal and quadrasexagesimal]() section above showed a format called `64-36-b64` that combines a base64 year, a base36 day index, and a base64 time. To explain the quadrasexagesimal time, we will use the following analogy.

Imagine you’re a DJ playing a 58.9824-minute-long music set. Your setlist has 64 hit songs in it, each hit is 55.296 seconds long and has 64 beats. The entire set has 4096 beats and the tempo remains constant throughout the set at 69.4̅ (69⁴/₉ or 625/9) beats per minute.

Your first performance goes so well that you are asked to repeat your set in a loop enough times to fill an entire day with music! Playing at the same tempo as before, our daylong performance will have 100,000 beats and 1562.5 hits. We can fit all 100,000 of those beats into 3 digits if we use base64. The first digit tells us what set we are on, the second digit is the hit, and the last digit is beat.

Over the course of the day it is unlikely that anyone in the audience would notice that each song is 4.704 seconds less than a minute or that the entire set is 1.0176 minutes less than an hour. To bring this analogy back to the real world, we can use 64-beat hits instead of minutes and 4096-beat sets instead of hours only be off by less than 5 seconds per minute and about a minute per hour. Unlike minutes and hours, hits and sets are based on beats and thus work within the Declock system.

The 

- 5-day pents (pentaday),
- 10-day deks (decaday), and
- 28-day okts (icosioctaday).

For example, in the Mid-Year's Day column in table below, Base28 indexes tells that we are on Oktday 3 of Okt 5, while the Base10 index contains similar information for deks and pents.

2024-01-01
    +001.25
    -536.75
    +000.375
    -366.625
        +5
        -5
        +625
        -375
        +75
        -25

The `Day 366` is actually `Day 0` (if n=365) or `Day 1` (if n=366) of the following year. 


The months in which the last digits are identical (February in any year, June and July in common years, and April and May in leap years) can serve as testing periods for the `dekly` schedule. During such a test, participants would still use the Gregorian calendar, but they would work and rest according to the last digit of the day of the month. The first day of such tests ("day zero") could be January 31 for a 29-day test in any year, March 31 for a 62-day test in a leap year or May 31 for a 62-day test in a common year. Testing could be an important step before widespread adoption.

Any part of a `slice` can be a fractional day, including the `step`. Every other tenth of the day (⅒ or .1 or 10%) starting from noon and is represented by the `slice` `.5:1:.2`, which is equivalent to the `series` `.5,.7,.9`. The steps in a `seq` are taken in a cycle; after the last step we go back to the first step. The `seq` `.5::.2,.2,9.6` includes the times `.5,.7,.9` of every `Zeroday`. In its first cycle, this `seq` goes from `Day 0 Dot 5` to `Day 0 Dot 7` to `Day 0 Dot 9` with steps of .2 and then to `Day 10 Dot 5` with a step of 9.6.

Building on the `stepped slice` above, we can  can be used for times, they are especially useful for creating series of days. The 


