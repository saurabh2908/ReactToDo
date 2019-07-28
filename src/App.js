import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Add from './components/Add';
import List from './components/List';
import {Switch, Route} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.inputs={};
    this.arr=[];
    this.flag=true;
    this.state = {inputs:this.inputs,arr:this.arr,flag:this.flag  };
  }
  takeInput(event){
    console.log(event.target.value);
this.inputs[event.target.id]=event.target.value;
console.log(this.inputs);
  }

add(event){
  event.preventDefault();
  console.log("The input inside add is ",this.inputs);
  this.arr.push(this.inputs);
  this.inputs={};
  console.log("The array is ",this.arr);
  this.setState({...this.state,arr:this.arr});
}

update(obj,index){
this.arr[index]=obj;
this.setState({...this.state,arr:this.arr})

}
  render() {

    return (
      <div>
    <Navbar/>
    <Switch>
      
      <Route exact path="/" render={(props) => <Add input={this.takeInput.bind(this)} add={this.add.bind(this)} {...props} />}/>
      <Route path="/list" render={(props) => <List arr={this.state.arr} update={this.update.bind(this)} {...props}/>}/>
    
    </Switch>
    </div>
    );
    }
}

export default App;