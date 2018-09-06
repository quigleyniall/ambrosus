const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  AssetId: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number
  },
  image: {
    type: String,
    required: true
  }
})


const Product = mongoose.model('product', ProductSchema)

module.exports = Product
