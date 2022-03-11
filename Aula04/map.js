const cidades = [
    'São Paulo', 
    'Rio de Janeiro', 
    'Sorocaba', 
    'Santana de Parnaiba', 
    'Santo Antonio da Alegria'
];

// map retorna um outro array
// 
const mudamos = cidades.map(function (cidade) {
    return `<Cidade>{cidade}</Cidade>`;
});

console.log(mudamos);
