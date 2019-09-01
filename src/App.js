import React, { Component } from 'react';
import './App.css';
//import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Akshay', age:25},
      {id: '2', name: 'Lokesh', age:25},
      {id: '3', name: 'Saurabh', age:25},
    ],
  }


  nameChangedHandler = (event, id) => {   
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  }

  deletePersonhandler = (personIndex) =>
  {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);

    this.setState({
      persons: persons,
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      /*':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',

      }*/
    }

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              click = {() => this.deletePersonhandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      /*style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
        
      }*/
    }

    const classes = [];
    if(this.state.persons.length <= 2)
    {
      classes.push('red');  //classes = ['red'];
    }
    if(this.state.persons.length <= 1)
    {
      classes.push('bold');  //classes = ['red', 'bold'];
    }

    return (
      //<StyleRoot>
        <div className="App">
          <h1>Akshay</h1> 
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
      //</StyleRoot>  
    );

    //return React.createElement('div', {className:'App'}, React.createElement('h1', null,  'Akshay'));
  }
}

export default App;
//export default Radium(App);