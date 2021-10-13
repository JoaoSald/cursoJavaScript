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

    result.classList.remove('d-none')
    
    let counter = 0

    const timer = setInterval(()=>{
        if(counter === score){
            clearInterval(timer) //Faz parar o setInterval 
        }
        result.querySelector('span').textContent = `${counter}%`
        counter++
    }, 10)

})
    // setTimeout(()=>{
    //     alert('acertou')
    // }, 2000) A diferença do setTimeout pro setInterval é que o setTimeOut acontece só uma vez 