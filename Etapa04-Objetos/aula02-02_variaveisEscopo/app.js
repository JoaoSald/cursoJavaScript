//Variaveis e esopo de bloco
const age = 31

if (true){
    const age = 41 
    const name = 'joao'
    console.log(`Dentro do 1° bloco de código: ${age}${name}`)


if (true){
    const age = 51
    console.log(`dentro do segundo bloco de código ${age}`)
    var test = 'oi'
}
}
console.log(`fora do bloco de código: ${age} ${name} ${test}`)