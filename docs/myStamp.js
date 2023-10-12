function myStamp(date, offset, dayOf = "y", sign = "+") {
    offset = offset == null ? -date.getTimezoneOffset() / 60 : offset;
    const signOffset = offset < 0 ? "-" : "+";
    const tzString = "Etc/GMT" + signOffset + Math.abs(offset);
    date = new Date((
        typeof date === "string" ? new Date(date) : date
    ).toLocaleString("en-US", { timeZone: tzString }));
    const utcyear = date.getUTCFullYear(), utcMonth = date.getUTCMonth(), utcDay = date.getUTCDate(), utcHour = date.getUTCHours(), utcMinute = date.getUTCMinutes(), utcSecond = date.getUTCSeconds(), utcMillisecond = date.getUTCMilliseconds(), ddOffset = Math.round(offset / 2.4), msOffset = ddOffset * 8640000, local = new Date(utcyear, utcMonth, utcDay, utcHour, utcminute, utcsecond, utcmillisecond + msOffset), locYear = local.getFullYear(), locMonth = local.getMonth(), locDay = local.getDate(), mid = new Date(locYear, locMonth, locDay, 0, 0, 0, 0), daysInYear = ((locYear % 4 === 0 && locYear % 100 > 0) || locYear % 400 == 0) ? 366 : 365, centimilliday = (local - mid) / 864, firstDay = new Date(locYear, 0, 1), lastDay = new Date(locYear, 0, daysInYear), datedoy = (utc - firstDay) / 86400000, fulldoy = (lastDay - firstDay) / 86400000, dateweek = Math.floor((datedoy + firstDay.getDay() - utc.getDay()) / 7), daysInMonth = new Date(locYear, locMonth, 0).getDate(), minuteOffset = -date.getTimezoneOffset(), hourOffset = minuteOffset / 60, offsetCmd = centimilliday + Math.round(minuteOffset / 144) * 1e4,
        // local = new Date(UtcYear, UtcMonth, UtcDay + offsetCmd / 1e5),
        normalizedCmd = offsetCmd - 1e5 * (offsetCmd > 1e5) + 1e5 * (offsetCmd < 0), paddedCmd = Math.round(normalizedCmd).toString().padEnd(5, "0");
    switch (dayOf + sign) {
        case "y+":
            return `${local.getFullYear()}`
                + `+${Math.round(datedoy).toString().padStart(3, '0')}`
                + `.${paddedCmd}${signOffset}${Math.round(Math.abs(ddOffset))}`;
        case "y-":
            return `${local.getFullYear()}`
                + `${(Math.round(datedoy) - daysInYear).toString().padStart(3, '0')}`
                + `.${1e5 - paddedCmd}${signOffset}${Math.round(Math.abs(ddOffset))}`;
        case "m+":
            return `${date.getFullYear()}`
                + `+${date.getMonth().toString(13).toUpperCase()}`
                + `+${(date.getDate() - 1).toString().padStart(2, '0')}`
                + `T${date.getHours().toString().padStart(2, "0")}`
                + `:${date.getMinutes().toString().padStart(2, "0")}`
                + `:${date.getSeconds().toString().padStart(2, "0")}`
                + `${signOffset}${Math.abs(hourOffset).toString().padStart(2, "0")}`;
        case "m-":
            return `${date.getFullYear()}`
                + `${(date.getMonth() - 12).toString(13).toUpperCase()}`
                + `${(date.getDate() - 1 - daysInMonth).toString().padStart(2, '0')}`
                + `T${Math.abs(date.getHours() - 24).toString().padStart(2, "0")}`
                + `:${Math.abs(date.getMinutes() - 60).toString().padStart(2, "0")}`
                + `:${Math.abs(date.getSeconds() - 60).toString().padStart(2, "0")}`
                + `${signOffset}${Math.abs(hourOffset).toString().padStart(2, "0")}`;
        case "w+":
            return `${local.getFullYear()}+${dateweek.toString().padStart(2, '0')}+${local.getDay()}`;
        case "w-":
            const fullweek = Math.floor((fulldoy + firstDay.getDay() - lastDay.getDay()) / 7);
            return `${local.getFullYear()}${(dateweek - fullweek - 1).toString().padStart(2, '0')}${local.getDay() - 7}`;
    }
}
