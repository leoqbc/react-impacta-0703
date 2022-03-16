const fetch = require("node-fetch");

// Request
// API
// https://jsonplaceholder.typicode.com/users

// por padrão GET
// execuções assíncronas
// todo async de requisição vai retornar uma promisse
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        // tranformar o texto em obj javascript
        return response.json();
    })
    .then(json => {
        // temos aqui o objeto json
        // console.log(json[0].name);
        json.forEach(user => {
            console.log(user);
        });
    });

    // // Requisição GET para a URL
    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json())
    //     .then(json => {
    //         // temos aqui o objeto json
    //         console.log(json[0].name);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });