function dote({ year = 0, day = 0, month = 3, dotm = 1, week = 0, dotw = 3,
                hour = 0, minute = 0, second = 0, millisecond = 0,
                zone = 0, utc = -9, degree = -162 } = {}) {
  const cycle = Math.floor((year >= 0 ? year : year - 399) / 400),
    yote = year - cycle * 400;
  return (
    yote * 365 + cycle * 146097 + Math.floor(yote / 4) - Math.floor(yote / 100) + day +
    Math.floor((153 * (month > 2 ? month - 3 : month + 9) + 2) / 5) + dotm - 1 +
    week * 7 + dotw - 3 + (hour + minute / 60 + second / 3600 + millisecond / 3600000) / 24 -
    (zone + Math.floor(utc / 2.4) + 4 + Math.floor((degree + 162) / 36)) / 10
  );
}
// function dote({ year = 0, day = 0, month = 3, dotm = 1, week = 0, dotw = 3,
//                 hour = 0, minute = 0, second = 0, millisecond = 0 } = {}) {
//   const cycle = Math.floor((year >= 0 ? year : year - 399) / 400), yote = year - cycle * 400;
//   return (
//     yote * 365 + cycle * 146097 + Math.floor(yote / 4) - Math.floor(yote / 100) + day
//     + Math.floor((153 * (month > 2 ? month - 3 : month + 9) + 2) / 5) + dotm - 1
//     + week * 7 + dotw - 3 + hour / 24 + minute / 1440 + second / 86400 + millisecond / 86400000
//   );
// }

function year2leap(year = 1970) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}
function doty(args) {
    const days = dote(args),
      cycle = Math.floor((days >= 0 ? days : days - 146096) / 146097),
      dotc = days - cycle * 146097,
      yotc = Math.floor((dotc - Math.floor(dotc / 1460)
        + Math.floor(dotc / 36524) - Math.floor(dotc / 146096)) / 365);
    return [yotc + cycle * 400,
            dotc + Math.floor(yotc / 100) - yotc * 365 - Math.floor(yotc / 4)];
}
function year(args) {
    const days = dote(args),
      cycle = Math.floor((days >= 0 ? days : days - 146096) / 146097),
      dotc = days - cycle * 146097;
    return (dotc - Math.floor(dotc / 1460) + Math.floor(dotc / 36524)
        - Math.floor(dotc / 146096)) / 365 + cycle * 400;
}
// function doty(args) {
//     const days = dote(args), cycle = Math.floor((days >= 0 ? days : days - 146096) / 146097), dotc = days - cycle * 146097,
//     yotc = Math.floor((dotc - Math.floor(dotc / 1460) + Math.floor(dotc / 36524) - Math.floor(dotc / 146096)) / 365);
//     return [yotc + cycle * 400, dotc + Math.floor(yotc / 100) - yotc * 365 - Math.floor(yotc / 4)];
// }
function deco(args, {lead = "0", minus = false, emoji = false} = {}) {
    const zone = args.zone; args.zone = 0; let [year, days] = doty(args);
    return `${emoji ? "🗓️" : ""}${
    (year + minus).toString().padStart(4, lead)}${minus ? "-" : "+"}${
    Math.abs(Math.floor(days = days - (365 + year2leap(year + 1)) * minus)
    ).toString().padStart(3, lead)}${emoji ? "🕰️" : ""}️${
    Math.abs(days % 1 * 10).toFixed(4)}${zone != null ? (minus ? "+" : "-") + String(zone) : ""}`
}

class greg {
    constructor({ year = 0, day = 0, month = 3, dotm = 1, week = 0, dotw = 3,
                hour = 0, minute = 0, second = 0, millisecond = 0,
                zone = 0, utc = -9, degree = -162 } = {}) {
        this.cykl = Math.floor((year >= 0 ? year : year - 399) / 400);
        this.yotc = year - this.cykl * 400;
        this.zone = (zone + Math.floor(utc / 2.4) + 4 +
                     Math.floor((degree + 162) / 36));
        this.dote = (
            this.yotc * 365 + this.cykl * 146097
            + Math.floor(this.yotc / 4) - Math.floor(this.yotc / 100) + day
            + Math.floor((153 * (month > 2 ? month - 3 : month + 9) + 2) / 5)
            + dotm - 1 + week * 7 + dotw - 3 - this.zone / 10
            + (hour + minute / 60 + second / 3600 + millisecond / 3600000) / 24
        );
        this.cykl = Math.floor((this.dote >= 0 ? this.dote : this.dote - 146096)
                                / 146097),
        this.dotc = this.dote - this.cykl * 146097;
        this.year = (this.dotc - Math.floor(this.dotc / 1460)
                     + Math.floor(this.dotc / 36524)
                     - Math.floor(this.dotc / 146096)) / 365 + this.cykl * 400;
        this.yotc = Math.floor((this.dotc - Math.floor(this.dotc / 1460) +
            Math.floor(this.dotc / 36524) - Math.floor(this.dotc / 146096)) / 365);
        this.doty = (this.dotc + Math.floor(this.yotc / 100) - this.yotc * 365
            - Math.floor(this.yotc / 4));
        const y = Math.floor(this.year) + 1;
        this.leap = y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
        this.nday = 365 + this.leap;
        const m = this.doty - this.nday;
        this.plus = `${
            (y - 1).toString().padStart(4, "0")}+${
            Math.abs(Math.floor(this.doty)).toString().padStart(3, "0")}️${
            Math.abs(this.doty % 1 * 10).toFixed(4)}-${this.zone}`
        this.down = `${
            (y).toString().padStart(4, "0")}-${
            Math.abs(Math.floor(m)).toString().padStart(3, "0")}️${
            Math.abs(m % 1 * 10).toFixed(4)}+${this.zone}`
    }
}

