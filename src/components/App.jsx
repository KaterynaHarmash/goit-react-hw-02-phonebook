import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  onDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  addContact = evt => {
    // const findContact = this.state.contacts.find(
    //   contact => contact.name.toLowerCase() === inputName.toLowerCase()
    // );
    // if (findContact) {
    //   return alert(`${inputName} is already in Contacts`);
    // }
    // const newContact = {
    //   id: nanoid(),
    //   name: inputName,
    //   number: inputNumber,
    // };
    // this.setState(prevState => {
    //   return {
    //     contacts: [...prevState.contacts, newContact],
    //   };
    // });
    // form.reset();
  };
  updateFilter = filterName => {
    console.log(filterName);
    this.setState({
      filter: filterName,
    });
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <main>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        {contacts.length !== 0 && (
          <div>
            <h2>Contacts</h2>
            <SearchBar filter={filter} onUpdateFilter={this.updateFilter} />
            <ContactsList
              contacts={filteredContacts}
              onDelete={this.onDelete}
            />
          </div>
        )}
      </main>
    );
  }
}
