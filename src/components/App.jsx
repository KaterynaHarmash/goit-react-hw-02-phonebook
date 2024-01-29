import { Component } from "react"
import { ContactForm } from "./ContactForm";
import { nanoid } from 'nanoid'
import { ContactsList } from "./ContactList";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }
  addContact = (evt) => {
    evt.preventDefault();
    this.setState(() => {
      return {name: evt.target[0].value}
    })
    evt.target[0].value = ''
    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        name: this.name
      }
      
      return { contacts: [...prevState.contacts, newContact] }
    })
  }
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >
        <ContactForm onSubmit={this.addContact}/>
        {this.state.contacts.length !== 0 && <ContactsList contacts={this.state.contacts} />}
      </div>
    );
  }
  
};
