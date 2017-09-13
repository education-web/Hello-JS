/* global Math */
const a = -4
const b = -3
const c = 1
// a * x^2 + b * x + c = 0
const D = b ** 2 - 4 * a * c
if (D > 0) {
    const x1 = ( -b + Math.sqrt(D) ) / (2 * a)
    const x2 = ( -b - Math.sqrt(D) ) / (2 * a)
    console.log(x1)
    console.log(x2)
} else if (D === 0) {
    const x = -b / (2 * a)
    console.log(x)
} else {
    console.log(NaN)
}
