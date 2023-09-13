 `Decalendar` and `Declock`

## Summary {#sec-summary}

`Decalendar` is a calendar system that aims to first peacefully co-exist with, but then ultimately replace the [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar). Similarly, `Declock` is a timekeeping system designed to replace [standard time](https://en.wikipedia.org/wiki/Standard_time). Both system use days as their base unit and derive other units from days using prefixes inspired by the metric system. To create the necessary calendar and time units, `Decalendar` groups days together, while `Declock` divides days up.

## Basic concepts {#sec-basics}

### Fractions analogy {#sec-frac}

In the simplest terms, `Decalendar` counts fractions of a year, while Declock counts fractions of a day. The denominator for `Decalendar` is the number of days in the year, while for `Declock` the denominator is $10^x$, where $x$ is the number of digits in the numerator. In both systems, only the numerator, not the denominator, is provided. In the context of` Decalendar`, the numerator is the days that have passed in the year, while in the context of` Declock`, the numerator is the parts of the day that have passed.

To avoid any confusion between the two, we can say "`Day 5`" to mean the date when 5 days have passed this year or `Day 0` to mean the first day of the year (`doty`). This is like the use of the term "day zero" in other contexts, such as epidemiology. The analogous term for times is `Dot`. The word `Dot` conveys that at its core `Declock` is a system built on fractional days expressed as decimal numbers. The 5 in `Dot 5` can be thought of as a number after a decimal (0.5) or a numerator (⁵/₁₀), either way it means noon, the time when half the day has passed.

### Implied tolerance and duration {#sec-imp}

The analogy to decimals or fractions is important, because it explains why adding a zero at the end of a time does not change the time, only the implied tolerance of time points or the implied duration of time intervals. If `Dot 5` is a time point, it has an implied tolerance of 5% of the day (`.5±.05`), because any time after `Dot 45` and before `Dot 55` (`[.45, .55)`) would round to `Dot 5`. On the other hand, if `Dot 5` is the start time for a time interval, that interval is implied to start at `Dot 5` and end before `Dot 6` (`[.5, .6)`) and thus have a duration of 10% of the day (`Dot 6`-`Dot 5`). Every additional digit we add decreases the implied tolerance and the implied duration 10-fold.

If we really want to insist on punctuality, we could include up to 5 digits in a time. Specifying times with more than 5 digits is possible, and may be useful for scientific or technical purposes, but it is analogous to providing [extremely long GPS coordinates](https://xkcd.com/2170/); at some point the level of precision stops having relevance to daily life. If we want to strive for the highest level of precision possible, we can add the word "sharp" or the `#` symbol to the time. Saying "`5 Sharp`" or writing `5#` means as close as possible to noon. Times that include `#` cannot have an implied duration. We can only add `#` to a time, so there is no need say "`Dot 5 Sharp`" or write `.5#`.

### Context clues {#sec-context}

Not saying "`Day`" or "`Dot`" in general is acceptable, because it is convenient and often the numbers make perfect sense in context. If someone says "let's have lunch at 5", it is clear that they are referring to noon (`Dot 5`) and not the sixth `doty` (`Day 5`). Also, the number itself may provide a clue. Numbers greater than 365 could still be a `doty` date, but such dates would be in an upcoming year, not the current year. The meaning of such dates depends on whether the current year is a common year (n=365) or a leap year (n=366). Saying "500" could mean `Day 134` (if n=366) or `Day 135` (if n=365) of the subsequent year, but it would most likely mean noon (`Dot 500`).

### `Stamps`

If a date and a time are combined they form a time `stamp`. The date always goes before the time in any `stamp`. When said together, the numbers "0" and "500" mean the first `doty` (`Day 0`) at noon (`Dot 500`). In written form, this would be `000.500`. This format is called `.y`, which is read the same way as `doty`, but emphasizes that the `.` is used in a floating point decimal `doty`. In other words, `doty` can be used instead of "day of the year" in a sentence, whereas `.y` indicates a `stamp`, such as `000.500`. Ideally, a stamp will include all of the information needed to identify a singular point in time, and thus should include a year and time zone.

### Specific dates and times {#sec-specific}

The dates and times above assume that the year and time zone are known. A date without a year is like a time without a time zone, both depend on the context. Most likely, we are talking about the current year and the local time zone, but it may be unclear. Including a year allows us to pinpoint a specific day, instead of a day that could happen any year. Similarly, a time with a time zone occurs once a day, rather than once in every time zone per day. The first `doty` 2000, would be written `2000+000` and said "`Year 2000 Day 0`" or simply "`2000 0`", while noon in `Zone 0` would be written `.500+0` or `500+0` and said "`Dot 500 Zone 0`", "`500 Zone 0`", or "`500 0`".

### Negative numbers {#sec-neg}

The plus signs in the date and time above indicate that the `doty` date and the time zone can also be negative. In fact, all of the units above can be negative. A negative year is before 1 BCE (Before Common Era) and a negative time zone is West of `Zone 0`. Negative dates and times show the number of parts that are left in the whole (day or year). To extend the fractions analogy used above to negative numbers, the negative number added to the whole gives us the numerator of the positive fraction. Essentially, these numbers arrive at the same answer from opposite directions.

Negative `doty` numbers can be especially useful at the end of the year, because `Day -1` is always the last `doty`, regardless of whether the year has 365 or 366 days. In certain contexts, the choice of using a negative number over a positive number may mean that we want to emphasize how much time is left instead of how much has passed. Even though `Dot -1` and `Dot 9` are synonymous `Declock` times, the former could highlight that there is only 1 tenth (⅒ or .1) of the day remaining before midnight. `Dot 5` and `Dot -5` both mean noon, like saying that a glass is half-empty or half-full.

The `.y` format can include positive and negative numbers, most commonly in the form `±year±day.day±z`, where `.day` is the time and `z` is the time zone. The year is usually provided without a sign, because most people rarely discuss years before 1 BCE. The other two signs are required in written form, but plus signs can be omitted when speaking. For example, the `stamp` `2000+000.500+0` is pronounced "`Year 2000 Day 0 Dot 500 Zone 0`" or "`2000 0 500 0`", while `2000-366.600-1` (the same `stamp` in negative form and in `Zone -1`) would be said "`Year 2000 Day Minus 366 Dot 600 Zone Minus 1`" or "`2000 -366 600 -1`".

## Units {#sec-units}

In the `stamps` above, the time has 3 digits, because this is the best level of precision for displaying time on clocks and watches, but times can have any number of digits, depending on the desired precision level. `Declock` provides names for extremely precise time units, but the most relevant units are within a few orders of magnitude from a day, which is the base unit of both `Declock` and `Decalendar`. Listing the units of each highlights the relationship between the two:

| Base 10   | Name     | Symbol | Formal Name       |
| --------- | -------  | ------ | ----------------- |
| 10²       | `hekt`   | ρ      | `hectoday`        |
| 9.1 x 10¹ | `delt`   | δ      | `deltayear`       |
| 9 x 10¹   | `qop`    | ϟ      | `qoppaday`        |
| 8 x 10¹   | `pi`     | π      | `piday`           |
| 7.3 x 10¹ | `ep`     | ε      | `epsilonyear`     |
| 7 x 10¹   | `om`     | ο      | `omicronday`      |
| 6.1 x 10¹ | `wau`    | ϛ      | `wauyear`         |
| 6 x 10¹   | `xi`     | ξ      | `xiday`           |
| 5 x 10¹   | `nu`     | ν      | `nuday`           |
| 4 x 10¹   | `mu`     | Μ      | `muday`           |
| 3 x 10¹   | `lam`    | λ      | `lamdaday`        |
| 2 x 10¹   | `kap`    | κ      | `kappaday`        |
| 10¹       | `dek`    | ι      | `decaday`         |
| 10⁰       | `day`    | d      | `day`             |
| 10⁻¹      | `dime`   | ⅒      | `deciday`         |
| 10⁻²      | `cent`   | ¢ or % | `centiday`        |
| 10⁻³      | `mil`    | m or ‰ | `milliday`        |
| 2 x 10⁻⁴  | `period` | .      | `didecimilliday`  |
| 10⁻⁴      | `phrase` |  ̑ or ‱ | `decimilliday`    |
| 2 x 10⁻⁵  | `bar`    | \|     | `dicentimilliday` |
| 10⁻⁵      | `beat`   | ♫      | `centimilliday`   |
| 10⁻⁶      | `mic`    | μ      | `microday`        |
| 10⁻⁷      | `liph`   | m̑      | `decimicroday`    |
| 10⁻⁸      | `lib`    | m̈      | `centimicroday`   |
| 10⁻⁹      | `nan`    | n      | `nanoday`         |
| 10⁻¹⁰     | `roph`   | μ̑      | `decinanoday`     |
| 10⁻¹¹     | `rob`    | µ̈      | `centinanoday`    |
| 10⁻¹²     | `pic`    | p      | `picoday`         |
| 10⁻¹³     | `noph`   | n̑      | `decipicoday`     |
| 10⁻¹⁴     | `nob`    | n̊      | `centipicoday`    |
| 10⁻¹⁵     | `femt`   | f      | `femtoday`        |
| 10⁻¹⁶     | `coph`   | p̑      | `decifemtoday`    |
| 10⁻¹⁷     | `cob`    | p̈      | `centifemtoday`   |
| 10⁻¹⁸     | `att`    | a      | `attoday`         |
| 10⁻¹⁹     | `foph`   | f̑      | `deciattoday`     |
| 10⁻²⁰     | `fob`    | f̈      | `centiattoday`    |
| 10⁻²¹     | `zept`   | z      | `zeptoday`        |
| 10⁻²²     | `toph`   | ȃ      | `decizeptoday`    |
| 10⁻²³     | `tob`    | ä      | `centizeptoday`   |
| 10⁻²⁴     | `yokt`   | y      | `yoctoday`        |
| 10⁻²⁵     | `zoph`   | z̑      | `deciyoctoday`    |
| 10⁻²⁶     | `zob`    | z̈      | `centiyoctoday`   |
| 10⁻²⁷     | `ront`   | r      | `rontoday`        |
| 10⁻²⁸     | `yoph`   | y̑      | `decirontoday`    |
| 10⁻²⁹     | `yob`    | ẙ      | `centirontoday`   |
| 10⁻³⁰     | `quek`   | q      | `quectoday`       |

: The units of `Decalendar` and `Declock` {#tbl-units}

In the table above, the units with positive exponents are used for `Decalendar`, while the ones with negative exponents are used for `Declock`. `Cents` (`¢`) can serve as a useful point of comparison to understand the scale of some of the units in the table above, because each `cent` is 1 percent of the day, which is about a quarter hour (1% = 14.4 minutes). In comparison to `cents`, `mils` are ten times smaller (.1% = 1.4 minutes), `dimes` (`⅒`) are ten times larger (10% = 144 minutes), and `deks` (`ι`) are 1000 times larger (1000% = 14400 minutes). To be clear, 1 `dek` contains 10 whole days while the other units are fractions of days.

`Declock` units smaller than `mils` are not easy to think of as percents of a day. For `phrases` (` ̑`) and `beats` (`♫`), music serves as a much more useful analogy. In fact, `phrases` and `beats` are musical terms. The duration of a musical beat depends on the tempo, but a `Declock beat` is always precisely 0.864 seconds long. This translates to a tempo of 69.4̅ (69⁴/₉ or 625/9) beats per minute, which is coincidentally also within the normal range of a resting heart rate. `Declock beats` are organized into groups of 2 called `bars` or `measures`, groups of 10 called `phrases`, and groups of 20 called `periods`. A real example of music that follows this exact pattern is Haydn's [Feldpartita](https://en.wikipedia.org/wiki/Period_(music)).

`Declock` units smaller than `beats` are too small for typical daily use. For example, a `mic` (`microday`, `μ`) is faster than a blink of an eye. Each frame in a video playing at 60 frames per second will be shown for about 1.93 `liphs` (`milliphrases`, `m̑`). A `lib` (`millibeat`, `m̈`) is not enough time for a neuron in a human brain to fire and return to rest. Sound can travel from a person's ear to their other ear in about 7 `nans` (`nanodays`). Noticing that a sound reaches one ear before the other can help humans to localize the source of the sound, but a `roph` (`microphrase`, `μ̑`) difference might be too fast to notice. In a `rob` (`microbeat`, `µ̈`), a USB 3.0 cable transferring 5 gigabytes per second can send 4.32 kilobytes, the equivalent of a text file with 4320 characters.

### Time Zones {#sec-zones}

Of the units discussed above, `dimes` are notable, because they are the units of `Declock` time zones. The times in `Zone 1` are one `dime` later than `Zone 0` and two `dimes` later than `Zone -1`. Time zones are important, because different time zones could have very different times and even different dates. Mexico City is in `Zone -3` and Tokyo is in `Zone 4`, meaning for the majority of the day (`Dot 7` to be exact) Tokyo is one day ahead of Mexico City. If it is noon on the last day of the year 1999 in Mexico City, it will be `Dot 200` on the first day of the year 2000 in Tokyo. This date and time in Mexico City can be written `2000+000.200+4` or `2000-366.800+4`, while the equivalent date and time for Tokyo is `1999+364.500-3` or `1999-001.500-3`. If we removed the time zone from the end, we would not know that all of these `stamps` describe the same moment in time.

### The Dot Formats {#sec-formats}

The `stamps` shown above are in the decimal days of the year (`.y`) format, which is the main `Decalendar` format. In addition to the `.y` format, there are 2 other supplemental `datetime` formats, which are based on decimal days of the month (`.m`), and fractional days of the week (`.w`). The table below summarizes the three decimal day-of-the ( `dot` or `.`) formats:

| Day of the |  `.`  | General Form      | Specific Example  |
| ---------- | ----- | ----------------- | ----------------- |
| Year       |  `y`  | `year±day.day±z`  | `1999+364.500-3`  |
| Month      |  `m`  | `year±m±dd.day±z` | `1999+B+31.500-3` |
| Week       |  `w`  | `year±ww±d.day±z` | `1999+52+5.500-3` |

: The three dot formats {#tbl-formats}

In the table above, `day` is the 3-digit day of the year (`doty`) number, `dd` is the 2-digit day of the month (`dotm`) number, `d` is the 1-digit day of the week (`dotw`) number, and `.day` is the time in `mils`.

### The `.m` format {#sec-dotm}

The `m` in the `.m` format is the 1-digit month number. To fit all of the months in a single digit, `m` is in hexadecimal form (Base16 encoded). This means that the first 10 months are represented by the numbers 0 through 9 while the last two months of the year are represented by the letters "A" and "B" instead of numbers. The negative month numbers range from -C (-13) to -1, as shown in the table below.

| Month     | Pos | Neg |
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

| Day       | Pos | Neg |
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

#### Days of the `dek` {#sec-dotd}

A major difficulty with the Gregorian calendar is that the date is disconnected from the day of the week. In contrast, the day of the `dek` (`dotd`) is simply the last digit of the day number in the `.y` format. For example, the first day of the year (`Day 0`) is always a `Zeroday`, the last day of common years (`Day 364`) is always a `Fourday`, and the last day of leap years (`Day 365`) is always a `Fiveday`. The day number allows us to distinguish workdays from restdays. `Decalendar` defines `Threeday`, `Fourday`, `Eightday`, and `Nineday` as restdays, which means that days with numbers that end in 3, 4, 8, or 9 are days off from work and school. Each `dek` consists of 2 `pents` (`pentadays`), each `pent` has 3 workdays called a `trep` (`trepalium`) and 2 restdays called the `pentend`. In total, there are 219 workdays and 146 restdays in a `Decalendar` year, not counting the only obligatory holiday, Leap Day (`Day 365`).

| # | Name     | Type |
| - | -------- | ---- |
| 0 | Zeroday  | work |
| 1 | Oneday   | work |
| 2 | Twoday   | work |
| 3 | Threeday | rest |
| 4 | Fourday  | rest |
| 5 | Fiveday  | work |
| 6 | Sixday   | work |
| 7 | Sevenday | work |
| 8 | Eightday | rest |
| 9 | Nineday  | rest |

: The days of the `dek` {#tbl-dotd}

#### Workdays {#sec-work}

The Gregorian calendar has many more workdays, 260 in common years and 261 in leap year. Despite having many fewer workdays and many more restdays, workers following `Decalendar` would actually spent slightly more time at work overall, because the `Decalendar` workday goes from `Dot 3` to `Dot 7` and thus is 6.6̅ `cents` (96 minutes) longer than the typical 9-to-5 work schedule (`Dot 375` to `Dot 7083̅`). In other words, this work schedule is starts 75 `mils` earlier than 9AM (`Dot 375`) and ends 8.3̅ `mils` earlier than 5PM (`Dot 7083̅`). In a typical 40-hour workweek, workers spend 23.80952381 `cents` per day at work on average, which adds up to 8.6̅ `deks` (260*8/240) per common year and 8.7 `deks` (261*8/240) per leap year. In contrast, workers following `Decalendar` spend 24 `cents` per day at work on average, which totals up to 8.76 `deks` (219*.04) spent at work every year. The default approach of `Decalendar` is to  compensate for having more restdays with longer workdays.

#### Schedules {#sec-sched}

If necessary, the length of the workday and the number of workdays in the `dek` can be adjusted according to different schedules. As mentioned above, each half of the `dek` is called a `pent`. Each `pent` can have its own `pently` schedule. The expectation is that workers will work for 12 `dimes` per `pent`. It is possible to split those 12 `dimes` over the course of 5, 4, 3, or 2 days in each `pent`. The table below displays how the number of workdays and restdays in a `pent` affects the start time, end time, and duration of the workday. The different `pently` schedules are named after the number of workdays per `pent`. People can switch between `pently` schedules every `pent` as needed, but unless there is a compelling reason to follow a different `pently` schedule, everyone should follow the `Schedule 3` by default. `Schedule 3` has 3 workdays and 2 restdays in each `pent`. Each `Schedule 3` workday starts at `Dot 3`, ends at `Dot 7`, and lasts 4 `dimes`.

| Schedule | Workdays | Restdays | Start | End | Duration |
| -------- | -------- | -------- | ----- | --- | -------- |
| 2        | 2        | 3        | .2    | .8  | .6       |
| 3        | 3        | 2        | .3    | .7  | .4       |
| 4        | 4        | 1        | .35   | .65 | .3       |
| 5        | 5        | 0        | .38   | .62 | .24      |

#### Coordinate analogy {#sec-coor}

In the Gregorian calendar, dates are like a set of coordinates, where the month and the day of the month (`dotm`) are like longitude and latitude in the Geographic coordinate system or x and y in the Cartesian coordinate system. `Decalendar` provides both coordinates in one number, the `doty` contains both the `dek` number (first 2 digits) and the `dotd` number (last digit). In this way, the `doty` contains all of the information we need for the `Decalendar` system: the `dek`, which fulfills the role of both the month and the week, and the `dotd`, which fulfills the role of both the day of the month and the day of the week.

#### Conversion tables {#sec-conv}

The first table below shows the `doty` numbers for all of the days in common years, while the second table below does the same for leap years. In both of these tables, the columns are labeled by month (like longitudes or x-axis values), while the rows are labeled by the day of the month (like latitudes or y-axis values). The positive `doty` numbers of dates after the Gregorian calendar leap day, February 29, need to be incremented by 1 in leap years. Similarly, the negative `doty` numbers of dates before February 29 need to decremented by 1. To be clear, we only have to deal with the Gregorian calendar leap day when we are working with Gregorian calendar dates. Since the `Decalendar` leap day is at the end of the year and everything resets after the end of each year, `Decalendar` leap days do not affect the positive day numbers of any other `Decalendar` days.

| Day | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
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

: Common year Gregorian calendar date to positive `doty` conversion {#tbl-common}

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

: Leap year Gregorian calendar date to positive `doty` conversion {#tbl-leap}

Having different conversion tables for common years and leap years is cumbersome, so the two tables below work for both common years and leap years, by indicating positive `doty` numbers that need to incremented in leap years with a superscript plus sign (`⁺`) and negative `doty` numbers that need to decremented in leap years with a superscript minus sign (`⁻`). The generalized conversion tables do not include February 29, which is a date that cannot be consistently described solely with a `doty` number. In leap years, February 29 is `Day 59` and `Day -307`, but in common years `Day 59` is March 1 and `Day -307` is February 28. We can write February 29 in the `.m` format as `+1+28` or `-B-01` and in the `.w` or `.y` formats if we specify a year.

| Day | Jan | Feb | Mar | Apr  | May  | Jun  | Jul  | Aug  | Sep  | Oct  | Nov  | Dec  |
| --- | --- | --- | --- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1   | 0   | 31  | 59⁺ | 90⁺  | 120⁺ | 151⁺ | 181⁺ | 212⁺ | 243⁺ | 273⁺ | 304⁺ | 334⁺ |
| 2   | 1   | 32  | 60⁺ | 91⁺  | 121⁺ | 152⁺ | 182⁺ | 213⁺ | 244⁺ | 274⁺ | 305⁺ | 335⁺ |
| 3   | 2   | 33  | 61⁺ | 92⁺  | 122⁺ | 153⁺ | 183⁺ | 214⁺ | 245⁺ | 275⁺ | 306⁺ | 336⁺ |
| 4   | 3   | 34  | 62⁺ | 93⁺  | 123⁺ | 154⁺ | 184⁺ | 215⁺ | 246⁺ | 276⁺ | 307⁺ | 337⁺ |
| 5   | 4   | 35  | 63⁺ | 94⁺  | 124⁺ | 155⁺ | 185⁺ | 216⁺ | 247⁺ | 277⁺ | 308⁺ | 338⁺ |
| 6   | 5   | 36  | 64⁺ | 95⁺  | 125⁺ | 156⁺ | 186⁺ | 217⁺ | 248⁺ | 278⁺ | 309⁺ | 339⁺ |
| 7   | 6   | 37  | 65⁺ | 96⁺  | 126⁺ | 157⁺ | 187⁺ | 218⁺ | 249⁺ | 279⁺ | 310⁺ | 340⁺ |
| 8   | 7   | 38  | 66⁺ | 97⁺  | 127⁺ | 158⁺ | 188⁺ | 219⁺ | 250⁺ | 280⁺ | 311⁺ | 341⁺ |
| 9   | 8   | 39  | 67⁺ | 98⁺  | 128⁺ | 159⁺ | 189⁺ | 220⁺ | 251⁺ | 281⁺ | 312⁺ | 342⁺ |
| 10  | 9   | 40  | 68⁺ | 99⁺  | 129⁺ | 160⁺ | 190⁺ | 221⁺ | 252⁺ | 282⁺ | 313⁺ | 343⁺ |
| 11  | 10  | 41  | 69⁺ | 100⁺ | 130⁺ | 161⁺ | 191⁺ | 222⁺ | 253⁺ | 283⁺ | 314⁺ | 344⁺ |
| 12  | 11  | 42  | 70⁺ | 101⁺ | 131⁺ | 162⁺ | 192⁺ | 223⁺ | 254⁺ | 284⁺ | 315⁺ | 345⁺ |
| 13  | 12  | 43  | 71⁺ | 102⁺ | 132⁺ | 163⁺ | 193⁺ | 224⁺ | 255⁺ | 285⁺ | 316⁺ | 346⁺ |
| 14  | 13  | 44  | 72⁺ | 103⁺ | 133⁺ | 164⁺ | 194⁺ | 225⁺ | 256⁺ | 286⁺ | 317⁺ | 347⁺ |
| 15  | 14  | 45  | 73⁺ | 104⁺ | 134⁺ | 165⁺ | 195⁺ | 226⁺ | 257⁺ | 287⁺ | 318⁺ | 348⁺ |
| 16  | 15  | 46  | 74⁺ | 105⁺ | 135⁺ | 166⁺ | 196⁺ | 227⁺ | 258⁺ | 288⁺ | 319⁺ | 349⁺ |
| 17  | 16  | 47  | 75⁺ | 106⁺ | 136⁺ | 167⁺ | 197⁺ | 228⁺ | 259⁺ | 289⁺ | 320⁺ | 350⁺ |
| 18  | 17  | 48  | 76⁺ | 107⁺ | 137⁺ | 168⁺ | 198⁺ | 229⁺ | 260⁺ | 290⁺ | 321⁺ | 351⁺ |
| 19  | 18  | 49  | 77⁺ | 108⁺ | 138⁺ | 169⁺ | 199⁺ | 230⁺ | 261⁺ | 291⁺ | 322⁺ | 352⁺ |
| 20  | 19  | 50  | 78⁺ | 109⁺ | 139⁺ | 170⁺ | 200⁺ | 231⁺ | 262⁺ | 292⁺ | 323⁺ | 353⁺ |
| 21  | 20  | 51  | 79⁺ | 110⁺ | 140⁺ | 171⁺ | 201⁺ | 232⁺ | 263⁺ | 293⁺ | 324⁺ | 354⁺ |
| 22  | 21  | 52  | 80⁺ | 111⁺ | 141⁺ | 172⁺ | 202⁺ | 233⁺ | 264⁺ | 294⁺ | 325⁺ | 355⁺ |
| 23  | 22  | 53  | 81⁺ | 112⁺ | 142⁺ | 173⁺ | 203⁺ | 234⁺ | 265⁺ | 295⁺ | 326⁺ | 356⁺ |
| 24  | 23  | 54  | 82⁺ | 113⁺ | 143⁺ | 174⁺ | 204⁺ | 235⁺ | 266⁺ | 296⁺ | 327⁺ | 357⁺ |
| 25  | 24  | 55  | 83⁺ | 114⁺ | 144⁺ | 175⁺ | 205⁺ | 236⁺ | 267⁺ | 297⁺ | 328⁺ | 358⁺ |
| 26  | 25  | 56  | 84⁺ | 115⁺ | 145⁺ | 176⁺ | 206⁺ | 237⁺ | 268⁺ | 298⁺ | 329⁺ | 359⁺ |
| 27  | 26  | 57  | 85⁺ | 116⁺ | 146⁺ | 177⁺ | 207⁺ | 238⁺ | 269⁺ | 299⁺ | 330⁺ | 360⁺ |
| 28  | 27  | 58  | 86⁺ | 117⁺ | 147⁺ | 178⁺ | 208⁺ | 239⁺ | 270⁺ | 300⁺ | 331⁺ | 361⁺ |
| 29  | 28  |     | 87⁺ | 118⁺ | 148⁺ | 179⁺ | 209⁺ | 240⁺ | 271⁺ | 301⁺ | 332⁺ | 362⁺ |
| 30  | 29  |     | 88⁺ | 119⁺ | 149⁺ | 180⁺ | 210⁺ | 241⁺ | 272⁺ | 302⁺ | 333⁺ | 363⁺ |
| 31  | 30  |     | 89⁺ |      | 150⁺ |      | 211⁺ | 242⁺ |      | 303⁺ |      | 364⁺ |

: Generalized Gregorian calendar date to positive `doty` conversion {#tbl-leap}

| Day | Jan   | Feb   | Mar   | Apr   | May   | Jun   | Jul   | Aug   | Sep   | Oct   | Nov   | Dec   |
| --- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| 1   | -365⁻ | -334⁻ | -306  | -275  | -245  | -214  | -184  | -153  | -122  | -92   | -61   | -31   |
| 2   | -364⁻ | -333⁻ | -305  | -274  | -244  | -213  | -183  | -152  | -121  | -91   | -60   | -30   |
| 3   | -363⁻ | -332⁻ | -304  | -273  | -243  | -212  | -182  | -151  | -120  | -90   | -59   | -29   |
| 4   | -362⁻ | -331⁻ | -303  | -272  | -242  | -211  | -181  | -150  | -119  | -89   | -58   | -28   |
| 5   | -361⁻ | -330⁻ | -302  | -271  | -241  | -210  | -180  | -149  | -118  | -88   | -57   | -27   |
| 6   | -360⁻ | -329⁻ | -301  | -270  | -240  | -209  | -179  | -148  | -117  | -87   | -56   | -26   |
| 7   | -359⁻ | -328⁻ | -300  | -269  | -239  | -208  | -178  | -147  | -116  | -86   | -55   | -25   |
| 8   | -358⁻ | -327⁻ | -299  | -268  | -238  | -207  | -177  | -146  | -115  | -85   | -54   | -24   |
| 9   | -357⁻ | -326⁻ | -298  | -267  | -237  | -206  | -176  | -145  | -114  | -84   | -53   | -23   |
| 10  | -356⁻ | -325⁻ | -297  | -266  | -236  | -205  | -175  | -144  | -113  | -83   | -52   | -22   |
| 11  | -355⁻ | -324⁻ | -296  | -265  | -235  | -204  | -174  | -143  | -112  | -82   | -51   | -21   |
| 12  | -354⁻ | -323⁻ | -295  | -264  | -234  | -203  | -173  | -142  | -111  | -81   | -50   | -20   |
| 13  | -353⁻ | -322⁻ | -294  | -263  | -233  | -202  | -172  | -141  | -110  | -80   | -49   | -19   |
| 14  | -352⁻ | -321⁻ | -293  | -262  | -232  | -201  | -171  | -140  | -109  | -79   | -48   | -18   |
| 15  | -351⁻ | -320⁻ | -292  | -261  | -231  | -200  | -170  | -139  | -108  | -78   | -47   | -17   |
| 16  | -350⁻ | -319⁻ | -291  | -260  | -230  | -199  | -169  | -138  | -107  | -77   | -46   | -16   |
| 17  | -349⁻ | -318⁻ | -290  | -259  | -229  | -198  | -168  | -137  | -106  | -76   | -45   | -15   |
| 18  | -348⁻ | -317⁻ | -289  | -258  | -228  | -197  | -167  | -136  | -105  | -75   | -44   | -14   |
| 19  | -347⁻ | -316⁻ | -288  | -257  | -227  | -196  | -166  | -135  | -104  | -74   | -43   | -13   |
| 20  | -346⁻ | -315⁻ | -287  | -256  | -226  | -195  | -165  | -134  | -103  | -73   | -42   | -12   |
| 21  | -345⁻ | -314⁻ | -286  | -255  | -225  | -194  | -164  | -133  | -102  | -72   | -41   | -11   |
| 22  | -344⁻ | -313⁻ | -285  | -254  | -224  | -193  | -163  | -132  | -101  | -71   | -40   | -10   |
| 23  | -343⁻ | -312⁻ | -284  | -253  | -223  | -192  | -162  | -131  | -100  | -70   | -39   | -9    |
| 24  | -342⁻ | -311⁻ | -283  | -252  | -222  | -191  | -161  | -130  | -99   | -69   | -38   | -8    |
| 25  | -341⁻ | -310⁻ | -282  | -251  | -221  | -190  | -160  | -129  | -98   | -68   | -37   | -7    |
| 26  | -340⁻ | -309⁻ | -281  | -250  | -220  | -189  | -159  | -128  | -97   | -67   | -36   | -6    |
| 27  | -339⁻ | -308⁻ | -280  | -249  | -219  | -188  | -158  | -127  | -96   | -66   | -35   | -5    |
| 28  | -338⁻ | -307⁻ | -279  | -248  | -218  | -187  | -157  | -126  | -95   | -65   | -34   | -4    |
| 29  | -337⁻ |       | -278  | -247  | -217  | -186  | -156  | -125  | -94   | -64   | -33   | -3    |
| 30  | -336⁻ |       | -277  | -246  | -216  | -185  | -155  | -124  | -93   | -63   | -32   | -2    |
| 31  | -335⁻ |       | -276  |       | -215  |       | -154  | -123  |       | -62   |       | -1    |

: Generalized Gregorian calendar date to negative `doty` conversion {#tbl-leap}

### Subyear units {#sec-subyear}

In addition to serving as a part of the Gregorian date coordinate system described above, months can also indicate the current season or quarter. `Deks` can also serve as indicator of subyear units like seasons.

#### Seasons {#sec-seasons}

We can use the tables above to convert any Gregorian calendar date to a `doty` number. This is especially useful for variable dates that have to be converted every year. For example, the dates of the solstices, the longest and shortest days of the year, vary slightly every year. Instead of calculating the exact `doty` number of the solstices ourselves we could translate from existing Gregorian calendar dates. Solstices and equinoxes (the points in between the solstices) are the basis of the some holidays, such as [Nowruz](https://en.wikipedia.org/wiki/Nowruz).

The dates of the solstices and the equinoxes can be used as definitions of the seasons. Each season has an opposite. The opposite of Spring is Fall and the opposite of Summer is Winter. These opposites are always occurring simultaneously, one opposing season in the Northern hemisphere and the other in the Southern hemisphere. The table below lists the opposing seasons in the North and South columns (which correspond to the Northern and Southern hemispheres) and the approximate dates of the solstices and the equinoxes that mark the start of each season.

| Code | North  | South  | `doty` | `dotm` | Date         | Event              |
| ---- | ------ | ------ | ----   | ------ | ------------ | ------------------ |
| S0   | Spring | Fall   | 78     | 2+19   | March 20     | Northward Equinox  |
| S1   | Summer | Winter | 170    | 5+19   | June 20      | Northward Solstice |
| S2   | Fall   | Spring | 264    | 8+21   | September 22 | Southward Equinox  |
| S3   | Winter | Summer | 354    | B+21   | December 21  | Southward Solstice |

: Solstice and equinox Gregorian calendar and `doty` dates {#tbl-soleq}

Using the information in the table above, we can group the `deks` in a year according to the seasons in which they occur. We identify `deks` using the first 2 digits of the 3-digit day number of any day in that `dek`. For example, `Day 78` is the second to last day in `Dek 7`, while `Day 170` is the first day in `Dek 17`. Therefore, Spring starts in the northern hemisphere at the end of `Dek 7` and ends before `Dek 17`. Winter starts in `Dek 35` of one year and ends at the end of `Deks 7` of the subsequent year. The table below summarizes the division of `deks` by season.

| Code | North  | South  | First | Last |
| ---- | -----  | -----  | ----- | ---- |
| S0   | Spring | Fall   | 8     | 16   |
| S1   | Summer | Winter | 17    | 25   |
| S2   | Fall   | Spring | 26    | 34   |
| S3   | Winter | Summer | 35    | 7    |

: The `deks` that begin and end each season {#tbl-seasons}

#### `Qops`, `Delts`, `Eps` and `Waus` {#sec-qdew}

##### `Qops` {#sec-q}

Each season in the table above has 9 `deks` (90 days), except for the seasons in the last row, which have 9.5 `deks` (95 days) in common years or 9.6 `deks` (96 days) in leap years. To more closely reflect the actual seasons, the extra days from the last row should be split among the first two rows. Nevertheless, the seasons shown above are convenient, because the first `dek` of each season is the last `dek` in a `qop` (`qoppa`, `ϟ`). Like seasons, `qops` divide the year into four parts, but unlike seasons, `qops` do not include `Dek 36`. `Dek 36`, the last `dek` of the year, is not included in the last `qop` so that each `qop` is 9 `deks` and 90 days long. The omission of `Dek 36` also maintains the pattern of alternating even and odd numbers in each row. This omission leaves out only 5 or 6 days per year, because `Dek 36` overlaps with `Dek 0`. The table below shows the division of `deks` by `qoppa`.

| Code | First | Last |
| ---- | ----- | ---- |
| Q0   | 0     | 8    |
| Q1   | 9     | 17   |
| Q2   | 18    | 26   |
| Q3   | 27    | 35   |

: The `deks` that begin and end each `qop` {#tbl-q}

##### `Delts` {#sec-d}

In addition to `qops` shown above, `Decalendar` describes 3 other similar units called `delts` (`deltas`, `δ`), `eps` (`epsilons`, `ε`), and `waus` (`ϛ`). These units do not leave out as many days in each year, because these units split the year by day, rather than by `dek`. `Delts`, `eps`, and `wau` split the year into 4, 5, and 6 parts, respectively. `Delts` are 91 days long and leave out one day at the end of common years and two days at the end of leap years. Just as above, leaving out a small number of days at the end of the year preserves a pattern that can be useful for remembering the days on which `delts` start and end. In the table above, not only do rows alternate between even and odd numbers, but the `delt` number is the last digit of both the start and the end day of the `delt`. The table below list the numbers of the days that begin and end each `delt`.

| Code | First | Last |
| ---- | ----- | ---- |
| D0   | 0     | 90   |
| D1   | 91    | 181  |
| D2   | 182   | 272  |
| D3   | 273   | 363  |

: The days that begin and end each `delt` {#tbl-d}

##### `Eps` {#sec-e}

Unlike `delts`, `eps` are 73 days long and do not leave out any days from common years. `Qops`, `delts`, and `eps` all leave out leap days in leap years. The table below list the numbers of the days that begin and end each `ep`.

| Code | First | Last |
| ---- | ----- | ---- |
| E0   | 0     | 72   |
| E1   | 73    | 145  |
| E2   | 146   | 218  |
| E3   | 219   | 291  |
| E4   | 292   | 364  |

: The days that begin and end each `ep` {#tbl-e}

##### `Waus` {#sec-w}

The only unit that can include the leap year is a `wau` (`ϛ`), which is 61 days long and follows a similar pattern as a `delt`, except the last `wau` in common years is 1 day short than all the others. The table below list the numbers of the days that begin and end each `wau`. As with `delts`, the `wau` number is the last digit of the numbers of its first and last day.

| Code | First | Last |
| ---- | ----- | ---- |
| W0   | 0     | 60   |
| W1   | 61    | 121  |
| W2   | 122   | 182  |
| W3   | 183   | 243  |
| W4   | 244   | 304  |
| W5   | 305   | 365  |

: The days that begin and end each `zet` {#tbl-z}

All of the subyear unit codes can be preceded by a year and followed by a day number. The midpoint of common years is noon on the first day of `Delt 2`, `D2+00.5` or `+182.5`, and the midpoint of leap years is midnight of the first day of `Zet 3`, `Z3+00.0` or `+183.0`. The first day of Spring in northern hemisphere and Fall in the southern hemisphere in the year 2000 is `2000S0+00` or `2000+078`. The subyear units are essentially date intervals, series of contiguous dates. `Decalendar` includes very powerful approaches to describing series of dates, times, and `stamps`.

## Series {#sec-series}

A single `doty` number, such as `Day 0`, implies a duration on 1 day. We can indicate a duration of multiple days by listing consecutive days in a `series`. A `series` consists of dates, times, or `stamps` separated by commas (`,`). The items in a `series` should all be of the same type. In other words, `series` should be homogeneous and not mix dates, times, and `stamps`. The first 3 days of the year in the form of a `series` would be written `000,001,002`, while the last three days would be `-003,-002,-001`. The first half a day, from midnight to noon, could be written `0,.1,.2,.3,.4`.

### Slices {#sec-slices}

Instead of listing every single day in a `series`, we can "slice" from `Day 0` up to but not including `Day 3` by writing `:003`. `Simple slices` consist of a `start` and a `stop` separated by a colon (`start:stop`). When the `start` is omitted, `slices` begin at the first value, which in the context of a year is `Day 0` and in the context of a day is midnight. Therefore, writing `:003` is the same as writing `000:003`, both represent the first 3 days of the year: `000,001,002`. Using this approach, we can shorten the series `0,.1,.2,.3,.4` to `:.5`. If we omit the `stop`, instead of the `start`, we would "slice" up to and including the last value.

In the context of `doty` dates, omitting the `stop` value obtains all of the days in the year after the `start`, because the default `stop` is the number of days in the year (`n`). For example, the `slice` `003:` has a `start` of `Day 3` and a `stop` of `n`, and thus represents every day in the year except the first 3. The number of items we obtain from a `slice` is called a `span`. To calculate the `span`, we subtract the `start` from the `stop` ($stop-start$). In a common year, the `span` of `003:` is $n-3=362$, while in a leap year it would be $n-3=363$. If both the `start` and the `stop` are omitted, every day is included ($span=n-0$). The tables below lists the seasons, `qops`, and `delts` in the form of `slices`.

| Index | Season  | Qop     | Delt    |
| ----- | ------- | ------- | ------- |
| 0     | 78:170  | :90     | :91     |
| 1     | 170:264 | 90:180  | 91:182  |
| 2     | 264:354 | 180:270 | 182:273 |
| 3     | 354:78  | 270:360 | 273:364 |

: The slices that represent the 4-part subyear units {#tbl-fourpart}

### Steps {#sec-steps}

The `simple slices` (`start:stop`) described above are a type of time `segment`, an unbroken time interval. To break up a `simple slice` into a non-consecutive `series`, we can add a `step` value and create a `stepped slice` (`start:stop:step`). `Stepped slices` move in `step`-sized "steps" starting from `start`, skipping over $step-1$ items with each "step", keeping only items that are "stepped" on. In other words, `stepped slices` keep items whose index (zero-based position) in the `slice` is evenly divisible by `step`. A `step` value of 1 keeps every item, because every index is divisible by 1, and a `step` of 2 keeps every other item, those with even-numbered indexes. `Day 0` and every other third day in the year thereafter (`Day 3`, `Day 6`, etc.) can be represented by the `slice` `::3`.

To create a `series` of times on days throughout the year, we can use a `slice` with a `series` of `steps`. The `slice` `:365:1,1,3` represents all of the `Decalendar` workdays in a year. It is necessary to specify 365 as the `stop`, so that Leap Day (`Day 365`) is not included as a workday in leap years. Similarly, `003::1,4` is a `seq` that represents all of the regular restdays, not including the Leap Day holiday. `Stepped slices` cannot be included in `series`, because both use commas (`,`) and it would not possible to differentiate a `series` of `steps` from subsequent items in the `series`. The simple rule is that `slices` with more than 1 colon (`:`) cannot be part of a series. For example, `:365:1,1,3` is a `stepped slice` with a `series` of 3 `steps` rather than a series consisting of a `slice` and two numbers.

### Spreads {#sec-spreads}

To create `series` of consecutive items with breaks in between, it may be better to use a `spread` than a `slice`. `Simple spreads` consist of a `start` and a `span` (`start»span`) separated by a right [guillemet](https://en.wikipedia.org/wiki/Guillemet) (hex: `bb`, html: `&raquo;`, vim/compose: `>>`)  or a `stop` and a `span` (`stop«span`) separated by a left [guillemet](https://en.wikipedia.org/wiki/Guillemet) (hex: `ab`, html: `&laquo;`, vim/compose: `<<`). When entering text by hand, it is acceptable to use two less-than (`<<`) or two greater-than signs (`>>`) instead of guillemets. The default `start` and `stop` values are the same for both `slices` and `spreads`. We can `spread` forward from the default `start` to capture the first `span` days in a year. For example, the first 3 days in a year can be represented by the `spread` `>003`, which is synonymous with the `slice` `:003`. In this example, the `start` is 0, while the `stop` and the `span` are both 3.

In addition to default `start` and `stop` values, `spreads` also have default `span` values. A `spread` that only uses default values (`»` or `«`) will include every day in the year ($span=n$). If we "spread" forward from a positive `start`, the default `span` is $n-start$. If we spread backward from a positive `stop`, the default `span` is `stop`. We can `spread` backward from the default `stop` to capture the last `span` days in a year. For example, `«003` represents the last 3 days of any year. We could also use a negative `start` of `-003`, the third to last day of any year, to create the `slice` `-003:` and the `spread` `-003»`, both of which are synonymous with `«003`. One advantage of `spreads` over `slices` is the ability to access days from the end of a year without negative numbers.

### Splits {#sec-splits}

As with `stepped slices`, we can create non-consecutive `series` by "splitting" a `simple spread` (`start»span` or `stop«span`) into `split spread` (`start»span»split` or `stop«span«split`) with a `split` value that works like the opposite of a `step`. While `steps` keep items that are "stepped" on, `splits` exclude items that are used to create the boundaries of the `splits`. `Split spreads` with a `split` greater than 1 will yield a `series` of `segments`. The `split spread` `»»4` that skips every 5th day to create groups of 4 days throughout the year. Notably, `»»4` will always end with a `segment` containing the last 4 days of common years, `360:364`, `360»004`, or `364«004`, even in leap years, because partial splits are no allowed. Just like `stepped slices`, `split spreads` cannot be included in a `series`, because every `split` and `space` can have a `series` of values.

### Spaces {#sec-spaces}

The pattern above requires that the `splits` are separated by the default `space` value of 1. We can specify a different `space` value in the form `start»span»split»space` or `stop«span«split«space`. The `split spread` `»»3»2` creates 3-day `splits` separated by 2-day `spaces`. This is the pattern of workdays in the `Decalendar` system. The first `segment` of `»»3»2` can be written as `:003`, `»003`, or `003«`, while the last `segment` is `360:363`, `360»003`, or `363«003`. The workdays in the first `dek` of `»»3»2` can be written as the following `series` of `segments`: `:004,005:008`, `»003,005»003`, or `003«,008«003`. A `space` value of 0 may also be useful. For example, `delts`, `qops`, `eps`, and `zets` can be summarized as `split spreads` as shown in the following table:

| Unit | Spread   |
| ---- | -------- |
| Delt | `»»91»0` |
| Qop  | `»»90»0` |
| Ep   | `»»73»0` |
| Zet  | `»»61»0` |

: The spreads that represent the constant length subyear units {#tbl-constant}

### Sequential spreads and slices {#sec-seq}

`Split spreads` can be combined with other `spreads` into `sequences` called `seq spreads` (`sequential spreads`). The intuition behind `seq spreads` and is that each item in the first (outer) `spread` serves as a starting point for the second (inner) `spread`. The main use of `seq spreads` is to first "spread" across days and then "spread" across times in those days. We can combine `»»3»2`, a `split spread` that represents the `Decalendar` workdays, with `.3».4`, a `simple spread` that provides the `start` and `span` of the `Decalendar` workday, to obtain `»»3»2».3».4`, a `seq spread` that represents the time spent at work in a `Decalendar` year. In this `seq spread`, the `split` is the number of workdays (`3`), the space is the number of restdays (`2`), the second-to-last number is the `start` of the workday (`.3`) and the last number is the workday `span` (`.4`). The `spread` `»»3»2».3».4` first starts at midnight of each workday, then moves forward 3 `dimes` to the new `start` of `Dot 3`, and then "spreads" forward by a `span` of 4 `dimes` to the new `stop` of `Dot 7`.

`Seq spreads` can mix left- and right-pointing guillemets. For example, we could replace the start of the workday in `»»3»2».3».4` with the end of workday if we reverse the last guillemet: `»»3»2».7«.4`. These two `seq spreads` are synonymous, because `.3».4` and `.7«.4` are synonymous. We combine the two `spreads` with `»` because we want to move forward from the beginning of each workday, instead of backward to the previous day. If we combined `»»3»2` and `.3».4` with `«`, the resulting `spread` `»»3»2«.3».4` would move backward from midnight of each workday to `Dot 7` of each previous day and then "spread" forward to `Dot 1` of each workday. We may want to use such a mixed direction `seq spreads` when dealing with time zones. If we lived in `Zone -3` and wanted to know how the workdays in `Zone 4` translated into our time zone, we could take the `spread` `»»3»2».3».4` and move its `start` to 7 `dimes` earlier: `»»3»2«.4».4`. `Seq spreads` enable such time zone conversions without the use of negative numbers.

The `seq slice` equivalent of `»»3»2».3».4` is `:365:1,1,3:.3:.7`. `Seq spreads` will always be a more succinct way for creating long consecutive sequences with breaks than `slices`. For example, to include a lunch break in the middle of work, we could simply add a `split` and a `space` to the `seq spread` above: `»»3»2».3».4».18».04`. To do the same with a `seq slice`, we have to create 18 steps of 0.01 and a step of .04: `:365:1,1,3:.3:.7:18*1%,4%`. Here, we are using the replication operator (`*`) to avoid writing 0.01 18 times and the percent operator (`%`) to save a few characters, but even so the `seq slice` is not as concise as the `seq spread`. The table below shows each part of this schedule in the form of `simple slices` and `simple spreads`.

| slice   | spread  | spread  | label |
| ------- | ------  | ------  | ----- |
| .30:.48 | .30».18 | .48«.18 | work0 |
| .48:.52 | .48».04 | .52«.04 | lunch |
| .52:.70 | .52».18 | .70«.18 | work1 |

: A workday schedule with a lunch break {#tbl-workday}

### Pomodoro {#sec-pom}

Another real-life application of `spreads` can be to intersperse breaks in between periods of work as in the [Pomodoro technique](https://en.wikipedia.org/wiki/Pomodoro_Technique). The times spent working and resting can vary, but a reasonable translation of the original Pomodoro into the `Declock` units would be to have each `pomodoro` consist of 17 `mils` of work and 3 `mils` of rest, with a 17 `mil` break after every 4 `pomodoros`. To repeat 16 `pomodoros` throughout the `Decalendar` workday, we could use the following `seq spread`: `.3».7».08».02»»».017».003`. This pattern is difficult to capture with a `slice` because we have to use `*` for the steps of the inner and the outer `slice`: `.3:.7:8*.01,.02:::17*.001,.003`.

#### Replication operator {#sec-rep}

The replication operator (`*`) is very useful for replacing repetitive values. For example, to divide any year into six parts we could use the `spread` `»»5*61,60⁺»0` to create 5 "splits" that are all 61 days long and one last "split" that is 60⁺ days (60 days in a common year or 61 days in a leap year) long. The `*` helps us avoid the repetitiveness of writing `»»61,61,61,61,61,60⁺»0`. In addition to being used in the `split` and `space` of a `split spread` or the `step` of a `stepped slice`, the `*` can also be used in the `span` of a `split spread` or the `stop` of a `stepped slice` to indicate has many cycles of `splits` or `steps` we want to complete. For example, `»4*»5*61,60⁺»0` indicates that we want 4 years (the current year and the 4 subsequent years) "split" into 6 parts for a total of 24 parts. In other words, `4*` means that we want to stop cycling after completing four cycles. We can read `4*` out loud as "four times" because it means we intend to go through the cycle "four times".

#### Percent, permil, and permyr operators {#sec-per}

We can make the `seq spread` above even shorter by using the `per` operators: `%`, `‰`, and `‱`. Most of the values in `.3»2*».08».02»»».017».003` are either percents (.01 or ¹/₁₀₀) or permils (.001 or ¹/₁₀₀₀) of a day, we can therefore rewrite this `seq spread` as `.3»2*»8%»2%»»»17‰»3‰`. It may be difficult to write the permil (`‰`) operator (hex: `2030`, html: `&permil;`, vim: `%0`, compose: `%o`), because it does not appear on a typical keyboard, so it is also possible to write `.3»2*»8%»2%»»»17‰»3‰` as `.3»2*»8%»2%»»»17m»3m`, with the letter `m`, which stands for `mil`, replacing `‰`. In addition to the percent (`%`) and permil (`‰`) operators, there is also the permyr (`‱`) operator (hex: `2031`, html: `&pertenk;`), which is short for permyriad and represents `Declock phrases` (10⁻⁴).

#### Pently schedules as seq spreads, splices, and sleds {#sec-3s}

We can use `seq spreads` to describe the [`pently `schedules](#sched). `Schedule 5` is particularly interesting because it includes all of the days of the year. `Spreads` that include every item can be written as `»` or `«`, but `seq spreads` must have at least 5 guillemets, so the `Schedule 5` `seq spread` `»»»».38».24` has 4 blank values, which represent the default `start`, `span`, `split`, and `space`. Similarly, the `Schedule 4` `seq spread` `»»4»».35».3` has 3 blank values, which represent the default `start`, `span`, and `space`. The `Schedule 2` and `Schedule 3` `seq spreads`, `»»2»3».2».6` and `»»3»2».3».4`, respectively, only have 2 blank values, the `start` and the `span`. As an alternative to `seq spreads` and `seq slices`, we can use `slice`-`spread` hybrids called `sleds` or `spread`-`slice` hybrids called `splices`. `Sleds` put the `slice` elements first (`start:stop:step»start»span»split»space`), while `splices` start with the `spread` elements (`start»span»split»space:stop:step`). The `pently `schedules are easiest to write as `seq spreads` and `splices` as shown in the table below.

| Schedule | seq spread  | splice       | sled             |
| -------- | ----------- | ------------ | ---------------- |
| 2        | »»2»3».2».6 | »»2»3».2:.8  | :365:1,4:.2:.6   |
| 3        | »»3»2».3».4 | »»3»2».3:.7  | :365:1,1,3:.3:.7 |
| 4        | »»4»».35».3 | »»4»».35:.65 | :365:3*1,2:.3:.7 |
| 5        | »»»».38».24 | »»»».38:.62  | :365::.3:.7      |

: The seq spreads, splices, and sleds that represent the 4 pently schedules {#tbl-3s}

### Yearly transition

#### Common years {#sec-common}

The `pently` schedules are important for the transition between years. In common years, the last `dek` of the year (`Dek 36`) contains the last `pent` of the current year (`Pent 72`), and the first `pent` of the subsequent year (`Pent 0`). If these two `pents` follow the default `pently` schedule, `Schedule 3`, the natural rhythm of 3 workdays followed by 2 rest days continues undisrupted. The table below shows the positive and negative `doty` numbers, names, and types (work or rest) of the days in `Dek 36` in common years. Notably, while the positive `doty` numbers continue counting past the end of the year, the negative `doty` numbers of the current year turn into the negative `doty` numbers of the subsequent year. The negative `doty` numbers in `Dek 36` can thus serve as the bridge from the one year to the next.

| Pos | Neg | Name     | Type |
| --- | --- | -------- | ---- |
| 360 | -5  | Zeroday  | work |
| 361 | -4  | Oneday   | work |
| 362 | -3  | Twoday   | work |
| 363 | -2  | Threeday | rest |
| 364 | -1  | Fourday  | rest |
| 365 | 0   | Zeroday  | work |
| 366 | 1   | Oneday   | work |
| 367 | 2   | Twoday   | work |
| 368 | 3   | Threeday | rest |
| 369 | 4   | Fourday  | rest |

: The days in Dek 36 in common years {#tbl-common}

#### Leap years {#sec-leap}

In leap years, `Dek 36` contains the last 6 days of the current year and the first 4 days of the subsequent year. Interestingly, `Dek 36` always contain 6 workdays and 4 restdays, just like every other `dek`, but in leaps years these days do not follow the typical order of `Schedule 3`. Leap years end in 3 restdays instead of 2, because Leap Day (`Day 365`) is always a holiday. Leap day is always a `Fiveday` and always followed by a `Zeroday`. After Leap Day, the normal rhythm of `Schedule 3` resumes. The table below shows the positive and negative `doty` numbers of the days in `Dek 36` in leap years, as well as their names and their types (work or rest).

| Pos | Neg | Name     | Type |
| --- | --- | -------- | ---- |
| 360 | -6  | Zeroday  | work |
| 361 | -5  | Oneday   | work |
| 362 | -4  | Twoday   | work |
| 363 | -3  | Threeday | rest |
| 364 | -2  | Fourday  | rest |
| 365 | -1  | Fiveday  | rest |
| 366 | 0   | Zeroday  | work |
| 367 | 1   | Oneday   | work |
| 368 | 2   | Twoday   | work |
| 369 | 3   | Threeday | rest |

: The days in Dek 36 in leap years {#tbl-common}

### Holidays {#sec-holidays}

Leap Day is a important holiday because it occurs only once every four years (except for years that start centuries not divisible by 400) and it results in the only time when there are 3 consecutive restdays in `Decalendar`. Another `Decalendar` holiday that only occurs in leap years is Dyad Day. At noon on Dyad Day, the positive and negative `.y` format `stamps` are the same (`+183.500` and `-183.500`), meaning that 183.5 days have passed in the year and 183.5 days remain in the year. Unlike Leap Day, Dyad Day is naturally a day off. Coincidentally, many Gregorian calendar holidays just so happen to also fall on `Decalendar` restdays. The table below lists 11 such holidays and their `doty`, `dotm`, and Gregorian calendar dates. Any holiday with a fixed (rather than floating) date in the Gregorian calendar can easily be added to `Decalendar`.

| Name               | doty | dotm | date        |
| ------------------ | ---- | ---- | ----------- |
| Valentine's Day    | 44   | 1+13 | February 14 |
| Cinco de Mayo      | 124⁺ | 4+04 | May 5       |
| Flag Day           | 164⁺ | 5+13 | June 14     |
| Juneteenth Day     | 169⁺ | 5+18 | June 19     |
| Independence Day   | 184⁺ | 6+03 | July 4      |
| Halloween          | 303⁺ | 9+30 | October 31  |
| All Saints' Day    | 304⁺ | A+00 | November 1  |
| Veterans’ Day      | 314⁺ | A+10 | November 11 |
| Christmas Day      | 358⁺ | B+24 | December 25 |
| Boxing Day         | 359⁺ | B+25 | December 26 |
| New Year's Eve     | 364⁺ | B+31 | December 31 |

: Gregorian calendar holidays that happen to fall on `Decalendar` restdays {#tbl-holidays}

## Programming languages

### JavaScript

A key tool in the dissemination of `Decalendar` will the JavaScript programming language. JavaScript is the language of the web and can run in any browser on any computer.

The three most basic applications are the Calendar Clock Display, the ICS file downloader, and the Pomodoro timer.

Button that switches between `dot` formats (`.y`, `.m`, and `.w`).
The basic elements of `Decalendar` include the `dot` formats (`.y`, `.m`, and `.w`) and the series described above should be easy to implement in any high-level programming language, but the implementation examples below will focus on JavaScript and Python. , while Python is a versatile language with strong builtin support for dates and times in its standard library. To implement the 

## Calculations


`Declock` groups together the 26 [Coordinated Universal Time (UTC) offsets](https://en.wikipedia.org/wiki/List_of_UTC_offsets) (-12:00 to +14:00) into 11 time zones (`Zone -5` to `Zone 6`) by converting hours into `dimes` ($offset \div 2.4$) and rounding to the nearest whole number. Fewer time zones make it easier to calculate `Declock` time zones thus contain 2-3 standard time zones are  we wanted `Dot 5` to match solar noon, the point when the sun reaches its highest position in the sky, as Zone 0, In some cases, the The other way we could UTC offset but additional time zones can be created simply by adding digits to the end of each time zone. The time zone for Seoul, South Korea is Zone 4.
obtain one of these time zones, we divide its 


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

