import { Component, Fragment } from "react";
import Relogio from "./Relogio";

// imports React.Component

export default class App extends Component {
    render() {
        return (
            <>
                <Relogio />
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