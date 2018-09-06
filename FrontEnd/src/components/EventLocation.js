import React from 'react'
// ambrosus.event.location
const EventLocation = ({eventLocation}) => {
  if(eventLocation.length == 0) {
    return <div></div>
  }

 return (
   <div>
     <div className="location-container">
       <div className="location-key">Delivered from</div>
       <div className="location-value">{eventLocation[0][0].Depart}</div>
       <div className="location-key back">To</div>
       <div className="location-value back">{eventLocation[0][0].Arrived}</div>
       <div className="location-key">{eventLocation[0][0].packaged}</div>
       <div className="location-value">{eventLocation[0][0].time}</div>
     </div>
     <hr/>
     <div className="location-container">
       <div className="location-key back">Location</div>
       <div className="location-value back">{eventLocation[1][0].location}</div>
       <div className="location-key">{eventLocation[1][0].details.animal} Id</div>
       <div className="location-value">{eventLocation[1][0].details.id}</div>
       <div className="location-key back full">Diseases</div>
       <div className="location-key">Bacterial</div>
       <div className="location-value">{eventLocation[1][0].details.diseaseCheck.bacterial}</div>
       <div className="location-key back">Viral</div>
       <div className="location-value back">{eventLocation[1][0].details.diseaseCheck.viral}</div>
       <div className="location-key">Parasite</div>
       <div className="location-value">{eventLocation[1][0].details.diseaseCheck.Parasite}</div>
     </div>
     <hr/>
     <div className="location-container">
       <div className="location-key back">Arrived</div>
       <div className="location-value back">{eventLocation[2][0].Arrived}</div>
       <div className="location-key">Date</div>
       <div className="location-value">{eventLocation[2][0].date}</div>
       <div className="location-key back full">Delivery</div>
       <div className="location-key">Min Temperture</div>
       <div className="location-value">{eventLocation[2][0].Delivery.minTemp} degrees celsius</div>
       <div className="location-key back">Max Temperture</div>
       <div className="location-value back">{eventLocation[2][0].Delivery.maxTemp} degrees celsius</div>
     </div>
     <hr/>
     <div className="location-container">
       <div className="location-key">Depart</div>
       <div className="location-value">{eventLocation[3][0].Depart}</div>
       <div className="location-key back">Destination</div>
       <div className="location-value back">{eventLocation[3][0].Destination}</div>
       <div className="location-key">Delivery</div>
       <div className="location-value">{eventLocation[3][0].size}</div>
       <div className="location-key back">Date</div>
       <div className="location-value back">{eventLocation[3][0].date}</div>
     </div>
   </div>
 )
}

export default EventLocation
