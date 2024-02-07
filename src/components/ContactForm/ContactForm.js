import {
  Button,
  Form,
  Input,
  InputContainer,
  Label,
} from './ContactForm.styled';

function HandleSubmit(callback, event) {
  event.preventDefault();
  const form = event.target;
  const inputName = form.elements.name.value;
  const inputNumber = form.elements.number.value;
}

export const ContactForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={evt => HandleSubmit(onSubmit(), evt)}>
      <InputContainer>
        <Input type="text" name="name" required />
        <Label>Full name</Label>
      </InputContainer>
      <InputContainer>
        <Input type="tel" name="number" required />
        <Label>Phone number</Label>
      </InputContainer>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
