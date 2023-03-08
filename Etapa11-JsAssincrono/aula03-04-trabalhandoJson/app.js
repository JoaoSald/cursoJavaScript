// JSON É UM ACRONIMO DE = javascript object notation 
// formato pra troca de dados que a airia das APIS retornam quando um request é feito
//É uma string que se parece cm objeto JavaScript 
 
const getTodos = callback =>{
    const request =  new XMLHttpRequest()

request.addEventListener('readystatechange',()=>{
const isRequestOk = request.readyState === 4 && request.status === 200
const isRequestNotOk = request.readyState === 4

    if(isRequestOk){
         const data = JSON.parse(request.responseText) //transforma o JSON obitdo em array para manipular
        callback(null, data)
        return
    }
    if(isRequestNotOk){
        callback('Não foi possível obter os dados da API', null)
       
    }
})

request.open('GET', './todos.json') 
request.send()
}

getTodos((error, data)=> {
console.log('callback executado')

   if (error) {
    console.log(error)
        return
    }
    console.log(data)
   
})