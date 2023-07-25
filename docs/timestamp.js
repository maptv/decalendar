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
    centimilliday = (utc - mid) / 864,
    minuteOffset = -now.getTimezoneOffset(),
    cmdOffset = minuteOffset / 0.0144,
    hourOffset = minuteOffset / 60,
    sign = minuteOffset < 0 ? "-" : "+",
    offsetCmd = centimilliday + Math.round(minuteOffset / 144) * 1e4,
    local = new Date(year, month, day + offsetCmd / 1e5),
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
    standardTime = (
        `${now.getFullYear().toString().padStart(4, "0")}`
        + `-${now.getMonth().toString().padStart(2, "0")}`
        + `-${now.getDate().toString().padStart(2, "0")}`
        + `T${now.getHours().toString().padStart(2, "0")}`
        + `:${now.getMinutes().toString().padStart(2, "0")}`
        + `:${now.getSeconds().toString().padStart(2, "0")}`
        + `${sign}${Math.abs(hourOffset).toString().padStart(2, "0")}`
    ),
    decimalTime = (
        `${local.getFullYear().toString().padStart(4, "0")}`
        + `-${local.getMonth().toString().padStart(2, "0")}`
        + `-${local.getDate().toString().padStart(2, "0")}`
        + `.${paddedCmd}${letter}`
    );

console.log(standardTime)

console.log(decimalTime)
