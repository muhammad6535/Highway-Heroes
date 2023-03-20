// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const dbSchema = new Schema({
  // name: { type: String, required: true, unique: false, index: false },
});

const User = mongoose.model("db", dbSchema);

export default User;
