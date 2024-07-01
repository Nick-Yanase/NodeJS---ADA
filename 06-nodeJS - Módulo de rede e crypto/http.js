// ---- CRAINDO SERVIDORES ----
const http = require("http")
const sports = ["soccer", "volei", "basketball", "tennis"]
//nas requisições podem ser passadas arquivos html, css, js, JSON  
const server = http.createServer(async (request, response)=>{
  const {method, statusCode, url} = request;

  const bodyPromise = new Promise((resolve, reject)=>{
    let body;
    request.on("data", data =>{ //quando receber os dados de JSON transformar em aglo que js entende
      body = JSON.parse(data)
      request.on("end", data=>{ // e quando terminar da um resolve no body
        resolve(body);
      })
    })
  })

  if(url === '/'){
    response.write("<div><h1>hello from node</h1> <p> oi oi oi </p> <p> aaaaaaaaa </p> </div>")
    response.end();
    return
  }
 
  if(url === "/api/sports"){
     //pegar algum dado
    if(method === "GET"){
    response.write(JSON.stringify(sports))
    response.end();
    return
    }

    //inserir dados na aplicação
    if(method === "POST"){
      const body = await bodyPromise;
      console.log(body)

      const {name} = body; //pega apenas o nome do objeto body

      if(!sports.map(sport => sport.toLowerCase()).includes(name.toLowerCase())){
        sports.push(name.toLowerCase()); //impedir que o sport seja adicionado novamente independente do peso da fonte
      }
      response.write(name.toLowerCase());
      response.end();
      return
    }
  }
  response.statusCode = 404;
  response.write("<h1>Página não encontrada</h1>")
  response.end();
})

server.listen(3000, ()=>{
  console.log("Servidor rodando no caminho, http://localhost:3000")
})