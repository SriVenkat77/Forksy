const mongoose = require("mongoose");

// Define the User schema
const UserSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: [
      "ROLE_CUSTOMER",
      "ROLE_RESTAURANT_OWNER"
      
    ],
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  favorites: [
    {
      name: String,
      description: String,
      images:[]
    },
  ],
  addresses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },], 
  status: String,
});


const User = mongoose.model("User", UserSchema);
module.exports = User;
