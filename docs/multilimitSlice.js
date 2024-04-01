function multilimitSlice(arg) {
  const
    length = 366,
    string = arg.toLowerCase().replace(/[^\d.\-#*:<>hilnsx^]/g, "");
  let [first, others] = string.split(/([#*:<>hilnsx].*)/g),
    starts = [], results = [], count;
  if (!others) return parseInt(first)
  others = others.split(/(?=[#*<>hlnsx])/)
  // if (!others.some(Boolean)) return parseInt(first)
  for (const [i, other] of others.filter(s => s).entries()) { 
    results[i] = []
    let [limit, ...steps] = other.split(/(?=[#*:<>hilnsx])/);
    steps = steps.map(s => parseInt(s.slice(1))).map( n => Number.isNaN(n) ? 1 : n )
    steps = steps.length === 0 ? [1] : steps;
    steps = steps.map(n => /^[<h#n]/.test(limit) ? -n: n)
    let total = steps.reduce((r, n) => r + n, 0);
    if (total === 0) {
        steps = [1];
        total = 1;
    }
    if (i === 0) {
      starts = [parseInt(first)];
    }
    for (let [j, start] of starts.entries()) { 
      starts = []
      results[i][j] = []
      if (Number.isNaN(start)) {
        if (total > 0) {
          start = 0;
        } else {
          start = length - 1;
        }
      } else if (start < 0 && start + length >= 0) {
        start += length;
      }
      let stop = parseInt(limit.slice(1));
      if (/^[*#xn]/.test(limit)) {
        if (Number.isNaN(stop)) {
          count = 0
          while (total > 0 ? start < length : start >= 0) {
            if (start >= 0 && start < length) {
              starts.push(start);
            }
            start += steps[count % steps.length];
            count += 1
          }
        }
        else {
          for (let c = 0; c < stop; c++) {
            if (start >= 0 && start < length) {
              starts.push(start);
            }
            start += steps[c % steps.length];
          }
        }
      } else if (/^[<>hl]/.test(limit)) {
        stop = stop * (-1) ** /^[<h]/.test(limit) + start;
      }
      if (stop < 0 && stop + length >= 0) {
        stop += length;
      } else if (stop < 0 && stop + length < 0) {
        stop = NaN
      }
      if (Number.isNaN(stop) && total > 0 || stop > length) {
        stop = length;
      }
      count = 0;
      while (
        Number.isNaN(stop) && total < 0 ? start >= 0 :
        total > 0 ? start < stop : start > stop
      ) {
        if (start >= 0 && start < length) {
          starts.push(start)
        }
        start += steps[count % steps.length]
        count += 1
      }
      results[i][j].push(...starts)
    }
  }
    return results.length > 1 ? results.slice(1).flat().flat(): results.flat().flat()
}
console.log(multilimitSlice("8x4:9>3:2"))
console.log(multilimitSlice("8n:2>2"))
let test = "8:19:3>2,24>9:7>2".split(",").map(s => multilimitSlice(s))
console.log(test)