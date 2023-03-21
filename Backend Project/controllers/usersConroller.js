import Users from "../models/usersSchema";

export const getUser = async (request, response) => {
  

 Users.find({},(err,res)=>{
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
 })
};



// const User = require('../models/user');

// const getAllUsers = async (req, res) => {
// try {
// const users = await User.find();
// res.status(200).json(users);
// } catch (error) {
// res.status(500).json({ message: error.message });
// }
// };