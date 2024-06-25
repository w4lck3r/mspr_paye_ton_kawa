const NATS = require('nats');
const nats = NATS.connect({ url: process.env.NATS_URL });

nats.on('connect', () => {
  console.log('Connected to NATS');
});

nats.on('error', (err) => {
  console.error('Error connecting to NATS:', err);
});

module.exports = nats;
