/**
 * =================
 * SECOND BEST HERO
 * =================
 * 
 * Function ini akan mencari hero ke-2 terkuat dari list hero yang di daftarkan
 * berdasarkan total power dari hero tersebut
 * 
 * Power pada hero adalah total dari STR + INT + AGI dan tidak dari parameter lainnya
 * jika salah satu parameter tidak ada, maka parameter tersbut di hitung 0
 * 
 * Contoh: [
 *  { name: "Axe", STR: 25, INT: 18, AGI: 20 }, => total power = 63
 *  { name: "Monkey King", STR: 20, AGI: 23 }, => total power = 43 (INT TIDAK ADA, BERARTI INT = 0)
 *  { name: "Slardar", STR: 21, INT: 15, AGI: 17, EVA: 50 }, => total power = 53 (EVA TIDAK MASUK HITUNGAN)
 * ]
 * 
 * Maka output yang di harapkan adalah :
 * { name: Slardar, power: 53 }
 * 
 * Rules:
 * 1. Dilarang menggunakan .map .sort 
 * 
 */


function secondBestHero (heroes) {
    let result //class hero terbaik here
    let max = -1
    let max2 = -2
    let name = ""
    let name2 = ""

    for (let i = 0; i < heroes.length; i++){
        let power = 0
        let calSTR = 0
        let calINT = 0
        let calAGI = 0
        if (heroes[i].STR !== undefined){
            calSTR = heroes[i].STR
        }
        if (heroes[i].INT !== undefined){
            calINT = heroes[i].INT
        }
        if (heroes[i].AGI !== undefined){
            calAGI = heroes[i].AGI
        }
        power = calSTR + calINT + calAGI
        // console.log(power)
        if (heroes.length === 1){
            max = power
            name = heroes[i].name
            max2 = power
            name2 = heroes[i].name
        }
        if (power > max){
            // console.log("here")
            max2 = max
            name2 = name
            max = power
            name = heroes[i].name
        }else if (power > max2){
            // console.log("here2")
            max2 = power
            name2 = heroes[i].name
        }
        result = {
            name : name2,
            power : max2
        }
    }

    
    return result
}

var heroes1 = [
  { name: "Axe", STR: 25, INT: 18, AGI: 20 },
  { name: "Lina", STR: 20, INT: 30, AGI: 23 },
  { name: "Phantom Asassin", STR: 21, INT: 15, AGI: 23 },
  { name: "Shadow Fiend", STR: 19, AGI: 20 }
]

console.log(secondBestHero(heroes1))
//{ name: 'Axe', power: 63 }

var heroes2 = [
  { name: "Abaddon", STR: 23, INT: 21, AGI: 23},
  { name: "Batrider", STR: 28, INT: 22, AGI: 15, DMG: 20 },
  { name: "Dazzle", INT: 25, AGI: 21 },
  { name: "Invoker", STR: 18, INT: 15, AGI: 14 }
]

console.log(secondBestHero(heroes2))
//{ name: 'Batrider', power: 65 }