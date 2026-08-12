let alunos = [
    
    {
        nome: 'Renato',
        telefone: 11111111,
    },
    {
        nome: 'Julia',
        telefone: 22222222,
    },
    {
        nome: 'Miguel',
        telefone: 33333333,
    }
]

function showInfo(aluno){
    console.log('Nome: ' + aluno.nome);
    console.log('Telefone: ' + aluno.telefone);
    console.log('-----------------------------');
}

for (aluno of alunos){
    showInfo(aluno)
}