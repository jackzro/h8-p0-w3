function angkaPalindrome(num) {
    // you can only write your code here!
    var simpan = 0
    var balik = ' '
    var kosong = " "
    if (num <= 8) {
        num++
        return num
    } else if (num >= 9) {
        do {
            kosong = " "
            num++
            var n = num.toString()
            for (var i = 0; i < n.length; i++) {
                kosong = n[i] + kosong
            }
        } while (kosong != num)
        return kosong;
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001