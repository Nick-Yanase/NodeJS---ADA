// --- SEM CLASSE ----
const padaria = {
  endereco: "Rua dos Laranjais, 1234 - bloco D",
  setor: "alimentacao",
  produtos: [
    {nome:"pão", valor: 0.8},
    {nome:"arroz", valor: 3.0},
    {nome:"leite", valor: 4.5},
    {nome:"doces", valor: 2.0},
    {nome:"carne", valor: -20.0},
  ],
  retornaNomeProdutos(){
    return this.produtos.map(produto => produto.nome);
  }
}
console.log(padaria);
console.log(padaria.retornaNomeProdutos());

// ---- USANDO CLASSE ----
type Produto ={
  nome: string;
  valor: number;
}

/* 
class Estabelecimento {
  private endereco: string;
  private setor: string;
  private produtos: Produto[]; // usa o type para receber um tipo Produto

  constructor(endereco: string, tipo: string, produtos: Produto[]){
    this.endereco = endereco;
    this.setor = tipo;
    this.produtos = produtos;
  }

}*/

// CODIGO MELHORADO! - USANDO TYPESCRIPT
class Estabelecimento {
  constructor(
    private endereco: string, 
    private tipo: string, 
    private produtos: Produto[]
  ){}
  //metodos
  nomeProdutos(){
    return this.produtos.map(produto => produto.nome);
  }

}

// ----+ CRIANDO OBJETO
const padaria03 = new Estabelecimento(
  "Rua dos Laranjais, 1234 - bloco A", 
  "alimentacao",
  [
    {nome:"pão", valor: 0.8},
    {nome:"arroz", valor: 3.0},
    {nome:"leite", valor: 4.5},
    {nome:"doces", valor: 2.0},
    {nome:"carne", valor: -20.0},
  ]
);
console.log(padaria03.nomeProdutos())


// ----+ CRIANDO CLASSE RESTAURANTE
class Restaurante {
  private pessoaFilaEspera = 10; 
  constructor(
    private endereco: string,
    private setor: string,
    private produtos: Produto[],
    filaEspera?: number
  ){
    this.filaEspera = filaEspera ?? this.pessoaFilaEspera //se foi passado um valor para pessoaFilEspera, então recebe este valor, senão o valor vira 10 automaticamente
  }
  //metodo set
  set filaEspera(pessoa: number){
    if (pessoa <= 0){
      return
    }
    this.pessoaFilaEspera = pessoa;
  }

  //metodo get
  get filaEspera(){ //se vc n coloca nada o metodo é publico por padrão
    return this.pessoaFilaEspera;
  }
  retornaProdutos(){
    return this.produtos.map(produto => produto.nome);
  }

  diminuiFilaEspera(){
    if (this.pessoaFilaEspera === 0){
      return
    }
    return this.pessoaFilaEspera--;
    
  }
  
}

const restaurante01 = new Restaurante(
  "rua tachizeiro, 78",
  "alimentação",
  [
    {nome: "batata frita", valor: 10},
    {nome: "frango frito", valor: 30},
    {nome: "costela frita", valor: 40},
    {nome: "cebola frita", valor: 20}
  ]
)
const restaurante02 = new Restaurante(
  "rua tachizeiro, 78",
  "alimentação",
  [
    {nome: "batata frita", valor: 10},
    {nome: "frango frito", valor: 30},
    {nome: "costela frita", valor: 40},
    {nome: "cebola frita", valor: 20}
  ],
  30
)
const restaurante03 = new Restaurante(
  "rua tachizeiro, 78",
  "alimentação",
  [
    {nome: "batata frita", valor: 10},
    {nome: "frango frito", valor: 30},
    {nome: "costela frita", valor: 40},
    {nome: "cebola frita", valor: 20}
  ],
  -10
)

restaurante01.diminuiFilaEspera()
restaurante01.diminuiFilaEspera()
restaurante02.filaEspera = 100; // o set so chamamos o nome da função e seta algum valor
restaurante02.diminuiFilaEspera()
restaurante02.diminuiFilaEspera()
restaurante02.diminuiFilaEspera()

console.log(restaurante01.filaEspera) // o get a gente chama so o nome da função
console.log(restaurante02.filaEspera)
console.log(restaurante03.filaEspera)






