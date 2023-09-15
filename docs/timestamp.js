function myStamp(date, offset = 0, dayOf = "y", sign = "+") {
    date = typeof date === "string" ? new Date(date) : date;
    const signOffset = offset < 0 ? "-" : "+";
    if (dayOf == "y") {
        const ddOffset = Math.round(offset / 2.4),
            decimal = new Date(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate(),
                date.getUTCHours(),
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

const now = new Date()
const utc = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds(),
    now.getUTCMilliseconds(),
    )
console.log(now);
console.log(utc);
console.log(now.toISOString());
console.log(myStamp(now, -4, "y", "+"));
console.log(myStamp(now, -4, "y", "-"));
console.log(myStamp(now, -4, "m", "+"));
console.log(myStamp(now, -4, "m", "-"));
console.log(myStamp(now, -4, "w", "+"));
console.log(myStamp(now, -4, "w", "-"));
console.log(myStamp(now, -now.getTimezoneOffset() / 60, "y", "+"));