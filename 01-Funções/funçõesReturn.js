function soma (numero1, numero2){
  const resultado = numero1 + numero2;
  return resultado;
}

const resultado01 = soma(2,2);
const resultado02 = soma(4,4);
const somatoria = resultado01 + resultado02
console.log(somatoria);

//melhoria da função soma
function somaMelhorada(...numeros){ //ele aceita a quantidade x de nuemros e transforma em um array
  let resultado=0;

  numeros.forEach((numero)=>{
    resultado+=numero;
  })

  return resultado;
}
const soma02 = somaMelhorada(3,3,3,3)
console.log(soma02)

//OUUUUU
function somaMelhoradaVER2(...numeros){ //ele aceita a quantidade x de nuemros e transforma em um array
  let resultado02=0;

  for( const numero of numeros){ ///Quase um forEACH
    resultado02+=numero;
  }
  return resultado02;

}
const soma03 = somaMelhoradaVER2(5,5,5,5)
console.log(soma03)
