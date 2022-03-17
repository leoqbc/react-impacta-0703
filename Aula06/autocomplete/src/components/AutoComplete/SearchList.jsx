const style = {
    hover: "#EEE",
    out: "#FFF"
};

export default function SearchList({ items, handleAutoCompleteClick }) {
    if (items.length === 0) {
        return null;
    }

    function liHover(ev) {
        ev.target.style.background = style.hover;
    }

    function liOut(ev) {
        ev.target.style.background = style.out;
    }

    return (
        <ul className="list-group">
            {items.map((item, index) => (
                <li key={index} 
                    className="list-group-item" 
                    onMouseOver={liHover}
                    onMouseOut={liOut}
                    onClick={handleAutoCompleteClick}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}