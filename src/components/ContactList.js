import { Contact } from "./Contact"
export const ContactsList = ({ contacts }) => {
    return <div>
        <h2>Contacts</h2>
        <ul>
        {contacts.map(contact => <Contact key={contact.id} name={contact.name} />)}
    </ul></div>
}