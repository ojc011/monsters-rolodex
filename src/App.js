import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Entire app is encapsulated inside this component //
  constructor() {
    // Constructor is always ran first in javascript within a class //
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('constructor1');
  }

  componentDidMount() {
    console.log('componentDidMount');
    // Once async func is done state will be updated and then the page will be rendered again //
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input // Renders new array with filtered monster names //
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={onSearchChange}
        />
        {
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          }) //callback func to display monsters//
        }
      </div>
    );
  }
}

export default App;
