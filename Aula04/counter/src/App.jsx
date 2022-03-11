import { Component } from "react";
import Cidades from "./Cidades";
import Contador from "./Contador";
import "./style.css";

export default class App extends Component {
    render() {
        return (
            <section className="application">
                <h1>Meu primeiro contador REACT</h1>
                <Contador />
                <Cidades />
            </section>
        );
    }
}