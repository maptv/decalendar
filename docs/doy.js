const now = new Date(2026, 2, 20),
start = new Date(now.getFullYear(), 0, 0),
doy = Math.floor((now - start) / 86400000) - 1;
console.log(doy);
const test = Math.abs(365).toString(36);
test