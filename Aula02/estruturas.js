// arrays -> só aceitam chaves numericas
const paises = new Array();

paises.push('Brasil'); // chave 0
paises.push('China');
paises.push(1);

console.log(paises[0]);
console.log(paises[1]);
console.log(paises[2]);

// array dentro de array
const clientes = [
    ['joão', '11 5555-5555'],
    ['pedro', '11 2222-2222']
];

console.log(clientes[1][1]);

// notação de objeto
const pessoa = {
    nome: 'Claudio',
    sobrenome: 'Faria'
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

const produtos = [
    {
        nome: "Carro esportivo",
        preco: 130000.00,
        modelos: ['turbo', 'aspirado']
    },
    {
        nome: "PC Gamer",
        preco: 22000.00
    },
    {
        nome: "Cafeteira elétrica",
        preco: 300.00
    }
];

produtos.forEach((produto, index) => {
    console.log(index, produto.nome);
});

// Orientação a objetos - ES6
function MinhaClasse() {
    this.valor = 123;
}

const objClass = new MinhaClasse();
// objClass.valor

class Customer {

    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    // métodos da classe
    hello() {
        console.log('Olá ' + this.nome);
    }

}

const cliente1 = new Customer('João Faria', 'joao@gmail.com');
const cliente2 = new Customer('Pedro Camargo', 'pedro@gmail.com');

cliente1.hello();
cliente2.hello();