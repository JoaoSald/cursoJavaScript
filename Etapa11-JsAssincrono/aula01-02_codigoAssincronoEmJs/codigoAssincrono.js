console.log(1)
console.log(2)

setTimeout(()=>{
    console.log('funcao de callback executada')
}, 2000) // setTimeOut é um código assincrono, ele nao bloqueia a tread

console.log(3)
console.log(4) // aqui termina e o SettimeOut é executado 2s dpois


