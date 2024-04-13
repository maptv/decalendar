**Dec**

  

Dec:

- Dechronometry (dech for short):

- Decalendar: Gregorian calendar alternative; dates as years since 1 BC and days since or remaining until March 1 (Day 0)
- Declock: quadravigesimal-[sexagesimal](https://en.m.wikipedia.org/wiki/Sexagesimal) (qs) or [duodecimal](https://en.m.wikipedia.org/wiki/Duodecimal)-[sexagesimal](https://en.m.wikipedia.org/wiki/Sexagesimal) (ds) time alternative; time as fractional days that have passed or that remain

- Decircle: 

- Decoordinate: a [geographic coordinate system](https://en.m.wikipedia.org/wiki/Geographic_coordinate_system) (GCS); longitude and latitude as proportions.
- Decompass: Azimuth (azi) as compass degrees divided by 360

- Decycle: frequency
- Decelerity: Speed/velocity (vel) in kilometers per centiday (kpc)
- Decelestial: a horizontal [celestial coordinate system](https://en.m.wikipedia.org/wiki/Astronomical_coordinate_systems): the azimuth and altitude of celestial bodies, like the sun and the moon, in millispheres.
- Decut: array slicing for Dech and Decirc

- limitSlice
- multilimitSlice
- commaSlice

- Decomplications: Decalendar dates and Declock times for digital watches


Elapsed time:

Instead of 2h ago, 1dd or .1d ago. Decimals are probably better until everyone is comfortable with deciday, centiday, and milliday units:

- 6md (.006) ago 
- 4cd (.04) ago
- 2dd (.2) ago

Moon info:

At sunrise, if the moon is rising at the same time (or there-bouts), it’s New Moon.
If it’s Noon, and the moon is just rising… it’s the 1st quarter.
If it’s sunset, and the moon is just rising… it’s full moon.
If it’s midnight, and the moon is just rising… it’s the 3rd quarter.

Moonrise and moonset: time in millidays like with sunrise and sunset
Moon phases: 0 to 9 (new moon is 0 and full moon is 5)

Time zones:

Apart from different time zones, Declock times can differ from UTC times because of Daylight Savings Time (DST). Declock times never shift! The standard DST practice of switching to a different time zone (e.g. EST to EDT) for certain parts of the year (e.g Day 9 to Day 277) could work for Declock, but that goes against the simplicity of determining time zones only by longitude. Of course, a country can decide to only have 1 time zone within its borders (China does this with UTC time zones). In fact, it would be OK to have anyone use whatever time zone they want as long as times are always provided with time zones.

It is easy to convert times across time zones: just increment or decrement the one-digit time zone along with the first digit of the time.

Dash:

The text below describes the Dec dashboard observable app I plan to make at a currently unspecified time. The dashboard can be the main way to explain how Dec works. Once I create it, it will be better than the barchart clock and the scrubbers in my first attempt to introduce Dec: [https://maptv.github.io/dec/](https://maptv.github.io/dec/). Since that first attempt, I had some new ideas, such as having turns be the base unit for everything, and changed my mind about some previous aspects, notably not have spreads be separate from slices. At minimum, the dashboard should show a map with a compass rose and allow users to change the longitude, latitude, and orientation as in the map-orientation notebook. If the dashboard allows for changing the season, day, and time, I could bring in the last 3 visualizations from the daylight notebook ([https://observablehq.com/@dbridges/visualizing-seasonal-daylight](https://observablehq.com/@dbridges/visualizing-seasonal-daylight)). The 2 visualizations on the right would help to explain that years are turns of the Earth around the Sun (top right visualization) and that days are turns of the Earth on its axis (bottom left visualization). Also, the daylight visualization helps explain how sunrise and sunset vary by location and day of the year (doty). It is great to have a map for selection of the location, but I want the map to also be able to rotate to change the orientation. Ideally, I would have multiple ways to interact with the dashboard:

- sliders for longitude, latitude, orientation, time, and a slider that changes both doty and season, because they are essentially different ways to show the same thing.
- daylight visualization chart with red dot and line for changing doty/season and time
- a map with a red dot for changing longitude and latitude (the map does not have to respond to orientation if the 2 globes on the right of the daylight notebook respond to orientation)

There should be a button to reset the orientation to the default Earth's tilt (65 milliturns or 23.4 degrees) and reset everything else to the current day/season and time. There is no reason to make the year interactive, because changing the year will not affect anything else. 

A simple visualization for the moon phase (like in [https://observablehq.com/@martien/moon-phases](https://observablehq.com/@martien/moon-phases)) may be nice.

A line plot with dual y-axes (altitude and azimuth) could show the position of the sun, as two lines (altitude and azimuth), and the position of the moon, as another two lines (altitude and azimuth), throughout the chosen day. 

An alternative to the line plot could be a sunpath visualization which shows both altitude and azimuth and gives an idea of the sun's path: [https://observablehq.com/@d3/solar-path](https://observablehq.com/@d3/solar-path). 

The line is easier to read and by convention time should be on the x-axis, plus it is really intuitive to have altitude be on the y-axis. Maybe it makes sense to have a dual labels for the x-axis (instead of dual y-axes) with time not changing but the azimuth changing based on the season/doty and global location like in [https://www.timeanddate.com/sun/usa/pittsburgh](https://www.timeanddate.com/sun/usa/pittsburgh) (maybe the little sun and moon icons that move upon hover could have little arrows that point in the direction of their azimuth). Unlike the sunpath diagram, a line plot would allow for showing the sun and moon on a single plot, which would show how the moon phase can predict the relationship between sun and moon position, i.e. during a new moon the altitudes should cross the horizon (altitude = 2.5) at the same time.

With the daylight notebook visualizations, the line plot (and maybe a sunpath diagram), the moon phase, and the compass rose, all of the dashboard values except year and (solar and lunar) distance will be visualized. 

A scrubber that moves back and forth through the doty/season would be great.



Dec is a system that measures⏳time,📍position,🧭orientation,📐angles, and🔄cycles in units called turns. The dashboard below demonstrates the use of turns for various Dec measurements. 

  

[https://en.m.wikipedia.org/wiki/Turn_(angle)#:~:text=One%20turn%20(symbol%20tr%20or,(symbol%20rev%20or%20r).](https://en.m.wikipedia.org/wiki/Turn_(angle)#:~:text=One%20turn%20(symbol%20tr%20or,(symbol%20rev%20or%20r).)

  

You can hover over or tap each dashboard component to see the definition of a turn in the given context. Notably, years are Earth’s turns around the Sun and days are Earth’s turns on its axis.

  

Years and days are shown as integers, because their fractional parts, the numbers after the decimal, are displayed separately. The fractional part of the year is the meteorological season and the fractional part of the day is the time. 

  

Each component has a starting point that is equal to 0 turns. For example, years start at Year 0 (1 BC), days start at Day 0 (March 1), times start at midnight, moon phases start with a new moon, seasons start with Spring in the Northern Hemisphere and Fall in the Southern Hemisphere, and orientations and azimuths move clockwise from North.

[](https://en.m.wikipedia.org/wiki/Season#Meteorological)  

[https://en.m.wikipedia.org/wiki/Season#Meteorological](https://en.m.wikipedia.org/wiki/Season#Meteorological)

  

[https://en.m.wikipedia.org/wiki/Decimal_time#Fractional_days](https://en.m.wikipedia.org/wiki/Decimal_time#Fractional_days)

  

Most of the dashboard components are dependent on the longitude, because time zones are determined by rounding the longitude to the nearest deciturn (tenth of a turn). On the map, time zones are separated by the meridians (lines that run from South to North).

  

You can adjust the longitude, latitude, and orientation with sliders next to the map. To move the red🔴dot to your current location, click or tap the Locate button and share your location via your browser.

  

By interacting with the sliders, you may begin to notice the beauty of measuring everything in turns. Notably, a deciturn change in longitude always results in a deciturn change in the time! 

  

In the Western parts of time zones, sunrise, moonrise, solar noon, lunar noon, sunset and moonset occur later in day than in the Eastern parts of the same time zone. Longitude has no effect on daylight duration because it causes sunrise and sunset to shift together in the same direction.

  

Unlike longitude, latitude does not affect time zones and instead determines daylight duration. Moving away from the Equator will cause sunrise and sunset times to become closer or further apart, depending on the season and hemisphere. 

  

In contrast to longitude and latitude, changing orientation will not affect any other value. In the context of orientation, 0 turns is North, .25 turns is East, .5 turns is South, and .75 turns is West.

  

Solar and lunar azimuth, the direction of the  point in the horizon below the Sun and the Moon, respectively, have the same definition of a turn as orientation. Just like seasons, azimuths in the Northern and Southern Hemisphere are shifted in relation to each other by about a half-turn.

  

At the center of any time zone in the Northern Hemisphere, the time and solar azimuth will be roughly equal throughout the day. In contrast, the time and solar azimuth will be shifted in relation to each other by about a half-turn at the center of any time zone in the Southern Hemisphere.

  

Azimuths begin to shift North after the Day 111 solstice and then South after the Day 295 solstice. On solar equinoxes (Day 19 and 205), the Sun rises exactly to the East and sets exactly to the West, meaning that the solar azimuth at sunrise is exactly .25 turns and the solar azimuth at sunset is exactly .75 turns.

  

[https://observablehq.com/@d3/solar-path](https://observablehq.com/@d3/solar-path)

  

Such seasonal variation is minimal near the Equator. At the center of any time zone (where the deciturn longitude is an integer) on the Equator (where the deciturn latitude is 2.5), both the time and the solar azimuth will always be about .25 turns at sunrise and about .75 turns at sunset!

  

At solar midnight, the solar azimuth is exactly North in the Northern Hemisphere and exactly South in the Southern Hemisphere. The solar azimuth is the exact opposite of solar midnight at solar noon (exactly South in the Northern Hemisphere and exactly North in the Southern Hemisphere).

  

Azimuths complete a full turn every day, in contrast to altitudes which move up and down from their respective minimums to their respective maximums. Altitudes are similar to latitudes in that 0 turns means directly below and .5 turns means directly above.

  

Unlike azimuths and altitudes, solar and lunar distances are min-max normalized to convert kilometers, miles, or any other distance units to turns. Using min-max normalization for unit conversion works for anything that cycles between a minimum, such as aphelion, and a maximum, like perihelion.

  

Interestingly, the solar and lunar azimuths are shifted in relation to each other by an amount corresponding to moon phase. Solar and lunar azimuths are synchronized during a new moon (0 turns) and shifted by full turn (moonrise at sunset, etc.) during a full moon (.5 turn).

  

[https://en.m.wikipedia.org/wiki/Moonrise_and_moonset](https://en.m.wikipedia.org/wiki/Moonrise_and_moonset)

  

|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
|Year|Season|Day|Time|Longitude|Latitude|Orientation|
|2024|145|043|84725|23476|36432|07426|
|Daylight duration|Sunrise|Solar noon|Sunset|Distance|Altitude|Azimuth|
|500|250|500|750||||
|Moon phase|Moonrise|Lunar noon|Moonset|Distance|Altitude|Azimuth|
|000|250|500|750||||

Put compass rose next to map

[https://observablehq.com/@jrus/compass-rose](https://observablehq.com/@jrus/compass-rose)

Use Map that can roll as orientation changes

[https://observablehq.com/@dec/map-orientation](https://observablehq.com/@dec/map-orientation)

  

While the year and the date are shown as full turns, the other dashboard components show subdivisions of turns such as milliturns (thousandths of a turn). Subdivisions make it possible to drop the decimal and thus show values in a cleaner, more compact manner.

  

Values in Dec can have any number of digits to match the desired level of precision. Increasing the number of digits increases the precision, but at some point adding additional digits will no longer be worth the burden of dealing with longer numbers.

  

Milliturns are 2.77777 times more precise than degrees and thus provide sufficient precision for most purposes. Time and global position measurements may benefit from the 100-fold increased precision of centimilliturns (hundredths of thousandths of a turn).

  

Global coordinates in centimilliturns are precise enough to identify a specific neighborhood on a map. A centimilliturn of time is almost 16% more precise than a second and is called a beat because it resembles a heartbeat or musical beat.

  

  

  

  

  

  

  

A year, day, time, longitude, latitude, and orientation can be combined to store timestamp and geolocation information. This combined format is year+day.times.lon.lat.ori.

  

A year can be a timestamp on its own and milliyear precision is enough to identify days.

  

  

  

  

  

Value boxes for year, date, time, time zone, longitude, latitude, sun characteristics (sunrise, solar noon, solar midnight, sunset, sun azimuth, sun altitude), moon characteristics (moon rise, culmination, set, proximity, azimuth, altitude, and phase), and

Map with red circle marker

  

Depending on the context, turns have different interpretations.

  

When used to measure time, a turn is a day, i.e. a turn of the Earth on its axis. The time at midday (noon) is .5 turns because Earth has completed a half-turn on its axis since the day began at midnight.

  

For global positioning, a turn is a circle around the surface of the Earth along a parallel or a meridian. Turns along parallels start at the 144th west meridian and go East, while turns along meridians start at the South Pole and go North.

  

It can be useful to combine time with global coordinates, because the first digit of the longitude determines the time zone. For example, .5.4 means noon at a longitude of .4, which is the center of Time Zone 4.

  

A latitude of .25 falls on the Equator, which gets about a half-day of sunlight every day of the year.

  

As we move away from the Equator, seasonal variations in sunrise and sunset times become greater. Also, the further West we move inside a time zone, sunrise and sunset occur at a later time of the day.

  

To calculate when the sun will rise and set in our location, we need to know the date and our global coordinates. In Dec, the date is the number of days since Day 0 (March 1).

  

The current date and time is . To see today’s sunrise and sunset times, enter your coordinates below or click the button below to obtain your location from your browser.

  

  

  

It is called the day of the year (doty) or the turn of the year (toty).

  

  

Adding latitude allows us to 

  

Norman longitude determines the time zone

A half-turn of longitude arrives the 36th East Meridian and a quarter-turn of latitude goes from the South Pole to the Equator. 

  

Dec provides longitude as the turns from and latitude as the turns from the South Pole.

  

A time, longitude, and latitude can be put together.

  

A longitude of .5 turns falls on the 36th East meridian and a latitude of .25 falls on the equator.

  

intersection of the 36th East meridian and the Equator

  

In Dec, a time of 0 turns indicates midnight and longitude of 0 turns. At noon, the Earth has completed a half-turn since midnight. 

Dec counts days, which are turns of the Earth on its axis. For global positioning, Dec provides longitude as the turns from the 144th west meridian and latitude as the turns from the South Pole.

  

which is a turn .

  

In one day, the Earth completes one turn on its axis, which causes the apparent motion of Sun 

  

A quick way to determine while or 400-year solar cycles.

  

Using solar cycles is that 

  

To measure the time of day, Dec uses metric system prefixes like centi and milli to count multiples and submultiples of its 2 base units: days and turns.

  

cyclical phenomena like the phases of the🌙moon

  

In addition, days can combined into years and turns can be written as spins, orbits, turns, circles, rotates, revolves, oscillates, cycles or repeats

 Dec counts fractional days since March 1st (Day 0) and years since 1 BC (Year 0).

  

  

  

The winter solstice is Day 295. If 295 is a new moon, the 2nd new moon will be 59 days later (Day 354). 

  

Chinese New Year date: the new moon that occurs between Day 327 and Day 356

  

On 0000+000.959.4, the moon began its first quarter phase. [http://astropixels.com/ephemeris/phasescat/phases-0099.html](http://astropixels.com/ephemeris/phasescat/phases-0099.html)

0000+00.25

  

Lunar years: 2086.228830461024

  

Lunations: 25034.74596553229

  

 in seconds and angles in radians,  Common extends the metric system and uses decimal based counts time in days and turns as base units. Like the metric system uses

  

While the International System of Units, 

  

 like the metric system . 

  

By using days and turns as base units, Dec extends the principles of the metric system to timekeeping and angular measurement.

  

  

In one day, the Earth completes one turn around its axis, which makes the Sun appear to move in a tilted circle around us.

  

Conveniently, the word turn can be used to describe the Earth’s and each part of 

  

The movement

During the course of a day, the Earth will  on, a cycle is equal to 24 hours, 360 degrees, or 1 round trip. unit can be used for many different things because The close relationship between time and angles is evident in many examples:

- A full turn of the hour

  

The close relationship between time and angles is limited to sundials, clocks, and watches.

  

  

  

because the Earth completes one turn on its axis in one day.

  

The relationship between days and turns is also evident in the solar azimuth angle, the direction of point on the horizon below the Sun. In one day, the solar azimuth angle will undergo one clockwise turn, from North to North in the Northern Hemisphere and South to South in the Southern Hemisphere.

  

Similarly, the solar altitude angle will make a round trip from minimum to maximum in one day. 

  

On a 12-hour clock,

  

At solar midnight, the time of day when the Sun is at its lowest point, the solar azimuth will be exactly North in the Northern hemisphere and exactly South in the Southern hemisphere. After half a day passes, the solar azimuth will have completed half a turn to be at its highest point (nadir)

  

[https://en.m.wikipedia.org/wiki/Midnight](https://en.m.wikipedia.org/wiki/Midnight)

  

As the Sun moves between and highest point (zenith) in the sky, it makes a half turn around any given reference point in half a day.

  

In the Northern hemisphere, this half turn takes the Sun 

  

With time in days and longitude in turns, traveling 

  

In particular, it is very useful to combine time in days and longitude in turns.

  

Turns can also be used for orientation and position. North is zero turns, South is a half turn, the equator is a quarter turn from the north and south poles.

  

  

This includes longitude and latitude in global positioning and the azimuth and altitude of the Sun’s position in the sky. the Northern Hemisphere, at solar noon (midday) the sun is a half turn from North

  

  

  

  

  

In this way,

  

The base units in Dec,

  

  

  

which uses decimal units for

  

Other systems prefer fractions and use a dizzying array of bases to avoid decimals at all costs. 

  

Many other units are composed of mass, length, and time:

Newton: [kg](https://en.m.wikipedia.org/wiki/Kilogram)⋅[m](https://en.m.wikipedia.org/wiki/Metre) • [s](https://en.m.wikipedia.org/wiki/Second)−2

Joule: [kg](https://en.m.wikipedia.org/wiki/Kilogram)⋅[m](https://en.m.wikipedia.org/wiki/Metre)2⋅[s](https://en.m.wikipedia.org/wiki/Second)−2

Pascal: [kg](https://en.m.wikipedia.org/wiki/Kilogram)⋅[m](https://en.m.wikipedia.org/wiki/Metre)−1⋅[s](https://en.m.wikipedia.org/wiki/Second)−2

Watt: 1 kg⋅m2⋅s−3

Switching entirely to Dec would simply mean replacing seconds with beats in all of the above.

  

Admittedly, base10 is not the best base for fractions, but some numbers work well as both fractions and decimals, such as 1/2, 1/4, 1/5, and 1/8. 

  

5 minutes is 1/12 of an hour, which is 1/24 of a day. 

  

Base 15: 0 thru 9 and a e i o u

  

such as base7 weeks, base8 cups, base12 feet, base16 pounds and pints, base24 days, base60 hours and minutes, and base1760 miles

  

Admittedly, base10 is not the best base for fractions, but some numbers work well as both fractions and decimals, such as 1/2, 1/4, 1/5, and 1/8. 

  

With base10 units, you can use decimal numbers (.125), fractions (1/8), or metric prefixes (125 milli). With other units, you may be stuck with only fractions.  Learning a handful metric prefixes is easier than having to 

  

If you are in favor of using 

  

While the imperial system favors fractions,  which the metric system, Dec used decimals

  

1 foot = 12 inches. 1 yard = 3 feet = 36 inches. 1 mile = 1,760 yards = 5,280 feet = 63,360 inches.

  

  

**Timestamp in time zone 2 and 4**

This is understandable but not ideal:

2024+304.36287+2

2024+304.56287+4

  

2025-061.63713-7

2025-061.43713-5

It is better to use decimal numbers and have the sign apply to everything on its right-hand side rather than request the sign:

2024+304.36287.2

2024+304.56287.4

  

2025-061.63713.7

2025-061.43713.5

  

To change the time zone, add the offset to both sides of the last “.”: 

1969+306.000.4 => 1969+305.700.1

This also works with negative doties: 

1969-060.000.6 => 1969-060.300.9

The example above shows the Unix epoch converted from Zone 4 to Zone 1 and synonymously converted from Zone -6 to Zone -9.

  

Things get a little weird when we consider -10, but that’s ok:

1969-060.300.9 => 1969-060.400.0

1969-060.400.0 => 1969-060.500.1

The example above shows the Unix epoch converted from Zone -9 to Zone -10 and then to Zone -1. It’s easy to remember that we only use the last digit from -10, in other words that -0 represents -10.

  

Start time & location and end time & location:

year+day.day.lon.lat: year+day.day.lon.lat

Start time & location and duration, distance, direction:

year+day.day.lon.lat>.day.cir.azi
