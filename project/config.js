let envVariables = {};
if (process.env.NODE_ENV !== 'test') {
  const process = require('./process.json');
  envVariables = process.apps[0].env;
} else {
  envVariables.NODE_ENV = process.env.NODE_ENV;
  envVariables.SUCCESS_MESSAGE = process.env.SUCCESS_MESSAGE;
  envVariables.SUCCESS_JSON = JSON.parse(process.env.SUCCESS_JSON);
  envVariables.PORT = process.env.PORT;
}

const config = {
  NODE_ENV: envVariables.NODE_ENV,
  SUCCESS_MESSAGE: envVariables.SUCCESS_MESSAGE,
  SUCCESS_JSON: envVariables.SUCCESS_JSON,
  __root: `${__dirname}/`,
  PORT: envVariables.PORT || 8001
};

module.exports = config;
