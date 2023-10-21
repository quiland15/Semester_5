// string literal

let fullName = "Quiland Wenas"
let age = 19
let address = "Bitung"

// Hallo nama saya Quiland Wenas, umur saya 19 tahun dan saya tinggal di Bitung

let kalimat1 = "Hallo Nama saya " + fullName + "umur saya " + age + "dan saya tinggal di " + address

console.log(kalimat1)

let kalimat2 = `Hallo Nama saya ${fullName}, umur saya ${age} dan saya tinggal di ${address}`
console.log(kalimat2)

// arrow function

function sayGreetings(name){
    return `Hello ${name}`
}

console.log(sayGreetings("john"))

// implisit return value 
const sayGreetings1 = (name) => `Hello ${name}`

console.log(sayGreetings1("John"))

// pada IIFE 
let output1 = (() => `Hello`)()

console.log(output1)

// callback

let numbers = [1, 2, 3, 4, 5]
let output = numbers.map((item) => item)

console.log(output)

// default parameter

const sayGreetings2 = (fullName, age) => {
if(fullName === undefined){
    fullName = Quiland
}
console.log(`Hello ${fullName}`)
}
sayGreetings2()