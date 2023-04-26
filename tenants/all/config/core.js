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
  'labpulse-lfte': {
    ...brands.labPulse,
    name: 'LabPulse-Letter From The Editor',
    logo: {
      src: '/files/base/smg/all/image/static/lab/letter-from-editor-newsletter.jpeg',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.labpulse.com/user/subscribe',
  },
  'labpulse-breaking-news': {
    ...brands.labPulse,
    name: 'LabPulse-Breaking News',
    logo: {
      src: '/files/base/smg/all/image/static/lab/LabPulse_EmailHeader_BreakingNews_v3.jpg',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.labpulse.com/user/subscribe',
  },
  'labpulse-community-insider': {
    ...brands.labPulse,
    name: 'LabPulse-Community Insider',
    logo: {
      src: '/files/base/smg/all/image/static/lab/LabPulse_EmailHeader_Insider_v3.jpg',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.labpulse.com/user/subscribe',
  },
  'drb-lfte': {
    ...brands.drb,
    name: 'Dr. Bicuspid-Letter From The Editor',
    logo: {
      src: '/files/base/smg/all/image/static/drb/DrB_EmailHeader_LFTE_v3.jpg',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.drbicuspid.com/user/subscribe',
    caseBlock: true,
  },
  'drb-breaking-news': {
    ...brands.drb,
    name: 'Dr. Bicuspid-Breaking News',
    logo: {
      src: '/files/base/smg/all/image/static/drb/DrB_EmailHeader_BreakingNews_v3.jpg',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.drbicuspid.com/user/subscribe',
  },
  'drb-community-insider': {
    ...brands.drb,
    name: 'Dr. Bicuspid-Community Insider',
    logo: {
      src: '/files/base/smg/all/image/static/drb/DrB_EmailHeader_Insider_v3.jpg',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.drbicuspid.com/user/subscribe',
  },
  'drb-case-of-the-week': {
    ...brands.drb,
    name: 'Dr. Bicuspid-Case of the Week',
    logo: {
      src: '/files/base/smg/all/image/static/drb/DrB_EmailHeader_CaseOfTheWeek_v3.jpg',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.drbicuspid.com/user/subscribe',
  },
  'testing-template': {
    ...brands.drb,
    name: 'Test Template',
    logo: {
      src: '/files/base/smg/all/image/static/drb/DrB_EmailHeader_BreakingNews_v3.jpg',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.drbicuspid.com/user/subscribe',
  },
};

module.exports = config;
