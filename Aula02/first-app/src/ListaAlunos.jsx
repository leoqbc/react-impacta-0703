import { Component } from "react";

export default class ListaAlunos extends Component {
    // this.props.children -> pega o conteudo interno passado
    // no componente atual
    render() {
        return (
            <table border="1">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        )
    }
}