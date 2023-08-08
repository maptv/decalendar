function myDate(year, month, day, dayOf="year") {
    const dt = new Date(year, month - 1, day),
    firstDay = new Date(dt.getFullYear(), 0, 1),
    doy = (dt - firstDay) / 86400000,
    weekdoy = doy + firstDay.getDay() - dt.getDay(),
    week = weekdoy / 7,
    weekFloor = Math.floor(week);
    if (dayOf === "year") {
        return `${dt.getFullYear()}+${Math.round(doy).toString().padStart(3, '0')}`
    }
    else if (dayOf === "month") {
        return `${dt.getFullYear()}-${dt.getMonth().toString(12).toUpperCase()}-${dt.getDate().toString().padStart(2, '0')}`
    }
    else if (dayOf === "week") {
        return `${dt.getFullYear()}+${weekFloor.toString().padStart(2, '0')}+${dt.getDay()}`
    }
    
}

console.log(myDate(2023, 12, 32, "year"));
console.log(myDate(2023, 10, 22, "week"));
console.log(myDate(2024, 1, 10, "week"));
console.log(myDate(2023, 1, 8, "week"));
console.log(myDate(2023, 12, 9, "month"));
console.log(myDate(2022, 11, 24));
console.log(myDate(2021, 11, 25));
console.log(myDate(2020, 11, 26));
console.log(myDate(2019, 11, 28));
console.log(myDate(2018, 11, 22));
console.log(myDate(1999, 12, 31));
console.log(myDate(2000, 0, 34));