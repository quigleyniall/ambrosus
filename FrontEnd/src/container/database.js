import React, {Component} from 'react'
import axios from 'axios'
import '../App.css'
import {Link} from 'react-router-dom'

// gets all files from mongoDB database
class Database extends Component {
  constructor() {
    super()
    this.state = ({
      data: []
    })
  }

  componentDidMount() {
  fetch("https://butcher-server-nq.herokuapp.com/")
  .then((resp) => resp.json())
  .then((data) => this.setState({data: data}))
  }


  render() {
    if(this.state.data.length === 0) {
      return <div>Loading...</div>
    }

    return this.state.data.map((item) => {
      return (
      <Link key={item.name} to={{ pathname: `/products/${item.AssetId}`, state: {productInfo: item}}} className="product-container">
        <img className="product-image" src={item.image}/>
        <div className="product-name">{item.name}</div>
        <div className="product-price">Price: €{item.price} per kg</div>
      </Link>
    )
    })
    }
  }


export default Database
