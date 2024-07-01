const rl = require("readline")

const prompt = rl.createInterface({
  input: process.stdin, //input pelo teclado
  output:process.stdout
})

const promptPromise = {
  question: (pergunta) => new Promise((resolve, reject)=>{
    try{
      prompt.question((pergunta), (resposta)=> resolve(resposta)) //imprime resposta
    }catch (error){
      reject(error);
    }
  }),
  close:() => prompt.close()
}
// ---- desse jeito fica ruim ----
//nós temos que utilizar callback para fazer um encadeamento de perguntas, com o async e o await n é necesario.

// prompt.question("Qual seu numero favorito?: ", (resposta)=>{
//   console.log(`o dobro do seu numeroi favorito é ${parseInt(resposta)*2}`)

//   prompt.question("Qual seu numero favorito?: ", (resposta)=>{
//     console.log(`o dobro do seu numeroi favorito é ${parseInt(resposta)*2}`)
//     prompt.close()
//   })
// })

// ---- desse jeito fica foda ----
async function askUser(){
  const numero = await promptPromise.question("Qual seu numero favorito?: ")
  console.log(`o dobro do seu numero favorito é ${parseInt(numero)*2}`)

  const cor = await promptPromise.question("Qual sua cor favorita?: ")
  console.log(`Sua cor favorita é ${cor}`)

  promptPromise.close
}
askUser();


