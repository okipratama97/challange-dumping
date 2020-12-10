/**
   Persilangan golongan darah
    Ada 4 golongan darah yaitu O, A, B dan AB.
    Seorang anak akan memiliki golongan darah tergantung dari orang tua nya.
    ada beberapa catatan yang harus diperhatikan, yaitu :
    1. golongan darah dapat dipisah menjadi:
        - O, berupa OO
        - AB, berupa AB
        - A, berupa AO atau AA
        - B, berupa BO atau BB
    2. kemungkinan golongan darah anak berasal dari tipe golongan darah orang tuanya
    Buatlah sebuah function yang menerima 2 parameter berupa golongan darah ayah dan ibu dalam bentuk string. function tersebut akan menampilkan kemungkinan-kemungkinan golongan darah anak berdasarkan golongan darah orang tua nya dalam bentuk array.
    */

function simulasiGolonganDarah(ayah, ibu){
    let result = []
    let listGolonganDarah = {"OO" : true , 'AB': true ,'AO': true ,'AA': true ,'BO': true ,'BB': true }

    for (let i = 0; i < 4; i++){
        let key = ayah[Math.floor(i / 2)]+ibu[i % 2]
        if (key === "OA" || key === "OB"){
            key = key[1] + key[0]
        }
        if (listGolonganDarah[key] !== undefined){
            if (listGolonganDarah[key] === true){
                result.push(key)
                listGolonganDarah[key] = false
            }
        }
    }

    return result
}


// test case
console.log(simulasiGolonganDarah('OO', 'OO')) // ['OO']
console.log(simulasiGolonganDarah('AA', 'AO')) // ['AO', 'AA']
console.log(simulasiGolonganDarah('AO', 'BO')) // ['AB', 'AO', 'BO', 'OO']