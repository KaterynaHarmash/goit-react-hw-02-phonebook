import { Contact } from "./Contact"

export const ContactsList = ({ contacts,onDelete }) => {
    return <ul>
        {contacts.map(contact => <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} onDelete={onDelete}/>)}
    </ul>
}