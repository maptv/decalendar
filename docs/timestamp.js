function myStamp(date, digits=5, dayOf="y", sign="+") {
    const year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        UtcYear = now.getUTCFullYear(),
        UtcMonth = now.getUTCMonth(),
        UtcDay = now.getUTCDate(),
        UtcHour = now.getUTCHours(),
        UtcMinute = now.getUTCMinutes(),
        UtcSecond = now.getUTCSeconds(),
        UtcMillisecond = now.getUTCMilliseconds(),
        utc = new Date(UtcYear, UtcMonth, UtcDay, UtcHour, UtcMinute, UtcSecond, UtcMillisecond),
        mid = new Date(UtcYear, UtcMonth, UtcDay, 0, 0, 0, 0),
        daysInYear = ((UtcYear % 4 === 0 && UtcYear % 100 > 0) || UtcYear %400 == 0) ? 366 : 365,
        centimilliday = (utc - mid) / 864,
        firstDay = new Date(UtcYear, 0, 1),
        lastDay = new Date(UtcYear, 0, daysInYear),
        datedoy = (date - firstDay) / 86400000,
        fulldoy = (lastDay - firstDay) / 86400000,
        dateweek = Math.floor((datedoy + firstDay.getDay() - date.getDay()) / 7),
        fullweek = Math.floor((fulldoy + firstDay.getDay() - lastDay.getDay()) / 7),
        daysInMonth = new Date(year, month, 0).getDate(),
        minuteOffset = -date.getTimezoneOffset(),
        cmdOffset = minuteOffset / 0.0144,
        hourOffset = minuteOffset / 60,
        ddOffset = hourOffset / 2.4,
        signOffset = minuteOffset < 0 ? "-" : "+",
        offsetCmd = centimilliday + Math.round(minuteOffset / 144) * 1e4,
        local = new Date(year, month, day + offsetCmd / 1e5),
        normalizedCmd = offsetCmd - 1e5 * (offsetCmd > 1e5) + 1e5 * (offsetCmd < 0),
        paddedCmd = Math.round(normalizedCmd).toString().padEnd(5, "0"),
        standardTime = (
            `${date.getFullYear().toString().padStart(4, "0")}`
            + `-${(date.getMonth()+1).toString().padStart(2, "0")}`
            + `-${date.getDate().toString().padStart(2, "0")}`
            + `T${date.getHours().toString().padStart(2, "0")}`
            + `:${date.getMinutes().toString().padStart(2, "0")}`
            + `:${date.getSeconds().toString().padStart(2, "0")}`
            + `${signOffset}${Math.abs(hourOffset).toString().padStart(2, "0")}`
        ),
        decimalTime = (
            `${local.getFullYear().toString().padStart(4, "0")}`
            + `-${Math.round(datedoy).toString().padStart(2, "0")}`
            + `.${paddedCmd}${signOffset}${Math.round(Math.abs(ddOffset))}`
        );
    return decimalTime
    switch (dayOf + sign) {
        case "y+": return `${date.getFullYear()}+${Math.round(datedoy).toString().padStart(3, '0')}`
        case "y-": return `${date.getFullYear()}${(Math.round(datedoy)-daysInYear).toString().padStart(3, '0')}`
        case "m+": return `${date.getFullYear()}+${date.getMonth().toString(13).toUpperCase()}+${(date.getDate()-1).toString().padStart(2, '0')}`
        case "m-": return `${date.getFullYear()}${(date.getMonth()-12).toString(13).toUpperCase()}${(date.getDate()-1-daysInMonth).toString().padStart(2, '0')}`
        case "w+": return `${date.getFullYear()}+${dateweek.toString().padStart(2, '0')}+${date.getDay()}`
        case "w-": return `${date.getFullYear()}${(dateweek-fullweek-1).toString().padStart(2, '0')}${date.getDay()-7}`
    }
}

const now = new Date();
const utc = new Date(now.toUTCString());
console.log(utc)
console.log(myStamp(now, "y", "+"));