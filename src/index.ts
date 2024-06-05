import { createServer } from "http";
import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import VehicleRouter from "./app/vehicle/router";

dotenv.config();
var cors = require("cors");

AppDataSource.initialize();
const app = express();

app.use(express.json());
app.use(cors());

// router
app.use("/api/v1", VehicleRouter);

// port
const port = process.env.PORT;
const server = createServer(app);
server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
