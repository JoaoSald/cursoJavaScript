/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

//1
const input = document.querySelector('#username')
const p = document.createElement('p')

input.addEventListener('keyup', evento => {

  const valueUsername = evento.target.value
  const regax = /^[a-zA-Z]{6,}$/

  if(!regax.test(valueUsername)){
    p.setAttribute('class', 'username-help-feedback')
    p.textContent = "O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas"
    evento.target.insertAdjacentElement('afterend', p) //insertAdjacentElement vai fazer com que o P seja criado dpois do input
   
    return
  }
  p.setAttribute('class', 'username-success-feedback')
  p.textContent = "Username válido =)"
  evento.target.insertAdjacentElement('afterend', p)

})

//2
// const mensagem2 = document.querySelector('.mensagem2')

// form.addEventListener('submit', evento=>{
//   evento.preventDefault()

//  // const regax = /[a-zA-Z]{6,}/
//   //const testRegax = regax.test(evento.target.username.value)
//   const isAvaliedUsername = testeUsername(evento.target.username.value)

//  if(isAvaliedUsername){
//   mensagem2.classList.add('submit-success-feedback')
//   mensagem2.textContent = 'Dados enviados =)'
//   return
//  }
//  mensagem2.classList.add('submit-help-feedback')
//  mensagem2.textContent = 'Por favor, insira um username válido'
// })

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
  
  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas  
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/

const some = (array, func) =>{
  for(let i = 0; i < array.length; i++)
  {
    //console.log(array[i])
    if(func(array[i]))
    {
      return true
    }
  }
  return false
}
console.log(some([1,2,3], item => item ===3 ))