/*
Diberikan sebuah function bernama vocalSorter yang menerima sebuah parameter berupa array of string.
funtion ini akan mendata setiap kata yang memiliki huruf vocal tertentu.
note : tidak boleh ada kata yang sama di dalam satu key
input: ["Mari", "kita", "belajar", "ngoding!"]
output :
{
  a: [ 'Mari', 'kita', 'belajar', 'belajar' ],
  i: [ 'Mari', 'kita', 'ngoding!' ],
  e: [ 'belajar' ],
  o: [ 'ngoding!' ]
}
*/

function vocalSorter(arr) {
    let result = {}
    let result2 = {}
    let kms

    for (let i = 0; i < arr.length; i++){
        let kamus = {
            a: false,
            i: false,
            u: false,
            e: false,
            o: false
        }
        for (let j = 0; j < arr[i].length; j++){  
            let key = arr[i][j].toLowerCase()
            if (kamus[key] !== undefined){
                kamus[key] = true
                if (result[key] === undefined) {        ///:::WITH DUPLIKAT ALGORITMA
                    result[key] = []                    ///:::
                }                                       ///:::
                result[key].push(arr[i])                ///:::
            }
        }
        kms = kamus

        // for (const key in kamus) {                   ///:::NON DUPLIKAT ALGORITMA
        //     if (kamus[key] === true){                ///:::
        //         if (result[key] === undefined) {     ///:::
        //             result[key] = []                 ///:::
        //         }                                    ///:::
        //         result[key].push(arr[i])             ///:::
        //     }                                        ///:::
        // }                                            ///:::
    }
    
    for (const key in kms){                             ///:::DUPLIKAT SORTING AIUEO
        if (result[key] !== undefined){                 ///:::OPTIONAL. Ngapain sorting urutan atribut dalam objek duh
            result2[key] = result[key]                  ///:::
        }                                               ///:::
    }                                                   ///:::
    result = result2                                    ///:::

    return result
}

console.log(vocalSorter(["Mari", "kita", "belajar", "ngoding!"]))
/*
{
  a: [ 'Mari', 'kita', 'belajar', 'belajar' ],
  i: [ 'Mari', 'kita', 'ngoding!' ],
  e: [ 'belajar' ],
  o: [ 'ngoding!' ]
}
*/
console.log(vocalSorter(["Ibu", "sedang", "memasak", "ikan", "goreng"]));
/*
{
  a: [ 'sedang', 'memasak', 'ikan' ],
  i: [ 'ibu', 'ikan' ],
  u: [ 'ibu' ],
  e: [ 'sedang', 'memasak', 'goreng' ],
  o: [ 'goreng' ]
}
*/

console.log(vocalSorter(["Test!"])); // { e: ["Test!"] }

console.log(vocalSorter([])); // {}