let ambilDataUserAsnyc = async () => {
    try{
        const response = await fetch("https://reqres.in/api/users")
        const users = await response.json()
        console.log(users.data)
        return users.data
    }catch(error){
        console.log("Error")
    }

}

export default ambilDataUserAsnyc