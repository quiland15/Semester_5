// // array

// let students = ['john', 'bob', 'peter', 'jack'] // string
// let numbers = [1, 2, 3, 4, 5] //number

// let john = ["john", "doe", 33, true] //gabungan

// console.log(students)
// console.log(numbers)
// console.log(john)

// console.log(students[2]) //index
// students[2] = "Bob" //ganti isi list
// console.log(students)

// console.log(students.length)//panjang index

// console.log(students[students.length - 2])//index dari belakang

// //looping berurut
// for (let i = 0;i < students.length; i++){
//     console.log(students[i])
// }

// //array method
// //toString()

// console.log(john.toString())

// //join()
// console.log(john.join())

// //pop() (menghapus paling terakhir)
// john.pop()
// console.log(john)
// //push(menambahkan paling terakhir)
// john.push("Good morning")
// console.log(john)
// //shift() ( Menghapus paling depan )
// john.shift("Hello")
// console.log(john)
// //splice(index, jumlah, item1 ... itemx)
// john.splice(2, 0, "wenas")
// console.log(john)
// //slice(mulai, akhir)
// let pertama = john.slice(0,2)
// let terakhir = john.slice(2)
// console.log(pertama)
// console.log(terakhir)
// //concat
// let combine = students.concat(john, numbers)
// console.log(combine)

//object adalah directory
// let john = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 33,
//     isMarried : true,
//     grade : [80, 90, 100], 
//     address : {
//         city: "Manado",
//         province: "Sulawesi Utara",
//         postalCode: "95371",
//     },
//     sayGreetings: function(){
//         console.log("Hello my name is " + this.firstName)
//     },
// }

// //dot notation
// console.log(john.sayGreetings())
// console.log(john.firstName)
// console.log(john.address.city)
// console.log(john.grade[0])

// //bracket notation
// console.log()

//array object
// let students = [
//     {
//         id: 1,
//         name: "john",
//     },
//     {
//         id: 2,
//         name: "jane",
//     },
//     {
//         id: 3,
//         name: "bob",
//     }
// ]

// students.forEach(function(item){
//     console.log(item.name)
// })

//map()
// let output = students.map(function(item){
//     console.log(item.name)
// })

// console.log(output)

//filter()
// let output = students.filter(function(item){
//     return item.name === "john"
// })
// console.log(output)

//find()
// let output = students.find(function(item){
//     return item.name === "bob"
// })
// console.log(output)