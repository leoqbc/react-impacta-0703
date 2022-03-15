import SearchList from "./SearchList";
import { useState } from "react";

// Desafio para casa, fazer a busca do autocomplete
// aparecer somento a ocorrencia baseado no que foi digitado
export default function AutoComplete(props) {
    const [items, setItems] = useState(props.fixedItems);

    return (
        <>
            <div className="form-group">
                <label htmlFor="autocomplete">Digite sua busca</label>
                <input type="text" className="form-control" />
                <SearchList items={items} />
            </div>
        </>
    );
}