//Eventos de cliques

const button = document.querySelector('button')

button.addEventListener('click', ()=>{
    console.log("clicou no botão")
})
//addEventListener vai escutar o acontecimento de algum evento nesse elemento 

const lis = document.querySelectorAll('li')

lis.forEach(li => {
    li.addEventListener('click', (event)=>{
        const clickdElement = event.target

        clickdElement.style.textDecoration = 'line-through'
    })
})