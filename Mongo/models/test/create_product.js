const assert = require('assert')
const Product = require('../products')

describe("Create a new Product", () => {
  it("Create a new Steak Product", (done) => {
    const Steak = new Product({
    AssetId: "0xafadgqtnron4543252",
    name: "10 ounce Steak",
    desc: "100% Irish Beef",
    price: 20,
    image: "https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/148/76/77286668.jpg"
    })
    Steak.save()
    .then(() => Product.findOne({name: "10 ounce Steak"}))
    .then((product) => assert(product.name === "10 ounce Steak"))
    .then(() => done())
  })
})
