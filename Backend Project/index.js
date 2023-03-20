import app from "./dbConnect.js";
// import studentsRouter from "./routes/students.js";
import usersRouter from "./routes/user";

// import Student from "./models/studentSchema.js";
import User from "./models/usersSchema.js";

console.log("hello")
// app.use("/students", studentsRouter);
app.use("/users", usersRouter);

// const user = new User({
//   userName: "mohmed6535",
//   password: "myPass",
// });

// user.save(function (err, result) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });
