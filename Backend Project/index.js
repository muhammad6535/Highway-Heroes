// Import the dbConnect.js file to establish a connection with the database
import app from "./dbConnect.js";

// Import the usersRouter file to handle user-related routes
import usersRouter from "./routes/user";

// Import the usersSchema file to define the structure of the user data

// Log a message to the console to indicate the start of the program
console.log("hello")

// Use the usersRouter to handle requests for the '/users' route
app.use("/users", usersRouter);