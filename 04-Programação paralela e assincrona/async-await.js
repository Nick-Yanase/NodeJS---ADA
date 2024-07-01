async function bootstrap (){
  const promise = new Promise((resolve, reject)=> resolve(1))
  .then(result => result + 1) //then pega o resolve e faz alguma coisa com ele, e o nome que voce chama na função n importa, pois todos serão o resultado de resolve, ou seja, qualquer coisa resolvida vai pro then

  //e caso tenha o reject, cai num catch para tratar o erro

  .then(result1 => result1 + 1)
  .then(result2 => result2 + 1)
  .then(result3 =>{
    console.log(`resultado até o momento ${result3}`)
    return result3; //mostra o resultado mas retorna o resultado pra outras terem o valor de result
  })
  .then(result => new Promise((resolve, reject)=> resolve(result + 1)))
  .then(result => result + 1)
  //.then(result => new Promise((resolve, reject)=> reject("erro na aplicação")))
  
  .then(resultado => console.log(`O resultado é ${resultado}`))
  .catch(err=>{})//caso o catch ficasse antes do erro, a aplicação quebraria, como esta depois do erro a aplicação segue normalmente
  .finally(console.log("sempre executo")) //apesar de reolve ou reject ele sempre vai executar

  //desta forma o codigo sincrono espera a promise ser terminada 
  await promise 
  console.log("codigo sincrono") 
}

bootstrap()