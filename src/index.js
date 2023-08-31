module.exports = function reverse (n) {
  let a = Math.abs(n);
  let nTos = a+""
  let first = nTos[2]
  let second = nTos[1]
  let third = nTos[0]

  let newString = first + second + third

  let newN = Number(newString)

  return newN
}
