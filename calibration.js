// - initial total, maybe 0
// - get those bunch of numbers
// - add them all up to my initial total
//   - start with the first number and loop through them all
//     - keep track of the sum/total
// - return the total

// please note I removed most of the *actual* data 
// to keep the file small...

let data = `-19
+2
+18
+14
+20
-73375`

// let bunch = process.argv.slice(2);
// console.log("argv ", bunch)
// for (i=0; i< bunch.slice(2).length; i++) 
// {
//   total += parseInt(bunch.slice(2)[i])
// }

const addThemUp = function (bunch) {
  let total = 0;
  for (let element of bunch) {
    total = total + parseInt(element)
    console.log("--> ",element, total)
  }
  return total;
}


console.log(addThemUp(process.argv.slice(2)));
console.log(addThemUp([1, -2, 3, 1]));
console.log(addThemUp([-1, -2, -3]));
console.log(addThemUp(data.split('\n')));