d = new greg({day: 719468, millisecond: Date.now(), zone: 0})
u = new greg({year: 1969, day: 306, millisecond: Date.now(), zone: 0})
console.log(deco({year: 1969, day: 306, millisecond: Date.now(), zone: 0}))
console.log(doty({year: 1969, day: 306, millisecond: Date.now(), zone: 0}))
console.log(dote({year: 1969, day: 306, millisecond: Date.now(), zone: 0}))
console.log(d.cykl)
console.log(u.cykl)
console.log(d.yotc)
console.log(u.yotc)
console.log(d.yote)
console.log(u.yote)
console.log(d.dote)
console.log(u.dote)
console.log(year({year: 1969, day: 306, millisecond: Date.now(), zone: 0}))
console.log(d.year)
console.log(d.dotc)
console.log(d.doty)
console.log(d.leap)
console.log(d.zone)
console.log(d.leap)
console.log(doty({year: 1969, day: 306}))
console.log(deco({year: 2023, day: 5, hour: 24, zone: null}, {emoji: true, minus: true}))
console.log(deco({year: 2023, day: 5, hour: 0, zone: null}))
console.log(year({year: 2024, day: 73, zone: null}))
console.log(dote({ year: 1969, day: 306, millisecond: Date.now() }));
console.log((-162 % 360) + 360);
console.log(dote({ year: 1969, day: 306 }));
console.log(dote({ year: 1969, day: 306, degree: 0 }));
console.log(dote({ day: 719468, millisecond: Date.now() }));
console.log(dote({ year: 2024.2 }));
console.log(dote({ year: 2024.2 }) - dote({ year: 2024 }));
console.log(dote({ year: 2024 }));
console.log(dote({ year: 2024, week: 0, dotw: 3 }));
console.log((dote({ year: 2000, day: 0}) + 3) % 7);
console.log((dote({ year: 2000, week: 3, dotw: 4}) + 3) % 7);
console.log(dote({ month: 1, dotm: 1 }));
console.log(dote({ year: 1969, day: 306, utc: 0}));
console.log(dote({ year: 1969, day: 306, degree: 0}));
console.log(dote({ year: 1969, day: 306, utc: -9}));
// dote2greg
console.log(doty2dote(1969, 306));
// function doty2dote(year = 1969, doty = 0) {
//     const cycle = Math.floor((year >= 0 ? year : year - 399) / 400), yote = year - cycle * 400;
//     return cycle * 146097 + yote * 365 + Math.floor(yote / 4) - Math.floor(yote / 100) + doty
// }
class foo extends Function {
  constructor() {
    super("...args", "return this.bar(...args)");
    this._pos = 0;
    return this.bind(this);
  }

  bar(arg) {
    console.log(arg + this._pos);
    return this.bind(this);
  }
}

const obj = new foo();
let var1 = obj("one ")("two ")("three ")("four ")("five");
console.log(var1._pos);
console.log(var1("six "));

function namedFunc(num, ...args) {
  namedFunc.total = namedFunc.total != null ? namedFunc.total + num : num;
  namedFunc.list = namedFunc.list != null ? namedFunc.list + args : args;
  return namedFunc;
}
console.log(namedFunc(2, 3, 4)("3", 5)(5).list);

class foo2 extends Function {
  constructor() {
    super("...args", "return this.bar(...args)");
    this._pos = 0;
    return this.bind(this);
  }

  bar(arg) {
    console.log(arg + this._pos);
  }
}

const obj2 = new foo();

let var2 = obj("something ");
console.log(obj2._pos);
// https://gist.github.com/gordonbrander/72721085332be31289790e7faa86f882
// Create a Python singledispatch / Clojure multimethod style function that
// dispatches on the first argument.
//
// Returns a wrapped function that calls appropriate underlying function
// based on prototype of first argument.
//
// Custom implementations for specific types can be registered through calling
// `.define(constructor, fun)` on the wrapped function.
const singledispatch = (fallback) => {
  let _key = Symbol("singledispatch method");

  // Assign fallback to Object prototype.
  // This makes it the method of last resort.
  Object.prototype[_key] = fallback;

  const dispatch = (object, ...rest) => {
    let method = object[_key];
    return method(object, ...rest);
  };

  dispatch.define = (constructor, method) => {
    constructor.prototype[_key] = method;
  };

  return dispatch;
};

class Coords {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Coords(this.x, this.y);
  }

  add(x, y) {
    return new Coords(this.x + x, this.y + y);
  }
}

const clone = singledispatch();

clone.define(Coords, (coords) => new Coords(coords.x, coords.y));

const add = singledispatch();

add.define(Coords, (coords, x, y) => new Coords(coords.x + x, coords.y + y));

let origin = new Coords(0, 0);
console.log(origin);
console.log(add(origin, 3, 4));
console.log(origin.add(5, -5));

// function dote2deco1(
//   dote = 719468,
//   zone = 4,
//   lead = "0",
//   emoji = false,
//   minus = false
// ) {
//   let [year, doty] = dote2doty(dote);
//   return `${emoji ? "🗓️" : ""}${(year + minus).toString().padStart(4, lead)}${
//     minus ? "-" : "+"
//   }${Math.abs(
//     Math.floor((doty = doty - (365 + year2leap(year + 1)) * Number(minus)))
//   )
//     .toString()
//     .padStart(3, lead)}${emoji ? "🕰️" : ""}️${Math.abs((doty % 1) * 10).toFixed(
//     4
//   )}${zone != null ? (minus ? "+" : "-") + String(zone) : ""}`;
// }

function dote2sohi(dote = 492633) {
  const socy = Math.floor((dote >= 0 ? dote : dote - 12052) / 12053),
    dotc = dote - socy * 12053,
    yotc = Math.floor((dotc - Math.floor(dotc / 1461)) / 365);
  return [yotc + socy * 33, dotc - (yotc * 365 + Math.trunc((yotc - 1) / 4))];
}

console.log(dote2sohi(12053));

function getYotcSH(dote = 492633) {
  const socy = Math.floor(dote / 12053);
  const dotc = dote - socy * 12053;
  return Math.floor((dotc - Math.floor(dotc / 1461)) / 365);
}

function getDotcSH(yotc = 0) {
  return yotc * 365 + Math.trunc((yotc - 1) / 4);
}

function sohi2bool(year = 1970) {
  const yotc = year % 33;
  return yotc !== 0 && yotc % 4 === 0;
}

// function sohi2year(year = 1348, doty = 287, zone = 0, nday = 366) {
//   return year + (doty - zone) / nday;
// }

const startsSH = [...Array(35).keys()].map(
  (y) => y * 365 + Math.trunc((y - 1) / 4)
);
const startsSH1 = [...Array(33).keys()].map(
  (y) => y * 365 + Math.trunc((y - 1) / 4)
);
const startsSH2 = [...Array(33).keys()].map((y) => sohi2bool(y));
const lengthsSH = [...Array(33).keys()].map((y) => 365 + sohi2bool(y));
console.log(lengthsSH.reduce((a, b) => a + b, 0));
console.log(sohi2bool(1403));
console.log(doty2dote(2024, 19, 4));
console.log(dote2sohi(739270 - 226835));
console.log(dote2sohi(Date.now() / 86400000 + 719468 - 226835));

