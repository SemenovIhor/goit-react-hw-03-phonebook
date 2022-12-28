import React, { Component } from "react";
// import { nanoid } from 'nanoid'

export class ContactForm extends Component {
    state = {
      name: '',
      number: ''
    };

    handleInputChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
      }
    
    handleInputSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state)
      this.reset()
    }    
      
    reset = () => {
    this.setState({ name: '', number:'' });
    };
      

render () {
    return (
        <>
          <form action="" onSubmit={this.handleInputSubmit}>
            <label>
              Name
              <input
                onChange={this.handleInputChange}
                value={this.state.name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                id={this.nameInputId}
                required
              />  
            </label>
            <label htmlFor={this.numberInputId}>
              Number
              <input
                onChange={this.handleInputChange}
                value={this.state.number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                id={this.numberInputId}
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>  
        </>
    )
}
}