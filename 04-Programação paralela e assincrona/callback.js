//Uma função de callback é uma função que é passada como argumento para outra função e é executada após a conclusão dessa função
function cumprimenta(){
  console.log("Ola nicky")
}
function pontos(){
  console.log("Vc tem 1000 pontos!")
}

function showMessage (callback){
  cumprimenta();
  callback();
}

showMessage (pontos);