console.log(
  Object.fromEntries(
    [...Array(66).keys()]
      .map((y) => y + 1353)
      .map((y, i) => [y, [i, sohi2bool(y)]])
  )
);
const doctArraySH = [...Array(34).keys()].map((y) => getDotcSH(y));
const yearStartsSH = startsSH.map((d) => getYotcSH(d));
const testSH = startsSH.map((d) => dote2sohi(d + 123.45678));
const testSH1 = startsSH.map((d) => dote2sohi(d - 1));
const yearLastsSH = startsSH.map((d) => getYotcSH(d - 1));

const starts = [...Array(24).keys()].map(
  (y) => y * 668 + Math.floor(y / 2) + Math.trunc((y - 1) / 10)
);
function getMarsYotc(days) {
  return Math.floor(
    (days - Math.floor(days / 1336) - Math.floor(days / 6686)) / 668
  );
}
function getMarsDotc(marsYotc) {
  return (
    marsYotc * 668 + Math.floor(marsYotc / 2) + Math.trunc((marsYotc - 1) / 10)
  );
}
console.log(starts.map((d) => getMarsYotc(d)));
console.log(starts.map((d) => getMarsYotc(d - 1)));
console.log([...Array(24).keys()].map((y) => getMarsDotc(y)));

function dote2sote(dote = 719468) {
  return (dote - 713402.41516515) / 1.0274912517;
}

function dote2soty(dote = 719468) {
  return sote2soty(dote2sote(dote));
}

function sote2soty(sote = 719468) {
  const socy = Math.floor((sote >= 0 ? sote : sote - 14708) / 14709),
    sotc = sote - socy * 14709,
    yotc = Math.floor(
      (sotc - Math.floor(sotc / 1336) - Math.floor(sotc / 6686)) / 668
    );
  return [
    yotc + socy * 22,
    sotc - (yotc * 668 + Math.floor(yotc / 2) + Math.trunc((yotc - 1) / 10)),
  ];
}

console.log(sote2soty(14709));

function long2zone1(degrees = -180) {
  return ~~long2turn(degrees, 1);
}
function long2zone2(degrees = -180) {
  return Math.round(long2long1(degrees, 1));
}

function long2turn(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return (
    ((((degrees %= 360) < 0 ? degrees + 360 : degrees) + 162) /
      (360 / 10 ** e)) %
    10 ** e
  );
}
function lati2turn(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return (
    ((((degrees %= 360) < 0 ? degrees + 360 : degrees) + 0) / (360 / 10 ** e)) %
    10 ** e
  );
}
function lati2turn1(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return ((degrees %= 360) / (360 / 10 ** e)) % 10 ** e;
}
function turn2long(turns = 0) {
  return ((turns %= 1000) < 0 ? turns + 1000 : turns) * 0.36 - 162;
}
function long2long1(degrees = -180, e = 0) {
  return (
    ((((degrees %= 360) < 0 ? degrees + 360 : degrees) + 144) /
      (360 / 10 ** e)) %
    10 ** e
  );
}
console.log(
  // degrees to zone
  // multiples of 9 degrees yield terminating decimal numbers
  [-180, -90, 0, 9, 18, 36, 45, 90, 162].map(long2zone1)
);
console.log(
  // degrees to zone
  // multiples of 9 degrees yield terminating decimal numbers
  [-180, -90, 0, 9, 18, 36, 45, 90, 162].map(long2zone2)
);

// bitwise not operator works up to 2 billion
~~(2e9 + 0.5);
// bitwise not operator does not floor numbers greater than 2 billion
~~(3e9 + 0.5);

function spread(self, startOrStop, span, splitsAndSpaces, ...args) {
  splitsAndSpaces = (
    !splitsAndSpaces || splitsAndSpaces.length === 0
      ? [1]
      : typeof splitsAndSpaces === "number"
      ? [splitsAndSpaces]
      : typeof splitsAndSpaces === "string"
      ? Array.from(splitsAndSpaces, Number)
      : splitsAndSpaces
  ).concat(args);
  const len = self.length,
    result = [],
    splitCount = splitsAndSpaces.length,
    splitSpaceSum = splitsAndSpaces.reduce((a, b) => a + b, 0);
  startOrStop = Math.max(
    // use default start
    (startOrStop == null && span > 0) || (startOrStop == null && span == null)
      ? 0
      : // use default stop
      startOrStop == null || (startOrStop > len && span < 0)
      ? len
      : // try to turn negative startOrStop to positive index
      startOrStop < 0
      ? startOrStop + len
      : // if startOrStop is still negative, make it zero
        startOrStop,
    0
  );
  // need to clip span if start + span > len
  span =
    span == null || startOrStop + span > len
      ? len - startOrStop
      : startOrStop + span < 0
      ? startOrStop
      : span;
  // return [self, startOrStop, span, splitsAndSpaces]
  // if (
  //   span === 0 ||
  //   splitSpaceSum === 0 ||
  //   Math.sign(splitSpaceSum) !== Math.sign(span)
  // ) { return result };
  for (
    let i = span > 0 ? startOrStop : startOrStop - span, counter = -1;
    span > 0 ? i < startOrStop + span : i < startOrStop;
    i += splitsAndSpaces[counter]
  ) {
    if (counter === -1 || counter % 2 === 0) {
      result.push(self[i]);
    }
    counter = (counter + 1) % splitCount;
  }
  return result;
}

