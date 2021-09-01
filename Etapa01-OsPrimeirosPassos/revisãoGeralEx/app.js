//EX 01
// 02 - Inicie o seu servidor local e abra o console do browser.

/*
03 - Para certificar-se que este arquivo realmente está linkado, exiba a frase  
"JS is Awesome!" em um alert no browser.
Como mencionei durante a aula: não se preocupe em entender 100% o que os comandos  
"alert" e "console" fazem. Nós falaremos sobre eles mais à frente =)
Utilize os espaços entre os comentários abaixo para executar os códigos dos 
exercícios. Inclusive o alert mencionado acima.
*/

// alert("JS is Awesome!")


/*
04 - Comente o alert que você escreveu acima, utilizando o comentário de uma linha.
*/

/*
05 - Declare uma const "myBirthYear", que recebe o ano do seu nascimento, com 4  
dígitos. Ex.: 1930.
*/
const myBirthYear = 2000

/*
06 - Declare uma const "currentYear", que recebe o ano atual, com 4 dígitos.
*/
const currentYear = 2021



/*
07 - Exiba as const "myBirthYear" e "currentYear", lado a lado, no console do browser.
*/
console.log(myBirthYear, currentYear)


/*
08 - Experimente.
- Declare uma const "myAge", que recebe o ano atual subtraído pelo ano do seu  
nascimento. Mas sem digitar os números manualmente.
Você pode utilizar o sinal de menos (-) entre os dois valores e verificar o que  
acontece. 
- Exiba a "myAge" no console.
*/
const myAge = currentYear - myBirthYear
console.log(myAge)


/*
09 - Antes do console.log abaixo, declare uma const "ten", que recebe o número  
10 e:
- Descomente o console.log;
- Substitua a palavra "valor1" pelo ano atual somado à 10;
- Substitua a palavra "valor2" pela sua idade somada à 10;
- Os números não devem ser digitados manualmente;
- Observe o resultado no console do browser.
Não se assuste com as crases e os cifrões. Conversaremos mais sobre operações  
matemáticas e strings (textos) em breve =)
*/

const ten = 10
console.log(`Em ${currentYear + ten}, estarei com ${myAge + ten} anos.`)

/*
*/

//EX02
// 03 - Exiba a string 'Grandes poderes trazem grandes responsabilidades.' no console do browser.

// Utilize os espaços entre os comentários abaixo para executar os códigos dos exercícios. Inclusive este.

let mensagem = 'Grandes poderes trazem grandes responsabilidades.'

// console.log(mensagem)


/*
04 - Comente o console.log acima, e:

- Armazene a palavra 'Tom' em uma constante "tom";
- Armazene a palavra 'Hanks' em uma constante "firstTom";
- Armazene a palavra 'Cruise' em uma constante "secondTom";
- Declare uma constante "myFavoriteTom" que recebe nome, espaço, e sobrenome do Tom que você mais gosta;
- Exiba a "myFavoriteTom" no console do browser.
*/
const tom = 'Tom'
const firstTom = 'Hanks'
const secondTom = 'Cruise'
const myFavoriteTom = tom +' ' + secondTom
// console.log(myFavoriteTom)

/*
05 - Comente o console.log acima, e:

- Armazene a palavra 'JavaScript' em uma constante "programmingLanguage";
- Armazene a junção das letras "J" e "S", da programmingLanguage, em uma constante "js";
- As letras não devem ser digitadas manualmente;
- Exiba a "js" no console do browser;
*/
const programmingLanguage = 'JavaScript'
const js = programmingLanguage.slice(0, 1) + programmingLanguage.slice(4, 5)
// console.log(js)

/*

/*
07 - Comente o console.log acima, e,

- Exiba no console do browser a quantidade de caracteres que a constante "programmingLanguage" possui;
*/
//  console.log(programmingLanguage.length)
 


/*
08 - Comente o console.log acima, e,

- Exiba no console a última letra da string que a "randomWord" (abaixo)
 armazena, mas com a condição a seguir;
- Ao invés de inserir manualmente a posição do último caractere, faça com que a obtenção da última letra
 funcione para qualquer palavra que a "randomWord" receber;
- Dica: utilize a propriedade ".length".
*/
let randomWord = 'Araponga'
// console.log(randomWord[randomWord.length - 1])
/*
09 - Comente o console.log acima, e,

- Exiba, no console, a string que "summerMessage" (abaixo) armazena, mas com todas as letras minúsculas;
- Não modifique a string da "summerMessage";
- Não digite a nova string manualmente.
*/
const summerMessage = 'O VERÃO CHEGA NESTE FIM DE SEMANA'
// console.log(summerMessage.toLocaleLowerCase())

