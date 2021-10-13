const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

const correctAnswers = ['B','B','B','B']

form.addEventListener('submit',evento =>{
    
    evento.preventDefault()
    let score = 0

    const UserAnswers = [
        form.inputQuestion1.value, 
        form.inputQuestion2.value, 
        form.inputQuestion3.value, 
        form.inputQuestion4.value
    ]

    UserAnswers.forEach( (item, index) =>{
        if(item === correctAnswers[index]){
            score += 25
        }
    })

    scrollTo(0,0) // Faz a tela subir ao topo

   result.querySelector('span').textContent = `${score}%` //usando o querySelector encadeado na div para buscar a div especifica
   result.classList.remove('d-none') //remove a classe d-none e aparece na tela 
})
// setTimeout(()=>{
//     alert('acertou')
// }, 2000)