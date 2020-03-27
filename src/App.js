import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name:"Prakash", age:21},
      {name:"Ujjwal", age:21},
      {name:"Nidhi", age:25} 
    ]
  }

  swithNamehandler = () => {
    // console.log("Click Registered")
    this.setState({persons[0].name:"NotPrakash"})
  }

  render(){
    return (
      <div className="App">
       <h1>Not the default React page anymore</h1>
       <button onClick={this.swithNamehandler}>Switch name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >Mujhe charas peena h</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
