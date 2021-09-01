const postTitle = 'É bolacha ou biscoito'
const postAuthor = 'Mathues saad'
const postComments = 15

//usando concatenação
// const postMessage = 'o post ' + postTitle + ', do ' + postAuthor + ", tem " + postComments + ' coments'


//usando template string
// const postMessage = `o post "${postTitle}" , do "${postTitle}" , tem "${postComments}"   cometarios.`

console.log(postMessage)

//criando templates HTML
const html =
 `

<h2> ${postTitle} </h2>
<p> Authot: ${postAuthor} </p>
<span>este pot tem ${postComments} comentarios </span>

`
console.log(html)