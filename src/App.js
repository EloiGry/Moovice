import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Weekly from './Pages/Weekly';
import WeeklyBattle from './Pages/WeeklyBattle';
import Popular from './Pages/Popular';
import PopularBattle from './Pages/PopularBattle';
import Favorites from './Pages/Favorites';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <Nav />

        <Switch>
           
            <Route exact path="/" component={Home}/> 
            <Route exact path="/weekly" component={Weekly}/> 
             <Route path="/weekly-battle" component={WeeklyBattle}/>
            <Route exact path="/popular" component={Popular}/> 
             <Route path="/popular-battle" component={PopularBattle}/>
            <Route path="/favorites" component={Favorites}/> 
            <Route path="*" component={NotFound}/> 
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
