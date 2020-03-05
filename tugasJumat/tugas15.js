function groupAnimals(animals) {
    // you can only write your code here!
    var temp=[]
    var arrBaru=[]
    for(var i=0;i<animals.length;i++)
    {
        temp=animals[i][0]
        if(animals[i][0]==temp)
        {
            arrBaru.push(animals[i])
        }
    }
    return arrBaru
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]