const router = require("express").Router();
const Product = require("../models/dataModel");

var mongoose = require("mongoose");


var productSchema = mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  categoryID: String,
  Quantity: Number,
  image: String,
});
var categorySchema = mongoose.Schema({
  categoryID: String,
  category: String,
});

var products = mongoose.model("products", productSchema);
var categories = mongoose.model("categories", categorySchema);



//getData
router.get("/get", async function (req, res) {
  // let getDatas = await Product.find({});

  let getDatas = await products.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "categoryID",
        as: "category",
      },
      
    },
    
  ]);
  res.send(getDatas);
});

module.exports = router;