/*
10 - Comente o console.log acima, e,

- Exiba, no console, a string que "winterMessage" (abaixo) armazena, mas com todas as letras maiúsculas;
- Não modifique a string da "winterMessage";
- Não digite a nova string manualmente.
*/
const winterMessage = 'o inverno está chegando'
// console.log(winterMessage.toUpperCase())


/*
11 - Comente o console.log acima, e,

- Exiba, no console, o index do caractere "v" da "winterMessage";
*/
// console.log(winterMessage.lastIndexOf('v'))


/*
12 - Comente o console.log acima, e,

- Exiba, no console, o index da última ocorrência do caractere "n" da "winterMessage".
*/
// console.log(winterMessage.lastIndexOf('n'))


/*
13 - Comente o console.log acima, e,

- Após a const "harryPotterAuthor" (abaixo), exiba no console a parte "J.K." da string "harryPotterAuthor";
- Não digite a string "J.K." manualmente;
*/
const harryPotterAuthor = 'J.K. Rowling'
console.log(harryPotterAuthor.slice(0,3))

/*
14 - Comente o console.log acima, e,

- Após a const "bestMovie" (abaixo), declare uma constante "realBestMovie";
- Atribua à "realBestMovie" a mesma string da "bestMovie", mas substituindo o nome do filme para "Moonlight";
- Exiba a "realBestMovie" no console.
*/
const bestMovie = 'E o Oscar de melhor filme vai para: "La la land"!'
const realBestMovie = 'E o Oscar de melhor filme vai para: "La la land"!'
// console.log(realBestMovie.replace('filme', 'Moonlight'))

/*'
15 - Comente o console.log acima, e,

- Abaixo deste comentário, armazene o resto de 10 dividido por 3 em uma constante "reminder";
- Exiba a reminder no console. O resultado deve ser 1;
*/
const reminder = 10%3
// console.log(reminder)


/*
16 - Comente o console.log acima, e,

- Abaixo da let "episodes", incremente o valor dela em 1;
- Após o incremento, exiba a let "episodes" no console;
- O valor exibido no console deve ser 7.
*/
let episodes = 6
episodes +=1
// console.log(episodes)



/*
17 - Comente o console.log acima, e,

- Decremente a let "episodes" em 1;
- Após o decremento, exiba a let "episodes" no console;
- O valor exibido no console deve ser 6.
*/
episodes -=1
console.log(episodes)

/*
18 - Comente o console.log acima, e,

- Utilize o operador addition assignment para atualizar o valor da let "episodes" para 10;
- Após a atribuição, exiba a let "episodes" no console.
*/

// console.log(episodes+10)



/*
19 - Comente o console.log acima, e,

- Abaixo deste comentário, armazene a string 'O nº de episódios é: NUMERO_DE_EPISÓDIOS' em uma constante "allEpisodes";
- Insira a let "episodes" no lugar de "NUMERO_DE_EPISÓDIOS";
- Exiba a "allEpisodes" no console.
*/

const allEpisodes = `O nº de episódios é:${episodes}`
console.log(allEpisodes)

/*
20 - Comente o console.log acima, e,

- Descomente a const "bookMessage" e o console.log abaixo;
- Encontre uma forma de incluir as aspas simples do nome do livro na string;
- Não modifique nenhuma aspas da string para aspas duplas.
- Não use template strings.
*/
const bookMessage = '\'O Conto da Aia\' é um dos livros mais vendidos da década.'
// console.log(bookMessage)


/*
21 - Comente o console.log acima (e a const bookMessage caso não tenha descoberto a resolução), e,

- Após a const "name" (abaixo), declare uma let "newName";
- A let "newName" deverá armazenar uma string ES5 com o mesmo valor que "name" armazena;
- Só que com as letras iniciais do nome e sobrenome maiúsculas;
- Não digite a nova string manualmente.
- Não modifique a string da const "name";
- Exiba a "newName" no console;
*/
const name = 'walter white'
// let newName = name[0].toupperCase() + name.slice(1, 6)
// console.log(newName)

//EX03
// 02 - Armazene um array vazio em uma let "brazilianFoods";
// */
let brazilianFoods = []

/*
03 - Use o método adequado para adicionar os 3 seguintes itens ao array:

- Coxinha
- null
- Brigadeiro

- Exiba a brazilianFoods no console.
*/

brazilianFoods.push('Coxinha', 'null', 'Brigadeiro')
// console.log(brazilianFoods)

/*
04 - Comente o console.log acima e:

- Através de uma reatribuição de valor, faça com que o 2º item do  
array "brazilianFoods" (null) seja substituído por "Pão de Queijo";
- Exiba apenas o 2º item desse array no console.
*/
brazilianFoods[1] = 'Pão de Queijo'
// console.log(brazilianFoods[1])

