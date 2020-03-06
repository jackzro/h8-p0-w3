function groupAnimals(animals) {
    // you can only write your code here!
    var temp = ''
    var arrAnimal = []
    var arrBaru = []
    var cek = []
    for (var i = 0; i < animals.length; i++) {
        temp = animals[i][0]
        for (var j = 0; j < animals.length; j++) 
            if (temp == animals[j][0] && cek[j] != false) {
                arrBaru.push(animals[j])
                cek[j] = false
            }
        if (arrBaru != '') {
            arrAnimal.push(arrBaru)
            arrBaru = []
        }
    }
for (let i = 0; i < arrAnimal.length; i++) {
    for (let j = 0; j < arrAnimal.length-1; j++) {
        if(arrAnimal[j][0][0]>arrAnimal[j+1][0][0])
        {
            temp=arrAnimal[j]
            arrAnimal[j]=arrAnimal[j+1]
            arrAnimal[j+1]=temp
        }
        
    }
    
}
    return arrAnimal
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]