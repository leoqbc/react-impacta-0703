// primeiro precisamos importar o React
// no arquivo de entrada
import React from "react";

// importando o react para o DOM
// DOM = navegado (componentes de navegador)
import ReactDOM from "react-dom";

import App from "./App";

// <App /> podemos usa-lo porque temos uma classe 
// App extends Component
ReactDOM.render(
  <App />, 
  document.getElementById("root")
);

// Regras JSX:
// toda tag precisa fechar
// <br />
// <section>asdasda</section>
// <img src="caminho" />

// Boa prática
// <MeuComponent />
// <MeuComponent>Conteudo</MeuComponent>

// Todo código JSX(HTML) deve ser único em seu início

// nunca pode ter mais de uma tag retornando ao mesmo tempo
// <section>
//  <div></div>
//  <div></div>
// </section>