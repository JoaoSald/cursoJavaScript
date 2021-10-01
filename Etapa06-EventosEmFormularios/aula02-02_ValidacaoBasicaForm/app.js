const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit',  evento => {
    evento.preventDefault()

    const username = evento.target.username.value
    const usernameRegax = /^[a-zA-Z]{6,12}$/
    const isAvalidUsername = usernameRegax.test(username)

    if(isAvalidUsername){
        feedback.textContent = 'Username Valido :)'
        return
    }
    feedback.textContent = 'O Username deve conter de 6 a 12 caracteres e deve conter somente letras'

})