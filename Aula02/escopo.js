// escopo global
const global = 'Valor acessível';

// escopo de função, bloco { }
function hello() {
    // atenção nunca faça isso
    acessoExterno = 123;
    console.log(global);
}

hello();

console.log(acessoExterno);