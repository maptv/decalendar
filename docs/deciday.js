// test by running the following in a UNIX shell:
// for tz in 'Pacific/Samoa' 'America/Los_Angeles' 'Etc/UTC' 'Asia/Shanghai' 'Pacific/Kiritimati'; do; echo \\n$tz; env TZ=$tz node deciday.js; done;

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
    normalizedDeciday = offsetDeciday - 10 * (offsetDeciday > 10) + 10 * (offsetDeciday < 0),
    roundedDeciday = Math.round(normalizedDeciday * 100) / 100,
    paddedDeciday = roundedDeciday.toString().padEnd(4, "0");

console.log(`${paddedHour}:${paddedMinute}${sign}${hourOffset}`)
console.log(` ${paddedDeciday}${sign}${Math.abs(ddOffset)}`)