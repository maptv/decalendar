function myStamp(date, offset=0, dayOf="y", sign="+") {
    date = typeof date === "string" ? new Date(date) : date;
    const signOffset = offset < 0 ? "-" : "+";
    if (dayOf == "y") {
        const ddOffset = Math.round(offset / 2.4),
            decimal = new Date(Date.UTC(
               date.getFullYear(),
               date.getMonth(),
               date.getDate(),
               date.getHours(),
               date.getMinutes(),
               date.getSeconds(),
               date.getMilliseconds() + ddOffset * 8640000,
            )),       
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
            const daysInYear = ((decYear % 4 === 0 && decYear % 100 > 0) || decYear %400 == 0) ? 366 : 365,
            negDateDoy = (dateDoy-daysInYear).toString().padStart(3, "0"),
            negTimeDoy = Math.abs(1e5-timeDoy).toString().padEnd(5, "0");
            return `${decYear}${negDateDoy}.${negTimeDoy}${signOffset}${Math.abs(ddOffset)}`;
        }
    } else {
    const standard = new Date(Date.UTC(
           date.getFullYear(),
           date.getMonth(),
           date.getDate(),
           date.getHours(),
           date.getMinutes(),
           date.getSeconds(),
           date.getMilliseconds() + offset * 3600000,
        )),
        decYear = decimal.getFullYear(),
        decMonth = decimal.getMonth(),
        decDay = decimal.getDate(),
        mid = new Date(decYear, decMonth, decDay, 0, 0, 0, 0),
        daysInYear = ((decYear % 4 === 0 && decYear % 100 > 0) || decYear %400 == 0) ? 366 : 365,
        centimilliday = (decimal - mid) / 864,
        lastDay = new Date(decYear, 0, daysInYear),
        fulldoy = (lastDay - firstDay) / 86400000,
        dateweek = Math.floor((datedoy + firstDay.getDay() - decimal.getDay()) / 7),
        daysInMonth = new Date(decYear, decMonth + 1, 0).getDate(),
        minuteOffset = -date.getTimezoneOffset(),
        hourOffset = minuteOffset / 60,
        offsetCmd = centimilliday + Math.round(minuteOffset / 144) * 1e4,
        normalizedCmd = offsetCmd - 1e5 * (offsetCmd > 1e5) + 1e5 * (offsetCmd < 0),
        paddedCmd = Math.round(normalizedCmd).toString().padEnd(5, "0");
        return datedoy + "." + timedoy
    switch (dayOf + sign) {
        case "m+":
            return `${standard.getFullYear()}`
            + `+${standard.getMonth().toString(13).toUpperCase()}`
            + `+${(standard.getDate()-1).toString().padStart(2, '0')}`
            + `T${standard.getHours().toString().padStart(2, "0")}`
            + `:${standard.getMinutes().toString().padStart(2, "0")}`
            + `:${standard.getSeconds().toString().padStart(2, "0")}`
            + `${signOffset}${Math.abs(hourOffset).toString().padStart(2, "0")}`;
        case "m-":
            return `${standard.getFullYear()}`
            + `${(standard.getMonth()-12).toString(13).toUpperCase()}`
            + `${(standard.getDate()-1-daysInMonth).toString().padStart(2, '0')}`
            + `T${Math.abs(standard.getHours()-24).toString().padStart(2, "0")}`
            + `:${Math.abs(standard.getMinutes()-60).toString().padStart(2, "0")}`
            + `:${Math.abs(standard.getSeconds()-60).toString().padStart(2, "0")}`
            + `${signOffset}${Math.abs(hourOffset).toString().padStart(2, "0")}`;
        case "w+":
            return `${decimal.getFullYear()}+${dateweek.toString().padStart(2, '0')}+${decimal.getDay()}`;
        case "w-":
            const fullweek = Math.floor((fulldoy + firstDay.getDay() - lastDay.getDay()) / 7);
            return `${decimal.getFullYear()}${(dateweek-fullweek-1).toString().padStart(2, '0')}${decimal.getDay()-7}`;
    }
    }
}

const now = new Date(new Date()).toLocaleString("en-US", {timeZone: "Etc/GMT"});
const shift = new Date(2023, 7, 15, 19, 62, 0, 86400000);
console.log(Date.UTC(shift.getFullYear(), shift.getMonth(), shift.getDate()))
console.log(shift)
console.log(myStamp(now, 3));
console.log(myStamp(now, 3, "y", "-"));
// console.log(myStamp(now, "y", "-"));

// console.log(myStamp(now, "m", "+", 1));
// console.log(myStamp(now, "m", "-"));
// console.log(myStamp(now, "w", "+"));
// console.log(myStamp(now, "w", "-"));