const express =require("express");
const { createServer } = require("node:http");
const app = express();
const server = createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
      origin: ["http://localhost:3000"],
        }
    });
const PORT = 5000;

//クライアントと通信
io.on('connection', (socket) => {
    console.log('a user connected');

    //クライアントから受信
    socket.on("send_message", (data) => {
        console.log(data);

        //クライアントへ送信
        io.emit("received_message", data);
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
  });

server.listen(PORT, () => console.log(`server is running on ${PORT}`));