import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
const PORT = 5000;
const connectionString =
  // "mongodb+srv://muhammad6535:Mm.125694123@cluster0.y1sxzdc.mongodb.net/myDb?retryWrites=true&w=majority";
  "mongodb://localhost:27017/HighwayHeroesDB";

mongoose
  .connect(connectionString)
  .then((result) => {
    app.listen(PORT, () =>
      console.log(`Ther server is running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });

export default app;
