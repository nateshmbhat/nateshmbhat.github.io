import React, { Component } from 'react';
import RootHomePage from './components/Home';
import { HashRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <RootHomePage />
      </HashRouter>
    );
  }
}

export default App;
