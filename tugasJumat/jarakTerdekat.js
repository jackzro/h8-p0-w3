function targetTerdekat(arr) {
  //  you can only write your code here!
    var count =0
    var temp=''
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]=='x')
        {
            count++
            temp='x'
        }
        else if (arr[i]=='o')
        {
            count++
            temp='o'
        }
    }
    return count
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2