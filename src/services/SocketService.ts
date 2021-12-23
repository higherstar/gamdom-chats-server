import SocketIO from 'socket.io';

let socket;

const buildSocket = (server): void => {
  if (server) {
    socket = new SocketIO.Server(server, { path: '/api/chat' });
    socket.on('connection', (socket) => {
      socket.on('join', function (channelID) {
        socket.join(channelID);
      });
      socket.on('leave', function (channelID) {
        socket.leave(channelID);
      });

      setInterval(() => {
        socket.emit('user-msg', {
          level: 3,
          user: 'Harry',
          content: 'Hi'
        });
      }, 10000);
    });
  }
};

export {
  socket,
  buildSocket
};

