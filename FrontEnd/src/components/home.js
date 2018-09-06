import React, { Component } from 'react';
import '../App.css';
import Database from '../container/database'
import Navbar from './Navbar'

// Database retrieve all the products from the mongoDB database
class Home extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
        <div className="product-wrapper">
          <Database/>
        </div>
      </div>
    );
  }
}

export default Home;


{/* <CreateProduct/>\ */}
