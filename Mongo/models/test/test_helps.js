const mongoose = require("mongoose")

mongoose.Promise = global.Promise


before((done) => {
  mongoose.connect('mongodb://localhost/ambrosus');
  mongoose.connection
    .once('open', () => { done() })
    .on('error', (error) => {
      console.warn('Error', error)
    })
})

beforeEach((done) => {
  const { products } = mongoose.connection.collections
  products.drop()
        done()    
})
