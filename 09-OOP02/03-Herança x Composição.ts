interface AnimalInterface{
  nome: string,
  idadeEmMeses: number,
  ingerir: (alimento: string) => void
}
class Animal implements AnimalInterface{
  constructor(
    public nome: string,
    public idadeEmMeses: number
  ){}

  public ingerir(alimento: string): void{
    if(alimento === "agua"){
      console.log(`${this.nome} esta bebendo`)
      } 
    if(alimento === "ração"){
      console.log(`${this.nome} esta comendo`)
    }
   }
}
class AnimalVoador extends Animal implements AnimalInterface {
  constructor(public nome: string, public idadeEmMeses: number, public penas?: boolean /*atributo especifico da subclasse, e o ? quer dizer que é opcional*/){
    super(nome, idadeEmMeses)
  }

  public ingerir(alimento: string): void{
    if(alimento === "agua"){
      console.log(`${this.nome} esta bebendo`)
      } 
    if(alimento === "ração"){
      console.log(`${this.nome} esta comendo`)
    }
   }

   public voa(){
    console.log(`${this.nome} esta voando `)
   }
}

const cachorro = new Animal(
  "nicky",
  18
);
cachorro.ingerir("agua");
cachorro.ingerir("ração");

const periquito = new AnimalVoador("nina", 12, true);
periquito.voa();

const borboleta = new AnimalVoador("brabuleta", 12)
borboleta.voa()

const pato = new AnimalVoador("carlos", 5)
// ---- MAS E O PATO?? ELE PODE ANDAR E NADAR, ENQUNATO A MOSCA E PERIQUITO NÃO PODEM, ISSO PODE SER RESOLVIDO COM COMPOSIÇÃO


export{} //usando isso o vs code não ira tentar acessar variaveis e classes com o mesmo nome de outras pastas