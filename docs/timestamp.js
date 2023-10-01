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
console.log((60 + 305) % 365);
console.log((263 + 305) % 365);
console.log((1 + 305) % 365);
console.log(is_leap(2000));

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

function hour2zone(hour = 0) {
    return hour == 0 ? "Z"
        : hour > 0 && hour < 10 ? String.fromCharCode(hour + 64)
            : hour > 9 && hour < 13 ? String.fromCharCode(hour + 65)
                : hour < 0 && hour > -13 ? String.fromCharCode(Math.abs(hour) + 77)
                    : "J";
}

console.log(is_leap(1970))
console.log(hour2zone()) // R
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
    return (zone = zone.toUpperCase()) == "Z" ? 0
        : zone > "@" && zone < "J" ? zone.charCodeAt() - 64
        : zone > "J" && zone < "N" ? zone.charCodeAt() - 65
        : zone < "Z" && zone > "M" ? -(zone.charCodeAt() - 77)
        : zone;
}

console.log(hour2zone(-new Date().getTimezoneOffset() / 60))
console.log(zone2hour(hour2zone(-new Date().getTimezoneOffset() / 60)))
console.log("?".charCodeAt())
console.log(String.fromCharCode(64 + 27))
console.log(zone2hour("r"))


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

function time2doty(hours = 1, minutes = 0, seconds = 0) {
    return hours / 24 + minutes / 1440 + seconds / 86400
}

console.log(`${date2year().toString().padStart(4, '0')}+${date2doty().toString().padStart(3, '0')}.${(Math.round(time2doty(0) * 1e5) / 1e5).toString().padStart(5, '0')
    }${hour2zone(0)}`)

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

function createTimestamp() {
    const [year, doty, time] = unix2doty(Date.now());
    return `${year.toString().padStart(4, "0")}+${doty.toString().padStart(3, "0")}.${(Math.round(time * 1e5)).toString().padStart(5, "0")}+0`
}



function date2link(
    start,
    stop,
    title = "Event Title",
    details = "Event Details",
    location = "Event Location",
    url = "http://example.com",
    name = "Organizer Name",
    calendar = "google"
) {
    switch (calendar.toLowerCase()) {
        case "google":
            return "https://www.google.com/calendar/event?action=TEMPLATE"
            + `&dates=${encodeURIComponent(start + "/" + stop)
            }&text=${encodeURIComponent(title)
            }&details=${encodeURIComponent(details)
            }&location=${encodeURIComponent(location)
            }&sprop=website:${encodeURIComponent(url)
            }&sprop=name:${encodeURIComponent(name)}`;
        case "outlook":
            
        https://outlook.live.com/calendar/0/action/compose?allday=false&enddt=2023-09-30T13%3A45%3A00%2B00%3A00&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-09-30T13%3A15%3A00%2B00%3A00
        url += '&dtstart=' + _getUTCTime(data.time.start, data.time.zone);
        url += '&dtend=' + _getUTCTime(data.time.end, data.time.zone);
        url += '&summary=' + encodeURIComponent(data.title);
        url += '&location=' + encodeURIComponent(data.location);
        url += '&description=' + encodeURIComponent(data.desc);
        url += '&allday=' + "false";
        url += '&uid=' + "";
        return url;
    }
}

function doty2link(
    start = "1969+306.00000Z",
    stop = "1969+307.00000Z",
    title = "Event Title",
    details = "Event Details",
    location = "Event Location",
    url = "http://example.com",
    name = "Organizer Name",
    calendar = "google"
) {
    const re = /(\d{4})[+-](\d{3})\.(\d+)([A-Z])/;
    [startString, startYear, startDoty, startTime, startZone] = re.exec(start);
    [stopString, stopYear, stopDoty, stopTime, stopZone] = re.exec(stop);
    return date2link(start, stop, title, details, location, url, name, calendar);

}

function parse_iso(timestamp = "1970-01-01T00:00:00Z") {
    [input, year, month, dotm, hour, minute, second, zone] =
    /([+-]?\d{4})?-?(\d{2})?-?(\d{2})?T?(\d{2})?:?(\d{2})?:?(\d{2})?([a-zA-Z]|[+-]\d{2})?/.exec(timestamp);
    return [input, parseInt(year), parseInt(month), parseInt(dotm), parseInt(hour), parseInt(minute),
        parseInt(second), /^[a-zA-Z]+$/.test(zone) ? zone2hour(zone) : parseInt(zone)]
}

function parse_dec(timestamp = "1969+306.00000Z") {
    [input, year, doty, time, zone] =
    /([+-]?\d{4})?([+-]?\d{1,3})?(\.?\d+)?([a-zA-Z]|[+-]\d+)?/.exec(timestamp);
    return [input, parseInt(year), parseInt(doty),
        parseFloat(/^\.\d+/.test(time) ? time : "." + time),
        parseFloat(/^[a-zA-Z]+$/.test(zone) ? zone2hour(zone) / 24
            : zone.replace(/([+-])/, "$1\."))];
}

console.log(parse_dec(".334223-23543"))

console.log(parse_iso("00:00:00C"))
console.log(parse_iso( "1970-01-01T00:00:00+03"))
console.log(parse_iso( "10:40:30"))
console.log(parse_dec("202540001-003"))
console.log(parse_dec())
console.log(parse_iso())
console.log(parseFloat("-.03"))
console.log(parseInt("3z"))
