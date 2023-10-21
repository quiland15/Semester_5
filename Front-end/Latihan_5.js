// DESTRUCTURING.

// - Destructuring (Array & Object)
// Array
let myArray = ["Aku", "Kamu", "Dia"]

const [a, b, c] = myArray  //Destructuring
console.log(a) //output Aku
console.log(b) //output Kamu
console.log(c) //output Dia

//  Object
let data = {
    ketua : "Quiland Mark Nico Wenas",
    anggota1 : "Marcelino Tulandi",
    anggota2 : "Dharly Hizkia Junus Samsony",
    anggota3 : "Edward King Lolaroh",
    anggota4 : "Jonathan Miracle Kaway",
    anggota5 : "Angelo Brandon Kalumata",
    kelompok : "2",
    jumlahAnggota : 5,
    mataKuliah : "Front-end",
}

const {ketua, anggota1, anggota2, anggota3, anggota4, anggota5, kelompok, jumlahAnggota, mataKuliah} = data //Destructuring
console.log(`Ketua Kelompok = ${ketua}}`) //output Quiland Mark Nico Wenas
console.log(`Kami Dari Kelompok = ${kelompok}`) //output 2

// - Destructuring dengan mengambil sebagian item (Array & Object)
// - Destructuring dengan menggunakan default value (Array & Object)
//  Array 
let myArray1 = [1, 2, 3]
const [, , c1, d1 = 4] = myArray // Destructuring mengambil sebagian item & default value
console.log(c1) //output 3
console.log(d1) //output 4

// Object
let data1 = {
    ketua : "Quiland Mark Nico Wenas",
    anggota1 : "Marcelino Tulandi",
    anggota2 : "Dharly Hizkia Junus Samsony",
    anggota3 : "Edward King Lolaroh",
    anggota4 : "Jonathan Miracle Kaway",
    anggota5 : "Angelo Brandon Kalumata",
    kelompok1 : "2",
    jumlahAnggota : 5,
    mataKuliah1 : "Front-end",
}

const {kelompok1, mataKuliah1, address = "Bitung"} = data1 // Destructuring mengambil sebagian item & default value
console.log(kelompok1) //output 2
console.log(mataKuliah1) //output Front-end
console.log(address) //output Bitung

// - Destructuring dengan menggunakan rest operator (Array & Object)
// Array 
let angka = [1, 2, 3, 4, 5, 6, 7, 8]

const [A, B, ...akhir] = angka
console.log(A) //output 1
console.log(B) //output 2
console.log(akhir) //output 3, 4, 5, 6, 7, 8

// Object
let data3 = {
    ketua1 : "Quiland Mark Nico Wenas",
    anggota1 : "Marcelino Tulandi",
    anggota2 : "Dharly Hizkia Junus Samsony",
    anggota3 : "Edward King Lolaroh",
    anggota4 : "Jonathan Miracle Kaway",
    anggota5 : "Angelo Brandon Kalumata",
    kelompok : "2",
    jumlahAnggota : 5,
    mataKuliah : "Front-end",
}

const {ketua1, ...infoAkhir} = data3
console.log(ketua1) //output Quiland Mark Nico Wenas
console.log(infoAkhir) 
//output infoAkhir = 
// {
//     anggota1: 'Marcelino Tulandi',
//     anggota2: 'Dharly Hizkia Junus Samsony',
//     anggota3: 'Edward King Lolaroh',
//     anggota4: 'Jonathan Miracle Kaway',
//     anggota5: 'Angelo Brandon Kalumata',
//     kelompok: '2',
//     jumlahAnggota: 5,
//     mataKuliah: 'Front-end'
// }
  