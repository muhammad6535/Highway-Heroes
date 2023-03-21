import Users from "../models/usersSchema";

export const getUser = (request, response) => {
  // const userName = request.body.userName;
  // const password = request.body.password;
  var t = Users.find({}, (err, res) => {
    // response.sendStatus(200);
    console.log('ressss',res.length)
    console.log('ressss',res)
    if (res.length > 0) {
      response.sendStatus(200);
    } else {
      response.sendStatus(204);
    }
  });
// console.log("t ",t)

  
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
