const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
const input = document.querySelector('input')

const testeUsername  = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit',  evento => {
    evento.preventDefault()

    const usernameRegax = /^[a-zA-Z]{6,12}$/
    const isAvalidUsername = testeUsername(evento.target.username.value)

    if(isAvalidUsername){
        feedback.textContent = 'Username Valido :)'
        return
    }
    feedback.textContent = 'O Username deve conter de 6 a 12 caracteres e deve conter somente letras'

})

form.username.addEventListener('keyup', evento => {
//console.log(evento.target.value) // no memento em que libera a tecla da letra aparece a mesma no console

const  isAvalidUsername = testeUsername(evento.target.value)

if(isAvalidUsername){
    //é valido
input.style.color = 'green'
input.style.borderColor = 'green'

return
}
//não é valido 
input.style.color = 'red'
input.style.borderColor = 'red'

})