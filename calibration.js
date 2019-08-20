// - initial calibration, maybe 0
// - get those bunch of numbers
// - add them all up to my initial calibration
//   - start with the first number and loop through them all
//     - keep track of the sum/total
// - return the total

let calibration = 0;

let bunch = process.argv;

// for (i=0; i< bunch.slice(2).length; i++) 
// {
//   calibration += parseInt(bunch.slice(2)[i])
// }

for (let element of bunch.slice(2)) {
  calibration = calibration + parseInt(element)
}

console.log(calibration);