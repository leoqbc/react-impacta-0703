export default function SearchList({ items }) {
    if (items.length === 0) {
        return null;
    }

    return (
        <ul className="list-group">
            {items.map((item, index) => (
                <li key={index} className="list-group-item">
                    {item}
                </li>
            ))}
        </ul>
    );
}