//Faça um programa que receba N quantidade de numeros e seus respectivos valores
//Imprima o maior numero par e o menor numero impar

const { gets, print } = require('./funcoes-auxiliares');

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = Infinity;
let numero = N;
for (let i = 0; i < N.lenght; i++) {

    if (numero % 2 == 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
    numero = gets();
}
print('Maior número par: ' + maiorNumeroPar);
print('Menor número impar: ' + menorNumeroImpar);