import React from 'react'
import '../App.css'
// ambrosus.asset.location
const AssetLocation = ({assetLocation}) => {
  if(assetLocation.length == 0){
    return <div></div>
  }

  let asset = assetLocation[0][0]
  return (
    <div>
    <div className="location-container">
      <div className="location-key back">Delivered from</div>
      <div className="location-value back">{asset.Depart}</div>
      <div className="location-key">To</div>
      <div className="location-value">{asset.Arrived}</div>
      <div className="location-key back">{asset.display}</div>
      <div className="location-value back">{asset.time}</div>
    </div>
    <hr/>
    </div>
  )
}

export default AssetLocation