// //   const
// //   const n_splits = Math.floor(span / split_space) + (span % split_space >= split)
// //   const stop = span + start
// //   const result = [];
// //     for (let i = start; span > 0 ? i < stop : i > stop; i += split_space) {
// //       result.push(range(i, i + split));
// //     }
// //   return result;
// // }function myStamp(date, offset = 0, dayOf = "y", sign = "+") {
// date = typeof date === "string" ? new Date(date) : date;
// const signOffset = offset < 0 ? "-" : "+";
// if (dayOf == "y") {
//     const ddOffset = Math.round(offset / 2.4),
//         decimal = new Date(
//             date.getUTCFullYear(),
//             date.getUTCMonth(),
//             date.getUTCDate(),
//             date.getUTCHours() + 1,
//             date.getUTCMinutes(),
//             date.getUTCSeconds(),
//             date.getUTCMilliseconds() + ddOffset * 8640000,
//         ),
//         decYear = decimal.getFullYear(),
//         firstDay = new Date(decYear, 0, 1),
//         doy = (decimal - firstDay) / 86400000,
//         roundedDoy = Math.round(doy * 1e5) / 1e5;
//     let dateDoy, timeDoy;
//     [dateDoy, timeDoy] = roundedDoy.toString().split(".");
//     dateDoy = dateDoy.padStart(3, '0')
//     timeDoy = timeDoy.padEnd(5, '0')
//     if (sign == "+") {
//         return `${decYear}+${dateDoy}.${timeDoy}${signOffset}${Math.abs(ddOffset)}`;
//     }
//     if (sign == "-") {
//         const daysInYear = ((decYear % 4 === 0 && decYear % 100 > 0) || decYear % 400 == 0) ? 366 : 365,
//             negDateDoy = (dateDoy - daysInYear).toString().padStart(3, "0"),
//             negTimeDoy = Math.abs(1e5 - timeDoy).toString().padEnd(5, "0");
//         return `${decYear}${negDateDoy}.${negTimeDoy}${signOffset}${Math.abs(ddOffset)}`;
//     }
// } else {
//     const standard = new Date(
//         date.getUTCFullYear(),
//         date.getUTCMonth(),
//         date.getUTCDate(),
//         date.getUTCHours(),
//         date.getUTCMinutes(),
//         date.getUTCSeconds(),
//         date.getUTCMilliseconds() + offset * 3600000,
//     ),
//         stanYear = standard.getFullYear(),
//         stanMonth = standard.getMonth(),
//         stanDate = standard.getDate(),
//         stanHour = standard.getHours(),
//         stanMin = standard.getMinutes(),
//         stanSec = standard.getSeconds(),
//         suffix = signOffset + Math.abs(offset).toString().padStart(2, "0"),
//         posTime = `T${stanHour.toString().padStart(2, "0")}`
//             + `:${stanMin.toString().padStart(2, "0")}`
//             + `:${stanSec.toString().padStart(2, "0")}`
//             + suffix,
//         negTime = `T${Math.abs(stanHour - 24).toString().padStart(2, "0")}`
//             + `:${Math.abs(stanMin - 60).toString().padStart(2, "0")}`
//             + `:${Math.abs(stanSec - 60).toString().padStart(2, "0")}`
//             + suffix;
//     if (dayOf == "m") {
//         if (sign == "+") {
//             return `${stanYear}`
//                 + `+${stanMonth.toString(13).toUpperCase()}`
//                 + `+${(stanDate - 1).toString().padStart(2, '0')}`
//                 + posTime;
//         } else if (sign == "-") {
//             const daysInMonth = new Date(stanYear, stanMonth + 1, 0).getDate();
//             return `${stanYear}`
//                 + `${(stanMonth - 12).toString(13).toUpperCase()}`
//                 + `${(stanDate - 1 - daysInMonth).toString().padStart(2, '0')}`
//                 + negTime;
//         }
//     } else if (dayOf == "w") {
//         const first = new Date(stanYear, 0, 1),
//             datedoy = (standard - first) / 86400000,
//             daysInYear = ((stanYear % 4 === 0 && stanYear % 100 > 0) || stanYear % 400 == 0) ? 366 : 365,
//             firstDay = first.getDay(),
//             stanDay = standard.getDay(),
//             dateweek = Math.floor((datedoy + firstDay - stanDay) / 7);
//         if (sign == "+") {
//             return `${stanYear}`
//                 + `+${dateweek.toString().padStart(2, '0')}`
//                 + `+${stanDay}`
//                 + posTime;
//         } else if (sign == "-") {
//             const first = new Date(stanYear, 0, 1),
//                 last = new Date(stanYear, 0, daysInYear),
//                 fulldoy = (last - first) / 86400000,
//                 fullweek = Math.floor((fulldoy + firstDay - last.getDay()) / 7);
//             return `${stanYear}`
//                 + `${(dateweek - fullweek - 1).toString().padStart(2, '0')}`
//                 + `${stanDay - 7}`
//                 + negTime;
//         }
//     }
// }

function year2bool(y) {
  return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
}

console.log(year2bool(1972));

// function unix2doty(ms = 0) {
//     const days = ms / 86400000 + 719468,
//         era = Math.floor((days >= 0 ? days : days - 146096) / 146097),
//         doe = days - era * 146097,
//         year = Math.floor((doe - doe / 1460 + doe / 36524 - doe / 146096) / 365) + era * 400;
//     return [year, days - Math.floor(year * 365 + year / 4 - year / 100 + year / 400)];
// }

console.log(unix2doty(Date.now()));
// const [year, doty] = unix2doty(Date.now());
// console.log(doty);
// console.log(
//   `${year.toString().padStart(4, "0")}+${(day = Math.floor(doty))
//     .toString()
//     .padStart(3, "0")}.${Math.round((doty - day) * 1e5)
//     .toString()
//     .padStart(5, "0")}+0`
// );

function leaps(year) {
  return Math.floor(year / 4 - year / 100 + year / 400);
}

console.log(leaps(2023));

function date2doty(month = 1, day = 1) {
  return Math.floor(
    (153 * (month > 2 ? month - 3 : month + 9) + 2) / 5 + day - 1
  );
}

console.log(date2doty());

function doty2date(doty = 0) {
  const m = Math.floor((5 * doty + 2) / 153);
  return [
    Math.floor(m < 10 ? m + 3 : m - 9),
    Math.floor(doty - (153 * m + 2) / 5 + 2),
  ];
}

console.log(doty2date());

function doty2isoo(year = 1970, doty = 0) {
  return (doty + 60 + year2bool(year + 1)) % 365;
}

function date2year(year = 1970, month = 1) {
  return year - (month < 3);
}

console.log(date2year());

console.log(doty2isoo());
console.log(doty2isoo(2023, 0));
console.log(306 - 59);

const x = 10;
console.log(x.toString(16).toUpperCase());

function unix2wday(ms = 0) {
  return Math.floor((ms / 86400000 + 4) % 7);
}

console.log(doty2deco(-1, +366));
console.log(unix2wday(Date.now()));
console.log(date2doty(2021, 9, 1));

console.log(unix2doty());
console.log(unix2doty(Date.now()));
console.log(unix2doty(Date.now(), (precision = 5)));
console.log(unix2doty(86400));
console.log(unix2doty(0));
console.log(unix2doty(0, 3));
console.log(unix2doty(-86400));
console.log(unix2doty(1695340800, 4));
console.log(unix2doty(1695327225999, 5));
console.log((60 + 305) % 365);
console.log((263 + 305) % 365);
console.log((1 + 305) % 365);
console.log(year2bool(2000));

