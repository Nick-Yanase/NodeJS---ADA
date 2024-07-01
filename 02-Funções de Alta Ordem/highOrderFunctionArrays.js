//HIGH ORDER FUNCTION -> Podemos usar funções dentro de funções, as mais famosas são a: MAP - FILTER - REDUCE
// NO JS todos são cidadões de primeira classe então podemos atribuit uma função a uma variavel
const cargos = ["Professor", "Diretor", "Aluno"];

//COM FUNCTION NORMAL
// const cargosComFlexao = cargos.map(function transformarCargos(cargo){

//COM ARROW FUNCTION
/*const cargosComFlexao = cargos.map((cargo)=>{
  return cargo + "(a)";
})*/

const cargosComFlexao = cargos.map((cargo) => cargo + "(a)"); //quando a arorw function tem um retorno direto sem um corpo gigante, podemos fazer desta forma
// o map faz tipo um forEach e aplica uma modificação em cada valor
console.log(cargosComFlexao);

//::: EXERCICIO: CRIE UM ARRAY DE OBJETOS ONDE TEM 3 USUARIOS, E CRIE UM OUTRO COM OS MESMOS OBJETOS MAS COM UM NOVO CAMPO CHAMADO NOME DE USUARIO, O NOME DE USUARIO É CRIADO A PARTIR DOS CARACTERES ANTES DO @ DO EMAIL.
//array de objetos
const usuarios = [
  {
    nome: "fabio",
    email: "fb@gmail.com",
  },
  {
    nome: "nick",
    email: "nk@gmail.com",
  },
  {
    nome: "kaua",
    email: "ka@outlook.com",
  },
];
/* MAP */ 
// const usuariosComUserName = usuarios.map(usuario =>{
//   return{
//     nome: usuario.nome,
//     email: usuario.email,
//     nomeUsuario: usuario.email.split("@")[0] //nome de usuario nos usamos o split para separar o email no @ ficando 0-> nk e 1-> @gmail.com
//   }
//   }
// )
//VERSÃO MELHORADA
const usuariosComUserName = usuarios.map(usuario => {
  return {
    ...usuario,
    nomeUsuario: usuario.email.split("@")[0], //nome de usuario nos usamos o split para separar o email no @ ficando 0-> nk e 1-> @gmail.com
  };
});
console.log(usuariosComUserName);

//::: EXERCICIO: VERIFIQUE SE EXISTE USUARIOS COM EMAILS DE OUTLOOK
/* FILTER */ 
//SOLUÇÃO 01
const usuariosOutlook01 = usuarios.filter((usuario) => {
  //O filter retorna um boolean
  const [, dominioEmail] = usuario.email.split("@");
  return dominioEmail === "outlook.com"; //se tiver retorna o usuario que tiver, caso contrário retorna null
});

//SOLUÇÃO 02
const usuariosOutlook02 = usuarios.filter((usuario) => {
  //O filter retorna um boolean
  return usuario.email.includes("outlook.com"); //por email ser uma string, podemos suar metodos de string cahamado includes que retorna um boolean
});

console.log(usuariosOutlook01);
console.log(usuariosOutlook02);

//::: EXERCICIO: FAÇA UMA MEDIA DAS NOTAS DE NICK
/* REDUCE */

const provasMatematicaNick = [7.5, 4, 9] 

//SOLUÇÃO 01
let media=0;
let soma=0;
provasMatematicaNick.forEach(nota=>{
  soma+=nota;
})
media=soma/provasMatematicaNick.length;

console.log(media.toFixed(2)) //Fixed(2) pega os dois ultimos numeros após a virgula

//SOLUÇÃO 02
// const somaProvas = provasMatematicaNick.reduce((acc, prova)=>{
//   return acc + prova //
// },0)
const somaProvas = provasMatematicaNick.reduce((acc, prova)=>
   acc + prova //acc é um acumulador que começa em 0 e vai somando a nota de cada rpova nele msm
,0);
const media02 = somaProvas/provasMatematicaNick.length;
console.log(somaProvas)
console.log(media02)

