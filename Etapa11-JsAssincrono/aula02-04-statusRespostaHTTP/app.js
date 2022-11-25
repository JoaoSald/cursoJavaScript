const request =  new XMLHttpRequest() //ESTE OBJ PRA FZER REQUISIÇÃO DE DADOS TRABALHA COM QUALQUER TIPO DE DADO 

request.addEventListener('readystatechange',()=>{

    if(request.readyState === 4 && request.status === 200){
        console.log(request.response) //JSON Q FOI OBTIDO DA RESPOSTA DA REQUISIÇÃO request.response = retorna o estado atual da requisição
    }
    
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos') //GET(REQUISIÇÃO HTTP) = obter ESSE METODO RECEBE 2 ARGUMENTOS O 1 É O METEODO DE REQUEST Q EU QUERO FAZER 
//O 2 ARGUMENTO É O ENDPOINT 
request.send()
// console.log(request)