function doty2year(year = 1969, doty = 0) {
  return year + (doty > 305);
}

console.log(doty2year());

console.log(
  `${date2year().toString().padStart(4, "0")}+${date2doty()
    .toString()
    .padStart(3, "0")}`
);

console.log(
  `${doty2year().toString().padStart(4, "0")}-${doty2date()
    .map((i) => i.toString().padStart(2, "0"))
    .join("-")}`
);

function isoo2year(year = 1970, day = 1) {
  return year - (day < 60 + year2bool(year - 1));
}

console.log(`${isoo2year(1970, 60)}+${isoo2doty()}`);
console.log(isoo2year()); // R

console.log("R".charCodeAt());

function hour2zone(hour = 0) {
  return hour == 0
    ? "Z"
    : hour > 0 && hour < 10
    ? String.fromCharCode(hour + 64)
    : hour > 9 && hour < 13
    ? String.fromCharCode(hour + 65)
    : hour < 0 && hour > -13
    ? String.fromCharCode(Math.abs(hour) + 77)
    : "J";
}

console.log(year2bool(1970));
console.log(hour2zone()); // R
console.log(hour2zone(-new Date().getTimezoneOffset() / 60)); // R
console.log(); // R

console.log("Z".charCodeAt());

console.log(hour2zone(-2)); // R
console.log(
  `${date2year(0, 1)}+${date2doty(1, 1).toString().padStart(3, "0")}`
);

console.log(
  `${doty2year().toString().padStart(4, "0")}-${doty2date()
    .map((i) => i.toString().padStart(2, "0"))
    .join("-")}`
);

function time2doty(hours = 1, minutes = 0, seconds = 0) {
  return hours / 24 + minutes / 1440 + seconds / 86400;
}

console.log(
  `${date2year()}+${
    date2doty() + Math.round(time2doty() * 1e5) / 1e5
  }${hour2zone()}`
);

console.log(
  `${doty2year()}+${doty2date()
    .map((i) => i.toString().padStart(2, "0"))
    .join("-")}T${doty2time()
    .map((i) => i.toString().padStart(2, "0"))
    .join(":")}${zone2hour()}`
);

function doty2time(doty = 1 / 24) {
  doty = doty - Math.floor(doty);
  const hours = doty * 24,
    floorHours = Math.floor(hours),
    minutes = (hours - floorHours) / 60,
    floorMinutes = Math.floor(minutes),
    seconds = (minutes - floorMinutes) / 60;
  return [floorHours, floorMinutes, Math.floor(seconds)];
}

console.log(hour2zone(-new Date().getTimezoneOffset() / 60));
console.log(zone2hour(hour2zone(-new Date().getTimezoneOffset() / 60)));
console.log("?".charCodeAt());
console.log(String.fromCharCode(64 + 27));
console.log(zone2hour("r"));

// function unix2doty(ms = 0) {
//     const days = ms / 86400000 + 719468,
//         era = Math.floor((days >= 0 ? days : days - 146096) / 146097),
//         doe = days - era * 146097,
//         yoe = Math.floor((doe - doe / 1460 + doe / 36524 - doe / 146096) / 365),
//         year = yoe + era * 400,
//         timestamp = days - Math.floor(year * 365 + year / 4 - year / 100 + year / 400),
//         doty = Math.floor(timestamp);
//     return [year, doty, timestamp - doty];
// }

console.log(unix2doty(Date.now()));

// function time2doty(hours = 1, minutes = 0, seconds = 0) {
//     return hours / 24 + minutes / 1440 + seconds / 86400
// }

console.log(
  `${date2year().toString().padStart(4, "0")}+${date2doty()
    .toString()
    .padStart(3, "0")}.${(Math.round(time2doty(0) * 1e5) / 1e5)
    .toString()
    .padStart(5, "0")}${hour2zone(0)}`
);

function unix2doty(ms = 0) {
  const days = ms / 86400000 + 719468,
    era = Math.floor((days >= 0 ? days : days - 146096) / 146097),
    doe = days - era * 146097,
    yoe = Math.floor((doe - doe / 1460 + doe / 36524 - doe / 146096) / 365),
    year = yoe + era * 400,
    timestamp =
      days - Math.floor(year * 365 + year / 4 - year / 100 + year / 400),
    doty = Math.floor(timestamp);
  return [year, doty, timestamp - doty];
}

function createTimestamp() {
  const [year, doty, time] = unix2doty(Date.now());
  return `${year.toString().padStart(4, "0")}+${doty
    .toString()
    .padStart(3, "0")}.${Math.round(time * 1e5)
    .toString()
    .padStart(5, "0")}+0`;
}

function date2link(
  start = "1970-01-01T00:00:00Z",
  end = "1970-01-02T00:00:00Z",
  title = "Event Title",
  details = "Event Details",
  location = "Event Location",
  url = "http://example.com",
  name = "Organizer Name",
  calendar = "google"
) {
  switch (calendar.toLowerCase()) {
    case "google":
      return (
        "https://www.google.com/calendar/event?action=TEMPLATE" +
        `&dates=${encodeURIComponent(
          start + "/" + end
        )}&text=${encodeURIComponent(title)}&details=${encodeURIComponent(
          details
        )}&location=${encodeURIComponent(
          location
        )}&sprop=website:${encodeURIComponent(
          url
        )}&sprop=name:${encodeURIComponent(name)}`
      );
    case "yahoo":
      return (
        "https://calendar.yahoo.com/?v=60" +
        `&st=${encodeURIComponent(start)}&et=${encodeURIComponent(
          end
        )}&title=${encodeURIComponent(title)}&desc=${encodeURIComponent(
          details
        )}&in_loc=${encodeURIComponent(location)}&url=${encodeURIComponent(
          url
        )}`
      );
  }
  return (
    `https://outlook.${calendar}.com/calendar/action/compose` +
    "?&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&allday=false" +
    `&startdt=${encodeURIComponent(start)}&enddt=${encodeURIComponent(
      end
    )}&summary=${encodeURIComponent(title)}&description=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}`
  );
}

function build_dec(
  year = 1970,
  month = 1,
  day = 1,
  hours = 0,
  minutes = 0,
  seconds = 0,
  zone = "Z"
) {
  return `${date2year(year, month).toString().padStart(4, "0")}+${date2doty(
    month,
    day
  )
    .toString()
    .padStart(3, "0")}.${Math.round(time2doty(hours, minutes, seconds) * 1e5)
    .toString()
    .padStart(5, "0")}${zone}`;
}

console.log(build_dec());

