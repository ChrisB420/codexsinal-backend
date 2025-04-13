const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: 9000,
  path: '/',
  proxied: true,
  allow_discovery: true,
});

peerServer.on('connection', (client) => {
  console.log(`New Peer Connected: ${client.getId()}`);
});0

