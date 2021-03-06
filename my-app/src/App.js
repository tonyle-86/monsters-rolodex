import './App.css';
import { Component } from 'react'; 

class App extends Component {

constructor() {
  super();
  this.state = {
    monsters: [] 
  }
  console.log('constructor');
}

componentDidMount() {
  console.log('componentDidMount');
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => this.setState(() => {
      return { monsters: data }
      }, (() => console.log(this.state)))
    )
}

render() {
  console.log('render');
  return (
    <div className="App">
      {
        this.state.monsters.map((monster) => {
          return (
            <div key={`${monster.id}`}>
              <h1>{monster.name}</h1>
            </div>
          )
        })
      }
    </div>
    )
  }
}

export default App;
