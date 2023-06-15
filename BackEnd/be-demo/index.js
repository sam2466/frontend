const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require("cors");
app.use(cors());

app.use("/api/members", require("./routes/api/api"));

const staticHome = path.join(__dirname,"public");
app.use(express.static(staticHome));


const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: { origin: "*" } });

io.on("connection", (socket) => {
    console.log(`user ${socket.id} is connected`);
    socket.on('cud-member', (data) => {
        console.log("cud-member", data);
        socket.broadcast.emit('cud-member', data);
    })
    socket.on('disconnect', (data) => {
        console.log(`client ${socket.id} disconnected`);
        socket.broadcast.emit('user disconnection', socket.id);
    })
})



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});