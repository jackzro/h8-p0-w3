function perkalianUnik(arr) {
    // you can only write your code here!
    // var arrBaru=[]
    // var simpan=1
    // for(var i=0;i<arr.length;i++){
    //     simpan=simpan*arr[i]
    // }
    // for(var i=0;i<arr.length;i++){
    //     arrBaru[i]=simpan/arr[i]
    // }
    // return arrBaru
    var count=-1
    var arrBaru=[]
    var total=1
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            count++
            if(i!=count){
                total*=arr[j]
            }
            else{
                continue
            }
        }
        arrBaru[i]=total
        total=1
        count=-1
        // console.log(arrBaru[i])
    }
    return arrBaru
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]