import React from 'react';
import Header from './components/Header';
import Main from './components/Main.js';
import Favorite from './components/Favorite';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/favorite'>
              <Favorite />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;

