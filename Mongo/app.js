const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Product = require('./models/products')
const cors = require("cors")
const PORT = process.env.PORT || 3030;

mongoose.Promise = global.Promise
app.use(cors())
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ambrosus', {
  keepAlive: true
});
mongoose.connection
  .once('open', () => {})
  .on('error', (error) => {
    console.warn('Error', error)
  })

app.get('/', function(req,res){
  return Product.find()
  .then((user) => res.json(user))
})

app.post('/:name/:price/:image/:desc', function(req,res) {
  let name = req.params.name
  let price = req.params.price
  let image = req.params.image
  let desc = req.params.desc
  let product = new Product({
    AssetId: "0x19b473165bf591cf5c7b842b2170c3846b503766e6c36ab4afe537ff211f3a8d",
    name: name,
    price:price,
    image: image,
    desc: desc
  })
  product.save()
  .then(() => res.send())
})

app.listen(PORT, () => {
  console.log("Running!")
})
