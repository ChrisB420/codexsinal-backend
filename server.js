const express = require('express');
const { PeerServer } = require('peer');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// PeerJS Server (runs on same port)
const peerServer = PeerServer({ port: 9000, path: '/' });

// Simple test route
app.get('/', (req, res) => {
  res.send('CodexSignal Backend is running!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});0