/*
05 - Comente o console.log acima e:

- Armazene em uma const "foodsInfo" a seguinte string: "Até aqui, o  
array "brazilianFoods" possui NUMERO_DE_ITENS itens: NOME_DO_ITEM_1,  
NOME_DO_ITEM_2 e NOME_DO_ITEM_3.";
- Substitua "NUMERO_DE_ITENS" pelo valor correto, mas sem inserir o  
número diretamente;
- Substitua as palavras "NOME_DO_ITEM_X" pelas informações corretas,  
mas sem digitar os nomes das comidas diretamente;
- Exiba a foodsInfo no console.
*/
const foodsInfo = `Até aqui, o  array brazilianFoods possui ${brazilianFoods.length} itens:${brazilianFoods[0]},  ${brazilianFoods[1]} e ${brazilianFoods[2]}.`
// console.log(foodsInfo)

/*
06 - Comente o console.log acima e:

- Armazene um array com os itens "Chico" e "Zeca" em uma const  
"maleDogNames";
- Agora, em uma const "femaleDogNames", armazene um array com os  
itens "Lilica" e "Matilda";
- Declare uma let "dogNames" que recebe a junção dos arrays  
"maleDogNames" e "femaleDogNames";
- Exiba a "dogNames" no console.
*/
const maleDogNames = ['Chico', 'Zeca']
const femaleDogNames = ['Lilica', 'Matilda']
let dogNames = maleDogNames.concat(femaleDogNames)
// console.log(dogNames)
/*
07 - Comente o console.log acima e:

- Exiba no console uma string com todos os itens do array  
"dogNames" separados por vírgula e espaço em branco;
- Utilize o método adequado para fazer isso;
- O resultado deve ser: "nome1, nome2, nome3, nome4".
*/
// console.log(dogNames.join(', '))


/*
08 - Comente o console.log acima e:

- Exiba no console o último item do array "dogNames", mas de  
forma que caso a quantidade de itens do array aumente ou diminua,  
o último item continue sendo exibido;
- Para testar essa lógica, na linha acima do console.log que  
você acabou de escrever, remova o último item do array "dogNames"  
utilizando o método adequado para isso;
- O console deve continuar exibindo o último item do array, que  
agora é "Lilica".
*/
dogNames.pop()
// console.log(dogNames)

/*
09 - Comente o console.log acima e:

- Adicione o item "Nina" no final do array "dogNames", utilizando  
o método adequado para isso;
- Agora, armazene em uma const "initials" uma template string com  
apenas as letras iniciais dos nomes do array "dogNames";
- Exemplo: ['Nala', 'Zé'] resultaria em uma string 'NZ';
- Não digite as letras diretamente;
- Exiba a "initials" no console.
*/

dogNames.push('Nina')
console.log(dogNames)

/*
10 - Comente o console.log acima e:

- Exiba a "initials" no console, mas com todas as letras minúsculas;
- Utilize o método adequado para isso.
*/

/*
11 - Comente o console.log acima e:

- Declare uma const "dessert" e faça com que ela receba uma template  
string que contém a parte "co" do 1º item do array "dogNames", a  
parte "ca" do 2º item e a parte "na" do 4º item;
- A string deve resultar na palavra 'cocana', que não deve ser  
digitada diretamente;
- No final da string, faça com que a letra "n" seja substituída por  
"d", utilizando o método adequado para isso;
- Exiba no console a string abaixo, substituindo "SOBREMESA" pela  
constante que você criou.

'A SOBREMESA é um doce à base de coco, tradicional na América Latina e em Angola.'
*/
const dessert = ``



/*
12 - Comente o console.log acima e:

- Declare um array com os números 3, 5, e 7 e o armazene em uma let  
"oddNumbers";
- Exiba no console o resultado do 2º item do array elevado ao cubo. O  
valor exibido deve ser 125;
- Entre a declaração da "oddNumbers" e a exibição do 2º item do array  
elevado ao cubo, faça o 2º item do array receber todo o valor que ele  
já tem, mais 4;
- Agora, o resultado exibido no console deve ser 729.
*/
let oddNumbers = [3, 5, 7]
// console.log(oddNumbers[1]**3)

//EX04
//01 - Suba o seu servidor local e:

//   - Armazene em uma constante "my3FavoriteTVShows" suas 3 séries favoritas;
//   - Se você não assiste séries, armazene seus 3 filmes favoritos;
//   - Armazene em uma constante "sentence" a frase abaixo, modificando "SÉRIE_01,  
//     SÉRIE_02 e SÉRIE_03" para as suas séries favoritas;
//   - O "e" antes do nome da última série deve ser mantido;
//   - Forme essa frase sem digitar o nome das séries (claro) e sem utilizar  
//     a notação "array[index]";
//   - Exiba a frase no console.

