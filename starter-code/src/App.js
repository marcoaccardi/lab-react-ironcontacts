import React, { Component } from "react";
import Contacts from "./Contacts";
import profiles from "./contacts.json";
import "./App.css";

// let fiveProfiles = profiles.slice(0, 5);
class App extends Component {
  state = {
    contacts: profiles.slice(0, 5)
    // contacts: fiveProfiles
  };

  handleRandomContact = () => {
    const pickRandom = Math.floor(Math.random() * profiles.slice(5).length);

    const newRandContacts = [...this.state.contacts];

    newRandContacts.push(profiles[pickRandom]);
    this.setState({
      contacts: newRandContacts
    });
  };

  handleSortName = () => {
    const sortName = [...this.state.contacts].sort((a, b) => {
      return a.name.localeCompare(b.name - a.name);
    });
    this.setState({ contacts: sortName });
    // const compare = (a, b) => {
    //   if (a.name < b.name) {
    //     return -1;
    //   }
    //   if (a.name > b.name) {
    //     return 1;
    //   }
    //   return 0;
    // };

    // this.setState({
    //   contacts: fiveProfiles.sort(compare)
    // });
  };

  handleSortPop = () => {
    const sortPop = [...this.state.contacts].sort((a, b) => {
      return a.popularity - b.popularity;
    });
    this.setState({ contacts: sortPop });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRandomContact}>Add Random Contact</button>
        <button onClick={this.handleSortName}>Sort by name</button>
        <button onClick={this.handleSortPop}>Sort by popularity</button>

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
