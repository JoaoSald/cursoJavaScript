const getTodos = callback =>{
    const request =  new XMLHttpRequest() //ESTE OBJ PRA FZER REQUISIÇÃO DE DADOS TRABALHA COM QUALQUER TIPO DE DADO 

request.addEventListener('readystatechange',()=>{
const isRequestOk = request.readyState === 4 && request.status === 200
const isRequestNotOk = request.readyState === 4

    if(isRequestOk){
        callback(null, request.responseText)
        //console.log(request, request.text) //JSON Q FOI OBTIDO DA RESPOSTA DA REQUISIÇÃO request.response = retorna o estado atual da requisição
        return
    }
    if(isRequestNotOk){
        callback('Não foi possível obter os dados da API', null)
       // console.log('Não foi possível obter os dados da API')
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos') //GET(REQUISIÇÃO HTTP) = obter ESSE METODO RECEBE 2 ARGUMENTOS O 1 É O METEODO DE REQUEST Q EU QUERO FAZER 
//O 2 ARGUMENTO É O ENDPOINT 
request.send()
// console.log(request)
}

getTodos((error, data)=> {
    console.log('callback executado')
   // console.log(error, data)

   if (error) {
    console.log(error)
        return
    }
    console.log(data)
   
})