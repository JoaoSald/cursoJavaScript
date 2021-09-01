const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const closeButton = document.querySelector('.popup-close')

button.addEventListener('click', ()=>{
   popup.style.display = 'block'
}) // evento para aparecer o popup na tela

// closeButton.addEventListener('click', ()=>{
//     popup.style.display = 'none'
// })// evento para fechar o popuo ao clicar no X 

popup.addEventListener('click', (event)=>{

 const classNameOfClickedElement = event.target.classList[0]
 const classesNomes = ['popup-close','popup-wrapper', 'popup-link']
 const closePopups = classesNomes.some(classesNomes => classesNomes === classNameOfClickedElement ) // some vai iterar sobre o array e verificar se pelo um 1 item desse array atende a condição dentro do metodo

if(closePopups)
    {
         popup.style.display = 'none'
    }
    // FEACHA O POPUP AO CLICAR NESSAS 3 DIVS 
})