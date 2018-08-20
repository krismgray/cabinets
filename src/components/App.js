import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cabinets from './Cabinets';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/cabinets' component={Cabinets} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
