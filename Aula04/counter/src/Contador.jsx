import { Component } from "react";

export default class Contador extends Component {
    constructor(props) {
        super(props);

        // iniciar o estado
        // do contador
        this.state = {
            valor: 0,
            color: "#EEE"
        };
    }
    subtrair() {
        if (this.state.valor > 0) {
            this.setState({
                valor: this.state.valor - 1
            });
        } else {
            this.setState({
                color: "red"
            });
        }
    }

    adicionar() {
        this.setState({
            color: "#EEE",
            valor: this.state.valor + 1
        });
    }

    render() {
        return (
            <div>
                <div className="number">Valor Atual do contador {this.state.valor}</div>
                <button onClick={() => this.subtrair()}> - </button>

                {/* aqui definimos a escrita da variavel de estado */}
                <span className="number" style={{color: this.state.color}}> {this.state.valor} </span>

                <button onClick={() => this.adicionar()}> + </button>
            </div>
        );
    }
}