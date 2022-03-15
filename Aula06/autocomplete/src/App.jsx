import "bootstrap/dist/css/bootstrap.css";
import AutoComplete from "./components/AutoComplete";

const listaEstados = [
    "SP", 
    "RJ",
    "MG",
    "PR",
    "RS",
    "RN",
    "SC",
    "ES"
];

export default function App() {
    return (
        <div className="container">
            <h1 className="h1 text-center">Auto complete componente</h1>
            <div className="row">
                <div className="col-6">
                    <AutoComplete fixedItems={listaEstados} />
                </div>
            </div>
        </div>
    );
}