"use strict";

var alunos = [{
  nome: "João",
  nota: 7
}, {
  nome: "Maria",
  nota: 5
}, {
  nome: "Carlos",
  nota: 8
}, {
  nome: "Tania",
  nota: 4
}, {
  nome: "Eduardo",
  nota: 6
}];
function filtrarAlunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Testando a função
var alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);