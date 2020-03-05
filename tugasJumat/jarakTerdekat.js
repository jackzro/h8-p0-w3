function targetTerdekat(arr) {
  //  you can only write your code here!
    var countX =0
    var countY=0
    var temp=''
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]=='x')
        {
            countX=i
            temp='x'
        }
        else if (arr[i]=='o')
        {
            countY=i
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