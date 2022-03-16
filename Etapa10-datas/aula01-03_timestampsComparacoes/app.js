const past = new Date('May 1 2021 7:47:00')
const present = new Date()

const diference = present.getTime() - past.getTime()
console.log(diference) // retorna em milesegundos 

const seconds = Math.round(diference/1000) // round converte numero decimal para um inteiro
console.log({seconds})

const minutes = Math.round(seconds/60)
console.log({minutes})

const hours = Math.round(minutes/60)
console.log({hours})

const days = Math.round(hours/24)
console.log({days})

console.log(`escrito há ${days} dias`)

const timestamp = 1675938473990 // CONVERTENTDO UM TIMESTAMP EM UM OBJ DE DATA
console.log(new Date(timestamp).getFullYear())