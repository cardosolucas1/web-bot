const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');

const PORT = process.env.PORT || 3001;

app.use(cors())

app.get('/', (_req, res) => {
  res.send({ response: 200 });
})

io.on('connection', async (socket) => {
  console.log(`Usuário de socketId ${socket.id} conectado`);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
