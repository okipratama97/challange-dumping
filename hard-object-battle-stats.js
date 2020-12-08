/*
===
Battle Stats
===
Diberikan array 2 dimensi yang merupakan rangkuman hasil dari pertempuran 2 kelompok pasukan. Di tiap pasukan, terdapat pasukan-pasukan kecil yang dipimpin oleh Jendralnya masing-masing.
Jika angka Jendral positif, maka di sebuah pertempuran, pasukan Jendral tersebut menang sebanyak angka tersebut
Jika angka Jendral negatif, maka di sebuah pertempuran, pasukan Jendral tersebut kalah sebanyak angka tersebut
Tugas kamu untuk mengeluarkan statistik hasil pertempuran seperti contoh
Contoh :
let battle = [
  ["Hwang Shi Mok", -1],
  ["Savants", 1],
  ["Hwang Shi Mok", 2],
  ["Hwang Shi Mok", 1],
  ["Savants", 5],
  ["Legolas", 10],
  ["Legolas", -20],
  ["Legolas", -10],
]
console.log(battleStats(battle))
Output :
{
  "Hwang Shi Mok": {
    "Kalah": 1,
    "Menang": 3
  },
  "Savants": {
    "Kalah": 0,
    "Menang": 6
  },
  "Legolas": {
    "Kalah": 30,
    "Menang": 10
  },
}
*/

/////////////////////////:::ANSWER:::////////////////////////////

// let kentang = { 
//     areBanana : "banana", 
//     areKentang : "1"
// }                                                   //membuat objek dengan atribut didalamnya
// kentang.areBanana = "banini"                        //mengedit atribut didalam objek

// let jendral = { menang : 0, kalah : 0} 
// let pertarungan = {
//     "kangSoleh" : { "menang" : 0, "kalah" : 0 },
//     "kangSolihin" : { "menang" : 0, "kalah" : 0}
// }                                                   //membuat objek dengan atribut objek2 didalamnya

// pertarungan.kangSoleh.menang++                      //edit attribute didalam obj
// // pertarungan.kangKentang = "value"                //menambah atribut baru kangKentang dengan value value
// pertarungan["kangIbid"] = {
//     "menang" : 0,
//     "kalah" : 0
// }                                                   //membuat obj baru dalam obj
// let kangKuda = new Object()
// kangKuda.menang = 0
// kangKuda.kalah = 0
// pertarungan["kangKuda"] = kangKuda                  //membuat obj yang baru dibuat ke dalam obj


let battle = [
    ["Hwang Shi Mok", -1],
    ["Savants", 1],
    ["Hwang Shi Mok", 2],
    ["Hwang Shi Mok", 1],
    ["Savants", 5],
    ["Legolas", 10],
    ["Legolas", -20],
    ["Legolas", -10],
]

function buatJenral(menang = 0,kalah = 0){
    let nama = {
        "menang" : menang,
        "kalah" : kalah
    }
    // const newObj = Object.create(nama)
    return nama
}

function tambahJendral(namaObjek,jendralObjek,namaJendral){
    namaObjek[namaJendral] = jendralObjek

    return namaObjek
}

function buatPertarungan(){
    // let pertarungan = new Object()
    let pertarungan = {}

    return pertarungan
}

function cekAtribute(namaObjek,jendralObj){    
    if (namaObjek[jendralObj] !== undefined) return true
    // if (namaObjek.hasOwnProperty(jendralObj)) return true
    else return false

}

function tambahStats(namaObjek,namaKey,stat){
    if (stat > 0){
        namaObjek[namaKey].menang += stat
    }
    else {
        namaObjek[namaKey].kalah += Math.abs(stat)
    }
    return namaObjek
}

function battleStats(arr) {
    let pertarungan = buatPertarungan()
    
    for (let i = 0; i < arr.length; i++){
        if (cekAtribute(pertarungan,arr[i][0]) === false){
            let jendralObj = buatJenral()
            pertarungan =  tambahJendral(pertarungan,jendralObj,arr[i][0]) // tambah objek jendral yang sudah dibuat pada objek pertarungan dengan objek key : nama jendral (objek, objekJendral, key : namajendral)
            pertarungan = tambahStats(pertarungan,arr[i][0],arr[i][1]) // edit atribut menang/kalah dengan key : nama jendral (objek, key : namajendral, value : menang/kalah)
        } else{
            pertarungan = tambahStats(pertarungan,arr[i][0],arr[i][1])
        }
    }

    return pertarungan
}

console.log(battleStats(battle))

// let battles = battleStats(battle)
// console.log(battles["Hwang Shi Mok"])
// console.log(battles["Savants"])
// console.log(battles["Legolas"])
// let jendralObj = buatJenral()
// let pertarungan = buatPertarungan()
// tambahJendral(pertarungan,jendralObj,"kentang")
// console.log(battle)
// console.log(kentang)
// console.log(jendral)
// console.log(pertarungan)
// console.log(cekAtribute(pertarungan,"kentang"))
// console.log(kent)
