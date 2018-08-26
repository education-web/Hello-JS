export function solveSquareEquation (a, b, c) {
  const D = b ** 2 - 4 * a * c
  const x1 = (-b + Math.sqrt(D)) / (2 * a)
  const x2 = (-b - Math.sqrt(D)) / (2 * a)
  const x = -b / (2 * a)
  if (D > 0) {
    console.log('Square Equation roots:')
    console.log(x1)
    console.log(x2)
  } else if (D === 0) {
    console.log('Square Equation roots:')
    console.log(x)
  } else {
    console.log(NaN)
  }
}
