
//
const paragraph = document.querySelector('p')

//paragraph.innerText += ' texto Inserido'

// const paragraphs = document.querySelectorAll('p')

//  paragraphs.forEach((item, index) =>{
//     item.innerText += ` Novo texto ${index + 1}`
//  })

 const div = document.querySelector('.content')

// //div.innerHTML += '<h2>  Novo H2  </h2>'

 const people = ['Jonatan', 'Vinicius', 'Diego']

 people.forEach( person =>{

    div.innerHTML += `<p> ${person} </p> `

 })