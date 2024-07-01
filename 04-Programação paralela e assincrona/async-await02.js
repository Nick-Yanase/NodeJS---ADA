async function bootstrap(){
  try{
    let result = await new Promise((resolve, reject)=> resolve(1))//espera o resultado para continuar
    result++;
    result++;
    result = await new Promise((resolve, reject)=> resolve(result +1))
    result++;
    result++;
    try{
      console.log(`resultado até o momento ${result}`)
      throw new Error("deu erro")
    }catch(error){}
    result++;
    result++;
    console.log(`Resultado é ${result}`)
    console.log("codigo sincrono")
  }catch(error) {} finally{
    console.log("sempre executo")
    }
}
bootstrap();