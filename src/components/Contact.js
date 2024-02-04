export const Contact = ({ id, name, number, onDelete }) => {
    return <li>
        <p>{name}: { number } <button onClick={evt=>onDelete(id)}>Delete</button></p>
    </li>
}