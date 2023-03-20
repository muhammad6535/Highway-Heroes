import Users from "../models/usersSchema";

export const getUser = async (request, response) => {
  // const userName = request.body.userName;
  // const password = request.body.password;

  const aa = await Users.find({}, (err, res) => {
    console.log(res);
    response.sendStatus(200);

    // if (res.length > 0) {
    //   response.sendStatus(200);
    // } else {
    //   response.sendStatus(204);
    // }
  });
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