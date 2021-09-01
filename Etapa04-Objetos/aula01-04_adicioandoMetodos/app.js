//adicionando metodos
let user = {
    name: 'Joao',
    age: 20,
    email: 'joaosaldana@gmail.com',
    city: 'Porto Alegre',
    blogPosts: ['Empadao', '4 receitas de pure de batata'],
    login: function(){
        console.log('usuario logado')
    },
    logout: function(){
        console.log('usuario deslogado')
    }
}

user.login()
user.logout()