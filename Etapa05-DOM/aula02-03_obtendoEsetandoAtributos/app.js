
const link = document.querySelector('a')
//console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://www.youtube.com/')
link.innerHTML = 'YouTube fdc'

const paragraph = document.querySelector('p')
console.log(paragraph.getAttribute('class'))

paragraph.setAttribute('class', 'sucess')

paragraph.setAttribute('Style', 'color: green;')