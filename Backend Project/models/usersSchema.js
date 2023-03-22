// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, unique: false, index: false },
  phoneNumber: { type: String, required: true, unique: false, index: false},
  Image: { type: String, required: true, unique: false, index: false},
  location: { type: Number, required: true, unique: false, index: false},
  description: { type: String, required: true, unique: false, index: false}
});


const User = mongoose.model("users", userSchema);

export default User;
