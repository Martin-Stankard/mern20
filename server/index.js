import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

import dotenv from "dotenv";
// default .env placement
dotenv.config();

const app = express();

app.use(
  bodyParser.json({
    limit: "30mb",
    extended: "true",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: "true",
  })
);

app.use(cors());

//important nitnoid cors() before routes.
app.use("/posts", postRoutes);


// heroku lkes PORT
const PORT = process.env.PORT || 5000;
//git surgery verified. This code was insecure in a previous life
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set("useFindAndModify", false);
