// const express = require("express");          // using import-export functionality instead, by using  "type": "module" instead of "type": "commonjs", in package.json
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();
// const app  = express();          // don't need this now, importing from socket.js

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());        // used to create JSON web token (JWT) to extract data from user in JSON format
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

/* app.listen(PORT, () => {
    console.log("Server is running on PORT: " + PORT);
    connectDB();
}); */

server.listen(PORT, () => {
    console.log("Server is running on PORT: " + PORT);
    connectDB();
});