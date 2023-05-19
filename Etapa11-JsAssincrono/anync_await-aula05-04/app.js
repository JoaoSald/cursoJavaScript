// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>{
//         console.log('response', response)
//         return response.json()
//     })
//     .then((users)=>{
//         console.log(users)
//     })
//     .catch((error)=>{console.log(error)}) 

//ALTERNATIVA MELHOR
 const getUsers = async () =>{
   const response =  await fetch('https://jsonplaceholder.typicode.com/users')
   const users = await response.json()
   console.log(users)
 }
const logUsers = async () => {
    const users = await getUsers()
    console.log(users)
}

getUsers()