//criando um objeto literal
let user = {
    name: 'Joao',
    age: 20,
    email: 'joaosaldana@gmail.com',
    city: 'Porto Alegre',
    blogPosts: ['Empadao', '4 receitas de pure de batata']
}

console.log(user.age)

user.age  = 32
console.log(user.age)

console.log(user['email'])
