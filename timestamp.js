function myTimestamp(year, month, day, dayOf) {
    const date = new Date(year, month - 1, day),
    firstDay = new Date(date.getFullYear(), 0, 1),
    doy = (date - firstDay) / 86400000;
    if (dayOf === "year") {
        return `${date.getFullYear()}+${Math.round(doy).toString().padStart(3, '0')}`
    }
    else if (dayOf === "month") {
        return `${date.getFullYear()}-${date.getMonth().toString(12).toUpperCase()}-${(date.getDate()-1).toString().padStart(2, '0')}`
    }
    else if (dayOf === "week") {
        return `${date.getFullYear()}+${Math.floor((doy + firstDay.getDay() - date.getDay()) / 7).toString().padStart(2, '0')}+${date.getDay()}`
    }
    else {
        return `${date.getFullYear()}.${Math.round((doy / (((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365))*1e5)}`
    }
}

console.log(myTimestamp(2023, 19, 4, "year"));
console.log(myTimestamp(2021, 19, 4));
console.log(myTimestamp(2023, 11, 30, "month"));
console.log(myTimestamp(2023, 14, 45, "week"));
console.log(myTimestamp(2023, 10, 20, "week"));
console.log(myTimestamp(2000, 12, 31, "week"));
console.log(myTimestamp(1999, 12, 31, "week"));
console.log(myTimestamp(2023, 12, 9, "month"));
console.log(myTimestamp(2022, 11, 24));
console.log(myTimestamp(2021, 11, 25));
console.log(myTimestamp(2020, 11, 26));
console.log(myTimestamp(2019, 11, 28));
console.log(myTimestamp(2018, 11, 22));
console.log(myTimestamp(1999, 12, 31));
console.log(myTimestamp(2000, 0, 34));