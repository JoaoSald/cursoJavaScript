//Booleans e comarações
console.log(true, false, 'true', 'false')

//Métodos podem retornar booleans 
const email = 'joaosaldanha@gnail.com'
const includes = email.includes('@') // se existir o caracter passado cm parametro = retorna true, caso conrário = false 
const includes2 = email.includes('#')
console.log(includes)
console.log(includes2)

const names = ['dio', 'roger', 'robert']
const arraIncludes = names.includes('roger') // metodo includes funciona com arrays tmb 
console.log(arraIncludes)// se roger existe retorna true 

// operadores de comparações
const age = 31
const nome = 'roger'
// console.log(age == 31)
// console.log(age == 35)
// console.log(age != 35) // != significa "diferente de" 
// console.log(age > 30)
// console.log(age < 32)
// console.log(age <= 31)
// console.log(age >= 31)

console.log(nome == 'roger')
console.log(nome == 'Roger')
console.log(nome >'belinha') // Letra R vem dpois do B, por isso nome > belinha, portanto true.
console.log(nome > 'Roger') //caracteres minusculos são maiores que os maiusculos 