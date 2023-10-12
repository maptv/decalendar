// test by running one of the following in a UNIX shell:
// env TZ='America/Los_Angeles' node time.js
// env TZ='America/New_York' node time.js
// env TZ='Etc/UTC' node time.js
// env TZ='Asia/Shanghai' node time.js
// env TZ='Asia/Tokyo' node time.js

const now = new Date(),
    year = now.getUTCFullYear(),
    month = now.getUTCMonth(),
    day = now.getUTCDate(),
    hour = now.getUTCHours(),
    minute = now.getUTCMinutes(),
    second = now.getUTCSeconds(),
    millisecond = now.getUTCMilliseconds(),
    utc = new Date(year, month, day, hour, minute, second, millisecond),
    mid = new Date(year, month, day, 0, 0, 0, 0),
    ms_since_midnight = utc - mid,
    deciday = ms_since_midnight / 8640000,
    minuteOffset = now.getTimezoneOffset(),
    sign = minuteOffset > 0 ? "-" : "+",
    ddOffset = Math.round(minuteOffset / 144),
    hourOffset = Math.abs(minuteOffset / 60).toString().padStart(2, "0"),
    paddedHour = now.getHours().toString().padStart(2, "0"),
    paddedMinute = now.getMinutes().toString().padStart(2, "0"),
    offsetDeciday = deciday - ddOffset,
    truncatedDeciday = offsetDeciday < 10 ? offsetDeciday : offsetDeciday - 10,
    roundedDeciday = Math.round(truncatedDeciday * 100) / 100,
    paddedDeciday = roundedDeciday.toString().padEnd(4, "0");

console.log(`${paddedHour}:${paddedMinute}${sign}${hourOffset}`)
console.log(`${paddedDeciday}${sign}${Math.abs(ddOffset)}`)


function hour2zone(hour) {
    return  hour == 0 ? "Z"
        : hour > 0 && hour < 9 ? String.fromCharCode(hour + 64)
        : hour > 9 && hour < 13 ? String.fromCharCode(hour + 65)
        : hour < 0 && hour > -13 ? String.fromCharCode(Math.abs(hour) + 77)
        : "J";
}

console.log(hour2zone(-5)) // R 

