// const express = require("express");          // using import-export functionality instead, by using  "type": "module" instead of "type": "commonjs", in package.json
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js"

import authRoutes from "./routes/auth.route.js"

dotenv.config();
const app  = express();

const PORT = process.env.PORT;

app.use(express.json());        // used to create JSON web token (JWT) to extract data from user in JSON format

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("Server is running on PORT: " + PORT);
    connectDB();
});