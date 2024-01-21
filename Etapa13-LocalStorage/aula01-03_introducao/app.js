// `localStorage` é uma característica dos navegadores web que permite armazenar 
// dados localmente no dispositivo do usuário. Ele fornece uma maneira simples
//  de armazenar pares de chave-valor de forma persistente, permanecendo disponível 
//  mesmo após o fechamento do navegador. A capacidade é limitada (geralmente 5-10 MB), 
//  e os dados são armazenados como strings. Existe também o `sessionStorage`, que é 
//  semelhante, mas os dados são válidos apenas durante a sessão do navegador.

// adicionando dados na localStorage, para modificar basta invocar o setItem novamente
localStorage.setItem('name', 'Joao')
localStorage.setItem('age', 23)

// recuperando os dados
const name = localStorage.getItem('name')
const age = localStorage.getItem('age')

// imprimindo
console.log(name, age)

//Removendo um item 
//localStorage.removeItem('name')

//removendo todos os itens 
//localStorage.clear()