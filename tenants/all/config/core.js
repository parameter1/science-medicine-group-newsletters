const brands = require('./brands');
const emailX = require('./email-x');
const nativeX = require('./native-x');

const config = {
  emailX,
  nativeX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'letter-from-the-editor': {
    ...brands.labPulse,
    name: 'Letter From The Editor',
  },
};

module.exports = config;
