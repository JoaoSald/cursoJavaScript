//Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man']

heroes[2] = 'Spider-man' //Sobrescrevendo um novo valor para heroes[2]

console.log(heroes[0])
console.log(heroes[1])
console.log(heroes[2])

/// Métodos de arrays
const joinHeros = heroes.join('-')
console.log(joinHeros) // concatenando arrays

const moreHeros = heroes.concat(['superman', 'Wolverine']) //adiciona itens ao array mas n altera o valor original
console.log(moreHeros)

const pushHeroes =  heroes.push('cyclops', 'Hulk') //ALTERA VALOR ORIGINAL
console.log(pushHeroes)// armazena novos dados ao arrys e retorna o novo numero de dados 

const popHeroes = heroes.pop()// remove o ultimo item de um array e retorne esse item 
console.log(popHeroes)

console.log(heroes)

const ages = [31, 25, 40]
console.log(ages)
const indexOf25 = ages.indexOf(25)
console.log(indexOf25)//mostra a posição da arrays definida em indexOf()


const randowArray = ['parker', 'Diana', 18, 19] // podemos misturar dados 
console.log(randowArray)
