import React, { Component } from 'react';
import '../App.css';
import Home from '../components/home'
import productInfo from './productInfo'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/products/:assetId' component={productInfo}/>
        </div>
      </Router>
    );
  }
}

export default App;
