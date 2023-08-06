const express = require('express');
const http = require('http');
const initializeSocket = require('./socket');
const app = express();
const server = http.createServer(app);




// Initialize the Socket.io communication
initializeSocket(server);

// Start the server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});