function build_iso(year = 1969, doty = 0, zone = "Z") {
  return `${doty2year(year, doty).toString().padStart(4, "0")}-${doty2date(doty)
    .map((i) => i.toString().padStart(2, "0"))
    .join("-")}T${doty2time(doty)
    .map((i) => i.toString().padStart(2, "0"))
    .join(":")}${zone}`;
}

console.log(build_dec());

function doty2link(
  start = "1969+306.00000Z",
  end = "1969+307.00000Z",
  title = "Event Title",
  details = "Event Details",
  location = "Event Location",
  url = "http://example.com",
  name = "Organizer Name",
  calendar = "google"
) {
  [start_year, start_doty, start_zone] = parse_dec(start);
  [end_year, end_doty, end_zone] = parse_dec(end);
  return date2link(
    (start = `${doty2year(start_year, start_doty)
      .toString()
      .padStart(4, "0")}-${doty2date(start_doty)
      .map((i) => i.toString().padStart(2, "0"))
      .join("-")}T${doty2time(start_doty)
      .map((i) => i.toString().padStart(2, "0"))
      .join(":")}${start_zone}`),
    (title = title),
    (details = details),
    (location = location),
    (url = url),
    (name = name),
    (calendar = calendar)
  );
}

function parse_iso(timestamp = "1970-01-01T00:00:00Z") {
  [input, year, month, dotm, hour, minute, second, zone] =
    /([+-]?\d{4})?-?(\d{2})?-?(\d{2})?T?(\d{2})?:?(\d{2})?:?(\d{2})?([a-zA-Z]|[+-]\d{2})?/.exec(
      timestamp
    );
  return [
    input,
    parseInt(year),
    parseInt(month),
    parseInt(dotm),
    parseInt(hour),
    parseInt(minute),
    parseInt(second),
    /^[a-zA-Z]+$/.test(zone) ? zone2hour(zone) : parseInt(zone),
  ];
}

// function parse_dec(timestamp = "1969+306.00000Z") {
//     [input, year, doty, time, zone] =
//         /([+-]?\d{1,4})?([+-]?\d{1,3})?\.?(\d+)?([a-zA-Z]|[+-]\d+)?/.exec(timestamp);
//     return [input, parseInt(year), parseInt(doty), parseFloat("." + time),
//         parseFloat(/^[a-zA-Z]+$/.test(zone) ? zone2hour(zone) / 24
//             : zone.replace(/([+-])/, "$1\."))];
// }

// function parse_dec(timestamp = "1969+306.00000Z") {
//     [input, year, doty, zone] =
//         /([+-]?\d{1,4})?(?:[+-])?(\2\d{1,3}?\.?\d*)?([a-zA-Z]|[+-]\d+)?/.exec(timestamp);
//     return [input, parseInt(year), parseFloat(doty),
//         parseFloat(/^[a-zA-Z]+$/.test(zone) ? zone2hour(zone) / 24 : zone.replace(/([+-])/, "$1\."))];
// }

// function parse_dec(timestamp = "1969+306.00000Z") {
//     return /([+-]?\d{1,4})?(?(?=[+-])[+-]\d+|(?![+-])\d{3})?([a-zA-Z]|[+-]\d+)?/.exec(timestamp);
// }

// function parse_dec(timestamp = "1969+306.00000Z") {
//     return /([+-]?(?=[+-])|\d+(?![+-])?|\d{4})(?<=[+-])|\d+\.?\d*(?<![+-])|\d{3}\.?\d*)/.exec(timestamp);
// }

// function parse_dec(timestamp = "1969+306.00000Z") {
//     return /([+-](?<=[+-])\d{1,4}|(?<![+-])\d*)((?=[+-])[+-]\d*|(?![+-])\d{1,3})/.exec(timestamp);
// }

// function parse_dec(timestamp = "1969+306.00000Z") {
//     return /(^[+-]*(?<=[+-])\d{1,4}|(?<![+-])\d*)((?=[+-])[+-]\d*|(?![+-])\d{1,3})/.exec(timestamp);
// }

// function parse_dec(timestamp = "1969+306.00000Z") {
//     return /((?=[+-])[+-]\d{1,3}|(?![+-])\d*)/.exec(timestamp);
// }

// function parse_dec(timestamp = "1969+306.00000Z") {
//     return /(?<year>(?<=[+-])[+-]?\d*)?(?<doty>[+-]?\d*\.?\d*)(?<zone>[+-]\d*|[a-zA-Z])?/.exec(timestamp);
// }

function zone2hour(zone = "Z") {
  return (zone = zone.toUpperCase()) == "Z"
    ? 0
    : zone > "@" && zone < "J"
    ? zone.charCodeAt() - 64
    : zone > "J" && zone < "N"
    ? zone.charCodeAt() - 65
    : zone < "Z" && zone > "M"
    ? -(zone.charCodeAt() - 77)
    : zone;
}
function deco2doty(timestamp = "1969+306.00000Z") {
  const arr = timestamp.toString().split(/(?=[+-]|[a-zA-Z])/, 3);
  switch (arr.length) {
    case 1:
      return [unix2doty(Date.now())[0], parseFloat(arr[0]), 0];
    case 2:
      return /^[a-zA-Z]+$/.test(arr[1])
        ? [unix2doty(Date.now())[0], parseFloat(arr[0]), zone2hour(arr[1]) / 24]
        : [parseFloat(arr[0]), parseFloat(arr[1]), 0];
  }
  return [
    parseFloat(arr[0]),
    parseFloat(arr[1]),
    /^[a-zA-Z]+$/.test(arr[2])
      ? zone2hour(arr[2]) / 24
      : parseFloat(arr[2].replace(/([+-])/, "$1.")),
  ];
}

// function slice(self, start, stop, steps, ...args) {
//   const len = self.length, result = [];
//   if (steps === 0) { return result };
//   steps = (!steps || steps.length === 0 ? [1] :
//     typeof steps === "number" ? [steps] :
//     typeof steps === "string" ? Array.from(steps, Number) :
//     steps).concat(args);
//   const stepCount = steps.length,
//     stepSum = steps.reduce((a, b) => a + b, 0);
//   if (stepSum === 0) { return result };
//   start = Math.max(
//     start == null && stepSum > 0 ? 0 :
//     start == null && stepSum < 0 ? len - 1 :
//     start >= len ? len - 1 :
//     start < 0 ? start + len :
//     start, 0);
//   stop = Math.max(
//     stop == null && stepSum > 0 ? len :
//     stop == null && stepSum < 0 ? -1 :
//     stop >= len ? len :
//     stop < 0 ? stop + len :
//     stop, -1);
//   for (
//     let i = start, counter = -1;
//     stepSum > 0 ? i < stop : i > stop;
//     i += steps[counter]
//   ) {
//     result.push(self[i]);
//     counter = (counter + 1) % stepCount;
//   };
//   return result;
// }

