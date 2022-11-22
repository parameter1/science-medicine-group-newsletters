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
    preferenceCenter: 'https://www.labpulse.com/user/subscribe',
  },
};

module.exports = config;
