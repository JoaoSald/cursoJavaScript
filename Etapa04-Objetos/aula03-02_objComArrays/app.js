//objetos em arrays

// const posts = [
//     {title: 'Empadão de frango', likes: 30},
//     {title: '4 receitas de pure de batata', likes: 50}
// ]

// console.log(posts)

let user = {
    name: 'Joao',
    age: 20,
    email: 'joaosaldana@gmail.com',
    city: 'Porto Alegre',
    blogPosts: [
    {title: 'Empadão de frango', likes: 30},
    {title: '4 receitas de pure de batata', likes: 50}
],
    login: function(){
        console.log('usuario logado')
    },
    logout: function(){
        console.log('usuario deslogado')
    },
    logBlogPosts () {
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(posts =>{
            console.log(posts.title,posts.likes)
        })

    }
}

user.logBlogPosts()
