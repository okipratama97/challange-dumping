function tambahAntrian(antree, dokter, nama = "Bot"){
    alert("TAMBAH ANTRIAN LHO")
    let antrianBaru = {
        nama: nama,
        dokter: dokter 
    }
    if (!antree){
        console.log("ANTRIAN INVALID")
        return "ANTRIAN INVALID"
    }

    antree.push(antrianBaru)
    console.log(`Pasien baru diterima. ${antrianBaru.nama} silahkan menunggu antrian`)
    console.log()

    return antree
}

function tambahSayaKeAntrian(antree, dokter, nama = "saya"){
    let antrianBaru = {
        nama: nama,
        dokter: dokter 
    }
    if (!antree){
        console.log("ANTRIAN INVALID")
        return "ANTRIAN INVALID"
    }
    
    antree.push(antrianBaru)
    console.log(`Pasien baru diterima. ${antrianBaru.nama} silahkan menunggu antrian`)
    console.log()

    return antree
}

function kurangAntrian(antree, dokter){
    let pasien
    let temp = []

    if (!antree){
        console.log("ANTRIAN INVALID")
        return "ANTRIAN INVALID"
    }
    if (antree.length){
        console.log("ANTRIAN KOSONG")
        return "ANTRIAN KOSONG"
    }

    while (antree.length !== 0){
        let nama = antree[0].nama
        let dokterDipanggil = antree[0].dokter

        if (dokterDipanggil !== dokter){
            temp.push(antree.shift())
        }else{
            pasien = antree.shift()
            break
        }
    }

    while (temp.length !== 0){
        antree.unshift(temp.pop())
    }
    console.log(`Dokter ${dokter} siap menerima pasien`)
    console.log(`Pasien dengan nama: ${pasien.nama} silahkan menuju ke ruangan Dokter ${pasien.dokter}`)
    console.log()

    return pasien
}

function buatAntrian(){
    let arr = []
    return arr
}

function tampilkanAntrian(antree){
    if (!antree){
        console.log("ANTRIAN INVALID")
        return "ANTRIAN INVALID"
    }
    if (antree.length){
        console.log("ANTRIAN KOSONG")
        return "ANTRIAN KOSONG"
    }

    let table = document.getElementById("tampilkanAntrianTable")
    let body = document.getElementById("tableBody")
    
    console.log("Menampilkan list antrian")
    for (let i = 0; i < antree.length; i++){
        let pasien = antree[i].nama
        let dokter = antree[i].dokter

        // let cout = `Antrian ke ${i+1}: ${pasien} ke dokter ${dokter}`
        // console.log(cout)
        body.innerHTML += `
            <tr>
                <td>`Antrian ke ${i+1}: ${pasien} ke dokter ${dokter}`</td>
            </tr>
        `
    }
    console.log("========================")
    console.log()
}

function main(){
    let antrian = buatAntrian()
    let dokter1 = "Aduy"
    let dokter2 = "Bambang"
    let dokter3 = "Cimoy"
    tambahAntrian(antrian, dokter1)
    tambahAntrian(antrian, dokter2)
    tambahAntrian(antrian, dokter3, "Kentang")
    tampilkanAntrian(antrian)
    kurangAntrian(antrian,dokter3)
    kurangAntrian(antrian,dokter1)
    tambahSayaKeAntrian(antrian, dokter3)
    tampilkanAntrian(antrian)
}

main()