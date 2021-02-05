import { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
state = {
  persons: [
    { name: 'Max', age: 28 },
    { name: 'Will', age: 21 },
    { name: 'James', age: 22 },
  ],
  otherState: 'some other value'
}

switchNameHandler = (newName) => {
  //console.log('Was clicked.');
  // **Don't Do This** this.state.persons[0] = "Maximilian";
  this.setState({
    persons: [
      { name: newName, age: 28 },
      { name: 'Will', age: 21 },
      { name: 'James', age: 23 },
    ]
  })
}

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 21 },
      { name: 'James', age: 23 },
    ]
  })
}

  render() {
    const style = {
      backgroundColor: 'light gray',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
     <div className="App">
       <h1>Hi, I'm a react app.</h1>
       <button
        style={style}
        onClick={this.switchNameHandler.bind(this, 'Maximilion')}>Switch Name</button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}
       click={this.switchNameHandler.bind(this, 'Max!')} />
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       changed={this.nameChangedHandler} >Favorite Game: MTG</Person>
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age} />
     </div>
    );
  }
}

export default App;
