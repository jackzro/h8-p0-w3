// function change(arr){
//     var len = arr.length
    
//     for (var i = 0; i < len; i++){
//         var len2 = arr[i].length
//         console.log(len2)
//         for (var j = 0; j < len2; j++){
//             if (arr[i][j] === '$' || arr[i][j] === '@' || arr[i][j] === '#' || arr[i][j] === '%' || arr[i][j] === '^' || arr[i][j] === '&' || arr[i][j] === '*' ){
//                 arr[i][j] = 'y'
//             } else if (arr[i][j] === 0 || arr[i][j] === 1 || arr[i][j] === 2 || arr[i][j] === 3 || arr[i][j] === 4 || arr[i][j] === 5 || arr[i][j] === 6 || arr[i][j] === 7 || arr[i][j] === 8 || arr[i][j] === 9 ){
//                 arr[i][j] = 'o'
//             }
//             else {
//                 arr[i][j] = 'x'
//             }
//         }
//     }
//     return arr
// }

// console.log(change([
//     ['a','$',4,'*','$'],
//     ['@','$',5,'d','#'],
//     [9,8,'g','t','%'],
//   ]));

0

function changeDimension(arr, size) {  
  var arrLen = arr.length;
  var newArr = [];
  var count=0;
  var tempArr = [];

  for(var i=0; i<arrLen; i++) {
    count++;
    tempArr.push(arr[i]);

    if (count == size || i == arrLen-1) {
      newArr.push(tempArr);
      tempArr = [];
      count = 0;
    }    
  }  
  return newArr;
}

console.log(changeDimension([0, 1, 2, 3, 4, 5], 4));