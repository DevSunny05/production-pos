const mongoose = require("mongoose");

const billSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerNumber: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    paymentMode: {
      type: String,
      required: true,
    },
    cartItems:{
      type:Array,
      required:true
    },
    date:{
      type:Date,
      default:Date.now()
    }
  },
  { timestamp: true }
);

const billModel = mongoose.model("bills", billSchema);
module.exports = billModel;
