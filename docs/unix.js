function unix2doty(ms = 0) {
    const days = ms / 86400000 + 719468,
        doe = days - (era = Math.floor((days >= 0 ? days : days - 146096) / 146097)) * 146097,
        year = Math.floor((doe - doe / 1460 + doe / 36524 - doe / 146096) / 365) + era * 400;
    return [year, days - Math.floor(year * 365 + year / 4 - year / 100 + year / 400)];
}

const [year, doty] = unix2doty(Date.now());
console.log(
    `${year.toString().padStart(4, "0")}+${(day = Math.floor(doty)).toString().padStart(3, "0")}.${
    (Math.round((doty - day) * 1e5)).toString().padStart(5, "0")}+0`
    );