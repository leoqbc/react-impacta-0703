import { Component } from "react";

class Relogio extends Component {
    // 1. inicialização do componente
    // dispara antes de montar o component
    // executa antes do método render
    constructor(props) {
        // não esquecer de configurar as props
        super(props);
        
        this.state = {
            horario: new Date(),
            paused: false
        };
    }

    iniciar() {
        // Precisamos ter certeza que o
        // relogio está parado
        // senão encavalamos os eventos de 
        // troca a cada segundo
        if (this.state.paused === true) {
            this.componentDidMount();
            this.setState({
                paused: false
            });
        }
    }

    // 2. inicialização do componente
    render() {
        return (
            <section className="relogio">
                <button onClick={() => this.pausar()}>Pausar</button>
                <button onClick={() => this.iniciar()}>Iniciar</button>
                {this.state.horario.toLocaleString("pt-BR")}
                {
                    this.state.paused? 
                        <div style={{color: "red"}}>Relogio Pausado</div>: ""
                }
            </section>
        )
    }

    pausar() {
        clearInterval(this.interval);
        this.setState({
            paused: true
        });
    }

    // 3. inicialização do componente
    // Chamado depois do render()
    // Lugar para colocar efeito colateral
    // todo efeito que acontece fora de eventos tradicionais
    // só é chamado 1x que o componente é criado em tela
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                horario: new Date()
            });
        }, 1000);
    }

    // Executado toda mudança de estado
    // ou alteração no componente
    componentDidUpdate() {
        // console.log("diparou atualização");
    }

    // Quando o componente for removido
    // da tela
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Relogio;