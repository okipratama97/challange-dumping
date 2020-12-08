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
    let result = ""

    for (let i = 0; i < arr.length; i++){
        // console.log(arr[i][1])
        for (let j = 0; j < arr.length; j++){
            if ((i + 1) === arr[j][1]) {
                result += arr[j][0]
                if (j !== i) {
                    result += " "
                }
                break
                // console.log(result)
            }
        }
        
    }

    return result
}

console.log(susunPesan( [ ['besok', 4], ['kita', 1], ['akan', 2], ['menyerang', 3], ['pagi', 5] ]) )
console.log(susunPesan( [ ['granat', 3], ['musuh', 1], ['membawa', 2] ]) )
