// const randomNumbers = [37, 99, 37, 63]

// const numbrsGreaterThan37 = randomNumbers.filter( item => item > 37)

// console.log(numbrsGreaterThan37)

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

const premiunUsers = users.filter(user => user.premium) // gera um novo array com os usuarios que sao premium
console.log(premiunUsers) // mostra na tela somento os usuarios premium