
The current values, names, and uses of the most common `Declock` time units are shown in @tbl-intro-units:

| Unit   | Time     | Duration       |
|--------|----------|----------------|
| doty   | 306      | 306.000+0      |
| deco   | 1969+306 | 1969+306.000+0 |

: Comparison of `doty` and `deco` dates and `stamps` {#tbl-2x2}

- \${styledDime}, `dime`: which are used for `Declock` time zone offsets,
- \${styledCent},`cent`: 
- \${styledMil},`mil`: 
- \${styledPhrase}, and`phrase`: 
- \${styledBeat}.`beat`: 
`Dimes` are used for `Declock` time zone offsets, `cents` are 1 percent of the day, `mils` provide the right level of precision for displaying time on clocks🕰️and⌚️watches, while `phrases` and `beats` are inspired by musical🎶[phrases](https://en.wikipedia.org/wiki/Phrase_(music)#:~:text=a%20phrase%20(Greek%3A%20%CF%86%CF%81%CE%AC%CF%83%CE%B7)%20is%20a%20unit%20of%20musical%20meter%20that%20has%20a%20complete%20musical%20sense%20of%20its%20own) and@sec-unit provides more information on the various `Decalendar` and `Declock` units.

Hover🖱️over or tap📲each part of this `doty` to see a [tooltip](https://en.wikipedia.org/wiki/Tooltip) with a [brief]{data-toggle="tooltip" title="Here's a tooltip"} [description]{data-toggle="tooltip" title="Here's another tooltip"}.

The main components of a `doty` are the
1. `Decalendar` date, [integer part](https://en.wikipedia.org/wiki/Decimal#:~:text=The%20integer%20part%20or%20integral%20part%20of%20a%20decimal%20numeral%20is%20the%20integer%20written%20to%20the%20left%20of%20the%20decimal%20separator), which is the , and the
2. [fractional part](https://en.wikipedia.org/wiki/Decimal#:~:text=The%20part%20from%20the%20decimal%20separator%20to%20the%20right%20is%20the%20fractional%20part%2C%20which%20equals%20the%20difference%20between%20the%20numeral%20and%20its%20integer%20part.), which is the `Declock` time.

Each main component has subcomponents:
1. `Decalendar` date
    A. 

size of 5. If we want to select many days-of-the-`dek`, using a `spread` will be easier. in @exm-intro-dotd, we can select A , while a `step` of 5 selects a pair of analogous days!
 The `pently` schedules are better expressed as `spreads`, as shown in @tbl-intro-dotd.

#### @tbl-intro-dotd

::: {.callout-note collapse="false" title="Click to toggle table expansion" icon="false"}
| Schedule | slice      | spread           |
| ------   | -------    | ---------------- |
| 2        | :365:::3   | >>2>3            |
| 3        | :365::::2  | >>3>2            |
| 4        | :365:::::1 | >>4>1            |
| 5        | :          | >                |

: `Pently` schedule workdays in `slice` and `spread` form {#tbl-intro-dotd}
:::

First n days in each pent
n = 1 | ::10
n = 2 | ::10
n = 3 | ::10
n = 4

Each `dotd` has its own column in @fig-intro-dotd. We can easily select all of the columns with both `slices` and `spreads`, but if we want a subset of columns, `slices` are best for selecting one or two columns and `spreads` are better for more than two columns. The first column in @fig-intro-dotd represents the first `dotd`, `Day` `0`, and can be selected by the slice `::10` and the spread `>>1>9`. in 
The current `deco` timestamp is \${styledYear}+\${setStyle(dotyDate, d3.schemePaired\[1\])}.\${setStyle(dotyTime, d3.schemePaired\[2\])}.

https://en.wikipedia.org/wiki/Art_Deco#:~:text=Art%20Deco%2C%20short,to%20early%201930s.

 The name `deco` is also reminiscent of the [Art Deco](https://en.wikipedia.org/wiki/Art_Deco#:~:text=Art%20Deco%2C%20short,to%20early%201930s.) style.
 5 blog posts, not 3

Topics are pre-defined:

Probability theory and random variables
Histogram
Clustering
DBSCAN labels for scatter plot
Linear and nonlinear regression
line on scatter plot
Classification
ROC, PR, Confusion Matrix
Anomaly/outlier detection
DBSCAN labels for scatter plot
Learning objectives: 1. Use various techniques related to preprocessing prior to the use of machine learning models. 2. Describe the probability theory and random variables. 3. Identify the common tasks in machine learning/data mining models for clustering. 4. Analyze multiple linear and nonlinear regression. 5. Describe the algorithms, theories, and applications related to machine learning/data mining for classification. 6. Detect anomaly/outlier behavior and the treatment techniques.

 [](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations).
 (`day.declock`)
You can press this button: \${Inputs.button("Copy current timestamp", {value: null, reduce: () =\> navigator.clipboard.writeText(deco.slice(0, 14))})} to copy the current `deco` timestamp to your clipboard. You can also configure your [clipboard manager](https://en.wikipedia.org/wiki/Clipboard_manager#:~:text=A%20clipboard%20manager%20is%20a%20computer%20program%20that%20adds%20functionality%20to%20an%20operating%20system%27s%20clipboard.) to paste in the current date, time, or timestamp whenever you press a keyboard shortcut. Code that enables the [CopyQ](https://hluk.github.io/CopyQ/) clipboard manager to paste in the current `deco` timestamp is available at the top of @sec-ojs-code-deco in the appendix.
Checkbox inputs for selecting the days of the dek: 10 checkboxes for slices and another 10 for spreads. Clicking on a checkbox resets start, stop, and span to the default value: 0, 366, and 366.

Creating continuous intervals, with no breaks in between, is equally easy with `slices` and `spreads`, but `slices` are both useful for   or selecting dates separated by $step-1$ dates. Spreading on the other hand The `start:stop` and `step` inputs in @exm-intro-dotd enable . In @fig-intro-dotd, `deks` are in separate rows, the days-of-the-`dek` are stacked in columns, and each `Decalendar` date has its own cell. `Decalendar` dates that are included in the interval are highlighted in orange, and all other `Decalendar` dates are labeled blue. Try setting a `step`👣of 10 to select all instances of one of the days-of-the-`dek`!
 Click the [Download button](https://observablehq.com/@jeremiak/download-data-button) to obtain the schedule data used to create @fig-intro-dek. To download the data as a [JSON](https://en.wikipedia.org/wiki/JSON) file instead of a [CSV](https://en.wikipedia.org/wiki/Comma-separated_values), change the file extension in the filename text input from `.csv` to `.json`. @sec-sched provides more information on `Schedule` `3` and the other `pently` schedules.


The fact that any `Decalendar` date and `Declock` time can be expressed as a single number means that we can "slice" out any portion of the year using 

and work exactly like in the [Python programming language](https://en.wikipedia.org/wiki/Array_slicing#1991:_Python).

 .4 (9.6 hours) is the `span`,
`.3>.4`, or `.7<.4`, 
When the `start:stop` syntax is `slice`, whereas 


`Deco` dates and timestamps (`decos`) are flexible, concise, readable, and powerful. The `doty` component of `decos` does the job of  !

two pairs of [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=The%20Gregorian%20calendar%20is%20the%20calendar%20used%20in%20most%20parts%20of%20the%20world.) numbers:


Together, the `dek` (\${styledDek}) and `dotd` (\${styledDotd}) numbers 
The [integer part](https://en.wikipedia.org/wiki/Decimal#:~:text=The%20integer%20part%20or%20integral%20part%20of%20a%20decimal%20numeral%20is%20the%20integer%20written%20to%20the%20left%20of%20the%20decimal%20separator) of the `doty`, which consists of , is the `Decalendar` date.

### Date  {#sec-intro-doty-date}

The third digit of the `Decalendar` date is the day-of-the-`dek` (`dotd`) number. The .

The `Decalendar` date therefore functions as both the [calendar date](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates) (`mm-dd`) and the [week date](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) (`Www-d`) in `Decalendar`.

### Date  {#sec-intro-doty-date}

When a date and a time are combined, they form a [timestamp](https://en.wikipedia.org/wiki/Timestamp#:~:text=A%20timestamp%20is%20a%20sequence%20of%20characters%20or%20encoded%20information%20identifying%20when%20a%20certain%20event%20occurred%2C%20usually%20giving%20date%20and%20time%20of%20day%2C%20sometimes%20accurate%20to%20a%20small%20fraction%20of%20a%20second.). The current `Decalendar` timestamp, , provides more than just the current date and the current time.

`Decalendar` dates are the `Decalendar`

Similarly, `Declock` times are the digits after the decimal. `Declock` times can have any number of digits, depending on the desired precision. A 5-digit Declock time provides more precision than hours, minutes, and seconds.

The first 4 digits are the number of `phrases`, which provide more precision than minutes, while 4 digits 

The `doty` date provides the `Decalendar` equivalent of a month and week in itand the equivalent. .  the is more more concise than a timestamp that includes months, days, hours, minutes and seconds: the `mm-ddThh:mm:ss` format, \${styledIsoDate}T\${styledIsoTime}. `Doty` timestamps are more **precise** and **concise** than timestamps that include hours, minutes, and seconds. The current timestamp in the , provides the current month and , but not  `dotm` the current week of when we comp **The `doty` is like 5 numbers in 1!**
When we compare 

The of the current `doty` date are the current : , while the last digit is the current : . `Deks` are groups of 10 days that fulfill the role of both months and weeks in `Decalendar`. The `dotd` serves as both the and the in `Decalendar`.



The `doty` dates simplify various tasks, such as obtaining the current season. The `doty` [intervals](https://en.wikipedia.org/wiki/Interval_(mathematics)#Notations_for_intervals) of the seasons are $\left[20, 110\right)$🌼🍁, $\left[110, 205\right)$☀️❄️, $\left[205, 295\right)$🍁🌼, and $\left[0, 20\right)\cup\left[295, 365\right]$❄️☀️. Using these intervals, we can see that it is now \${season\[0\]}in the Northern Hemisphere and \${season\[1\]}in the Southern Hemisphere. The current part of this season (\${zodiac\[0\]} [tertile](https://en.wiktionary.org/wiki/tertile)) is associated with the \${zodiac\[1\]}[Zodiac](https://en.wikipedia.org/wiki/Zodiac) sign. @sec-subyear discusses seasons and other parts of the year.


The `Declock` time in @exm-doty increments once per `Declock` `beat`, which is like a heart❤️beat or a musical🎵[beat](https://en.wikipedia.org/wiki/Beat_(music)#:~:text=the%20beat%20is%20the%20basic%20unit%20of%20time) with a constant [rate](https://en.wikipedia.org/wiki/Heart_rate#:~:text=The%20American%20Heart%20Association%20states%20the%20normal%20resting%20adult%20human%20heart%20rate%20is%2060%2D100%20bpm.) or [tempo](https://en.wikipedia.org/wiki/Tempo#Basic_tempo_markings:~:text=Adagietto%20%E2%80%93%20slower%20than,56%E2%80%93108%C2%A0bpm)) of 69.4̅ (69⁴/₉ or 625/9) beats per minute. `Beats` can be used to measure durations such as the time since this webpage was loaded: \${styledTickTime}.



The `deco` parsing code in the [appendix](#appendix) defines the rules for storing dates as `Decalendar` `ordinals` (`decos`). Notably, a `deco` consisting of a single number without a plus (+) or minus sign (-) is interpreted as a `doty` and will be appended to the current year. `Decos` can be written with negative `doties`, but are always displayed with positive `doties`. `Doties` are zero padded to 3 digits, but years are not.

Both the year and the `doty` in a `deco` can be fractional. Just like [fractional days](https://en.wikipedia.org/wiki/Decimal_time#Fractional_days) can take the place of a month, `dotm`, hour, minutes, and second, fractional years can replace year, month, and `dotm` dates. In other words, fractional years can be a convenient way to express a date in a single number.

While they are not very useful in `decos`, Multiples of a fifth (⅕, .2) of a year are of interest because they result in `doties` that are multiples of 73.

in the `Decalendar` fractional year format (`year.yyy`) allows us to avoid parsing `Decalendar` `ordinals` (`decos`). Year dates cannot include times and are only used when it is convenient to store a `deco` as a single number. Enter a `deco` or `year-mm-dd` date to see a custom year date. Enter a year date to turn it into a `deco` and `year-mm-dd` date.
