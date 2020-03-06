function pasanganTerbesar(num) {
    // you can only write your code here!
    var x = num.toString()
    var angkaTerbesar = " "
    var count = 0
    for (var i = 0; i < x.length; i++) {
        angkaTerbesar = x[i] + x[i + 1]
        if (angkaTerbesar > count) {
            count = angkaTerbesar
        }
        angkaTerbesar = ' '
    }
    return count

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99