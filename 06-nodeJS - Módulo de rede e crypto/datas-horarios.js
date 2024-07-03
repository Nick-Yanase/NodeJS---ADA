const { DateTime, Interval } = require("luxon");

const agora = DateTime.now();
console.log(agora.month);
console.log(new Date().toLocaleDateString())//pega a data no padrão do pc
console.log(new Date().toLocaleDateString("en-US"))

// ---- calcular quantos anos a pessoa tem ----

const dataAniversario = DateTime.fromFormat('18/02/2005', "dd/MM/yyyy")
console.log(dataAniversario.day)
console.log(dataAniversario.month)

const idade = Interval.fromDateTimes(dataAniversario, agora).length("year") //pega o intervalo entre duas datas
console.log(Math.floor(idade)); //mathFloor arredonda para baixo