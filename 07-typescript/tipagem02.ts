interface User{ //criando essa interface permitimos que o o objeto que usa interface User so aceite um novo usuario se tiver preenchido todas as informações, UTILIZE MAIS A INTERFACE
  nome: string;
  email: string;
  idade?: number; // essa interrogação siginifica que o valor pode ser opcional
}
const usuarioLogado : User = {
  nome: "nicky",
  email: "nicky@gmail.com"
}
//  dessa forma ele iria reclamar pq estaria faltando o email

// const usuarioLogado02 : User = {
//   nome: "kaua",
//   
// }
const usuarioLogado02 : User = {
  nome: "kaua",
  email: "kaua@gmail.com",
  idade: 18
}

// ---- outra forma de tipagem com TYPEOF ----
const produto01 = {
  nome: "hamburguer",
  valor: 12
}
// Dessa forma ele iria reclamar pois faltaria o valor e a tipagem de nome é string e não number

// const produto02 : typeof produto01 = {
//   nome: 12 
// }
const produto02 : typeof produto01 = {
  nome: "guarana",
  valor: 6
}

// ---- aplicando em um array ----
const bancoDeUsuarios : User[] = []
bancoDeUsuarios.push(usuarioLogado, usuarioLogado02);

// so pode receber dois argumentos pq definimos isso
const userData: [string, boolean] = ["1234-1234", true]

// ---- TYPE -> quase a mesma coisa q a interface ----
type jobs = {
  nome: string,
  salario: number,
  cargo?: string
} | null // esse objeto pode ser nulo

const job01 : jobs = null; // esse objeto pode ser nulo

const jobs02 : jobs = {
  nome: "programador",
  salario: 3000,
  cargo: "junior"
}
const jobs03 : jobs = {
  nome: "programador",
  salario: 10000,

}

//---- INTERSECÇÃO COM TYPE ----
type Professor = {
  nome: string
  email: string
  cpf: string
  endereco:{
    rua: string,
    complemento: string,
    cep:string
  } 
}

type AlunoRemoto = {
  nome:string,
  email:string,
  telefone:string
}

type interseccaoAlunoProfessor = Professor & AlunoRemoto;
const intersect: interseccaoAlunoProfessor = {
  nome: "João Silva",
  email: "joao.silva@example.com",
  cpf: "123.456.789-00",
  endereco: {
    rua: "Rua das Flores",
    complemento: "Apto 101",
    cep: "12345-678"
  },
  telefone: "98765-4321"
};

 