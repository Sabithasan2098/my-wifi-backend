import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const port = `${process.env.PORT}`;

let server: Server;

async function main() {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`);

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
