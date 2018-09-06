import React, {Component} from 'react'
import axios from 'axios'

// add an event to the private database
//  Not using this

class CreateProduct extends Component {
  constructor() {
    super()
    this.state = ({
      name: '',
      image: '',
      price: '',
      desc: ''
    })
  }

  handleSubmit = (event) => {
    let { name, price, image, desc } = this.state
    event.preventDefault()

    axios.post(`http://localhost:3030/${name}/${price}/${image}/${desc}`)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    let { name, image, price, desc } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name of Product" required/>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name of Product" required/>
        <label>Image Src</label>
        <input type="text" name="image" value={image} onChange={this.handleChange} placeholder="Image Src" required/>
        <label>Price</label>
        <input type="number" name="price" value={price} onChange={this.handleChange} placeholder="Price" required/>
        <label>Description</label>
        <input type="text" name="desc" value={desc} onChange={this.handleChange} placeholder="Description" required/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default CreateProduct
