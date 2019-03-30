var arr = [1, 2, 4, 5, 6, 7];

// var sum = 0;
// for (var i = 0; i < arr.length; i++){
//   sum += arr[i];
//   // console.log(sum);
// }

// console.log("Sum = " + sum)


var result = arr.reduce(function(a,b){
  return a+b;
})

console.log('Result = ' + result);
