// Neste exemplo, se esperar receber um valor negativo, a promessa será rejeitada, e o erro será capturado pelo bloco try/catch na função processarDados.

// function esperar(ms) {
//   return new Promise((resolve, reject) => {
//     if (ms < 0) {
//       reject("Tempo inválido");
//     } else {
//       setTimeout(resolve, ms);
//     }
//   });
// }

// async function processarDados() {
//   try {
//     console.log("Processando...");
//     await esperar(-1); // Espera 2 segundos
//     console.log("Processamento concluído!");
//   } catch (error) {
//     console.error("Erro:", error);
//   }
// }

// processarDados();

console.log("Início");

fetch('https://api.github.com/users/Nick-Yanase')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });

console.log("Fim");