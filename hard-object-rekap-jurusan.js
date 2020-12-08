/*
===
Rekap Jurusan
===
//Diberikan object in object dari data di TU kampus :
{
  'Adi': {
    'jurusan': 'TI',
    'nilai': 80
  },
  'Bintang': {
    'jurusan': 'Biologi',
    'nilai': 70
  },
  'Nanda': {
    'jurusan': 'TI',
    'nilai': 90
  },
  'Rama': {
    'jurusan': 'Elektro',
    'nilai': 80
  },
  'Reggi': {
    'jurusan': 'TI',
    'nilai': 100
  },
  'Windy': {
    'jurusan': 'Biologi',
    'nilai': 100
  },
}
Diminta untuk melakukan rekap per Jurusan sehingga data nya menjadi seperti ini :
{
  'TI': {
    'mahasiswa': ['Adi', 'Nanda', 'Reggi'],
    'rata-rata': 90
  },
  'Biologi': {
    'mahasiswa': ['Bintang', 'Windy],
    'rata-rata': 85
  },
  'Elektro': {
    'mahasiswa': ['Rama'],
    'rata-rata': 80
  }
}
*/

let mahasiswa = {
    'Adi': {
        'jurusan': 'TI',
        'nilai': 80
    },
    'Bintang': {
        'jurusan': 'Biologi',
        'nilai': 70
    },
    'Nanda': {
        'jurusan': 'TI',
        'nilai': 90
    },
    'Rama': {
        'jurusan': 'Elektro',
        'nilai': 80
    },
    'Reggi': {
        'jurusan': 'TI',
        'nilai': 100
    },
    'Windy': {
        'jurusan': 'Biologi',
        'nilai': 100
    },
}

function cekJurusanInResult(obj,jurusanString){
    let result
    // console.log(obj === {})
    if (obj[jurusanString] !== undefined) result = true 
    else result = false

    return result
}

function buatObjJurusan(){
    let result = {
        mahasiswa : [],
        "rata-rata" : 0
    }

    return result
}

function tambahJurusan(obj,jurusanObj,namaJurusan){
    obj[namaJurusan] = jurusanObj
    return obj
}

function tambahMahasiswa(obj,objMahasiswa,namaMhs){
    obj[objMahasiswa["jurusan"]]["mahasiswa"].push(namaMhs)
    // obj[objMahasiswa["jurusan"]]["rata-rata"] += objMahasiswa.nilai //blm dinamic
    obj[objMahasiswa["jurusan"]]["rata-rata"] = (obj[objMahasiswa["jurusan"]]["rata-rata"] * (obj[objMahasiswa["jurusan"]]["mahasiswa"].length - 1) + objMahasiswa.nilai) / obj[objMahasiswa["jurusan"]]["mahasiswa"].length
    return obj
}

function setRataRata(obj){
    for (const property in obj){
        obj[property]["rata-rata"] = obj[property]["rata-rata"] / obj[property]["mahasiswa"].length
    }
    return obj
}

function rekap(mahasiswa){ ////:::MAIN FUNCTION
    let result
    let mhs = {}

    for (const property in mahasiswa) {
        if (cekJurusanInResult(mhs,mahasiswa[property].jurusan) === false){
            let jurusan = buatObjJurusan()
            mhs = tambahJurusan(mhs,jurusan,mahasiswa[property].jurusan)
        }
        mhs = tambahMahasiswa(mhs,mahasiswa[property],property)
    }

    result = mhs
    return result
}
// rekap(mahasiswa)
console.log(rekap(mahasiswa))
