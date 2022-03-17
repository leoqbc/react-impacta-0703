const INITIAL_STATE = {
    valor: 0
};

const contadorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CONTADOR_ADD':
            return {...state, valor: state.valor + 1};
        case 'CONTADOR_SUB':
            // igual a ação de cima só que subtrai
            // const copyState = {...state};
            // copyState.valor = state.valor - 1;
            return {...state, valor: state.valor - 1};
        default:
            return state;
    }
};

export default contadorReducer;