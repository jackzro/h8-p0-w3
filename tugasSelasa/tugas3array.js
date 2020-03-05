var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(kata){
    kata.splice(1,1,'Roman Alamstah Elsharawy')
    kata.splice(2,1,'Provinsi Bandar Lampung')
    kata.splice(4,0,'Pria','SMA International Metro')
    kata.splice(kata.length-1)
    return kata
}
console.log(dataHandling2(input));

x=dataHandling2(input)
var y=x[3].split('/')
var angka=y[1]*1
switch (angka){

case 5:
    console.log('Mei')
}
var des=y.sort(function(a,b){
return b-a
})

console.log(des)
function bubble(a){
    var temp
    temp=a[0]
    a[0]=a[1]
    a[1]=a[2]
    a[2]=temp
    return a
    
}
var format
console.log(bubble(y).join('-'))
var potong=x[1].split(' ')
console.log(potong.slice(0,2).join(' '))
