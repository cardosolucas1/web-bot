const express = require('express');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');
const { registerUser } = require('./controllers/userController');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (_req, res) => res.send());

const server = app.listen(3333, () => console.log('Listening on port 3333!'));

const io = socketIo(server);

io.on('connect', async (socket) => {
  console.log(`Nova conexão: ${socket.id}`);

  socket.on('clientMessage', ({ message }) => {
    console.log(`Cliente ${socket.id} diz: ${message}`);
  })

  socket.on('clientRegister', () => registerUser(socket))

  socket.on('disconnect', () => {
    console.log(socket.id, 'desconectou-se');
  });
});
