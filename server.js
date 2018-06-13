// internal import
const app = require('./index');

const port = process.env.PORT || 8001;

const server = app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

module.exports = server;
