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
      const inputValue = evento.target.value.trim() //obtendo a referencia do valor inserido no input(fornecido pelo usuario)
      // Array.from transforma o htmlCollection em array
      // temos a ref da ul na const todosContainers e para manipularmos o conteudo dessa ul usamos o .children, que pega todos os filhos da ul
      Array.from(todosContainer.children)
      .filter( todo =>  !todo.textContent.includes(inputValue)) //filtrando o conteúdo diferente do inputValue(fornecido pelo usuario) e retornando ele num array 
      .forEach(todo => { //aqui vamos iterar esses valores que foram filtrados e adicioanar ou remover alguma clase
        todo.classList.remove('d-flex') //removendo a classe d-flex que sobrescreve a hidden
        todo.classList.add('hidden') // adicionando a classe hidden nos valores q nao dao match com o inputValue, assim removendo eles da tela   
      }) 
      //nesse bloco fazemos o contrario do código a cima 
      Array.from(todosContainer.children)
      .filter( todo =>  todo.textContent.includes(inputValue))
      .forEach(todo => {
        todo.classList.remove('hidden')
        todo.classList.add('d-flex')
      })
    })
    