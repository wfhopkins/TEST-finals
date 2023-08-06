const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Routes and middleware for your express app go here

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  // SOCKET GAME EVENTS GO HERE
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});