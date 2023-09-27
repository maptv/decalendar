function myStamp(date, offset = 0, dayOf = "y", sign = "+") {
    date = typeof date === "string" ? new Date(date) : date;
    const signOffset = offset < 0 ? "-" : "+";
    if (dayOf == "y") {
        const ddOffset = Math.round(offset / 2.4),
            decimal = new Date(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate(),
                date.getUTCHours() + 1,
                date.getUTCMinutes(),
                date.getUTCSeconds(),
                date.getUTCMilliseconds() + ddOffset * 8640000,
            ),
            decYear = decimal.getFullYear(),
            firstDay = new Date(decYear, 0, 1),
            doy = (decimal - firstDay) / 86400000,
            roundedDoy = Math.round(doy * 1e5) / 1e5;
        let dateDoy, timeDoy;
        [dateDoy, timeDoy] = roundedDoy.toString().split(".");
        dateDoy = dateDoy.padStart(3, '0')
        timeDoy = timeDoy.padEnd(5, '0')
        if (sign == "+") {
            return `${decYear}+${dateDoy}.${timeDoy}${signOffset}${Math.abs(ddOffset)}`;
        }
        if (sign == "-") {
            const daysInYear = ((decYear % 4 === 0 && decYear % 100 > 0) || decYear % 400 == 0) ? 366 : 365,
                negDateDoy = (dateDoy - daysInYear).toString().padStart(3, "0"),
                negTimeDoy = Math.abs(1e5 - timeDoy).toString().padEnd(5, "0");
            return `${decYear}${negDateDoy}.${negTimeDoy}${signOffset}${Math.abs(ddOffset)}`;
        }
    } else {
        const standard = new Date(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
            date.getUTCMilliseconds() + offset * 3600000,
        ),
            stanYear = standard.getFullYear(),
            stanMonth = standard.getMonth(),
            stanDate = standard.getDate(),
            stanHour = standard.getHours(),
            stanMin = standard.getMinutes(),
            stanSec = standard.getSeconds(),
            suffix = signOffset + Math.abs(offset).toString().padStart(2, "0"),
            posTime = `T${stanHour.toString().padStart(2, "0")}`
                + `:${stanMin.toString().padStart(2, "0")}`
                + `:${stanSec.toString().padStart(2, "0")}`
                + suffix,
            negTime = `T${Math.abs(stanHour - 24).toString().padStart(2, "0")}`
                + `:${Math.abs(stanMin - 60).toString().padStart(2, "0")}`
                + `:${Math.abs(stanSec - 60).toString().padStart(2, "0")}`
                + suffix;
        if (dayOf == "m") {
            if (sign == "+") {
                return `${stanYear}`
                    + `+${stanMonth.toString(13).toUpperCase()}`
                    + `+${(stanDate - 1).toString().padStart(2, '0')}`
                    + posTime;
            } else if (sign == "-") {
                const daysInMonth = new Date(stanYear, stanMonth + 1, 0).getDate();
                return `${stanYear}`
                    + `${(stanMonth - 12).toString(13).toUpperCase()}`
                    + `${(stanDate - 1 - daysInMonth).toString().padStart(2, '0')}`
                    + negTime;
            }
        } else if (dayOf == "w") {
            const first = new Date(stanYear, 0, 1),
                datedoy = (standard - first) / 86400000,
                daysInYear = ((stanYear % 4 === 0 && stanYear % 100 > 0) || stanYear % 400 == 0) ? 366 : 365,
                firstDay = first.getDay(),
                stanDay = standard.getDay(),
                dateweek = Math.floor((datedoy + firstDay - stanDay) / 7);
            if (sign == "+") {
                return `${stanYear}`
                    + `+${dateweek.toString().padStart(2, '0')}`
                    + `+${stanDay}`
                    + posTime;
            } else if (sign == "-") {
                const first = new Date(stanYear, 0, 1),
                    last = new Date(stanYear, 0, daysInYear),
                    fulldoy = (last - first) / 86400000,
                    fullweek = Math.floor((fulldoy + firstDay - last.getDay()) / 7);
                return `${stanYear}`
                    + `${(dateweek - fullweek - 1).toString().padStart(2, '0')}`
                    + `${stanDay - 7}`
                    + negTime;
            }
        }
    }
}

