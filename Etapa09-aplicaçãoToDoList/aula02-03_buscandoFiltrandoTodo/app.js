const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input') 
const todosContainer = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', evento => {
    evento.preventDefault()

    const inputValue = evento.target.add.value.trim() // metodo trim remove espaços em branco no inicio/fim
    if(inputValue.length){
          todosContainer.innerHTML += `  
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`

  evento.target.reset() //limpa o input
    }
})

todosContainer.addEventListener('click', evento =>{
  const clickedElemnt = evento.target //obter o elemento clicado 
  if(Array.from(clickedElemnt.classList).includes('delete')){ // clickedElemnt.classList verifica as classes do elemnto clicado e o includes verfica se existe a classe delete retornando true ou false
      clickedElemnt.parentElement.remove() // caso a condição for true usamos o remove para remover a li
  }
})

inputSearchTodo.addEventListener('input', evento =>{
      const inputValue = evento.target.value.trim()
      Array.from(todosContainer.children)
      .filter( todo =>  !todo.textContent.includes(inputValue))
      .forEach(todo => {
        todo.classList.remove('d-flex')
        todo.classList.add('hidden')
      })
      Array.from(todosContainer.children)
      .filter( todo =>  todo.textContent.includes(inputValue))
      .forEach(todo => {
        todo.classList.remove('hidden')
        todo.classList.add('d-flex')
      })
    })
    