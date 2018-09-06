import React, {Component} from 'react'
import TableView from './tableview'
import DetailView from './DetailView'
// ambrosus.event.location

class EventLocation extends Component {
  constructor() {
    super()
    this.state = ({
      showTable: true
    })
  }

  render() {
  const {eventLocation, assetLocation} = this.props
      if(eventLocation.length == 0 || assetLocation.length === 0) {
        return <div></div>
      }
      return (
        <div>
          <div className="button-container">
            <button onClick={() => this.setState({showTable: !this.state.showTable})}
              className="button-switch">Switch View</button>
          </div>
          {this.state.showTable ? (
            <TableView eventLocation={eventLocation} assetLocation={assetLocation}/>
          ):(
            <DetailView eventLocation={eventLocation} assetLocation={assetLocation}/>
          )}
        </div>
      )
     }
  }



export default EventLocation
