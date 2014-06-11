// problem: why does it log out out 1000?
// fix it to log 100, 200, 300, 400, 500 etc

// loops 10 times from 0 - 1000 in increments of 100
/*for (var i = 0; i < 1000; i += 100) {
  waitFor(i, function then() {
    console.log(i)
  })
}*/

/* I tried to correct so long but it has multiple issues first is that 'i' must start from 100 and function then() has to be removed 
to get result. */


// loops 10 times from 0 - 1000 in increments of 100
for (var i = 100; i < 1000; i += 100) {
  waitFor(i,console.log(i))
}

// this will run a callback function after waiting milliseconds
function waitFor(milliseconds, callback) {
  setTimeout(callback, milliseconds)
}
