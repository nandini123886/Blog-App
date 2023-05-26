import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';

//components
import Connection from "./database/db.js";
import Router from "./routes/route.js";
import path from "path";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", Router);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname,"../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(++dirname"/client/build/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is Running...");
  });
}

const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
