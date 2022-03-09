// importamos o modulo de HTTP nativo do Node
const http = require('http'); // require('url') | require('fs')

const server = http.createServer((request, response) => {
    // indicando um retorno do tipo HTML
    response.writeHead(200, { 'Content-Type': 'text/html' });

    // escrevemos uma resposta
    response.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <h1>Olá mundo via NodeJS Web</h1>
            </body>
        </html>
    `);
    
    // encerramos a resposta
    response.end();
});

server.listen(8080, () => console.log('Servidor carregado na porta: 8080')); // porta do servidor

server.on('request', () => console.log('Ops alguém entrou no site'));