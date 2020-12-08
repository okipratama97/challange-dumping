/*
===
Rekap Jurusan
===
Diberikan array of object dari data di TU kampus :
[
  {
    'nama: 'Adi',
    'jurusan': 'TI',
    'nilai': 80
  },
  {
    'nama: 'Bintang',
    'jurusan': 'Biologi',
    'nilai': 70
  },
  {
    'nama: 'Nanda',
    'jurusan': 'TI',
    'nilai': 90
  },
  {
    'nama: 'Rama',
    'jurusan': 'Elektro',
    'nilai': 80
  },
  {
    'nama: 'Reggi',
    'jurusan': 'TI',
    'nilai': 100
  },
  {
    'nama: 'Windy',
    'jurusan': 'Biologi',
    'nilai': 100
  },
]
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

let arr = [
    {
      'nama': 'Adi',
      'jurusan': 'TI',
      'nilai': 80
    },
    {
      'nama': 'Bintang',
      'jurusan': 'Biologi',
      'nilai': 70
    },
    {
      'nama': 'Nanda',
      'jurusan': 'TI',
      'nilai': 90
    },
    {
      'nama': 'Rama',
      'jurusan': 'Elektro',
      'nilai': 80
    },
    {
      'nama': 'Reggi',
      'jurusan': 'TI',
      'nilai': 100
    },
    {
      'nama': 'Windy',
      'jurusan': 'Biologi',
      'nilai': 100
    },
  ]

function rekapArray(arr){
    let result
    let obj = {}

    for (let i = 0; i < arr.length; i++){
        ///temps
        let key = arr[i]["jurusan"]
        let nama = arr[i]["nama"]
        let nilai = arr[i]["nilai"]

        if (obj[key] === undefined){
            obj[key] = {
                mahasiswa : [],
                'rata-rata' : 0
            }
        }
        obj[key].mahasiswa.push(nama)
        obj[key]["rata-rata"] = ( obj[key]["rata-rata"] * ( obj[key].mahasiswa.length - 1 ) + nilai ) / obj[key].mahasiswa.length 
    }
    // console.log(obj)

    result = obj
    return result
}

console.log(rekapArray(arr))

