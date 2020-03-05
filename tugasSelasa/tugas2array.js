var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(data){
    var z=''
    for (var x=0;x<data.length;x++)
    {   
        
        var y= ('Nomor ID: ' + data[x][0]+ "\n" +'Nama Lengkap: ' +data[x][1]+'\n'+'TTL: '+data[x][2]+ ' ' +data[x][3]+'\n'+'Hobbi: '+data[x][4]+'\n\n')
        var z=z+y

    }
    return z
    
}

console.log(dataHandling(input))