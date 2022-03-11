import { Component } from "react";

export default class Select extends Component {
    render() {
        return (
            <select>
                {this.props.options.map((cidade, index) => {
                    return <option key={index} value={index}>{cidade}</option>;
                })}
            </select>
        );
    }
}