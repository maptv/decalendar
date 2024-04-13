**Slices**

  

Internally, Python determines the sliceLength (n): [https://www.quora.com/How-is-slicing-implemented-in-python](https://www.quora.com/How-is-slicing-implemented-in-python) and then adds the step that number of times.

  

With *x#n, the sliceLength is provided by the user.

  

Each component, except for the start, is preceded by a delimiter. The delimiter can be a letter (hilnsx) or an operator (:*<>#). The letters are all unique. The operators are all unique, except for the stop and step, which both use colon.

  

- stop 

- S
- :

- span

- H
- L
- >
- <

- size 

- N
- X
- #
- *

- step

- i
- :

  

With everything else, we need to calculate the sliceLength. With positive and negative steps, it is really hard to calculate. 

  

Using <, h, #, or n reverse the direction of all steps!

  

It is possible to use s or $ for stop but not step, so s or $ can bad used like <, >, h, l, *, x, #, or n to start a new series of steps.

Steps can only be denoted by :.

  

**Use l and h as an alternative to > and <** or → and ←. Interfaces can enter arrows when left and right arrow keys are pressed. Users can use gnu readline keyboard shortcuts to move one character left and right with ctrl b and ctrl f, move all the way left and right on the current line with ctrl a and ctrl e, delete one character left and right with ctrl h and d, deleted one word left and right with ctrl-w and alt-d, delete everything on the current line left and right with ctrl u and k. Clicking also works to move the cursor. The behavior of inserting arrow keys can be toggled off, but arrow key insertion should be enabled by default.

  

**Also, use x and n as an alternative to * and #.**

In fancy displays, the asterisk or times symbol can be centered like cdot. 

  

[https://en.m.wikipedia.org/wiki/Multiplication_sign](https://en.m.wikipedia.org/wiki/Multiplication_sign)

  

**Often letters are better, like in filenames, but arrow keys will be the most understandable when displayed, and easy-to-type operators will be good for future programming interfaces for example we could use operator overloading in Python to obtain functionality similar to pathlib: dec_object * integer : integer > float**

  

l stands for length or line or limit, looks like beam in many sans-serif fonts (which reminds me of Euclidean norm/distance), and matches vim movement to the right and the bottom of the screen. Ctrl l clears the previous commands in the UNIX shell, keeping the current command

  

l looks like 1, so ℓ or _λ (like wavelength or the length constant in neurobiology)_ or a capital L can used when displaying slices with spans. Users can write l or L, the algorithm will be case insensitive.

  

[https://en.m.wiktionary.org/wiki/%E2%84%93](https://en.m.wiktionary.org/wiki/%E2%84%93)

  

[https://en.m.wikipedia.org/wiki/Length](https://en.m.wikipedia.org/wiki/Length)

  

[https://en.m.wikipedia.org/wiki/Lebesgue_measure](https://en.m.wikipedia.org/wiki/Lebesgue_measure)

  

[https://physics.info/symbols/#:~:text=meter-,l,-%2C%20L](https://physics.info/symbols/#:~:text=meter-,l,-%2C%20L)

"ℓ"

  

h will remind people of hour, but the mnemonic device should be home (like the home key) or history (like the history UNIX command: history N gives the N previous commands starting from the most recent command). Users can write h or H, the algorithm will be case insensitive. h and H match vim movement to the left and the top of the screen. Ctrl h is backspace in the UNIX shell. H represents distance in calculus. Horizontal difference in math.

  

$ is the bash prompt which is on the left, but it is also the end of line which is on the right. Semicolon goes to the right, but its opposite is comma which should be used as a delimiter.

  

The letter x (like the multiplication symbol) can be used instead of *. Cdot (•) looks too much like period (.) and is not on typical keyboards. The letter n (like number sign) can be used instead of #. In vim, n goes to the right and down but N goes left and up, while x deletes to the right and X deletes to the left.

[](https://en.wikipedia.org/wiki/Number_sign#:~:text=in%20financial%20communications).-,mathematics,-edit)  

[https://en.wikipedia.org/wiki/Number_sign#:~:text=in%20financial%20communications).-,mathematics,-edit](https://en.wikipedia.org/wiki/Number_sign#:~:text=in%20financial%20communications).-,mathematics,-edit)

"Mathematics"

[](https://en.m.wikipedia.org/wiki/Cardinality)  

[https://en.m.wikipedia.org/wiki/Cardinality](https://en.m.wikipedia.org/wiki/Cardinality)

  

  

I should replace the contents of starts after every innermost loop!

Every new start value should be inserted immediately after the start value that was used to create it. The result of this is that new start values are interspersed between previous start values instead of being appended to the contents of starts.

- Replicate slicing, e.g. 3:9:2:1

- 3:9:2:1 = 3,5,6,8
- 3.4:9:2:1 = 3.4,5.4,6.4,7.4
- 3:9:2:1.5 = 3,5,6.5,8.5

- Add spans and sizes, e.g. 3:9:2:1>2

- 3:9:2:1l1 = 3,5,6,7
- 3:9:2:1l1 = 3,5,6,7
- 3:9:2:1l.1 = 3,3.1,5,5.1,6,6.1,7,7.1

  

A span/size of 0 always returns nothing:

3*0 = []

3L0 = [] 

  

When steps is the default ([1]):

A span/size of 1 returns the start:

3*1 = [3]

3L1 = [3]

A span/size of 2 returns the start & start + 1:

3*2=[3,4]

3L2=[3,4]

A span/size of 2 returns the start & start + 1:

3*2=[3,4]

3L2=[3,4]=3:5

  

When steps is not the default ([1]): 

Span and size behave differently:

3*2:2=[3,5]

3L2:2=[3]=3:5:2

  

Size is always the number of items returned, regardless of steps

  

The Dec slice algorithm takes a string and first removes any characters that are not :,*,#,<, >, a comma, or a number.

  

Any characters that are not numbers are referred to as delimiters.

  

The algorithm then splits at every comma and iterates through the resulting substring array.

  

First we extract every start from the substring array. Then we split on /[*#<>]/

  

After string splitting, each substring is then split before every delimiter (character that is not a number), preserving the delimiter: [https://stackoverflow.com/a/25221523](https://stackoverflow.com/a/25221523)

  

The first number of every substring is always start and is always captured without a delimiter. The second number can be stop, size, or span. The subsequent numbers can be step, size, or span. Every value other than start is captured with a delimiter.

  

After splitting substring into subsubstrings, negative start and stop values (if any) are converted to their positive equivalents by adding the length (N). If the value is still negative, it is replaced by zero:

max(N-4, 0)

Try again:

First, split on commas and then separate out the starts from the others. Next, split the others into limits and steps. The sum of steps is important because it determines the direction of the slice.

  

Each limit produces start and stop pairs, which are called ranges. Each subsequent limit, uses the ranges created by the previous limit. If there is 1 start value, 1 stop value, and no steps, there will be only 1 range. If there are steps, the first range will be the start and max(stop, start+step). If there are multiple steps, each step subsequent step is added to both values of the previous range.

  

Third try:

Commas separate strings, each string has an initial start value that is always included. Strings will also have at least 1 limit. Each limit creates indexes that are used by subsequent limits. I want to store these indexes in starts but had problems iterating over starts and appending to starts

  

Prepopulate starts with the correct nested start lengths, based on size

  

The first function returns an array of ranges (no steps because the steps are used to create the ranges).

  

The ranges can be floats [[0.3, 0.7], [1.3, 1.7], [2.3, 2.7], …]. The assumption is that a range includes all the values in between so a step is not necessary. 

  

Downstream functions use the ranges for various purposes: calendars will highlight the ranges as events (output in ical format), indexers will floor every number in the ranges ([.3,.7] => 0) to get integers for indexing (the output can be the indexes alone or a subarray if an array is passed as an argument), numerical processing functions can return floats with a specified level of precision (the default is the highest number of decimals in the start and stop, e.g. [0.3, 0.42] => [.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41]).

  

  

  

def frange(start, stop=None, step=None):

    # if set start=0.0 and step = 1.0 if not specified

    start = float(start)

    if stop == None:

        stop = start + 0.0

        start = 0.0

    if step == None:

        step = 1.0

  

    print("start = ", start, "stop = ", stop, "step = ", step)

  

    count = 0

    while True:

        temp = float(start + count * step)

        if step > 0 and temp >= stop:

            break

        elif step < 0 and temp <= stop:

            break

        yield temp

        count += 1

  

  

for i in frange(1.5, 5.5, 0.5):

    print("%g" % i, end=", ")

print('\n')

  

for i in frange(-0.1, -0.5, -0.1):

    print("%g" % i, end=", ")

print('\n')

  

for num in frange(0.5, 0.1, -0.1):

    print("%g" % num, end=", ")

print('\n')

  

for num in frange(0, 7.5):

    print("%g" % num, end=", ")

print('\n')

  

for num in frange(2.5, 7.5):

    print("%g" % num, end=", ")

print('\n')

  

  

commas

starts

others

limits

stairs

totals

ranges

  

If there are no steps before another limit (either span or size), the start AND stop are replicated with each step of the span or size. 

  

The first limit will only have 1 pair and then if we are not on the last iteration 

  

Limits 

Schedule 3

start:stop*size:step

start:stop>span:step

start:stop:step>span

start>span*size:step

start>span>span:step

  

.3:.7*:::3

.3:.7>:::3

.3::::3>.4

.3>.4*:::3q

.3>.4>:::3

  

If there is a span or size instead of steps after start and stop, start and stop are repeated using any steps that follow the size or span. In other words, if there are no steps on the left hand side of span or size, repeat start AND stop.

  

Every instance in between start and stop becomes a starting point that gets repeated size times or across span step by step.

  

  

If a colon occurs before span or size delimiters

the very first colon and span or size delimiters, and finally colons.

Everything after span

  

The first delimiter determines whether we are using stop, span, or size.

  

The demo app has the constraint that only integers can be used.

  

Next, the algorithm fills in any missing values with defaults:

  

- Step: [1]
- Start:

- if the sum of steps is positive: 

- 0

- otherwise: 

- N

- Stop:

- if the sum of steps is positive: 

- N

- otherwise: 

- 0 (inclusive) 

- Size:

- if delimiter is * (star/splat/asterisk):

- if the sum of steps is positive: 

- (N - start) / stepSum

- otherwise: 

- (start + 1) / |stepSum|

- If delimiter is # (hash/sharp):

- if the sum of steps is positive: 

- (start + 1) / |stepSum|

- otherwise: 

- (N - start) / stepSum

- Span:

- if delimiter is > (greater-than):

- if the sum of steps is positive: 

- N - start

- otherwise: start + 1

- if delimiter is > (less-than):

- if the sum of steps is positive: 

- start + 1

- otherwise: 

- N - start

9<8 start=9, span=8, stop=1, stop = start - span

9>8 start=9, span=8, stop=17, stop = start + span 

From the defaults, we see a pattern emerge: the size is equal to the span divided by the absolute value of sum of the steps:

size = span / abs(sum(steps))

  

After filling in missing values, the algorithm creates an array of indexes for each substring and then returns an array of index arrays.

  

 Instead of stop, we can use a duration with >span or <span, or a certain number of repetitions with *size or #size. Unlike step, span and size treat everything on their left hand side as a start. Span and size cycle through all of the steps on their right hand side. If there are no steps on the right hand side, span and size use a step of 1. It is not necessary to use negative steps with span and size, because > and * have reversed versions: < and #. Using < and # with a negative step is the same as using > and *, and vice versa. In other words, a negative step simply reverses the direction of the sign. If there are multiple steps, we use their sum to determine the direction. If the sum of steps is zero, we only go through a single cycle to avoid an infinite loop. 

  

In Python, a step of zero raises an ValueError. In Dec slices, a step of zero repeats the previous value.

:4:0 = 0,0,0,0

:4:0:1 = 0,0,1,1,2,2,3,3

  

Mixing positive and negative steps creates sequences that are not ordered least-to-greatest or greatest-to-least.

:4:2:-1 = 0,2,1,3

  

When alone, all of the symbols return everything:

: = 0:N

* = 0:N

> = 0:N

# = 0:N

< = 0:N

  

An empty set is any symbol followed by zero:

:0 = []

*0 = []

>0 = []

#0 = []

<0 = []

  

With a step of 1, positive values of span, stop, and size are synonymous:

start=0,stop=4,size=4,span=4,step=1

:4 = 0,1,2,3

*4 = 0,1,2,3

>4 = 0,1,2,3

  

With a negative step, default values of span, stop, and size are synonymous:

start=3,stop=ø,size=4,span=4,step=-1

3::-1 = 3,2,1,0

3#    = 3,2,1,0

3<    = 3,2,1,0

start=6,stop=ø,size=4,span=7,step=-2

6::-2 = 6,4,2,0

6#:2  = 6,4,2,0

6<:2  = 6,4,2,0

  

If step is more than 1, positive values of span and stop are still synonymous, but size may produce a different result:

start=0,stop=4,size=4,span=4,step=2

:4:2 = 0,2

*4:2 = 0,2,4,6

>4:2 = 0,2

  

Possible combinations without a step:

start:stop*size

start:stop#size

start:stop>span

start:stop<span

  

start*size*size

start*size#size

start*size<span

start*size>span

  

start#size*size

start#size#size

start#size<span

start#size>span

  

start>span*size

start>span#size

start>span>span

start>span<span

  

start<span*size

start<span#star

start<span>span

start<span<span

  

Possible combinations with 1 non-comma delimiter after 1 step:

start:stop:step>span

start:stop:step<span

start:stop:step*size

start:stop:step#size

  

start*size:step<span

start*size:step>span start*size:step*size

start*size:step#size

  

start#size:step<span

start#size:step>span start#size:step*size

start#size:step#size

  

start>span:step>span

start>span:step<span start>span:step*size

start>span:step#size

  

start<span:step>span

start<span:step<span

start<span:step*size

start<span:step#size

  

Every 5 days:

::5

Schedule 3:

::5*3

::5>3

::::3

Schedule 4:

::5*4

::5>4

:::::2

  

Use the proportion symbol, ∷, to increase readability by visually joining the steps?

∷∷3

∷∷:2

  

All of the example patterns as slices:

Schedule 4: ::1:1:1:2 :::::2 

Schedule 3: ::1:1:3 ::::3

Schedule 2: ::1:4 :::4

Prime: 2::1:2:2:5 2:::2:2:5

Prime: 2:::2:2:5

Composite: ::1:1:1:2:2:3 

:::::2:2:3

Composite: 4::2:2:1:5 4::2:2::5

Odd: 1::2 1>:2 1*:2

Even: ::2 >:2 *:2

Non-Composite: 0,1,2,3,5,7

  

Non-Composite: 0,1,2,3,5,7

:::::2:2:3

:3>:10,3:8:2>:10

  

The best approach: Use steps to create starts for a subsequent span. Can be chained as many times as needed, e.g. 1 time for 1 Pomodoro or 2 times for 2 or more pomodoros:

  

1 Pomodoro starting at Dot 3 and going up to Dot 4 on the given Day:

.3>.1:.02>.017

.3>10%:2%>1.7%

.3:.317,.32:337,.34:357,.36:.377

  

2 Pomodoros starting at Dot 3 and going up to Dot 5 on the given Day:

.3>.2:.1>.08:.02>.017

1. .3
2. .3:.38
3. .3:.317,.32:337,.34:357,.36:.377

  

1. .4
2. .4:.48
3. .4:.417,.42:437,.44:457,.46:.477

  

3 Pomodoros starting at Dot 3 going up to Dot 6 on the given Day:

.3>.3:.1>.08:.02>.017

1. .3
2. .3:.38
3. .3:.317,.32:337,.34:357,.36:.377

  

1. .4
2. .4:.48
3. .4:.417,.42:437,.44:457,.46:.477

  

1. .5
2. .5:.58
3. .5:.517,.52:537,.54:557,.56:.577

  

  

Splits are not necessary at all, just use steps. Scan is not that useful, it saves zero (!) characters in Schedule 3 and 1 character in Schedule 4:

::::3

:&2:3

  

:::::2

:&3:2

The only thing we can say about scan is that it may be more readable: It provides a number and allows us to avoid counting the colons - 1.

  

Span may increase readability because you don’t have to skip a colon when counting

>∷∷2

>::::2

  

What is the default scan? It should not be 1, because we would just use step, which has a default step of one. It should be 2, because scans of 3 are very rare. Replacing :: 

  

If a scan is incomplete, is the entire scan is dropped? If scan is an alias for multiple steps, e.g. &3 = :1:1:1, partial scans should be possible.

  

  

  

Since a step of 1 is the default, :1:1:1 can be written :::, but too many colons is hard to read so &3 is preferable to :::. For consistency, we should always use scan for 2 or more colons.

  

It may be more readable to combine small slices with commas than make a huge one, but it should be possible to create everything with one slice

  

Start

- span is like the opposite of step: it

- includes all but the last item
- uses all previous values as starts
- acts like stop to create an area for scanning, skipping, and stepping
- sets the default direction for scanning, skipping, and stepping

- scan is like step except it includes everything along the way, including the last item
- skip is like step except we do not include anything.

- A positive skip shifts the frame forward when cycling, a negative skip shifts the frame back

Skip forward: !

Skip backward: ¡ or i

Scan forward: &

Scan backward: | 

  

If everything is true, | gives the left hand side, while & gives the right hand side

  

Is skip necessary? A frameshift may occur when trying to follow Gregorian dates across months. We go in steps of 30, but then add a skip of 1 when there is a month with 31 days, when we want to go back to 30 we add a skip of -1; in February we would add a skip of -2 in common years and -3 in leap years. In Decalendar, there may not be any use cases for skip, because any regular pattern can use step instead of skip.

  

  

  

  

  

The default skip should be 1.

>¡:31!

Shift the frame back one with ¡ by going -1 but not collecting anything, then go forward (same as going forward 30), after the first cycle, the skips cancel each other out. Users can write i instead of ¡.

  

How do we signal that we are done cycling through? By using scan

  

Using start>span or start>span makes it so we don’t have to use negative steps or scans, because the values go left to right even if their positive indexes are descending.

  

Instead of skip use step:

  

start is included, so scan starting after start

  

This makes scan like step.

  

The Decalender work schedule 3: >&2:3 or >:1:1:3

  

&2 replaces :1:1 (2 steps of 1), which combines the two systems. Introducing & as the scan operator allows > to be reused as span at the end.

  

The first innovation is having multiple steps in slices, the second innovation is replacing multiple steps of 1 with scans, e.g. :::::2 or ::1:1:1:2 could be :&3:2. The third innovation is using span to 1) avoid having to use negative steps and 2) provide a duration for multiple start times. Mixing positive and negative scans/steps can cause issues, therefore it is better to use span than stop so that negative steps become unnecessary.

  

Switching from save and step to span means we want to use every previous time point as a start. Any sequence that wants durations should include span at the end. stop cannot be used for this purpose because it cannot be distinguished from step. Span starts the cycle again and can always be followed by any number of scans and/or steps.

  

Start,span,scan

  

start:stop>

  

save 3, skip 3: >>3 

  

The span and stop components of slices are interchangeable, as are scan and step. The scan and the step can contain multiple values separated by commas. In both cases, we cycle through the provided values but while step values do not include values in between steps, scan values alternate between including every element along the way and skipping every element along the way. 

  

Left-span (<span) is similar to choosing a later index as the start and an earlier index as the stop, either one should then be combined with a left-scan (<scan) or a negative step. Otherwise, the result will be an empty array. 

  

(span = stop - start, stop = start + span * sign(step), start = stop - span), 

  

start>span = arr[start:][:span]

start<span = arr[start::-1][:span]

start<-span = start>span

start>-span = start<span

  

-1<9 = -1:-10:-1, start=-1, span=9

-1<9 = -10:-1, stop=-1, span=9

9<9 = 9:0:-1, start=9, span=9

9<9 = :9, stop=9, span=9

  

arr = list(map(chr, range(65, 91))

arr[9:0:-1]

arr[9::-1][:9]

  

arr[9::-1][:9]