const start = new Date("2007-03-01T13:00:00Z")
const stop = new Date("2008-05-11T15:30:00Z")
const test = new Date("2023-11-24T04:26:00")
const julian = new Date(-4714, 10, 24, 12)
const mar1 = new Date(1987, 6, 18, 0, 0)
const now = new Date()
const utc = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds(),
    now.getUTCMilliseconds(),
)

function is_leap(y) {
    return y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
}

function unix2doty(ms = 0, precision = 0) {
    const days = ms / 86400000 + 719468,
        era = Math.floor((days >= 0 ? days : days - 146096) / 146097),
        doe = days - era * 146097,
        yoe = Math.floor((
            doe - doe / 1460 + doe / 36524 - doe / 146096
        ) / 365),
        year = yoe + era * 400;
    if (precision == 0) {
        return `${year.toString().padStart(4, "0")}+${Math.round(
            doe - (365 * yoe + yoe / 4 - yoe / 100)
        ).toString().padStart(3, "0")}`
    }
    const timestamp = days - Math.floor(
        year * 365 + year / 4 - year / 100 + year / 400
    ),
        doty = Math.floor(timestamp),
        time = Math.round(
            (timestamp - doty) * 10 ** precision
        ).toString().padStart(precision, "0");
    return `${year.toString().padStart(4, "0")
        }+${doty.toString().padStart(3, "0")}.${time}`;
}

function leaps(year) {
    return Math.floor(year / 4 - year / 100 + year / 400)
}

console.log(leaps(2023));

function date2doty(month = 1, day = 1) {
    return Math.floor(
        (153 * (month > 2 ? month - 3 : month + 9) + 2) / 5 + day - 1
    )
}

console.log(date2doty());

function doty2date(doty = 306) {
    const m = Math.floor((5 * doty + 2) / 153);
    return [Math.floor(m < 10 ? m + 3 : m - 9), Math.floor(doty - (153 * m + 2) / 5 + 2)];
}

console.log(doty2date());

function isoo2doty(year = 1970, day = 1) {
    return (day + 305 - is_leap(year)) % 365
}

console.log(isoo2doty(2024, 61))
console.log(isoo2doty())

function doty2isoo(year = 1970, doty = 0) {
    return (doty + 60 + is_leap(year + 1)) % 365
}


function date2year(year = 1970, month = 1) { return year - (month < 3) }

console.log(date2year());


console.log(doty2isoo())
console.log(isoo2doty(2024, 61))
console.log(doty2isoo(2023, 0))
console.log(306 - 59)

const x = 10;
console.log(x.toString(16).toUpperCase())

function unix2wday(ms = 0) {
    return Math.floor((ms / 86400000 + 4) % 7)
}

console.log(unix2wday(Date.now()));
console.log(date2doty(2021, 9, 1));

console.log(unix2doty());
console.log(unix2doty(Date.now()));
console.log(unix2doty(Date.now(), precision = 5));
console.log(unix2doty(86400));
console.log(unix2doty(0));
console.log(unix2doty(0, 3));
console.log(unix2doty(-86400));
console.log(unix2doty(1695340800, 4));
console.log(unix2doty(1695327225999, 5));
console.log(now);
console.log((60 + 305) % 365);
console.log((263 + 305) % 365);
console.log((1 + 305) % 365);
console.log(now);
console.log(utc);
console.log(julian);
console.log(now.toISOString());
console.log(is_leap(2000));
console.log(myStamp(mar1, 0, "y", "+"));
console.log(myStamp(start, 0, "y", "+"));
console.log(myStamp(test, 0, "y", "+"));
console.log(myStamp(julian, 0, "y", "+"));
console.log(myStamp(stop, 0, "y", "+"));
console.log(myStamp(now, 0, "y", "+"));
console.log(myStamp(now, -4, "y", "+"));
console.log(myStamp(now, -4, "y", "-"));
console.log(myStamp(now, 0, "m", "+"));
console.log(myStamp(now, -4, "m", "-"));
console.log(myStamp(now, -4, "w", "+"));
console.log(myStamp(now, -4, "w", "-"));
console.log(myStamp(now, -now.getTimezoneOffset() / 60, "y", "+"));