//   "Minhas 3 séries favoritas são: SÉRIE_01, SÉRIE_02 e SÉRIE_03."

const my3FavoriteTVShows = ['Bad', 'Got', 'SNK']
const sentence = `${my3FavoriteTVShows[0]}, ${my3FavoriteTVShows[1]} e ${my3FavoriteTVShows[2]}`
// console.log(sentence)

/*
  02 - Comente o console.log() acima e:
  - Exiba no console um boolean indicando se o array de séries que você criou  
    possui 3 itens.
*/
// console.log(my3FavoriteTVShows.length === 3)

/*
  03 - Comente o console.log() acima e:

  - Após a constante abaixo, armazene em uma constante "isRandomTVShowIncluded"  
    um boolean que indica se a série que a "randomTVShow" armazena é uma das  
    suas 3 séries favoritas;
  - Utilize o método adequado para fazer essa verificação;
  - Exiba no console o boolean que a "isRandomTVShowIncluded" recebeu.
*/
const randomTVShow = 'Watchmen'
const isRandomTVShowIncluded = my3FavoriteTVShows.includes(randomTVShow)
// console.log(isRandomTVShowIncluded)

/*
  04 - Comente o console.log() acima e:

  - Armazene a frase abaixo em uma constante "typeSentence", substituindo  
    "TIPO_DE_DADO" pela informação correta;
  - Utilize o operador adequado para gerar essa informação;
  - Exiba a "typeSentence" no console.

  "O tipo de dado que a const "isRandomTVShowIncluded" armazena é: TIPO_DE_DADO."
*/
const typeSentence = `O tipo de dado que a const "isRandomTVShowIncluded" armazena é:${typeof isRandomTVShowIncluded}. `
// console.log(typeSentence)

/*
  05 - Comente o console.log() acima e:

  - Exiba a frase abaixo no console, substituindo "NÚMERO_DE_CARACTERES" por 39  
    e "BOOLEAN" pela informação correta (true ou false);
  - Converta explicitamente este boolean em uma string ao inserí-lo na frase;
  - A 1ª letra do boolean deve ser maiúscula;
  - Dica: se você perceber que está repetindo o mesmo número na string, cogite  
    armazenar este número em uma constante e usá-la na frase.

  "A string que a "typeSentence" armazena tem mais de NÚMERO_DE_CARACTERES  
  caracteres? BOOLEAN."
*/

 
/*
  06 - Comente o console.log() acima e:

  - Após a constante "falsyValues", exiba no console a frase abaixo,  
    substituindo "NÚMERO_DE_ITENS" e "BOOLEAN" pelas informações corretas.

  "Todos os NÚMERO_DE_ITENS itens do array "falsyValues" são falsy. Inclusive o  
  BOOLEAN."
*/

const falsyValues = [0, "", false, '', ``, null, undefined, NaN]
// console.log(`Todos os ${falsyValues.length} itens do array "falsyValues" são falsy. Inclusive o  
// ${falsyValues[2]}.`)

/*
  07 - Comente o console.log() acima e:

  - Armazene em uma constante "crazyOperation" a soma entre null e 1;
  - Armazene em uma constante "crazyConversion" a conversão da "crazyOperation"  
    em boolean.
  - Você sabe por que essa conversão resultou em true? ss pq não é um falsyvalue 
*/
const crazyOperation = null + 1
const crazyConversion = Boolean(crazyOperation)
console.log(crazyOperation)

/*
  08 - Comente o console.log() acima e:

  - Armazene em uma constante "ages" um array com os números 31, 82, 61 e 11;
  - Armazene em uma constante "agesSum" a soma entre 1º e 3º itens do array  
    "ages";
  - Exiba a frase abaixo no console, substituindo "BOOLEAN" pela informação  
    correta.

  "A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação  
  é: BOOLEAN."
*/
const ages = [31, 82, 61, 1]
const agesSun = ages[0]+ages[2]
// console.log(`A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação é:${agesSun<=92}`)


/*
  09 - Comente o console.log() acima e:

  - Armazene em uma const "isNotAString" uma expressão que verifica se o tipo de  
    dado que a "randomTVShow" armazena não é uma string;
  - Essa expressão deve resultar em false.
  - Exiba a "isNotAString" no console.
*/
const isNotAString = typeof randomTVShow  == 'String'
// console.log(isNotAString)


/*
  10 - Comente o console.log() acima e:

  - Abaixo da constante "evenNumbers", exiba no console um boolean que indica se  
    o número 8 existe no array;
  - Não utilize o método includes desta vez.
*/

const evenNumbers = [0, 2, 4, 6, 8, 10]
console.log(evenNumbers.includes(8))