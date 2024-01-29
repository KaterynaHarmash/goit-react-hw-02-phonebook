export const ContactForm = ({ onSubmit }) => {
    return <form onSubmit={evt=>onSubmit(evt)}><input type="text" name="name" required /><input type="tel" name="number" required />
        <button type="submit">Add contact</button>
    </form>
}