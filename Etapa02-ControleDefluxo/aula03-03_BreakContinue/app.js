//break continue
const scores = [50, 25, 0, 30, 100, 20, 10]

for(i=0; i < scores.length; i++){
if(scores[i] === 0){
    continue
}

    console.log(`sua pontuação: ${scores[i]}`)

    if(scores[i] === 100){
        console.log(`parabéns, voce atingiu a pontuação máxima`)
        break
    }
}