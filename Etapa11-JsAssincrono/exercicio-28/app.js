/*
  01
  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/
// const request = new XMLHttpRequest() //esse obj pra fazer requisição de dados trabalho com qualquer tipo de dados

//     request.addEventListenner('readystatechange', () =>{

//       if(request.readyState === 4 && request.status === 200){
//         console.log(request.responseText)
//         return
//       }
      
//       if(request.readyState === 4 ){
//         console.log('Não foi possível obter os dados do pokemon')
//       }

//     })

//       request.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachuh')

//       request.send() 

/*
  02
  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/
    // let myObj = {
    //     nome: 'João',
    //     Sobrenome: 'Saldanha',
    //     sexo: 'M',
    //     idade: 21,
    //     altura:166,
    //     peso:64,
    //     andando: false,
    //     distancia: 0
    // }
/*
  03
  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/
// let myObj = {
//     nome: 'João',
//     Sobrenome: 'Saldanha',
//     sexo: 'M',
//     idade: 5,
//     altura:166,
//     peso:64,
//     andando: false,
//     distancia: 0,
//     addMaisUM: function(){
//         myObj.idade += 1
//         console.log(this.idade)
//     }
// }

// myObj.addMaisUM()


/*
  04
  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/
// let myObj =     
// {
//     nome: 'João',
//     Sobrenome: 'Saldanha',
//     sexo: 'M',
//     idade: 5,
//     altura:166,
//     peso:64,
//     andando: false,
//     distancia: 0,
//     addMaisUM: function()
//         {
//         myObj.idade += 1
//         console.log(this.idade)
//         },
//     somaDistancia: function(qtdDistancia){
//         myObj.distancia += qtdDistancia
//         if( myObj.distancia !== 0){
//             myObj.andando = true
//         }
//         console.log(`Você andou ${this.distancia} metros`)
//     }
// }
// myObj.addMaisUM()
// myObj.somaDistancia(4)
// myObj.somaDistancia(6)
// myObj.somaDistancia(8)
// myObj.somaDistancia(10)

/*
  05
  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/
let myObj =     
{
    nome: 'João',
    Sobrenome: 'Saldanha',
    sexo: 'M',
    idade: 21,
    altura:1.66,
    peso:64,
    andando: false,
    distancia: 0,
    addMaisUM: function()
        {
          for(let i = 0; i < 5; i++){
            myObj.idade += 1
          }
         console.log(this.idade)
        },
    somaDistancia: function(qtdDistancia)
    {
        myObj.distancia += qtdDistancia
        if( myObj.distancia !== 0){
            myObj.andando = true
        }
        console.log(`Você andou ${this.distancia} metros`)
    },
    info: function()
    {
        const verificaSexo = myObj.sexo === 'M' ? 'o' : 'a'
        const verificaIdade = myObj.idade === 1 ? 'ano' : 'anos'
        const verificaMetros = myObj.distancia > 1 ? 'metros' : 'metro'
        console.log(`Oi. Eu sou ${verificaSexo} ${this.nome} ${this.Sobrenome}, tenho ${this.idade} ${verificaIdade}, ${this.altura} metros de altura, peso ${this.peso} quilos e, só hoje, eu já caminhei ${this.distancia} ${verificaMetros}`)
    }
}

myObj.addMaisUM()


myObj.somaDistancia(1)


myObj.info()

/*
  06
  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

const isTruthy = value => Boolean(value)

const falsyValues = [false, 0, '', null, undefined, NaN]
const truthyValues = [true, '0', ()=>{}, {}, [], -1, 'false']

falsyValues.forEach(falsyValue => {
  console.log(isTruthy(falsyValue))
})

truthyValues.forEach(truthyValue =>{
  console.log(isTruthy(truthyValue))
})

/*
  07
  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.
  Dica: propriedades de objetos podem ser declaradas como strings.
*/
const funcLivros = (l1,l2,l3)=>

      {
        let myObject = 
        { 
         livro1:  {
          titulo1:'Livro do Ze', 
          paginas: 100, autor:'Zé', 
          editora:'editoraze'
        },
         livro2:  {
          titulo2:'Livro do Joao',
          paginas: 200, autor:'João',
          editora:'editorajoao'
        },
         livro3:  {
        titulo3:'Livro da Maria',
         paginas: 300, 
         autor:'Maria', 
         editora:'editoramaria'
        }
        }

            if(l1 === myObject.livro1.titulo1)
            {
                 console.log(myObject.livro1)
              if(l2 === myObject.livro2.titulo2)
              {
                  console.log(myObject.livro2)
              }
              if(l3 === myObject.livro3.titulo3)
              {
                   console.log(myObject.livro3)
              }
            } else {
                    console.log(myObject)
                    }
      
      }


funcLivros('Livro do Ze')
funcLivros()
