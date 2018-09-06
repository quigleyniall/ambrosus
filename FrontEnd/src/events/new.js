// example event posts

const event66Response = await fetch(`https://gateway-test.ambrosus.com/assets/0x984281546f75597634fe664466203258f9a1623e528adbc03e859dec9ad7d702/events`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'Authorization': 'AMB 0xffed290f902e733938093470492b9b4b5ffbec59cf02215ac7fbe6beec298c0c'
  },
  body: JSON.stringify({
    content: {
      idData: {
        assetId: '0x984281546f75597634fe664466203258f9a1623e528adbc03e859dec9ad7d702',
        createdBy: '0xA4A7221dF1c48fcb0F9b99BC17c33fE1783B344e',
        accessLevel: 0,
        timestamp: Math.floor(Date.now() / 1000)
      },
      data: [
          {
            type:  'ambrosus.asset.info',
	    name: 'Fillet of Steak',
            desc: "Fillet is famously the most tender of all cuts. Our prime cut Angus fillet steaks naturally slice like butter and melt in your mouth.",
            size: '8oz Steak',
	    image: 'https://thumbs.dreamstime.com/b/beef-fillet-steak-raw-isolated-white-33602986.jpg',
	    price: '11.99'
          }
        ]
    }
  })
});



const event77Response = await fetch(`https://gateway-test.ambrosus.com/assets/0x984281546f75597634fe664466203258f9a1623e528adbc03e859dec9ad7d702/events`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'Authorization': 'AMB 0xffed290f902e733938093470492b9b4b5ffbec59cf02215ac7fbe6beec298c0c'
  },
  body: JSON.stringify({
    content: {
      idData: {
        assetId: '0x984281546f75597634fe664466203258f9a1623e528adbc03e859dec9ad7d702',
        createdBy: '0xA4A7221dF1c48fcb0F9b99BC17c33fE1783B344e',
        accessLevel: 0,
        timestamp: Math.floor(Date.now() / 1000)
      },
      data: [
          {
            type:  'ambrosus.asset.location',
            Arrived: 'Louth Butchers',
	    Depart: 'Meath Packing',
	    Delivery: {
               minTemp: 0,
               maxTemp: 4
             },
           date: '05/09/2018',
	   display: 'Beef on Display',
	   time: '10:33 05/09/2018'
          }
        ]
    }
  })
});

const eventRe99sponse = await fetch(`https://gateway-test.ambrosus.com/assets/0x984281546f75597634fe664466203258f9a1623e528adbc03e859dec9ad7d702/events`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'Authorization': 'AMB 0xffed290f902e733938093470492b9b4b5ffbec59cf02215ac7fbe6beec298c0c'
  },
  body: JSON.stringify({
    content: {
      idData: {
        assetId: '0x984281546f75597634fe664466203258f9a1623e528adbc03e859dec9ad7d702',
        createdBy: '0xA4A7221dF1c48fcb0F9b99BC17c33fE1783B344e',
        accessLevel: 0,
        timestamp: Math.floor(Date.now() / 1000)
      },
      data: [
          {
            type:  'ambrosus.event.location',
            Arrived: 'Meath Packing',
	    Depart: 'Slaughter House West',
	    Delivery: {
               minTemp: 0,
               maxTemp: 4
             },
           date: '04/09/2018',
	   packaged: 'Beef Packed',
	   time: '12:38 04/09/2018'
          }
        ]
    }
  })
});

const even0tResponse = await fetch(`https://gateway-test.ambrosus.com/assets/0x984281546f75597634fe664466203258f9a1623e528adbc03e859dec9ad7d702/events`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'Authorization': 'AMB 0xffed290f902e733938093470492b9b4b5ffbec59cf02215ac7fbe6beec298c0c'
  },
  body: JSON.stringify({
    content: {
      idData: {
        assetId: '0x984281546f75597634fe664466203258f9a1623e528adbc03e859dec9ad7d702',
        createdBy: '0xA4A7221dF1c48fcb0F9b99BC17c33fE1783B344e',
        accessLevel: 0,
        timestamp: Math.floor(Date.now() / 1000)
      },
      data: [
          {
            type:  'ambrosus.event.location',
            location: 'Slaughter House West',
	details: {
         animal: 'Cow',
         id: 'masflk9',
         diseaseCheck: {
           bacterial: 'Pass',
           viral: 'Pass',
           Parasite: 'Pass'
  }
}


          }
        ]
    }
  })
});

const event1Response = await fetch(`https://gateway-test.ambrosus.com/assets/0x984281546f75597634fe664466203258f9a1623e528adbc03e859dec9ad7d702/events`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'Authorization': 'AMB 0xffed290f902e733938093470492b9b4b5ffbec59cf02215ac7fbe6beec298c0c'
  },
  body: JSON.stringify({
    content: {
      idData: {
        assetId: '0x984281546f75597634fe664466203258f9a1623e528adbc03e859dec9ad7d702',
        createdBy: '0xA4A7221dF1c48fcb0F9b99BC17c33fE1783B344e',
        accessLevel: 0,
        timestamp: Math.floor(Date.now() / 1000)
      },
      data: [
          {
            type:  'ambrosus.event.location',
            Arrived: 'Slaughter House West',
	    Delivery: {
minTemp: 0,
maxTemp: 4
},
date: '03/09/18',
          }
        ]
    }
  })
});

const even2Response = await fetch(`https://gateway-test.ambrosus.com/assets/0x984281546f75597634fe664466203258f9a1623e528adbc03e859dec9ad7d702/events`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'Authorization': 'AMB 0xffed290f902e733938093470492b9b4b5ffbec59cf02215ac7fbe6beec298c0c'
  },
  body: JSON.stringify({
    content: {
      idData: {
        assetId: '0x984281546f75597634fe664466203258f9a1623e528adbc03e859dec9ad7d702',
        createdBy: '0xA4A7221dF1c48fcb0F9b99BC17c33fE1783B344e',
        accessLevel: 0,
        timestamp: Math.floor(Date.now() / 1000)
      },
      data: [
          {
            type:  'ambrosus.event.location',
	    Depart: "McKenna Cow Farm WestMeath",
Destination: 'Slaughter House West',
date: '03/09/18',
size: '90 Cows'
          }
        ]
    }
  })
});
