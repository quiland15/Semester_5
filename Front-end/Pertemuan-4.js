//javascript function

//function greetings(){
//	return "Hello"
//}

// const age = 10 //Global

// const greetings = function(name){
// 	// Parameter
// 	const job = "Teacher" //Lokal
// 	if (job === "Teacher"){
// 		const address = "Manado" //Blok
// 	}
// 	return "Hello"
// }

// console.log(greetings("John"))//argument

// IIFE ( sebuah fungsi yang di panggil )
// fungsi anonimous ( fungsi yang tidak memiliki nama )

// const output = (function(){
// 	// console.log("Hello IIFE")
// 	return "Hello IIFE"
// })()

// console.log(output)

//callback function

function logGreetings(greetings){
	console.log(greetings)
}

function createGreetings(name, callback){
	const greetings = "Hello " + name
	callback(greetings)
}

createGreetings("John", logGreetings)//biasa
createGreetings("John", function (greetings){
	console.log(greetings)
})//anonymous dan perusak otak