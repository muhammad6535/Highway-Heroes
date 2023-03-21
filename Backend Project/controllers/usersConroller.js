import Users from "../models/usersSchema";

export const getUser = async (request, response) => {
  try {
    const users = await Users.find({});
    if (users.length > 0) {
      response.sendStatus(200);
    } else {
      response.sendStatus(204);
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};