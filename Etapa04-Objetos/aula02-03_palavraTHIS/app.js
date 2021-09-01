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
    },
    logBlogPosts () {
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(posts =>{
            console.log(posts)
        })

    }
}
// user.logBlogPosts()
user.logBlogPosts()
