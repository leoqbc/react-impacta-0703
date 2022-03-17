import SearchList from "./SearchList";
import { useEffect, useState } from "react";

// Desafio para casa, fazer a busca do autocomplete
// aparecer somento a ocorrencia baseado no que foi digitado
export default function AutoComplete(props) {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [matched, setMatched] = useState(false);

    const handleInputChange = event => {
        setSearch(event.target.value);
    }

    // colocando a ação de quando for clicado
    const handleAutoCompleteClick = event => {
        setMatched(true);
        setSearch(event.target.innerText);
    }

    useEffect(() => {
        if (search === "" || matched === true) {
            setItems([]);
            return;
        }

        const newItems = props.fixedItems.filter(item => {
            // busca o texto digitado no input
            const exp = `${search}`;

            // expressão de busca por letra
            const regexp = new RegExp(exp, "i");

            // operação busca
            return item.match(regexp);
        });

        setItems(newItems);
    }, [search, props.fixedItems, matched]);

    return (
        <>
            <div className="form-group">
                <label htmlFor="autocomplete">Digite sua busca</label>
                <input type="text" onFocus={() => setMatched(false)} value={search} onChange={handleInputChange} className="form-control" />
                <SearchList 
                    items={items}  
                    {...{ handleAutoCompleteClick }}
                    // atalha para:
                    // handleAutoCompleteClick={handleAutoCompleteClick}
                />
            </div>
        </>
    );
}