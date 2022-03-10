import { Component } from "react";

export default class Aluno extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.nome}</td>
                <td>{this.props.email}</td>
                <td>{this.props.telefone}</td>
            </tr>
        );
    }
}