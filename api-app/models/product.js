const { Schema, SchemaTypes, model } = require("mongoose");

const ProductSchema = new Schema({
  productId: {
    type: SchemaTypes.Number,
    require: true,
    unique: true,
  },
  productName: {
    type: SchemaTypes.String,
    require: true,
  },
  productPrice: {
    type: SchemaTypes.Number,
    require: true,
  },
  productImage: {
    type: SchemaTypes.String,
    require: true,
  },
  productStock: {
    type: SchemaTypes.Number,
    default: 0,
  },
});
const product = model("product", ProductSchema);
module.exports = product;
