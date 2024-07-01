const prompt = require("prompt-sync")()

function showMenu(){
console.log("0. sair do sistema")
console.log("1. cadastro de usuário")
console.log("2. pesquisa usuário por CPF")
console.log("3. adicionar esporte ao usuario")
console.log("4. deletar usuario")
}

function registerUser(){
  const name = prompt("Digite o nome do usuario: ")
  const doc = prompt("Digite o CPF do usuário: ")
  if(users.find(user => user.doc === doc)){
  console.log("Esse cpf ja existe")
  }
  else{
    users.push({name, doc})  
  }
}

function searchUserDoc(){
  const cpf = prompt("Digite o cpf para ser encontrado")
  const user = users.find(user=> user.doc === cpf);
  if(user){
    console.log(`CPF encontrado, ${user.doc}`)
  }
  else{
    console.log("esse cpf não esta cadastrado")
  }
}

let option;
const users = [];
do{
  showMenu();
  option = parseInt(prompt("Escolha uma opção: (de 0 a 4): "));

  if (option === 1){
    registerUser();
  }
  else if(option === 2){
    searchUserDoc();
  }
  else if(option === 3){

  }
  else if(option === 4){

  }

}while(option !== 0);
console.log("saiu do sistema")


