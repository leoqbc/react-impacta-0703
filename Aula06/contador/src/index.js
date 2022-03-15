import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// função pode ser um componente
// a função deve ter nome de componente
// App
// function App() {
//   return (
//     <h1>Primeiro componente funcional</h1>
//   );
// }

// componente funcional usando arrow function
// const App = () => (
//   <h1>Hello from Arrow</h1>
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
