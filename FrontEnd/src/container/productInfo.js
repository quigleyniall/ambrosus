import React, {Component} from 'react'
import '../App.css'
import AmbrosusSDK from 'ambrosus-javascript-sdk';
import GeneralInfo from '../components/generalInfo'
import AssetLocation from '../components/AssetLocation'
import EventLocation from '../components/EventLocation'
import Sidebar from './sidebar'
import Navbar from '../components/Navbar'

class ProductInfo extends Component {
  constructor() {
    super()
    this.state = ({
      events: [],
      info: [],
      assetLocation: [],
      eventLocation: []
    })
  }
// retrieves assetId from mongoDB database and searchs for it on blockchain
componentDidUpdate() {
  const {assetId} = this.props.match.params
  this.getEvents(assetId)
}
componentDidMount() {
  const {assetId} = this.props.match.params
  this.getEvents(assetId)
}

ambrosus = new AmbrosusSDK({
  apiEndpoint: 'https://gateway-test.ambrosus.com',
  secret: '0xffed290f902e733938093470492b9b4b5ffbec59cf02215ac7fbe6beec298c0c',
  address: '0xA4A7221dF1c48fcb0F9b99BC17c33fE1783B344e'
});

// gets events for the assetId and runs function findInfo
getEvents = (assetId) => {
    this.ambrosus.getEvents({assetId: assetId})
      .then(response => response.data.results)
      .then(data => this.setState({events: data}))
      .then(data => {this.findInfo()})
      .catch(error => console.log(error));
  }

// filters down information of type ambrosus.asset.info, ambrosus.asset.location and setState info, assetLocation
findInfo = () => {
  this.renderInfo("ambrosus.asset.info", 'info')
  this.renderInfo("ambrosus.asset.location", 'assetLocation')
  this.renderInfo("ambrosus.event.location", 'eventLocation')
}
renderInfo = (str ,name) => {
    let {events} = this.state
  let info = events.map((event) => {
    event = event.content.data.filter((item) => {
      return item.type === str
    })
    return event
  })
  info = info.filter((arr) => {
    return arr.length > 0
  })

  this.setState({[name]: info})
}

  render() {
    const {assetId} = this.props.match.params
    return (
      <div>
        <Navbar/>
        <div className="content-wrapper">
        <div className="sidebar-container">
          <Sidebar/>
        </div>
        <div className="productInfo">
          <GeneralInfo info={this.state.info} assetId={assetId}/>
          <AssetLocation assetLocation={this.state.assetLocation}/>
          <EventLocation eventLocation={this.state.eventLocation}/>
        </div>
        </div>
      </div>
    )
  }
}

export default ProductInfo
