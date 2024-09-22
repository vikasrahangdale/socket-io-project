const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');

io.on('connection', (socket) => {

    socket.on('message', (message) => {
        console.log('clicked:', message);
    });
   
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index'); 
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
