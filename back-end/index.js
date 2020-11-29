const express = require('express');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');
const chatResponses = require('./utils/chatResponses');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (_req, res) => res.send());

const server = app.listen(3001, () => console.log('Listening on port 3001!'));
// Express e socket.io rodando na mesma porta por conta do bind

const io = socketIo(server);
// Namespace padrão. io.* é o mesmo que io.sockets.*
io.on('connect', (socket) => {
  console.log(`Nova conexão: ${socket.id}`);

  socket.on('clientMessage', ({ message }) => {
    console.log(`Cliente ${socket.id} diz: ${message}`);
  })

  socket.on('disconnect', () => {
    console.log(socket.id, 'desconectou-se');
  });
});