// function slice(self, start, stop, step) {
//   const len = self.length,
//     result = [];
//   step = step || 1;
//   start = Math.max(
//     start == null ? step > 0 ? 0 : len - 1 :
//     start < 0 ? start + len :
//     start >= len ? len - 1 : start, 0)
//   stop = Math.max(
//     stop == null ? step > 0 ? len : -1 :
//     stop < 0 ? stop + len :
//     stop >= len ? len : stop, -1)
//   for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
//     result.push(self[i]);
//   }
//   return result;
// }
// console.log(slice([0, 1, 2, 3, 4, 5], 7, -8, -2))
// console.log(slice([0, 1, 2, 3, 4, 5], 1, 8, 2))

function doty2deco(year = 1969, doty = 306, zone = 0) {
  const yd = dote2doty(doty2dote(year, Math.floor(doty)));
  return `${yd[0]}+${yd[1].toString().padStart(3, "0")}${
    doty.toString().includes(".")
      ? "." +
        (doty > 0
          ? (doty - zone).toString().split(".").pop()
          : [...(doty - zone).toString().split(".").pop()]
              .map((e, i, a) => (i + 1 === a.length ? 10 - e : 9 - e))
              .join(""))
      : ""
  }`;
}
console.log(deco2doty(0.20202));
console.log(doty2deco(1969, 306));

console.log(deco2doty("a2a+-1"));
console.log(deco2doty("203.09c"));
console.log(doty2doty(...deco2doty("203.09c")));
console.log(deco2doty("2020202.09"));
console.log(deco2doty("-20209-9c"));
console.log(deco2doty("-2021+22344"));
console.log(deco2doty("-202122334.403"));
console.log(deco2doty("-2021-223.3+403"));
console.log(deco2doty());
console.log(deco2doty("2021-334.2203s"));
console.log(deco2doty("-20211231.2238-23543"));
console.log(deco2doty("3-328.8888888c"));
console.log(deco2doty("-38.8888888c"));
console.log(deco2doty("-334223098-23543"));
console.log(deco2doty("33+422.305-23543"));

function doty2hmso(doty = 1 / 24) {
  doty = doty - Math.floor(doty);
  const hour = doty * 24,
    floorHour = Math.floor(hour),
    minute = (hour - floorHour) / 60,
    floorMinute = Math.floor(minute);
  return [floorHour, floorMinute, (minute - floorMinute) / 60];
}
function doty2isot(doty = 1 / 24) {
  return doty2hmso(doty)
    .map((i) => Math.round(i).toString().padStart(2, "0"))
    .join(":");
}

// function doty2isoc(year = 1969, doty = 306) {
//     floorDoty = Math.floor(doty)
//     [month, day] = doty2greg(floorDoty);
//     return [month, day];
//     return new Date(year + (doty > 305), month - 1, day)
// }

console.log(new Date(2000, 0));
console.log(doty2greg(306));
// console.log(doty2isoc())
console.log(doty2hmso(0.533333));
console.log(parseInt("3z"));
console.log(new Date(Date.parse("2023-01-01T12:00")));

function unix2deco(ms = 0) {
  return doty2deco(...unix2doty(ms));
}

console.log(unix2deco(Date.now()));

function isoo2doty(yd = "1970-001") {
  const [year, day] = yd.includes("-") ? yd.split("-") : yd.split(/(?=\d{4})/);
  return [
    parseInt(year) - (parseInt(day) < 60 + year2bool(year - 1)),
    (parseInt(day) + 305 - year2bool(year)) % 365,
  ];
}

console.log(isoo2doty());

function isoo2deco(yd = "1970-001") {
  const [year, doty] = isoo2doty(yd);
  return `${year.toString().padStart(4, "0")}+${doty
    .toString()
    .padStart(3, "0")}`;
}

console.log(isoo2deco());

// function dote2doty(days = 719468) {
//     const era = Math.floor((days >= 0 ? days : days - 146096) / 146097),
//         dotc = days - era * 146097,
//         year = Math.floor((dotc - Math.floor(dotc / 1460) + Math.floor(dotc / 36524) - Math.floor(dotc / 146096)) / 365) + era * 400;
//     return [year, days - (year * 365 + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400))];
// }

// function doty2dote(year = 1969, doty = 0) {
//     const cycle = Math.floor((year >= 0 ? year : year - 399) / 400),
//     yote = year - cycle * 400;
//     return cycle * 146097 + yote * 365 + Math.floor(yote / 4) - Math.floor(yote / 100) + doty
// }

function dote2doty(days = 719468) {
  const era = Math.floor((days >= 0 ? days : days - 146096) / 146097),
    dotc = days - era * 146097,
    yotc = Math.floor(
      (dotc -
        Math.floor(dotc / 1460) +
        Math.floor(dotc / 36524) -
        Math.floor(dotc / 146096)) /
        365
    );
  return [
    yotc + era * 400,
    dotc - (yotc * 365 + Math.floor(yotc / 4) - Math.floor(yotc / 100)),
  ];
}

function dote2year(days = 719468) {
  const era = Math.floor((days >= 0 ? days : days - 146096) / 146097),
    dotc = days - era * 146097,
    yotc =
      (dotc -
        Math.floor(dotc / 1460) +
        Math.floor(dotc / 36524) -
        Math.floor(dotc / 146096)) /
      365;
  return yotc + era * 400;
}

// function doty2year(year = 1969, doty = 0) {
//     return dote2year(doty2dote(year, doty));
// }

console.log(dote2year(730485));

console.log(Math.ceil(doty2year(1969, 306) * 1e3) / 1e3);

function doty2doty(year = 1969, doty = 0, zone = 0) {
  return dote2doty(doty2dote(year, doty));
}

console.log(doty2dote(1969, -10.1));
console.log(doty2dote());

console.log(2440587.5 - 719468);
console.log(unix2doty(Date.now()));
console.log(unix2deco(Date.now()));
console.log(unix2doty(5161600000));

console.log(encodeURIComponent(")"));

