//const paragraph = document.querySelector('p')
//console.log(paragraph.classList)

//ADICIONANDO CLASSE CSS
// paragraph.classList.add('error')
// paragraph.classList.remove('error')
// paragraph.classList.add('sucess')


const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(paragraph =>{
 //console.log(paragraph.textContent) //textContent obtem o texto visivel ou não
if(paragraph.textContent.includes('error')){
    paragraph.classList.add('error')
}else if (paragraph.textContent.includes('sucess')){
    paragraph.classList.add('sucess')
}

})

//REMOVENDO CLASSE CSS
const tittle = document.querySelector('h1')
tittle.classList.toggle('tittle')
