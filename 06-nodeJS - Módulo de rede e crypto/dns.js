const dns = require("node:dns")
const searchUrl = 'google.com';


// SEM PROMISES
// const ipv4 = dns.resolve4(searchUrl, (err, addresses)=>{
//   if(err){
//     console.log("url não encontrada")
//     return
//   }

//   console.log(addresses)
// })

//USANDO PROMISES PASSO A PASSO
async function bootstrap (){
  console.time("Pesquisando url por dns padrão") //inicio da contagem
  const address = await dns.promises.resolve4(searchUrl);
  console.log(address)

  console.timeEnd("Pesquisando url por dns padrão")//final da contagem
  const nameServers = await dns.promises.resolveNs(searchUrl);
  console.log(nameServers) //achar nome do servidor

  const ipNs = await dns.promises.resolve4(nameServers[1])

  const resolver = new dns.Resolver()
  resolver.setServers(ipNs); // se nameServers[1] for null ou indefined ent use ns1.google.com

  console.time("Pesquisando url por dns específico")
  const addressesWithResolver =  resolver.resolve4(searchUrl, (error, addresses)=>{ //procurando outro dns
    if(error){
      console.log("não foi possível encontrar ipv4")
    }
    console.timeEnd("Pesquisando url por dns específico")
    console.log(addresses);
  });
}
bootstrap();




