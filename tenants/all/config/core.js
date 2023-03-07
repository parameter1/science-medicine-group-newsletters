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
    name: 'LabPulse-Letter From The Editor',
    preferenceCenter: 'https://www.labpulse.com/user/subscribe',
  },
  'labpulse-breaking-news': {
    ...brands.labPulse,
    name: 'LabPulse-Breaking News',
    preferenceCenter: 'https://www.labpulse.com/user/subscribe',
  },
  'labpulse-community-insider': {
    ...brands.labPulse,
    name: 'LabPulse-Community Insider',
    preferenceCenter: 'https://www.labpulse.com/user/subscribe',
  },
  'drb-lfte': {
    ...brands.drb,
    name: 'Dr. Bicuspid-Letter From The Editor',
    preferenceCenter: 'https://www.drbicuspid.com/user/subscribe',
  },
  'drb-breaking-news': {
    ...brands.drb,
    name: 'Dr. Bicuspid-Breaking News',
    preferenceCenter: 'https://www.drbicuspid.com/user/subscribe',
  },
  'drb-community-insider': {
    ...brands.drb,
    name: 'Dr. Bicuspid-Community Insider',
    preferenceCenter: 'https://www.drbicuspid.com/user/subscribe',
  },
};

module.exports = config;
