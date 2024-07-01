const tempoMilisegundos = 2000 

// ---- ACONTECE UMA UNICA VEZ ----

function onTimerEnd(){
  console.log(`timer executou depois de ${tempoMilisegundos/1000} segundos`)
}
// setTimeout-> é uma função de callback, que executa uma função em determinados milisegundos;
// setTimeout(
//   onTimerEnd,
//   tempoMilisegundos
// )

// ---- ACONTECE MAIS DE UMA VEZ ----
let timer;
let contadorTimer = 0;

function onTimerEnd02 (){
  if(contadorTimer === 3){
    clearInterval(timer)
    return  //para a função
  }
  console.log(`timer executou depois de ${tempoMilisegundos/1000} segundos`)
  contadorTimer++;
}
// setINterval -> é uma função de callback, que repete uma função a cada milisegundos;

timer = setInterval(
  onTimerEnd02,
  tempoMilisegundos
)
console.log("Linha q aparece antes do callback")