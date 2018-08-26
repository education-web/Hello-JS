const findFinishPoint = (x0, v, t, a) => {
  /* x0 - starting coordinate, v - speed, t - time, a - add. speed, x - ending coordinate, s - whole passed way */
  const x = x0 + v * t + ( a * t ** 2) / 2
  const s = v * t + ( a * t ** 2) / 2
  console.log(`Ending coordinate: ${x}`)
  console.log(`Whole passed way: ${s}`)
}

export default findFinishPoint
