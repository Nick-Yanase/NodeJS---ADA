function formatarHora(hora, formatador) { //recebe um objeto como parametro 
  if (!formatador || !formatador.formato) {
    return `${hora}:00h`;
  }
  if (formatador.formato === 12) {
    const horaFormatada = hora <= 12 ? hora : hora - 12; //operadores ternarios true : false
    return `${horaFormatada}:00${formatador.h ? "h" : " "}`;
  }
}

console.log(formatarHora(12, {}));
console.log(formatarHora(8));
console.log(formatarHora(13, { formato: 12, h: false }));
console.log(formatarHora(18, { formato: 12, h: true }));
