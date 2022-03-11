// importamos para poder criar o primeiro
// componente
import { Component } from "react";
import ListaAlunos from "./ListaAlunos";
import Aluno from "./Aluno";
import clientes from "./clientes";

class App extends Component {
    render() {
        return (
            <div id="application">
                <h1 className="estilo" style={{ color: "#A2E" }}>
                    Minha primeira aplicação
                </h1>
                <ListaAlunos>
                    {clientes.map(aluno => 
                                <Aluno 
                                    nome={aluno.nome}
                                    email={aluno.email}
                                    telefone={aluno.telefone}
                                />
                    )}
                </ListaAlunos>
            </div>
        )
    }
}

export default App;