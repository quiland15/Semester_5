import helloWorld from "./helloWorld.js";
import ambilDataUser from "./ambilDataUser.js";
import ambilDataUserAsnyc from "./ambilDataUserAsnyc.js";

let messages = async () => {
    try{
        let msg = await helloWorld()
        console.log(msg)
    }catch (error){
        console.log("Error")
    }
}

messages()
ambilDataUser()
ambilDataUserAsnyc()