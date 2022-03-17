import React from 'react';
import { useDispatch } from "react-redux";

const Controle = (props) => {
    const dispatch = useDispatch();

    function handleSub() {
        dispatch({
            type: "CONTADOR_SUB"
        });
    }

    function handleAdd() {
        dispatch({
            type: "CONTADOR_ADD"
        });
    }

    return (
        <div>
            <button onClick={handleSub}> - </button>
            <button onClick={handleAdd}> + </button>
        </div>
    );
};

export default Controle;