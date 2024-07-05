/*Hoje em dia se usa mais compisição, é mais facil pegar uma classe e compor ela a varias funcionalidades*/ 

type constructor = new (...args: any[]) => {}; // algo generico para aceitar qualquer
type GConstructor <T = {}> = new (...args: any[]) => T;
type AnimalProps = GConstructor <{nome: string, idadeEmMeses: number}>

//Funcionalidade de voar
function MixinVoar<TBase extends AnimalProps>(superClasse: TBase){
  return class extends superClasse{
    constructor(...args :any){
      super(args[0]);
    }
    public voa(){
      console.log(`${this.nome} esta voando`)
    }
  }
}
//funcionalidade de Nadar
function MixinNadar<TBase extends AnimalProps>(superClasse: TBase){
  return class extends superClasse{
    constructor(...args :any){
      super(args[0]);
    }
    public nadar(){
      console.log(`${this.nome} esta nadando`)
    }
  }
}

//funcionalidaded de andar
function MixinAndar<TBase extends AnimalProps>(superClasse: TBase){
  return class extends superClasse{
    constructor(...args :any){
      super(args[0]);
    }
    public andar(){
      console.log(`${this.nome} esta andando`)
    }
  }
}

interface AnimalInterface{
  nome: string,
  idadeEmMeses: number,
  ingerir: (alimento: string) => void
}
class Animal implements AnimalInterface{
  public nome: string;
  public idadeEmMeses: number;

  constructor({ nome, idadeEmMeses} : { nome: string, idadeEmMeses: number}) {
    this.nome = nome
    this.idadeEmMeses = idadeEmMeses
  }

  public ingerir(alimento: string): void{
    if(alimento === "agua"){
      console.log(`${this.nome} esta bebendo`)
      } 
    if(alimento === "ração"){
      console.log(`${this.nome} esta comendo`)
    }
   }
}

const cachorro = new Animal(
  {nome:"nicky",
  idadeEmMeses:18}
);
cachorro.ingerir("agua");


const borboleta = new (MixinVoar(Animal))({nome:"brabuleta", idadeEmMeses:12})
borboleta.voa()

// OS Mixin são as funcionalidades do pato, ele pode andar, nadar e voar
const pato = new  (MixinNadar(MixinVoar(MixinAndar(Animal))))({nome:"pato foda", idadeEmMeses:26})
pato.andar();
pato.nadar();
pato.voa()