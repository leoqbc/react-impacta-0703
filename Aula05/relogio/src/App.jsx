import { Component } from "react";
import Relogio from "./Relogio";
import Formulario from "./Formulario";

// imports React.Component

export default class App extends Component {
    render() {
        return (
            <>
                <Relogio />
                <Formulario />
            </>
        );
    }
}

/* fragmento do React 
<Fragment>
    <div>Hello</div>
    <div>World</div>
</Fragment>
atalho do fragment
<>
    ...
</>
*/