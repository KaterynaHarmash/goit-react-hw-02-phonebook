export const SearchBar = ({filter, onUpdateFilter}) => {
    return <div>
        <input type="text" value={filter} onChange={evt=>onUpdateFilter(evt.target.value)} placeholder="Find contacts by name"/>
    </div>
}