import React, { Component } from "react";
import Contacts from "./Contacts";
import profiles from "./contacts.json";
import "./App.css";

class App extends Component {
  state = {
    contacts: profiles.slice(0, 5)
  };

  handleRandomContact = () => {
    const pickRandom = Math.floor(Math.random() * profiles.slice(5).length);

    const newRandContacts = [...this.state.contacts];

    newRandContacts.push(profiles[pickRandom]);
    this.setState({
      contacts: newRandContacts
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRandomContact}>Add Random Contact</button>

        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            <Contacts contactsList={this.state.contacts} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
