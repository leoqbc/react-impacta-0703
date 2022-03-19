import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'; 

export default function Alunos() {
    const alunos = useSelector((state) => state.alunos.alunos);
    const dispatch = useDispatch();

    const atualizaLista = async () => {
        const { data, status } = await axios.get("https://jsonplaceholder.typicode.com/users");
        
        if (status === 200) {
            dispatch({
                type: 'Alunos/FILL_ALUNOS',
                payload: data
            });
        }
        
    };

    return (
        <>
            <button onClick={atualizaLista}>Carregar alunos</button>
            <ul>
                {alunos.map(({ id, name }) => { 
                    return (
                        <li key={id}>
                            {name} 
                            <button onClick={() => dispatch({
                                type: "Alunos/REMOVE_ALUNO",
                                payload: id
                            })}>
                                Excluir
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}