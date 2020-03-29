import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {id:"a101", name:"Prakash", age:21},
      {id:"a102", name:"Ujjwal", age:21},
      {id:"a103", name:"Nidhi", age:25} 
    ],
    togglePerson : false
  }
  nameChnageHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex(p=>p.id===id)
    const person = {...this.state.persons[personIndex]}

    person.name=event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({persons:persons})
  }

  togglePersonHandler = () => {
    this.setState({togglePerson: !this.state.togglePerson})
  }

  deletePersonHandler = (index) => {
    const person = this.state.persons
    person.splice(index,1)
    this.setState({persons:person})
  }

  render(){

    let persons = null;

    if(this.state.togglePerson){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return(
              <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            change={(event) => this.nameChnageHandler(event, person.id)} />
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">
       <h1>Not the default React page anymore</h1>
       <button onClick={this.togglePersonHandler}>Toggle Div</button>
       {persons}
      </div>
    );
  }
}

export default App;
