const express = require('express');
const path = require('path');

const app = express();
const httpServer = require('http').createServer(app);

const PORT = process.env.PORT || 3000;
const corsOptions = {
  cors: {
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST'],
  },
};

const io = require('socket.io')(httpServer, corsOptions);
require('./sockets/chatSocket')(io);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, './public')));

const ChatController = require('./controllers/ChatController');

app.get('/', ChatController.getAllMessages);

httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
