const crypto = require("node:crypto")

const chave = crypto.randomBytes(10).toString("hex") //qtd de bites aleatorios
const chave02 = crypto.randomBytes(10).toString("base64") //toString serve para deixar legivel para nós aplicando uma formatação de senha determinada
const uuid = crypto.randomUUID()//utiliza-se no banco, gera uma info nova

const {privateKey, publicKey} = crypto.generateKeyPairSync("rsa", {modulusLength: 2048})//rsa é um tipo de criptografia, com o crypto.generateKeyPairSync, conseguiriamos fazer um sistema de criptografia onde teria uma chave privada e uma publica para autenticação

console.log(chave);
console.log(chave02);
console.log(uuid); 
console.log(privateKey); 
console.log(publicKey); 




