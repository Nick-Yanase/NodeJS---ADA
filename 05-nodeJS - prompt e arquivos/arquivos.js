/*FUNÇÃO PARA LER E ESCREVER EM ARQUIVOS*/ 
const path = require("node:path") //pega o caminho do arquivo
const fs = require("node:fs") //ler o conteudo do arquivo
const filePath = path.join(process.cwd(), "05-nodeJS",'texto.txt') //process é o diretorio que esta aberto o projeto
const fileOutPath = path.join(process.cwd(), "05-nodeJS",'texto-com-linhas.txt') //cria um novo arquivo .txt 
const dotenv = require("dotenv");
dotenv.config()
console.log(process.env.NODE_ENV) //mostra uma variavel de ambiente present no arquivo .env
fs.readFile(filePath,{},(erro, dados)=>{
  if(erro){
    console.log(`erro na leitura do arquivo no caminho ${filePath}`)
    return //para a função
  }
  const texto = dados.toString();
  const linhas = texto.split('\n')
  const linhasAjustadas = linhas.map((linha, index)=>
   (`${index+1} - ${linha}`) //retorna este valores por usar map dentro da variavel linhasAjustadas
  )
  fs.writeFile(fileOutPath, linhasAjustadas.join("\n"), {}, (erro)=>{ //recebe o caminho do arquivo novo para escrever + o que vai ser escrito.
    if(erro){
      console.log(`erro na escrita do arquivo no caminho ${fileOutPath}`)
    }
  })
  console.log(`arquivo salvo no bucket ${process.env.S3_BUCKET}`)
  console.log("Novo arquivo de texto criado com sucesso!")
})
