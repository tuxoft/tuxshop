import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import HomeScreen from '../../screens/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    );
  }
}

export default App;
