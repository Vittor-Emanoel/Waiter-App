import express from "express";
import mongoose from "mongoose";
import path from "node:path";

import { router } from "./router";
mongoose
  .connect(
    "mongodb+srv://vittor:P4kPwHG5oSA7F5WD@cluster0.sfxq1tq.mongodb.net/?retryWrites=true&w=majority"
  )

  .then(() => {
    const app = express();

    const port = 3000;

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    ); //arquivo estatico
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running on ${port}`);
    });
  })
  .catch((error) => console.log(error));
