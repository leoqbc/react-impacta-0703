import { useState, useEffect } from "react";

// componente funcional arrow function
// Regras dos Hooks
// Primeira: todos os hooks começam a palavra (use****)
// Segunda: Eles devem obrigatoriamente ser criados no topo do componente
const Contador = (props) => {

    // executa a toda mudança de estado do componente
    // AVISO: não usar como captura de evento(efeito colateral)
    // console.log("executou o componente");

    // Hooks ficam aqui!
    // useState -> no primeiro parametro - valor padrão
    //       0    setState() -> da variaval de estado valor
    const [valor, setValor] = useState(props.initial);
    const [addOn, setAddOn] = useState(false);

    // ação para lidar com efeito colateral
    // executa quando o componente carrega
    // substitui o componenteWillMount
    // só executa a primeira vez que o componente
    // carrega
    useEffect(() => {
        if (addOn === false) {
            return;
        }

        const interval = setTimeout(() => setValor(valor + 1), 1000);

        // limpeza -> executa quando ocorre mudança de estado
        // ou quando termina a execução do componente
        return () => clearInterval(interval);
    }, [addOn, valor]); // só vai ser chamado o este useEffect 
                        // quando uma das/ou as 2 variaveis forem alteradas

    // executa somente um única vez que o componte aparece
    useEffect(() => console.log("executa uma vez"), []);

    // tempo o mesmo efeito
    // que o componentDidUpdate
    // regra: nesse modo, alterar aqui dentro estado
    // causa loop infinito
    useEffect(() => {
        console.log("quando carrega e quando altera estado");
    }); // sem colchetes

    function handleAdd() {
        setValor(valor + 1);
    }

    // function handleSub() {
    //     console.log("subtrair");
    // }

    // alternativa para a função acima
    // usando arrow function
    const handleSub = () => {
        setValor(valor - 1);
    };

    // não criar hook sem ser no topo

    return (
        <>
            <button onClick={handleSub}> - </button> 
             {valor}
            <button onClick={handleAdd}> + </button>
            <button onClick={() => setAddOn(!addOn)}>Add Auto</button>
        </>
    );
};

export default Contador;