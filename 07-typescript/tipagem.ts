let numero01: number; //tipagem explicita
let numero02 = 2; //tipagem implicita, ele ve que é um numero, então atribui como um number, de preferencia use mais a implicita
numero01 = 10;
//numero01 = "10" o typescript não aceitaria; 

numero02 = 10;
const texto = "ola TypeScript"

console.log(numero01);
console.log(texto);

//para criar o arquivo.js do arquivo.ts, rode o comandonpx tsc --init, depois o npx tsc 
