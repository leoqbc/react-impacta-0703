import { Component } from "react";

export default class Contador extends Component {
    constructor(props) {
        super(props);

        // iniciar o estado
        // do contador
        this.state = {
            valor: 0
        };
    }
    subtrair() {
        console.log('Clicou no botão de menos');
    }

    adicionar() {
        console.log('Clicou no botão de mais');
    }

    render() {
        return (
            <div>
                <button onClick={this.subtrair}> - </button>

                {/* aqui definimos a escrita da variavel de estado */}
                <span className="number"> {this.state.valor} </span>
                
                <button onClick={this.adicionar}> + </button>
            </div>
        );
    }
}