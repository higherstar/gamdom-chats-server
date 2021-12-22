import app from './app';
import { buildSocket } from './services/SocketService';

const PORT = process.env.PORT || 8080;

process.on('uncaughtException', async (err) => {
  process.exit(1);
});

let server;

function startServer() {
  return new Promise((resolve) => {
    server = app.listen(PORT, () => {
      console.log(`Online Node server is online.`);
      console.log(`PORT: ${PORT}`);
      console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
      resolve();
    });
  });
}

startServer().then(() => {
  buildSocket(server);
});

