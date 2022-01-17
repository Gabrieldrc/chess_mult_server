const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const application = require("../src/application");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    }
});

io.on("connection", (socket) => {
    console.log("User new connected");
    application(socket, io)
});

httpServer.listen(3000);