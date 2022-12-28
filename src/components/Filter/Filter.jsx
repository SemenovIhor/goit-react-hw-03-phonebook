import React, { Component } from "react";

export class Filter extends Component {
  state = {
    filter: ''
  }
    
  handleInputChange = e => {
    this.setState({filter: e.currentTarget.value});
    setTimeout(() => {
      this.props.onChange(this.state);
    }, 500);
  }     

render () {
    return (
        <>
          <p>Find contacts by name</p>
          <input 
            value={this.state.filter}
            onChange={this.handleInputChange}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </>
      )
  }
}