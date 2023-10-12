const year = 2023,
    month = 11,
    day = 25,
    date = new Date(year, month, day),
    firstday = new Date(year, 0, 1),
    lastday = new Date(year, 11, 31),
    firstdow = firstday.getDay(),
    lastdow = lastday.getDay(),
    doy = Math.floor((date - firstday) / 86400000),
    maxdoy = Math.floor((lastday - firstday) / 86400000),
    weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    b28 = [...Array(28).keys()].map(n => (n + firstdow + 28 ) % 28).map(n => n.toString(28)),
    days = [...Array(7).keys()].map(n => (n+firstdow+7)%7).map(n => weekday[n]),
    matrix = Array(days).concat([...Array(4).keys()].map(n => n * 7).map(n => b28.slice(n, n+7)));
console.log(matrix[0])
console.log(matrix[1])
console.log(matrix[2])
console.log(matrix[3])
console.log(matrix[4])
console.log(doy.toString(28))
console.log(doy)
console.log(maxdoy.toString(28))
console.log(doy - maxdoy - 1)
console.log(firstdow)