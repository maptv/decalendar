function myDate(year, month, day, dayOf="year") {
    const date = new Date(year, month - 1, day),
    firstDay = new Date(date.getFullYear(), 0, 1),
    doy = (date - firstDay) / 86400000;
    if (dayOf === "year") {
        return `${date.getFullYear()}+${Math.round(doy).toString().padStart(3, '0')}`
    }
    else if (dayOf === "month") {
        return `${date.getFullYear()}-${date.getMonth().toString(12).toUpperCase()}-${date.getDate().toString().padStart(2, '0')}`
    }
    else if (dayOf === "week") {
        return `${date.getFullYear()}+${Math.floor((doy + firstDay.getDay() - date.getDay()) / 7).toString().padStart(2, '0')}+${date.getDay()}`
    }
}

console.log(myDate(2023, 19, 4, "year"));
console.log(myDate(2021, 19, 4));
console.log(myDate(2023, 11, 30, "month"));
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