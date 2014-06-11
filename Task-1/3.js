// problem: why is it logging out 0? it should be 12
// since 4 * 4 is 16, 2 * 2 is 4 and 16 - 4 is 12
// fix it to log out 12!

function square(num) {
  result = num * num
  return result
}

result1 = square(4) // here the issue just replace result by result1 
result2 = square(2)
var subtracted = result1 - result2  //here also replace result by result1 
console.log(subtracted)
