// existe uma forma mais moderna e rapida de fazer request http, que é uma 
//interface nativa do JAVASCRIPT USANDO PROMISE POR BAIXO DOS PANOS
// FETCH no portgues seria buscar. Vou usar o fetch quando eu quero buscar dados de outro lugar
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log('response', response)
        return response.json()
    })// é executado com for resolvido com sucesso
    .then((users)=>{
        console.log(users)
    })
    .catch((error)=>{console.log(error)}) // é executado quando der erro

    //PASSO 1: BUSCO OS DADOS ATRAVES DO METODO FETCH
    //PASSO 2: OBTENHO A RESPOSTA E RETORNO UMA PROMISES COM response.json() 
    //PASSO 3: EU ENCADEIO UM SEGUNDO THEN PARA FAZER ALGO COM OS DADOS OBTIDOS 