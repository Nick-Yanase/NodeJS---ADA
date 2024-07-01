//foramtar nossas urls
const queryString = require("node:querystring")
const url = require("node:url")

const baseUrl = "https://siteviagem.com.br"
const uri = queryString.stringify({ //Criação de um objeto com os parâmetros de consulta: queryString.stringify transforma este objeto em uma string de consulta
  destino: "Rio de janeiro",
  periodo: "verão"
})

const fullUrl = `${baseUrl}/${uri}`

console.log(fullUrl)

// https://siteviagem.com.br/destino=Rio%20de%20janeiro&periodo=ver%C3%A3o vai ser impresso isso
// é uma forma do navegador entender a nossa URL

const parsedUri = queryString.parse(uri); // converte a string de consulta de volta para um objeto
console.log(uri)
console.log(parsedUri)
console.log(parsedUri.destino)
console.log(url.parse(fullUrl)); //uma forma de tratamento, extraindo todas as informações da url

const uri2 = queryString.escape("São Paulo") // Codifica a string para uso seguro em uma URLconsulta
console.log(uri2)
const unescapeUri2 = queryString.unescape(uri2) // string codificada para string normal
console.log(unescapeUri2)
