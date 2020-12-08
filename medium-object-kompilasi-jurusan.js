/*
Buatlah fungsi dengan nama kompilasi, dengan parameter input array 2 dimensi seperti pada contoh. 
Fungsi bertugas untuk membuat rekap data dalam bentuk object, dimana semua data akan dikelompokkan berdasarkan jurusan. 
Bentukan output dapat dilihat pada contoh
Contoh :
[
  ['Biologi', 'Jonas'],
  ['Fisika', 'Ulrich'],
  ['Akuntansi', 'Hannah'],
  ['Biologi', 'Barbosz'],
  ['Fisika', 'Claudia'],
  ['Biologi', 'Edmund'],
]
output : 
{
  Biologi: ['Jonas', 'Barbosz', 'Edmund'],
  Fisika: ['Ulrich', 'Claudia'],
  Akuntansi: ['Hannah']
}
*/

let arr = [
    ['Biologi', 'Jonas'],
    ['Fisika', 'Ulrich'],
    ['Akuntansi', 'Hannah'],
    ['Biologi', 'Barbosz'],
    ['Fisika', 'Claudia'],
    ['Biologi', 'Edmund'],
]

// console.log(arr)

function kompilasi(arr){
    let result = {}

    for (let i = 0; i < arr.length; i++){
        if (result[arr[i][0]] === undefined ){
            result[arr[i][0]] = []
        }
        result[arr[i][0]].push(arr[i][1])
    }

    return result
}


console.log("HASIL AKHIR:")
console.log(kompilasi(arr))