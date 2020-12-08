/*
===
Caesar Encryption
===
Caesar Encryption adalah metoda enkripsi tertua dan ringan. Enkripsi dilakukan hanya dengan memajukan atau memundurkan setiap karakter sejumlah yang ditentukan.
NOTE :
1. selain alphabet, tidak usah di olah
RELEASE 1
-
Buat lah sebuah fungsi encrypt, dengan input sebuah string dan angka yang menunjukkan jumlah langkah maju karakter. Jika sampai huruf z, pemrosesan selanjutnya akan balik lagi ke a dan seterusnya
Contoh :
console.log(caesar_encrypt('hacktiv8', 2)) // jcemvkx8
console.log(caesar_encrypt('xyz', 4)) // bcd
console.log(caesar_encrypt('aku anak sehat', 1)) // blv bobl tfibu
RELEASE 2
-
Buat lah sebuah fungsi decrypt, dengan input sebuah string dan angka yang menunjukkan jumlah langkah mundur karakter. Jika sampai huruf a, pemrosesan selanjutnya akan balik lagi ke z dan seterusnya
Contoh :
console.log(caesar_decrypt('jcemvkx8', 2)) // hacktiv8
console.log(caesar_decrypt('bcd', 4)) // xyz
console.log(caesar_decrypt('blv bobl tfibu', 1)) // aku anak sehat
*/

let kata = "hacktiv8"
let kamus = "abcdefghijklmnopqrstuvwxyz"
let kataEncripted = ""
let kataDecripted = ""
let enkripsi = 2

for ( let i = 0; i < kata.length; i++ ) {
    //console.log(kata[i])
    for (let j = 0; j < kamus.length; j++ ){
        if ( kata[i] === kamus[j] ) {
            //lakukan enkripsi disini
            // console.log(kata[i])
            kataEncripted += kamus[( ( j + enkripsi ) % kamus.length )]
            break
        } 
        if ( j === kamus.length -1 ) {
            kataEncripted += kata[i]
        }
    }
}
console.log(kataEncripted)

for ( let i = 0; i < kataEncripted.length; i++ ) {
    //console.log(kata[i])
    for (let j = 0; j < kamus.length; j++ ){
        if ( kataEncripted[i] === kamus[j] ) {
            //lakukan enkripsi disini
            // console.log(kata[i])
            kataDecripted += kamus[( ( j - enkripsi + kamus.length ) % kamus.length )]
            break
        } 
        if ( j === kamus.length -1 ) {
            kataDecripted += kataEncripted[i]
        }
    }
}
console.log(kataDecripted)

