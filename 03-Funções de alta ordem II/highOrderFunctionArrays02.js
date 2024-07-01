//HIGH ORDER FUNCTION - forEach - findIndex - find - findLast - findLastIndex - every - some

const pets = ["Dog", "Cat"];
//um dos melhores jeito é fazer com map, filter ou reduce

/*EXERCICIO: ADICIONE "S" EM CADA UM DOS PETS*/
const pluralPets = pets.map((pet) => `${pet}s`);

/*::: FOR EACH ::: - Tudo o que vc resolver com forEach vai ter como melhora usando outra função, use ele apenas se n tiver como usar nenhuma outra função, ELE NÃO RETORNA, SE QUISER ALGO QUE RETORNE, N UTILIZE O FOR EACH*/
const pluralPetsEach = [];
pets.forEach((pet) => {
  pluralPetsEach.push(`${pet}s`);
});
console.log(pluralPets);

/*::: findIndex & find :::*/
const petsArray = [
  {
    animal: "Dog",
    age: 3
  },
  {
    animal: "Cat",
    age: 8
  },
  {
    animal: "Parrot",
    age: 4
  },
  {
    animal: "Fish",
    age: 2
  },
  {
    animal: "Parrot",
    age: 8
  }
]
const petIndex = petsArray.findIndex(pet => pet.animal === "Parrot"); //FindIndex -> retorna a posição, ele para quando encontra o primeiro elemento que atenda a condição
const findPet = petsArray.find(pet => pet.animal === "Parrot") //Find -> retorna o elemento, ele para quando encontra o primeiro elemento que atenda a condição
console.log(petIndex);
console.log(findPet);

/*findLastIndex & findLast*/
const petLastIndex = petsArray.findLastIndex(pet => pet.animal === "Parrot"); //findLastIndex -> retorna a posição do ultimo elemento que atenda as condições
const findLastPet = petsArray.findLast(pet => pet.animal === "Parrot") //findLast -> retorna o ultimo elemento que atenda as condições
console.log(petLastIndex);
console.log(findLastPet);

/*:::every & some:::*/ 
//VERIFIQUE SE OS ANIMAIS POSSUEM MAIS DE UM ANO
const allAnimalsEvery = petsArray.every(pet => pet.age > 2); //verifica se todos possuem 2 ou mais anos, caso não retorna false, caso verdade retorna true.
const allAnimalsSome = petsArray.some(pet => pet.age > 2); // Verifica se alguns possuem 2 ou mais anos, caso não retorna false, caso verdade retorna true.
console.log({allAnimalsEvery});
console.log({allAnimalsSome});
