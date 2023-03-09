const getTodos = (url, callback) =>{
    const request =  new XMLHttpRequest()

request.addEventListener('readystatechange',()=>{
const isRequestOk = request.readyState === 4 && request.status === 200
const isRequestNotOk = request.readyState === 4

    if(isRequestOk){
         const data = JSON.parse(request.responseText)
        callback(null, data)
        return
    }
    if(isRequestNotOk){
        callback('Não foi possível obter os dados da API', null)
       
    }
})

request.open('GET', url) 
request.send()
}

getTodos('./todos.json',(error, data)=> {
 console.log(data)
  getTodos('./todos-02.json',(error, data)=> {
    console.log(data)
    getTodos('./todos-03.json',(error, data)=> {
        console.log(data)
    })
})
})