let envVariables = process.env;
if (process.env.NODE_ENV !== 'test') {
  const process = require('./process.json');
  envVariables = process.apps[0].env;
}

const config = {
  NODE_ENV: envVariables.NODE_ENV,
  SUCCESS_MESSAGE: envVariables.SUCCESS_MESSAGE,
  SUCCESS_JSON: envVariables.SUCCESS_JSON,
  __root: `${__dirname}/`,
  PORT: envVariables.PORT || 8001
};

module.exports = config;
