const prompt = require("prompt-sync")();

function showMenu() {
  console.log("0. sair do sistema");
  console.log("1. cadastro de usuário");
  console.log("2. pesquisa usuário por CPF");
  console.log("3. adicionar esporte ao usuario");
  console.log("4. deletar usuario");
}

function registerUser() {
  const name = prompt("Digite o nome do usuario: ");
  const doc = prompt("Digite o CPF do usuário: ");
  if (users.find((user) => user.doc === doc)) {
    console.log("Esse cpf ja existe");
  }
  return users.push({ name, doc, sports: [] }); //n use muito if else em funções, usar pouco o else
}

function searchUserDoc() {
  const cpf = prompt("Digite o cpf para ser encontrado: ");
  const user = users.find((user) => user.doc === cpf);
  if (user) {
    console.log("Dados dos usuarios encontrados: ")
    console.log(`Nome: ${user.name}`);
    console.log(`CPF: ${user.doc}`);
    console.log(`sport: ${user.sports}`);

    return user;
  }
  console.log("esse cpf não esta cadastrado");
}
function addSportToUser() {
  const foundUser = searchUserDoc();
  if (!foundUser) {
    return;
  }
  const sport = prompt("Digite o esporte a ser adicionado: ");
  const newUsers = users.map((user) => {
    if (user.cpf === foundUser.cpf) {
      return {
        ...user,
        sports: user.sports.includes(sport) ? user.sports : [...user.sports, sport], //se o sporte adicionado já exisitr, então so copie os esportes q ele tem, caso contrário copie todos os esportes + o novo esporte
      };
    }
    return user;
  });
  users = newUsers;
}

function deleteUser(){
  const foundUser = searchUserDoc();
  if (!foundUser) {
    return;
  }
  const newUsers = users.filter(user =>{
    user.cpf !== foundUser.cpf //Na variavel newUsers, vai estar apenas os usuarios que não foram encontrados, ou seja, so vão estar users cujo cpf não foi digitado.
  })
  users = newUsers;
}
let option;
let users = [];
do {
  showMenu();
  option = parseInt(prompt("Escolha uma opção: (de 0 a 4): "));

  if (option === 1) {
    registerUser();
  } else if (option === 2) {
    searchUserDoc();
  } else if (option === 3) {
    addSportToUser();
  } else if (option === 4) {
    deleteUser();
  }
} while (option !== 0);
console.log("saiu do sistema");
