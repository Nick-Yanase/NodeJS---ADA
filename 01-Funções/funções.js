function cumprimenta(nome){ //paramentro -> variavel generica que recebe algum valor externo
  console.log(`olá, ${nome}`)
}
let nome = "nicolas";
cumprimenta(nome); // Argumento -> variavel ou valor real que entra como parametro para realizar a função

cumprimenta("renato");

function cumprimentaComHoraArgumentos(nome, hora){
  let cumprimento;
  if(hora< 6){
    cumprimento = "boa madrugada";
  } else
  if(hora< 12){
    cumprimento = "bom dia";
  } else
  if(hora< 18){
    cumprimento = "boa tarde";
  } else{
    cumprimento = "boa noite";
  }
  console.log(`olá, ${cumprimento},  ${nome}`)
}

cumprimentaComHoraArgumentos("Nicoolas", 23)

function cumprimentaComHoraArgumentos(nome, hora){ //---> podemos usar arguments como se fosse um list de arg, argument[0] = nome
  let cumprimento;
  if(arguments[1]< 6){
    cumprimento = "boa madrugada";
  } else
  if(arguments[1]< 12){
    cumprimento = "bom dia";
  } else
  if(arguments[1]< 18){
    cumprimento = "boa tarde";
  } else{
    cumprimento = "boa noite";
  }
  console.log(`olá, ${cumprimento},  ${nome}`)
}

cumprimentaComHoraArgumentos("Nicoolas", 23)