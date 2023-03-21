import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const connectionString = "mongodb://localhost:27017/HighwayHeroesDB";

mongoose
  .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => {
    app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(err);
  });

export default app;