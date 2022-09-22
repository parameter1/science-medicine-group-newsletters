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
  'lab-pulse-insight': {
    ...brands.labPulse,
    name: 'Insight',
  },
};

module.exports = config;
