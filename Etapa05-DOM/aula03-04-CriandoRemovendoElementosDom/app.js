
const ul = document.querySelector('ul')


const lis = document.querySelectorAll('li')

lis.forEach(li => {
    li.addEventListener('click', (event)=>{
        const clickdElement = event.target // mostra a referencia da li 

        clickdElement.remove()
    })
})

const button = document.querySelector('button')

button.addEventListener('click', () =>{
    const li = document.createElement('li') // CRIA UMA TAG

    //ul.innerHTML += <li> novo item </li> -> FORMA ALTERNATIVA

    li.textContent = 'Novo item'
    ul.append(li) //cria como ultimo filho 
   // ul.prepend(li) cria como priemiro filho 
})