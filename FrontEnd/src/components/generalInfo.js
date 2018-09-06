import React from 'react'
// ambrosus.asset.info
const GeneralInfo = ({info, assetId}) => {
  if(info.length == 0){
    return <div>Loading...</div>
  }
  let details = info[0][0]
  //  add qr code
  let url = "https://api.qrserver.com/v1/create-qr-code/?data=https://ambrosus-nq-.herokuapp.com/products/"+assetId
 return (
   <div className="generalInfo-container">
     <img className="generalInfo-image" src={details.image}/>
     <div className="generalInfo">
       <div className="generalInfo-name">{details.name}</div>
       <div className="generalInfo-desc">{details.desc}</div>
       <div className="generalInfo-size">Pack Size: {details.size}</div>
     </div>
     <div className="generalInfo-qrcode">
       <img className="qr-image" src={url}/>
     </div>
   </div>
 )

}
export default GeneralInfo
