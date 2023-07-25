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
    minuteOffset = -now.getTimezoneOffset(),
    offsetCmd = (utc - mid) / 864 + Math.round(minuteOffset / 144) * 1e4,
    local = new Date(year, month, day + offsetCmd / 1e5),
    date  = (
        `${local.getFullYear().toString().padStart(4, "0")}`
        + `-${local.getMonth().toString().padStart(2, "0")}`
        + `-${local.getDate().toString().padStart(2, "0")}`
    );

console.log(date)