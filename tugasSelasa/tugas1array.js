function balikString(kata) {
    var balik = ''
    for (var i = 0; i < kata.length; i++) {
        balik = kata[i] + balik
    }
    return balik
}
console.log(balikString('hello'))
