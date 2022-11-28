function corrigirProva(prova){
    let cont = 0;

    for(let i = 0; i < prova.questoes.length; i++){
        if(prova.questoes[i].resposta === prova.questoes[i].correta){
            cont++;
        }
    }
    console.log(cont);
    return `O aluno(a) ${prova.aluno} ${cont === 0 ? "não acertou" : "acertou"} ${cont > 1 ? cont+" questões" : cont == 0 ? "nenhuma questão" : cont+" questão" } e obeteve nota ${( prova.valor / prova.questoes.length) * cont}.`;

}

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "d",
            correta: "c"
        }
    ]
}

console.log(corrigirProva(prova));