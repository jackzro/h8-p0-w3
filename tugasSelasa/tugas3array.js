var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/01/1989", "Membaca"];

function dataHandling2(kata) {
    kata.splice(1, 1, 'Roman Alamsyah Elsharawy')
    kata.splice(2, 1, 'Provinsi Bandar Lampung')
    kata.splice(4, 0, 'Pria', 'SMA International Metro')
    kata.splice(kata.length - 1)

    console.log(kata)

    var ubah = kata[3].split('/')
    var angka = ubah[1] * 1

    switch (angka) {

        case 1:
            console.log('Januari')
            break
        case 2:
            console.log('Februari')
            break
        case 3:
            console.log('Maret')
            break
        case 4:
            console.log('April')
            break
        case 5:
            console.log('Mei')
            break
        case 6:
            console.log('Juni')
            break
        case 7:
            console.log('Juli')
            break
        case 8:
            console.log('Agustus')
            break
        case 9:
            console.log('September')
            break
        case 10:
            console.log('Oktober')
            break
        case 11:
            console.log('November')
            break
        case 12:
            console.log('Desember')
            break
    }

    var des = ubah.sort(function (a, b) {
        return b - a
    })

    console.log(des)

    function bubble(a) {
        var temp
        temp = a[0]
        a[0] = a[1]
        a[1] = a[2]
        a[2] = temp
        return a
    }

    console.log(bubble(ubah).join('-'))

    var potong = kata[1].split(' ')

    console.log(potong.slice(0, 2).join(' '))
}
dataHandling2(input);