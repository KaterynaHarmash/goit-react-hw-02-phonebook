import { Form } from "./ContactForm.styled"

export const ContactForm = ({ onSubmit }) => {
    return <Form onSubmit={evt=>onSubmit(evt)}><input type="text" name="name" required /><input type="tel" name="number" required />
        <button type="submit">Add contact</button>
    </Form>
}