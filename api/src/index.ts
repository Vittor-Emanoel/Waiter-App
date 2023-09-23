import express from "express";
import mongoose from "mongoose";
import path from "node:path";

import { Server } from "socket.io";

import http from "node:http";

import { router } from "./router";
const app = express();

const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .connect(
    "mongodb+srv://vittor:P4kPwHG5oSA7F5WD@cluster0.sfxq1tq.mongodb.net/?retryWrites=true&w=majority"
  )

  .then(() => {
    const port = 3000;

    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );

      next();
    });

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    ); //arquivo estatico
    app.use(express.json());
    app.use(router);

    server.listen(port, () => {
      console.log(`🚀 Server is running on ${port}`);
    });
  })
  .catch((error) => console.log(error));
