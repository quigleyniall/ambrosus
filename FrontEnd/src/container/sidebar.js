import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends Component {
  constructor() {
    super()
    this.state = ({
      data: []
    })
  }

  componentDidMount() {
  // fetch("http://localhost:3030/")
  fetch("https://butcher-server-nq.herokuapp.com/")
  .then((resp) => resp.json())
  .then((data) => this.setState({data: data}))
}

  render() {
    return (
      <div className="sidebar">
        {this.state.data.map((item) => {
          return <Link className="sidebar-link" to={{pathname: `/products/${item.AssetId}`, state: {productInfo: item}}}>{item.name}</Link>
        })}
    </div>
    )
  }
}

export default Sidebar
