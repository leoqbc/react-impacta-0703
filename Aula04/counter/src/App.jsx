import { Component } from "react";
import Contador from "./Contador";
import "./style.css";

export default class App extends Component {
    render() {
        return (
            <section className="application">
                <h1>Meu primeiro contador REACT</h1>
                <Contador />
            </section>
        );
    }
}