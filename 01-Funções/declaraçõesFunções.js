//sofre com hoisting podendo ser chamada antes dela ser definitivamente executada, ou seja, pode chamar la em cima, msm que a implementação da função fique la embaixo do codigo
function climaAtual() {
  const climasPossiveis = ['ensolarado', ' chuvoso', 'nevando'];
  const climaSorteado = climasPossiveis[Math.round(Math.random() * 2)];
  return `hoje esta ${climaSorteado}`;
}

//ARROW FUNCTION -> Não sofre com hoisting então fica sem valor até a atribuição for executada
/*console.log(a);  undefined
var a = 5;
console.log(a);  5*/
const climaAtualArrow = () => {
  const climasPossiveis = ['ensolarado', ' chuvoso', 'nevando'];
  const climaSorteado = climasPossiveis[Math.round(Math.random() * 2)];
  return `hoje esta ${climaSorteado}`;
}
console.log(climaAtual());
console.log(climaAtual());
console.log(climaAtual());
