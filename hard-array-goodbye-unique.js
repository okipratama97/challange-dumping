/*
==
GOODBYE UNIQUE
==
RELEASE 1
-
Buatlah fungsi myIndexOf dengan parameter input array dan number. Fungsi akan mengembalikan index posisi number yang ditemukan pertama kali dalam array. Pencarian number dimulai dari AWAL array ke AKHIR array
Contoh :
let arr = [1, 2, 3, 1, 2, 3, 4, 3, 2, 1]
console.log(myIndexOf(arr, 2)) // 1
console.log(myIndexOf(arr, 1)) // 0
console.log(myIndexOf(arr, 3)) // 2
RELEASE 2
-
Buatlah fungsi myLastIndexOf dengan parameter input array dan number. Fungsi akan mengembalikan index posisi number yang ditemukan pertama kali dalam array. Pencarian number dimulai dari AKHIR array ke AWAL array
Contoh :
let arr = [1, 2, 3, 1, 2, 3, 4, 3, 2, 1]
console.log(myLastIndexOf(arr, 2)) // 8
console.log(myLastIndexOf(arr, 1)) // 9
console.log(myLastIndexOf(arr, 3)) // 7
RELEASE 3
-
Buatlah fungsi goodbyeUnique dengan parameter input berupa array. Fungsi ini akan menghapus semua angka yang unik ( hanya ada 1 di dalam array ) tanpa merubah posisi dari elemen-elemen dalam array. Fungsi akan mengembalikan array yang sudah diolah.
HINT : kalian bisa memanfaatkan fungsi-fungsi yang sudah kalian buat di RELEASE sebelumnya
Contoh :
console.log(goodbyeUnique([1, 2, 3, 4, 1, 2, 3])) // [1, 2, 3, 1, 2, 3]
console.log(goodbyeUnique([5, 4, 3])) // []
console.log(goodbyeUnique([3, 5, 3, 5, 3])) // [3, 5, 3, 5, 3]
*/

function myIndexOf(arr, angka) {
    for ( let i = 0; i < arr.length; i++ ) {
        if ( angka === arr[i] ) {
            // console.log(angka)
            return i
        }
    }
    return (-1)
}

function myLastIndexOf(arr, angka) {
    for ( let i = arr.length - 1 ; i >= 0; i-- ) {
        if ( angka === arr[i] ) {
            // console.log(angka)
            return i
        }
    }
    return (-1)
}

function goodbyeUnique(arr) {
    let output = []

    for ( let i = 0; i < arr.length; i++ ) {
        if ( myIndexOf(arr,arr[i]) !== myLastIndexOf(arr,arr[i]) ) {
            output.push(arr[i])
        }
        // console.log(output)
    }

    return output
}

// let sum = 0
// let arr = [1,2,3,4]

// function goodbyeUnique(angka) {
//     sum += angka
// }

// arr.forEach(goodbyeUnique)
// console.log(sum)

let arr = [1, 2, 3, 1, 2, 3, 4, 3, 2, 1]
console.log(myIndexOf(arr, 2)) // 1
console.log(myIndexOf(arr, 1)) // 0
console.log(myIndexOf(arr, 3)) // 2

arr = [1, 2, 3, 1, 2, 3, 4, 3, 2, 1]
console.log(myLastIndexOf(arr, 2)) // 8
console.log(myLastIndexOf(arr, 1)) // 9
console.log(myLastIndexOf(arr, 3)) // 7

console.log(goodbyeUnique([1, 2, 3, 4, 1, 2, 3])) // [1, 2, 3, 1, 2, 3]
console.log(goodbyeUnique([5, 4, 3])) // []
console.log(goodbyeUnique([3, 5, 3, 5, 3])) // [3, 5, 3, 5, 3]
