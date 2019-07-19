import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Add from './components/Add';
import List from './components/List';
import {Switch, Route} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Add}/>
      <Route path="/list" component={List}/>
    </Switch>
    </div>
    );
  }
}

export default App;