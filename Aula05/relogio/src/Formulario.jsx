import { Component } from "react";

export default class Fomulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            genero: ""
        };

        this.generosLabel = ["", "Masculino", "Feminino", "Outros"];
    }

    inputChange(event) {
        this.setState({
            nome: event.target.value
        });
    }

    selectChange(event) {
        this.setState({
            genero: event.target.value
        });
    }

    submit(event) {
        event.preventDefault();

        console.log(this.state);

        // chamada ajax
    }

    render() {
        return (
            <>
                <form style={{marginTop: "20px"}} onSubmit={(event) => this.submit(event)}>
                    <div>
                        <label htmlFor="nome">Nome </label>
                        <input onChange={(event) => this.inputChange(event)} type="text" id="nome" value={this.state.nome} />
                    </div>
                    <div>
                        <label htmlFor="genero">Cor </label>
                        <select onChange={(event) => this.selectChange(event)} name="genero" id="genero" value={this.state.genero}>
                            <option value="0">Selecione o genero</option>
                            <option value="1">Masculino</option>
                            <option value="2">Feminino</option>
                            <option value="3">Outros</option>
                        </select>
                    </div>
                    <button>Enviar</button>
                </form>
                <div>
                    <div>Nome: {this.state.nome}</div>
                    <div>Gênero: {this.generosLabel[this.state.genero]}</div>
                </div>
            </>
        );
    }
}

// Colocar mais campos de formulario, com state
// checkbox, radio box e textarea