function doty2year(year = 1969, doty = 306) { return year + (doty > 305) }

console.log(doty2year());

console.log(
    `${date2year().toString().padStart(4, "0")}+${date2doty().toString().padStart(3, "0")}`);

console.log(
    `${doty2year().toString().padStart(4, "0")}-${doty2date().map(
        i => i.toString().padStart(2, "0")
    ).join("-")}`);



function isoo2year(year = 1970, day = 1) {
    return year - (day < (60 + is_leap(year - 1)))
}

console.log(`${isoo2year(1970, 60)}+${isoo2doty()}`)
console.log(isoo2year()) // R 


console.log("R".charCodeAt())

function hour2zone(hour) {
    return hour == 0 ? "Z"
        : hour > 0 && hour < 10 ? String.fromCharCode(hour + 64)
            : hour > 9 && hour < 13 ? String.fromCharCode(hour + 65)
                : hour < 0 && hour > -13 ? String.fromCharCode(Math.abs(hour) + 77)
                    : "J";
}

console.log(is_leap(1970))
console.log(hour2zone(9)) // R
console.log(hour2zone(-new Date().getTimezoneOffset() / 60)) // R
console.log() // R


console.log("Z".charCodeAt())


console.log(hour2zone(-2)) // R
console.log(
    `${date2year(0, 1)}+${date2doty(1, 1).toString().padStart(3, "0")}`);

console.log(
    `${doty2year().toString().padStart(4, "0")}-${doty2date().map(
        i => i.toString().padStart(2, "0")
    ).join("-")}`);


function time2doty(hours = 1, minutes = 0, seconds = 0) {
    return hours / 24 + minutes / 1440 + seconds / 86400
}

console.log(`${date2year()}+${date2doty() + (Math.round(time2doty() * 1e5) / 1e5)
    }${hour2zone()}`)


console.log(`${doty2year()}+${doty2date().map(
    i => i.toString().padStart(2, "0")
).join("-")}T${doty2time().map(
    i => i.toString().padStart(2, "0")
).join(":")}${zone2hour()}`)

function doty2time(doty = 1 / 24) {
    const hours = doty * 24,
        floorHours = Math.floor(hours),
        minutes = (hours - floorHours) / 60,
        floorMinutes = Math.floor(minutes),
        seconds = (minutes - floorMinutes) / 60;
    return [floorHours, floorMinutes, Math.floor(seconds)]
}

function zone2hour(zone = "Z") {
    return zone == "Z" ? 0
        : zone > "@" && zone < "J" ? zone.charCodeAt() - 64
            : zone > "J" && zone < "N" ? zone.charCodeAt() - 65
                : zone < "Z" && zone > "M" ? -(zone.charCodeAt() - 77)
                    : zone;
}

console.log(hour2zone(-new Date().getTimezoneOffset() / 60))
console.log(zone2hour(hour2zone(-new Date().getTimezoneOffset() / 60)))
console.log("?".charCodeAt())
console.log(String.fromCharCode(64 + 27))
console.log(zone2hour("Y"))


function unix2doty(ms = 0) {
    const days = ms / 86400000 + 719468,
        era = Math.floor((days >= 0 ? days : days - 146096) / 146097),
        doe = days - era * 146097,
        yoe = Math.floor((doe - doe / 1460 + doe / 36524 - doe / 146096) / 365),
        year = yoe + era * 400,
        timestamp = days - Math.floor(year * 365 + year / 4 - year / 100 + year / 400),
        doty = Math.floor(timestamp);
    return [year, doty, timestamp - doty];
}



console.log(unix2doty(Date.now()));