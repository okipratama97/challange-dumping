/*
Buatlah fungsi dengan nama susunPesan, dengan parameter input berupa array 2 dimensi. Setiap elemen array akan berupa array yang berisi kata dan posisi nya. Tugas fungsi ini adalah untuk menghasilkan kalimat sesuai dengan posisi kata. Silakan menambahkan contoh soal lain jika merasa perlu
Contoh :
[
  ['besok', 4],
  ['kita', 1],
  ['akan', 2],
  ['menyerang', 3],
  ['pagi', 5],
]
outputnya : 'kita akan menyerang besok pagi'
[
  ['granat', 3],
  ['musuh', 1],
  ['membawa', 2],
]
outputnya : 'musuh membawa granat'
*/

function susunPesan(arr){
    let resultObj = {}
    let result = ""

    for (let i = 0; i < arr.length; i++){
        resultObj[arr[i][1]] = arr[i][0]
    }

    for (const key in resultObj) {
        result += resultObj[key]
        if (key !== arr.length-1){
            result += " "
        }
    }

    return result
}

let arrInput = [
    ['besok', 4],
    ['kita', 1],
    ['akan', 2],
    ['menyerang', 3],
    ['pagi', 5],
]

console.log(susunPesan(arrInput))

arrInput = [
    ['granat', 3],
    ['musuh', 1],
    ['membawa', 2],
]

console.log(susunPesan(arrInput))