function soma() {
    return 1 + 1;
}

// função anonima
const outraSoma = function () {
    return 2 + 2;
}

// troquei o conteudo da função
// var soma = 2;
// var outraSoma = 1;

// console.log(soma());

// atenção não é do NODE!!
// document.addEventListener('click', function () {
//     // ...
// });

// document.onclick = function () { 
//     // ... 
// };

const multiplicaNormal = function (valor1, valor2) {
    return valor1 * valor2;
};

const multiplicaArrow = (valor1, valor2) => valor1 * valor2;

// function () { } ---- arrow --- () => {}

// função escrita como arrow function
const hello = nome => 'Olá ' + nome;

// const hello = function (nome) {
//     return 'Olá ' + nome;
// }

// Syntax sugar -> facilitar a escrita de um código
const hello2 = nome => 'Olá ' + nome;


// console.log(multiplicaArrow(2, 10));
console.log(hello('Leonardo'));

// arrow function que retorna outra function(arrow)
const aninhada = () => (nome) => 'Olá ' + nome;

const helloAninhada = aninhada();

console.log(helloAninhada('Pedro'));

// const aninhada = () => (nome) => 'Olá ' + nome;
// const aninhada2 = function () {
//     return function (nome) {
//         return 'Olá ' + nome;
//     }
// }

// remover numeros pares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numero % 2 -> 1 % 2 = 1 | 2 % 2 = 0 | 3 % 2 = 1

// foreach que faz filtro
const filtrados1 = numeros.filter(function (numero) { 
    return numero % 2; // 0 false, 1 ... true
});

const filtrados2 = numeros.filter(numero => numero % 2);

// const filtrados = numeros.filter(function (numero) {
//     // if (numero % 2 === 0) {
//     //     return false;
//     // }
//     // return true;
// });

console.log(filtrados);