function myDate(year, month, day, dayOf="year", sign="+") {
    const date = new Date(year, month - 1, day),
    daysInYear = ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365,
    firstDay = new Date(date.getFullYear(), 0, 1),
    lastDay = new Date(date.getFullYear(), 0, daysInYear),
    datedoy = (date - firstDay) / 86400000,
    fulldoy = (lastDay - firstDay) / 86400000,
    dateweek = Math.floor((datedoy + firstDay.getDay() - date.getDay()) / 7),
    fullweek = Math.floor((fulldoy + firstDay.getDay() - lastDay.getDay()) / 7),
    daysInMonth = new Date(year, month, 0).getDate();
    ;
    if (dayOf === "year" && sign === "+") {
        return `${date.getFullYear()}+${Math.round(datedoy).toString().padStart(3, '0')}`
    }
    else if (dayOf === "year" && sign === "-") {
        return `${date.getFullYear()}${(Math.round(datedoy)-daysInYear).toString().padStart(3, '0')}`
    }
    else if (dayOf === "month" && sign === "+") {
        return `${date.getFullYear()}+${date.getMonth().toString(13).toUpperCase()}-${(date.getDate()-1).toString().padStart(2, '0')}`
    }
    else if (dayOf === "month" && sign === "-") {
        return `${date.getFullYear()}${(date.getMonth()-12).toString(13).toUpperCase()}${(date.getDate()-1-daysInMonth).toString().padStart(2, '0')}`
    }
    else if (dayOf === "week" && sign === "+") {
        return `${date.getFullYear()}+${dateweek.toString().padStart(2, '0')}+${date.getDay()}`
    }
    else if (dayOf === "week" && sign === "-") {
        return `${date.getFullYear()}${(dateweek-fullweek-1).toString().padStart(2, '0')}${date.getDay()-7}`
    }
}

console.log(myDate(2024, 7, 2, "year", "+"));
console.log(myDate(2024, 7, 2, "year", "-"));
console.log(myDate(2024, 11, 2, "month", "+"));
console.log(myDate(2024, 12, 63, "month", "-"));
console.log(myDate(2024, 12, 31, "week", "+"));
console.log(myDate(2024, 12, 32, "week", "-"));
console.log(myDate(2025, 12, 32, "week", "-"));
console.log(myDate(1999, 12, 31, "week", "+"));
console.log(myDate(1999, 12, 31, "week", "-"));
console.log(myDate(2021, 19, 4));
console.log(myDate(2023, 11, 62, "month"));
console.log(myDate(2023, 14, 45, "week"));
console.log(myDate(2023, 10, 20, "week"));
console.log(myDate(2000, 12, 31, "week"));
console.log(myDate(1999, 12, 31, "week"));
console.log(myDate(2023, 12, 9, "month"));
console.log(myDate(2022, 11, 24));
console.log(myDate(2021, 11, 25));
console.log(myDate(2020, 11, 26));
console.log(myDate(2019, 11, 28));
console.log(myDate(2018, 11, 22));
console.log(myDate(1999, 12, 31));
console.log(myDate(2000, 0, 34));