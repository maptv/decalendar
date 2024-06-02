function tote2toty(tote = 719468) {
    const socy = Math.floor((tote >= 0 ? tote : tote - 456) / 457), totc = tote - socy * 457,
    yotc = Math.floor((totc - Math.floor(totc / 56) - Math.floor(totc / 286)) / 28);
    return [yotc + socy * 16, totc - (yotc * 28 + Math.floor(yotc / 2) + Math.trunc((yotc - 1) / 10))]
}
console.log(tote2toty(457))