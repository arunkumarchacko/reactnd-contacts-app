import React, { Component } from 'react';
import ListContacts from './ListContacts'

const contacts = [
  {name : "arun"},
  {name : "chacko"}
]

class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts}/>
      </div>
    );
  }
}

export default App;