console.log(dote2doty(2440587.5 - 719468));
console.log(dote2doty(-1721120.5));
console.log(dote2doty(730484));
console.log(dote2doty(730849));
console.log(dote2doty(719468));
console.log(dote2doty(719468.9));
console.log(doty2doty(2000, 0));
console.log(doty2doty(1999, 0));
console.log(doty2doty(2024, -136));
console.log(doty2doty(1951.957));
console.log(doty2doty(1969 + Math.ceil((2 / 365) * 1e3) / 1e3));
console.log(doty2doty(1969 + Math.ceil((2 / 366) * 1e3) / 1e3));
console.log(Math.ceil((139 / 365) * 1e3) / 1e3);
console.log(doty2doty(1971, -364.5));
console.log(doty2doty(1970, 0.5));
console.log(doty2doty(2023, 221 - 600));
const dotytest = 17;
console.log(
  Math.round((dotytest / 366) * 1e3) / 1e3 ===
    Math.round((dotytest / 365) * 1e3) / 1e3
);
2023 + 221;
2023 + 221.172 + 0;
2023 + 221.17212 + 0;

// function dote2doty(days = 719468) {
//     const era = Math.floor((days >= 0 ? days : days - 146096) / 146097),
//         doe = days - era * 146097,
//         yoe = Math.floor((doe - Math.floor(doe/1460) + Math.floor(doe/36524) - Math.floor(doe/146096)) / 365),
//         year = yoe + era * 400,
//         doy = doe - (365*yoe + Math.floor(yoe/4) - Math.floor(yoe/100));
//     return [year, doy, era, doe, yoe];
// }

console.log(dote2doty(730485));
console.log(dote2doty(719526));
console.log(dote2doty(719891));
console.log(dote2doty(720258));
console.log(dote2doty(720623));
console.log(dote2doty());

// function unix2doty(ms = 0) {
//     const days = ms / 86400000 + 719468;
//     return dote2doty(days)
// }

function greg2doty(month = 1, day = 1) {
  return Math.floor(
    (153 * (month > 2 ? month - 3 : month + 9) + 2) / 5 + day - 1
  );
}

console.log(greg2doty());

function doty2greg(doty = 0) {
  const m = Math.floor((5 * doty + 2) / 153);
  return [
    Math.floor(m < 10 ? m + 3 : m - 9),
    doty - Math.floor((153 * m + 2) / 5) + 1,
  ];
}

console.log(doty2greg(306));

console.log(greg2doty(doty2greg(123)));

function doty2dote(year = 1969, doty = 0) {
  return (
    doty +
    Math.floor(
      year * 365 +
        Math.floor(year / 4) -
        Math.floor(year / 100) +
        Math.floor(year / 400)
    )
  );
}
// function dote2doty(days = 719468) {
//     const era = Math.floor((days >= 0 ? days : days - 146096) / 146097),
//         dotc = days - era * 146097,
//         yotc = Math.floor((dotc - Math.floor(dotc / 1460) + Math.floor(dotc / 36524) - Math.floor(dotc / 146096)) / 365);
//     return [yotc + era * 400, dotc - (yotc * 365 + Math.floor(yotc / 4) - Math.floor(yotc / 100))];
// }
function dote2deco(days = 719468) {
  return doty2deco(dote2doty(days));
}
// function doty2doty(year = 1969, doty = 0) {
//     return dote2doty(doty2dote(year, doty));
// }
// function unix2doty(ms = 0) {
//     const days = ms / 86400000 + 719468;
//     return dote2doty(days)
// }
function doty2unix(year = 1969, doty = 306) {
  const days = doty2dote(year, doty);
  return (days - 719468) * 86400000;
}
console.log(doty2unix(2000, 306));

// function unix2deco(ms = 0) {
//     return doty2deco(...unix2doty(ms));
// };
function unix2dote(ms = 0) {
  return doty2dote(...unix2doty(ms));
}

load = unix2deco(Date.now());

function doty2toty(doty = 306) {
  doty = Math.floor(doty);
  return 205 <= doty && doty < 295
    ? ["Fall🍁", "Spring🌼", "[205, 295)"]
    : 110 <= doty && doty < 205
    ? ["Summer☀️", "Winter❄️", "[110, 205)"]
    : 20 <= doty && doty < 110
    ? ["Spring🌼", "Fall🍁", "[20, 110)"]
    : (0 <= doty && doty < 20) || (295 <= doty && doty <= 365)
    ? ["Winter❄️", "Summer☀️", "[0, 20)∪[295, 365]"]
    : "Unknown";
}
console.log(doty2toty(365));

function doty2doteh(year = 1969, doty = 0, zone = 0) {
  const cycle = Math.floor((year >= 0 ? year : year - 399) / 400),
    yote = year - cycle * 400;
  return (
    cycle * 146097 +
    yote * 365 +
    Math.floor(yote / 4) -
    Math.floor(yote / 100) +
    doty -
    zone
  );
}

function doty2dotem(year = 1969, doty = 0, zone = 0) {
  return (
    year * 365 +
    Math.floor(year / 4) -
    Math.floor(year / 100) +
    Math.floor(year / 400) +
    doty -
    zone
  );
}

console.log(doty2doteh(-1, +365));
console.log(dote2doty(doty2doteh(-5, 366)));
console.log(doty2dotem(-1, +365));
console.log(dote2doty(doty2dotem(-4, -1)));

function doty2decom(year = 1969, doty = 306, zone = 0) {
  const yd = dote2doty(doty2dotem(year, Math.floor(doty)));
  return `${yd[0]}+${(
    yd[1] -
    (year < 0) +
    (year === 0 && doty > 0) -
    (year === 0 && doty !== 0) +
    (year == 0 && doty === -1)
  )
    .toString()
    .padStart(3, "0")}${
    doty.toString().includes(".")
      ? "." +
        (doty > 0
          ? (doty - zone).toString().split(".").pop()
          : [...(doty - zone).toString().split(".").pop()]
              .map((e, i, a) => (i + 1 === a.length ? 10 - e : 9 - e))
              .join(""))
      : ""
  }`;
}

function doty2zodi(doty = 306) {
  doty = Math.floor(doty);
  return 205 <= doty && doty < 295
    ? ["Early", "Aries"]
    : 110 <= doty && doty < 205
    ? ["Summer☀️", "Winter❄️"]
    : 20 <= doty && doty < 110
    ? ["Spring🌼", "Fall🍁"]
    : (0 <= doty && doty < 20) || (295 <= doty && doty <= 365)
    ? ["Winter❄️", "Summer☀️"]
    : "Unknown";
}
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    p = Point;
    p.x = x;
    p.y = y;
    return p;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

// https://stackoverflow.com/a/49280381
