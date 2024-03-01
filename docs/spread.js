function spread(self, startOrStop, span, splitsAndSpaces, ...args) {
  const len = self.length, result = [];
  if (span === 0) { return result };
  splitsAndSpaces = (!splitsAndSpaces || splitsAndSpaces.length === 0 ? [len] :
    typeof splitsAndSpaces === "number" ? [splitsAndSpaces] :
    typeof splitsAndSpaces === "string" ? Array.from(splitsAndSpaces, Number) :
    splitsAndSpaces).concat(args);
    const splitCount = splitsAndSpaces.length,
    splitSpaceSum = splitsAndSpaces.reduce((a, b) => a + b, 0);
  if (splitSpaceSum <= 0) { return result };
  startOrStop = Math.max(
    startOrStop == null && span > 0 || startOrStop == null && span == null ? 0 :
    startOrStop == null || startOrStop > len && span < 0 ? len :
    startOrStop < 0 ? startOrStop + len :
    startOrStop, 0);
  span = span == null || startOrStop + span > len ? len - startOrStop :
    startOrStop + span < 0 ? -startOrStop: span;
  const start = span > 0 ? startOrStop : startOrStop + span,
    stop = span > 0 ? startOrStop + span : startOrStop;
  for (let i = start, c = -1, arr = []; i < stop; i += splitsAndSpaces[c]) {
    if ((c = (c + 1) % splitCount) % 2 === 0 && i + splitsAndSpaces[c] <= stop) {
      if ((arr = Array.from({length: splitsAndSpaces[c]}, (_, j) => j + i).map(
        index => self[index]).filter(item => item !== undefined)
          ).length == splitsAndSpaces[c]) { result.push(arr) }
    }
  };
  return result;
}

console.log("hello")
console.log([1].concat([]))
const r = spread([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], null, null, -3, 2, 4)
console.log(r)
