function FindOvalSpaceAndLength (R, T) {
  const P = 3.14
  const S = P * R * T
  const L = P * (R + T)
  console.log('Oval Space :')
  console.log(S)
  console.log('Oval Length :')
  console.log(L)
}
FindOvalSpaceAndLength(5, 3)
