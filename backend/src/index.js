// const express = require("express");          // using import-export functionality instead, by using  "type": "module" instead of "type": "commonjs", in package.json
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const app  = express();

const PORT = process.env.PORT;

app.use(express.json());        // used to create JSON web token (JWT) to extract data from user in JSON format
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
    console.log("Server is running on PORT: " + PORT);
    connectDB();
});