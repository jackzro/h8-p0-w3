function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var arrGenap=[]
    var arrGanjil=[]
    var arrTiga=[]
    var temp=[]
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%3==0){
            temp.push(arr[i])
            arrTiga.push(temp)
        }
        else if(arr[i]%2!=0)
        {
            temp.push(arr[i])
            arrGanjil.push(temp)
        }
        else if (arr[i]%2==0)
        {
            temp.push(arr[i])
            arrGenap.push(temp)
        }

        temp=[] 
    }
    return arrBaru=[arrGenap,arrGanjil,arrTiga]
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]