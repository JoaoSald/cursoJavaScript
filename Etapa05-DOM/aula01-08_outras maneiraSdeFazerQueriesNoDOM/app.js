// Obter um elemento através do ID
const tittle = document.getElementById('title')
console.log(tittle)

// Obter elementos através do nome da classe
const errors = document.getElementsByClassName('error')
//gera um htmlCollection n pode usar forEach que nem no nodeList
console.log(errors)


// Obter elementos através do nome da tag
const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)