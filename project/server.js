// internal import
const app = require('./index');
const config = require('./config.js');

const server = app.listen(config.PORT, () => {
  console.log(`Express server listening on port ${config.PORT}`);
});

module.exports = server;
