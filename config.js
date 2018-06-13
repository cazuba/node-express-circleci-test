let envVariables = process.env;
if (process.env.NODE_ENV !== 'test') {
  const process = require('./process.json');
  envVariables = process.apps[0].env;
}

const config = {
  ...envVariables,
  __root: `${__dirname}/`,
  PORT: envVariables.PORT || 8001
};

module.exports = config;
