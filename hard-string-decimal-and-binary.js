/*
Buatlah 2 buah fungsi :
1. decimalToBinary => untuk merubah sebuah ANGKA desimal menjadi string binary
2. binaryToDecimal => untuk merubah sebuah STRING binary menjadi angka desimal
CATATAN : input selalu ada dan valid
*/

// Algoritma bisa dilihat di https://www.rapidtables.com/convert/number/decimal-to-binary.html
function decimalToBinary(angka) {
    // your code here
    let remainder
    let quotient = angka
    let biner = ""

    if ( quotient === 0 ) {
        return 0
    } else {
        while ( quotient !== 0 ) {
            remainder = quotient % 2
            quotient = Math.floor(quotient / 2)
            if (remainder) {
                biner = "1" + biner
            } else {
                biner = "0" + biner
            }
        }

        return parseInt(biner)
        // return biner
    }
}

console.log(decimalToBinary(0))  // 0
console.log(decimalToBinary(1))  // 1
console.log(decimalToBinary(2))  // 10
console.log(decimalToBinary(5))  // 101
console.log(decimalToBinary(20)) // 10100
  


// Algoritma bisa dilihat di https://www.rapidtables.com/convert/number/binary-to-decimal.html
function binaryToDecimal(binary) {
// your code here
let desimal = 0
for ( let i = 0; i < binary.length; i++ ) {
    if ( binary[i] === '1' ) {
        desimal += Math.pow(2, ( binary.length - i -1 ))
    }
}

return desimal
}

console.log(binaryToDecimal('0'))     // 0
console.log(binaryToDecimal('1'))     // 1
console.log(binaryToDecimal('101'))   // 5
console.log(binaryToDecimal('11011')) // 27
  