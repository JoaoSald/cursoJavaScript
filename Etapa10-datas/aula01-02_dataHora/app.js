// Datas sao um tipo de objetos 

const present = new Date()

console.log( typeof present, present)

//Metodos de Date 

console.log('getFuullYear:', present.getFullYear()) // obtem o ano 
console.log('getMonth:', present.getMonth()) //obtem o Mês
console.log('getDate:', present.getDate()) // retorna dia do mês
console.log('getDay:', present.getDay())//retorna dia da semana 
console.log('getHours:', present.getHours()) //retorna as hrs
console.log('getMinutes:', present.getMinutes())// retorna os min
console.log('getSeconds:', present.getSeconds())// retorna os segundos

console.log('timestamp:', present.getTime()) // MILESEGUNDOS QUE SE PASSARAM DE 1970 ATÉ AQUI


console.log('toDateString', present.toDateString())
console.log('totimeString', present.toTimeString())
console.log('toLocaleString', present.toLocaleString())