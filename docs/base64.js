var Base64 = (function () {

    var ALPHA = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}';

    var Base64 = function () {};

    var _encode = function (value) {

        if (typeof(value) !== 'number') {
            throw 'Value is not number!';
        }

        var result = '', mod;
        do {
            mod = value % 64;
            result = ALPHA.charAt(mod) + result;
            value = Math.floor(value / 64);
        } while(value > 0);

        return result;
    };

    var _decode = function (value) {

        var result = 0;
        for (var i = 0, len = value.length; i < len; i++) {
            result *= 64;
            result += ALPHA.indexOf(value[i]);
        }

        return result;
    };

    Base64.prototype = {
        constructor: Base64,
        encode: _encode,
        decode: _decode
    };

    return Base64;

})();

var base64 = new Base64();
var s = base64.encode(25000)
var n = base64.decode('ONO');
s
n

// base64
// beat: 0.864s
// hit: .9216m
// set: .98304h

// ONO: 99800
// O00: 98304
// N}}: 98303
// N00: 94208

console.log(99999-98304)
console.log(98304-94208)
console.log(64 * 64)
console.log(64 * 64 * .864 / 60 / 60)
console.log(64 * .864 / 60)
console.log(64 * .864)
console.log(60 - (64 * .864))
console.log(64 * .864 / 60)
console.log(64 * 64 * .864 / 60)
console.log(60 - (64 * 64 * .864 / 60))