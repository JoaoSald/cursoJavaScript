//quando a gente quer escutar um envio de um form o listenner de evento vai ser atrelado ao form e não ao botão

const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username')

form.addEventListener('submit', (event)=>{
    event.preventDefault()

  //  console.log(usernameInput.value) //valor do input exibido no console 
    //ou 
   // console.log(form.username.value) 
   //ou
   console.log(event.target.username.value) //.username faz referencia ao ID do input
})
//.preventDefault() faz com que quando clicarmos no botão evite o recarregamento da pagina aconteça 