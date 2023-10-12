const now = new Date(),
    decimalTime = (
        now.getHours() / 24
        + now.getMinutes() / 1440
        + now.getSeconds() / 86400
        + now.getMilliseconds() / 86400000
    ),
    tz = -now.getTimezoneOffset() / 60,
    sign = tz > 0 ? "-" : "+",
    letter = (
        tz < - 12 || tz > 12 || !Number.isInteger(tz) ? `${sign}${tz}` :
        tz == 0 ? "Z" :
        tz > 0 && tz < 13 ? String.fromCharCode(tz + 77) :
        tz < 0 && tz > -10 ? String.fromCharCode(Math.abs(tz) + 64) :
        tz < -9 && tz > -13 ? String.fromCharCode(Math.abs(tz) + 65) :
        `${sign}${tz}`
        ),
    datetime = (
        `${now.getFullYear().toString().padStart(4, "0")}-`
        + `${now.getMonth().toString().padStart(2, "0")}-`
        + `${now.getDate().toString().padStart(2, "0")}.`
        + `${Math.round(decimalTime * 100000)}${letter}`
    );

console.log(datetime)
