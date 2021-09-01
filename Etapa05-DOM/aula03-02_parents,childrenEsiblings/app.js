const article = document.querySelector('article')
Array.from(article.children).forEach(element =>{
    element.classList.add('classe-adicionada')
})

const tittle = document.querySelector('h2')
 console.log(tittle.nextElementSibling)
 console.log(tittle.parentElement)
 console.log(tittle.previousElementSibling)
 console.log(tittle.parentElement.parentElement)