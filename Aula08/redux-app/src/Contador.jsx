import { useSelector } from "react-redux";
import Controle from "./Controle";

export default function Contador() {
    const valor = useSelector((state) => state.contador.valor);
    return (
        <>
            <h2>{valor}</h2>
            <Controle />
            <Controle />
            <Controle />
        </>
    );
}