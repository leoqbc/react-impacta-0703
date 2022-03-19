const DEFAULT_STATE = {
    alunos: []
};

// só se coloca regra de mudança de estado
// nunca regra de tela e muito menos de negócio
const alunosReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch(type) {
        case "Alunos/FILL_ALUNOS":
            return {...state, alunos: payload};
        case "Alunos/REMOVE_ALUNO":
            const alunosFiltrados = state.alunos.filter((aluno) => aluno.id !== payload);
            return {...state, alunos: alunosFiltrados};
        default:
            return state;
    }
}

export default alunosReducer;