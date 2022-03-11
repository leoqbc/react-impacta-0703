import { Component } from "react";
import Select from "./components/Select";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.estados = ['SP', 'RJ'];
        this.sp = ['São Paulo', 'Sorocaba', 'Guarulhos'];
        this.pr = ['Curitiba', 'Londrina', 'Cascavel'];
    }

    render() {
        return (
            <div>
                <Select options={this.estados} />
                <Select options={this.sp} />
                <Select options={this.pr} />
            </div>
        );
    }
}