const alunos = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 5 },
    { nome: "Carlos", nota: 8 },
    { nome: "Tania", nota: 4 },
    { nome: "Eduardo", nota: 6 }
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Testando a função
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);