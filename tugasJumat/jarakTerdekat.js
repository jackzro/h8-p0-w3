function targetTerdekat(arr) {
    //  you can only write your code here!
    var char = ''
    var temp = ''
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != ' ') {
            if (arr[i] == char) {
                return i - temp
            } else {
                if (arr[i] == 'x') {
                    char = 'o';
                } else if (arr[i] == 'o') {
                    char = 'x';
                }
            }
            temp = i
        }
    }
    return 0
}
  
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2