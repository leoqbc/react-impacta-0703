// variaveis modernas const e let
// escopo global
// variaveis constantes
const num1 = 1;
const num2 = 2;

function soma() {
    num2 = 2;
    console.log(num1 + num2);
}

let num3 = 123;

num3 = 456;

// == vs ===
// 1 == 1 -> true
// 2 == '2' -> true
// 2 === '2' -> false
if (num3 === 456) {
    let nome = 'Leonardo';
    console.log(nome);
}

// const pra maioria das variáveis

// let muito comundo para variaveis de apoio
// exemplo: loop for
for (let cont = 0; cont <= 10; cont++) {
    // console.log(i + "\n");
}

// ...