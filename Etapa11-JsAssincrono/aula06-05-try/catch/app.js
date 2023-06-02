const getUsers = async () => {
try{
    return await
    (await fetch('https://jsonplaceholder.typicode.com/users'))
     .json()
}catch(error){
    console.log(error.message)
}   
}
    
const logUsers = async () =>{
    const users = await getUsers()
    console.log(users)
}

logUsers()