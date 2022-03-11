import { Component } from "react";

export default class Cidades extends Component {
    constructor(props) {
        super(props);
        // inicializando o estado
        this.state = {
            cidades: [
                "São Paulo", 
                "Araraquara", 
                "Ribeirão Preto", 
                "Campinas"
            ]
        };
    }

    addFim(event) {
        // pegando dados do event
        // console.log(event.target.innerText);

        // const cidades = this.state.cidades;
        // cidades.push("São José dos Campos");
        // estamos usando o Spread (...)
        // para criar um novo array com base das cidades
        // adicionando uma nova cidade
        this.setState({
            cidades: [
                ...this.state.cidades, 
                "São José dos Campos"
            ]
        });
    }

    addInicio() {
        this.setState({
            cidades: ["Americana", ...this.state.cidades]
        });
    }

    remove() {
        const cidadesFiltradas = this.state.cidades.filter(
            cidade => cidade !== 'Ribeirão Preto'
        );

        this.setState({
            cidades: cidadesFiltradas
        });
    }

    render() {
        return (
            <div style={{ marginTop: "15px" }}>
                <button onClick={(event) => this.addFim(event)}>Adicionar Cidade no Fim</button>
                <button onClick={() => this.addInicio()}>Adicionar Cidade no Começo</button>
                <a href="#" style={{ color: "#AAA" }} onClick={() => this.remove()}>
                    Deletar Ribeirão
                </a>
                <ul>
                    {this.state.cidades.map(
                        (cidade, index) => <li key={index}>{cidade}</li>
                    )}
                </ul>
            </div>
        );
    }
}

// https://www.youtube.com/watch?v=ruoHSuTKp-U