const getPokemon = url => new Promise((resolve, reject) =>{

    const request =  new XMLHttpRequest()

request.addEventListener('readystatechange',()=>{
const isRequestOk = request.readyState === 4 && request.status === 200
const isRequestNotOk = request.readyState === 4

    if(isRequestOk){
         const data = JSON.parse(request.responseText)
        resolve(data)
        return
    }
    if(isRequestNotOk){
        reject('Não foi possivel obter dados')
       
    }
})

request.open('GET', url) 
request.send()
})
getPokemon('https://pokeapi.co/api/v2/pokemon/1')
    .then(bulbasaur => {
        console.log(bulbasaur)
        return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
    })
    .then(charmander => {
        console.log(charmander)
        return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
    })
    .then(squitle => console.log(squitle))
    .catch(error => console.log(error))

// Agr vms utilizar uma alternativa para fazer estes requests sequenciais de uma forma melhor 
// entao vamos utilizar o promises 
// getTodos('./todos.json',(error, data)=> {
//  console.log(data)
//   getTodos('./todos-02.json',(error, data)=> {
//     console.log(data)
//     getTodos('./todos-03.json',(error, data)=> {
//         console.log(data)
//     })
// })
// })
// VAMOS VER AQUI A BAIXO
//const getData = ()=>{
//    return new Promise((resolve, reject)=>{
//        resolve('dados aqui')
//        //reject('erros aqui')
//    })
//}

//getData()
//    .then(value => console.log(value))
//    .catch(error => console.log(error)) // só é executado quando invoca-se reject e tem algum erro