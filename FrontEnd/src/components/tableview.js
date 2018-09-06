import React from 'react'

const TableView = ({eventLocation, assetLocation}) => {
  return (
    <div>
      <h3 className="productInfo-title">Table View</h3>
      <table className="productInfo-table">
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Destination</th>
            <th>Information</th>
          </tr>
          <tr>
            <td>{eventLocation[3][0].date}</td>
            <td>{eventLocation[3][0].Depart}</td>
            <td>{eventLocation[3][0].Destination}</td>
            <td>{eventLocation[3][0].size}</td>
          </tr>
          <tr>
            <td>{eventLocation[2][0].date}</td>
            <td>{eventLocation[2][0].Arrived}</td>
            <td></td>
            <td>Transportation Temperture: {eventLocation[2][0].Delivery.minTemp} </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>{eventLocation[1][0].details.animal} ID: {eventLocation[1][0].details.id}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Bacterial Test:  {eventLocation[1][0].details.diseaseCheck.bacterial}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Viral Test:  {eventLocation[1][0].details.diseaseCheck.viral}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Parasite Test:  {eventLocation[1][0].details.diseaseCheck.Parasite}</td>
          </tr>
          <tr>
            <td>{eventLocation[0][0].time}</td>
            <td>{eventLocation[0][0].Depart}</td>
            <td>{eventLocation[0][0].Arrived}</td>
            <td>{eventLocation[0][0].packaged}</td>
          </tr>
          <tr>
            <td>{assetLocation[0][0].time}</td>
            <td>{assetLocation[0][0].Depart}</td>
            <td>{assetLocation[0][0].Arrived}</td>
            <td>{assetLocation[0][0].display}</td>
          </tr>
      </table>
    </div>
  )
}

export default TableView
