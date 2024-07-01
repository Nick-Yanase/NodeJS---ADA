const cargos = ["professor", "diretor", "Aluno"];
cargos.push("membro da secretaria");//insere um elemento no final do array
console.log(cargos);

cargos.pop(); //tira o elemento do final do arrya
console.log(cargos);

cargos.shift() //tira o elemento inicial do array
console.log(cargos);

cargos.unshift("professor auxiliar") //insere um elemento no inicio do array
console.log(cargos);

cargos.splice(0, 1)// 0-> começa do 0 e 1-> quantos elementos removidos, 1 
console.log(cargos);

const indiceAluno =  cargos.indexOf("Aluno")// ele acha a poição do aluno no array
console.log(indiceAluno);

cargos.splice(indiceAluno, 1, "Aluna"); //tira o elemento aluno e bota o ALUNA no lugar
console.log(cargos);
