const now = new Date(),
    year = now.getUTCFullYear(),
    month = now.getUTCMonth(),
    day = now.getUTCDate(),
    hour = now.getUTCHours(),
    minute = now.getUTCMinutes(),
    second = now.getUTCSeconds(),
    millisecond = now.getUTCMilliseconds(),
    weekday = now.getDay(),
    minuteOffset = -now.getTimezoneOffset(),
    cmdOffset = minuteOffset / 0.0144,
    hourOffset = minuteOffset / 60,
    sign = minuteOffset < 0 ? "-" : "+",
    utc = new Date(year, month, day, hour, minute, second, millisecond),
    mid = new Date(year, month, day, 0, 0, 0, 0),
    jan4 = new Date(year, 0, 4),
    centimilliday = (utc - mid) / 864,
    offsetCmd = centimilliday + Math.round(minuteOffset / 144) * 1e4,
    local = new Date(year, month, day + offsetCmd / 1e5),
    daysFromTodayToThisThursday = 3 - (utc.getDay() + 6) % 7,
    daysFromJan4ToFirstThursday = 3 - (jan4.getDay() + 6) % 7,
    thisThursday = new Date(year, month, day + daysFromTodayToThisThursday),
    firstThursday = new Date(year, 0, 4 + daysFromJan4ToFirstThursday),
    localThisThursday = new Date(year, month, thisThursday.getDate() + offsetCmd / 1e5),
    daysFromJan4ToThisThursday = (thisThursday.getTime() - jan4.getTime()) / 86400000,
    daysFromFirstThursdayToThisThursday = daysFromJan4ToThisThursday - daysFromJan4ToFirstThursday,
    weeksFromFirstThursdayToThisThursday = 1 + Math.round(daysFromFirstThursdayToThisThursday / 7),
    normalizedCmd = offsetCmd - 1e5 * (offsetCmd > 1e5) + 1e5 * (offsetCmd < 0),
    paddedCmd = Math.round(normalizedCmd).toString().padEnd(5, "0"),
    letter = (
        hourOffset < - 12 || hourOffset > 12 || !Number.isInteger(hourOffset)
        ? `${sign}.${Math.round(cmdOffset).toString().padStart(5, "0")}`
        : hourOffset == 0 ? "Z"
        : hourOffset > 0 && hourOffset < 13 ? String.fromCharCode(hourOffset + 77)
        : hourOffset < 0 && hourOffset > -10 ? String.fromCharCode(Math.abs(hourOffset) + 64)
        : hourOffset < -9 && hourOffset > -13 ? String.fromCharCode(Math.abs(hourOffset) + 65)
        : `${sign}.${Math.round(cmdOffset).toString().padStart(5, "0")}`
    ),
    standardTimestamp = (
        `${now.getFullYear().toString().padStart(4, "0")}`
        + `-${now.getMonth().toString().padStart(2, "0")}`
        + `-${now.getDate().toString().padStart(2, "0")}`
        + `T${now.getHours().toString().padStart(2, "0")}`
        + `:${now.getMinutes().toString().padStart(2, "0")}`
        + `:${now.getSeconds().toString().padStart(2, "0")}`
        + `${sign}${Math.abs(hourOffset).toString().padStart(2, "0")}`
    ),
    weekTimestamp = (
        `${localThisThursday.getFullYear().toString().padStart(4, "0")}`
        + `-${weeksFromFirstThursdayToThisThursday.toString().padStart(2, "0")}`
        + `-${local.getDay()}`
        + `.${paddedCmd}${letter}`
    ),
    decimalTimestamp = (
        `${local.getFullYear().toString().padStart(4, "0")}`
        + `-${local.getMonth().toString().padStart(2, "0")}`
        + `-${local.getDate().toString().padStart(2, "0")}`
        + `.${paddedCmd}${letter}`
    );

function myWeek(year, month, day) {
    const dt = new Date(year, month - 1, day),
    closestThursday = new Date(year, month - 1, day + 3 - (dt.getDay() + 6) % 7),
    jan4 = new Date(year, 0, 4),
    firstThursday = new Date(year, 0, 4 + 3 - (jan4.getDay() + 6) % 7),
    week = 1 + Math.ceil((closestThursday - firstThursday) / 604800000);
    return `${closestThursday.getFullYear()}-W${week}-${dt.getDay()}`
}

console.log(2023, 12, 25)
console.log(myWeek(2023, 11, 1));
console.log(weekTimestamp)