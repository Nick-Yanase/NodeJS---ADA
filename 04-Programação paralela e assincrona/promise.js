//::: FUNCIONAMENTO :::
/*
1. A varaivel deu certo recebe um valor entre 0 e 1, com ROUND ele arredonda sendo 0 ou 1, e !!faz com que retonre um valor booleano, true : false

2. se deu certo for ture ent ele resolve, caso contrário reject 

3. O assincornismo esta presente quando o "seguir com fluxo..." vai em paralelo com  a realização da promise que vem seguida mostrando o resultado. E o programa não quebra caso dê algum erro
*/
const deuCerto = !!Math.round(Math.random());
console.log(deuCerto);

const resultado = new Promise((resolve, reject) => {
  if (deuCerto) {
    resolve(2 + 1);
  }
  reject(new Error("não foi possível calcular a operação"));

}).then((retorno) => {
    console.log(`o resultado do calculo é ${retorno}`);
  }).catch((error) => console.log("ocorreu um erro"));

console.log(resultado)
console.log("Seguir com o fluxo normalmente")
