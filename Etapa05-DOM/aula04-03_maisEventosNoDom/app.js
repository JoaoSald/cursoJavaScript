const paragraph = document.querySelector('.copy-me')


paragraph.addEventListener('copy', ()=>{
    console.log('texto copiado !')
}) // Ao selecionar o texto e copiar aparece no console a mesnagem texto copiado 

const div = document.querySelector('.box')

// div.addEventListener('mousemove', (event)=>{

//     console.log(event)
// }) // mostra as cordenadas quando o mouse passeia pela div 

 div.addEventListener('mousemove', (event)=>{
    div.textContent = `x ${event.offsetX} | Y${event.offsetY}`
     
}) // ve as posiçoes do mouse 

document.addEventListener('wheel', event =>{
    console.log(event.pageX, event.pageY)
}) //posição no scroll