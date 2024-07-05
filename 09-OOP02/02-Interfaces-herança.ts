import { Produto } from "../08-Orientação a Objetos/01-classes"; //Estamos importando o type Produto do arquivo 01-classes
//coloca os propriedades(atributos) e metodos que as classes vão implementar, ex: uma farmacia, um mercado, uma loja vão poder implementar esses métodos. É tipo um modelo para as classes seguirem
interface EstabelecimentoInteraface {
  endereco: string;
  setor: string;
  filaEspera: number;
  retornaProdutos: () => string[];
  diminuiFilaEspera(): void;
}

class Estabelecimento implements EstabelecimentoInteraface {
  protected pessoaFilaEspera = 10;
  constructor(
    public endereco: string, //botar publica quando usar interface
    public setor: string,
    protected produtos: Produto[],
    filaEspera?: number
  ) {
    this.filaEspera = filaEspera ?? this.pessoaFilaEspera; 
  }
  get filaEspera() {
    return this.pessoaFilaEspera;
  }
  set filaEspera(pessoa: number) {
    if (pessoa <= 0) {
      return;
    }
    this.pessoaFilaEspera = pessoa;
  }
  retornaProdutos() {
    return this.produtos.map((produto) => produto.nome);
  }
  diminuiFilaEspera() {
    if (this.pessoaFilaEspera === 0) {
      return;
    }
    this.pessoaFilaEspera--;
  }
}
// ---+ CRIAÇÃO DO ESTABELECIMENTO
const estabelecimento01 = new Estabelecimento(
  "rua tachizeiro, 78",
  "alimentação",
  [
    { nome: "batata frita", valor: 10 },
    { nome: "frango frito", valor: 30 },
    { nome: "costela frita", valor: 40 },
    { nome: "cebola frita", valor: 20 },
  ]
);


// ---- HERANÇA ---- 
// Queremos usar tudo de estabelecimento e adcionar algumas propriedades extras da farmacia
// 1. cria uma interface para classe farmacia que herde a interface de estabelecimento
// 2. na classe farmacia dê um extends de estabelecimento para pegar reduzir o codigo
interface FarmaciaInterface extends EstabelecimentoInteraface{ 
  compraRemedioPrescrito: (receita: ReceitaInterface, produtosAComprar: string[])=> void;
}

interface ReceitaInterface{
  remedios: string[];
  idMedico: string;
}

interface Remedio extends Produto{
  receitaObrigatoria?: boolean;
}

class Farmacia extends Estabelecimento implements FarmaciaInterface{
  constructor(
    public endereco: string, //botar publica quando usar interface
    public setor: string,
    protected produtos: Remedio[],
    filaEspera?: number
  ){  
    super(endereco, setor, produtos, filaEspera)
  }
  //função de compra de remedio, que verifica se tem os remedios presentes an receita no estoque da farmacia 
   public compraRemedioPrescrito(receita: ReceitaInterface, produtosAComprar: string[]): void{
    const remediosDiponiveis = this.produtos.filter(
      produto => produtosAComprar.includes(produto.nome)
      )
      if (remediosDiponiveis.length === 0){
        console.log("infelizmente não temos os remedios em estoque")
      }

      const remediosAutorizados = remediosDiponiveis.filter(
        produto => {
          
           return !produto.receitaObrigatoria ? true : 
           receita.remedios.includes(produto.nome)
        }
        )
      console.log({remediosDiponiveis})
      console.log({remediosAutorizados})
   }

}


// ---+ CRIAÇÃO DA FARMACIA
const Farmacia01 = new Farmacia(
  "rua tachizeiro, 78",
  "farmaceutico",
  [
    { nome: "aspirina", valor: 10 },
    { nome: "creme hidratante", valor: 10 },
    { nome: "remedio controlado 01", valor: 30, receitaObrigatoria:true },
    { nome: "remedio controlado 02", valor: 30, receitaObrigatoria:true },
    { nome: "vitamina C", valor: 40 },
  ]
);

//
Farmacia01.compraRemedioPrescrito(
  {
    remedios: ["remedio controlado 01"],
    idMedico: "1234-1234"
  }, //primeiro argumento: oq a receita pede de medicamento
   ["aspirina", "remedio controlado 01", "shampo"] // segundo argumento: o que cliente que vai comprar
)

