import React, { Component } from "react";
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList'
import { Filter } from "./Filter/Filter";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const contactsParse = JSON.parse(localStorage.getItem('contacts'));
    if (contactsParse) {
      this.setState({     
        contacts: contactsParse});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  
  formSubmitHandler = data => {
    console.log(data)
      if (this.state.contacts.some(contact =>  contact.name.toLowerCase() === data.name.toLowerCase())) {
        alert("Hello");
      } else {
        const newContant = {...data, id: nanoid() }
        this.setState(prevState => {
          return { contacts: [...prevState.contacts, newContant] };
        });
      }
  }
  
  filterInput = ({filter}) => {
    this.setState({filter});
  }
  
  contactDelete = id => {
    console.log(id)
    const  newState = this.state.contacts.filter((item) => item.id !== id); 
    this.setState(
      {contacts: newState} 
    );
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
      );
  }

  render () {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm
            onSubmit = {this.formSubmitHandler}
          />  
        </Section>
        <Section title="Contacts">
        {this.state.contacts.length !== 0 && (
          <>
            <Filter
              onChange = {this.filterInput}
            />
            <ContactList
              contacts={filteredContacts}
              onClick = {this.contactDelete}
            />
          </>
        )}
        </Section>
      </div>
    );
  }
};
