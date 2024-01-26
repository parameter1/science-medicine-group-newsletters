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
  'labpulse-senl': {
    ...brands.labPulse,
    name: 'labpulse-SENL',
    logo: {
      src: '/files/base/smg/all/image/static/lab/Labpulse-SpecialEditionNewsletter.png',
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
      src: '/files/base/smg/all/image/static/drb/Dr.Biscuspid-case.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.drbicuspid.com/user/subscribe',
  },
  'drb-sample': {
    ...brands.drb,
    name: 'Sample',
    logo: {
      src: '/files/base/smg/all/image/static/drb/DrB_EmailHeader_Sample_v3.jpg',
      footerSrc: '/files/base/smg/all/image/static/drb/DrBLogo_WhiteText.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.drbicuspid.com/user/subscribe',
  },
  'drb-senl': {
    ...brands.drb,
    name: 'DrBicuspid-SENL',
    logo: {
      src: '/files/base/smg/all/image/static/drb/DrBiscuspid-SpecialEditionNewsletter.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.drbicuspid.com/user/subscribe',
  },
  'am-lfte': {
    ...brands.am,
    name: 'AuntMinnie-Letter From The Editor',
    logo: {
      src: '/files/base/smg/all/image/static/am/auntminnie-LFTE.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://my.auntminnie.com/unsubscribe-from-newsletter/',
    subtitle: 'AuntMinnie Daily Newsletter',
    caseBlock: true,
  },
  'am-breaking-news': {
    ...brands.am,
    name: 'AuntMinnie-Breaking News',
    logo: {
      src: '/files/base/smg/all/image/static/am/auntminnie-Breaking-News.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://my.auntminnie.com/unsubscribe-from-newsletter/',
    subtitle: 'AuntMinnie Daily Newsletter',
  },
  'am-community-insider': {
    ...brands.am,
    name: 'AuntMinnie-Community Insider',
    logo: {
      src: '/files/base/smg/all/image/static/am/auntminnie-Insider.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://my.auntminnie.com/unsubscribe-from-newsletter/',
    subtitle: 'AuntMinnie Daily Newsletter',
  },
  'am-case-of-the-week': {
    ...brands.am,
    name: 'AuntMinnie-Case of the Week',
    logo: {
      src: '/files/base/smg/all/image/static/am/auntminnie-case.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://my.auntminnie.com/unsubscribe-from-newsletter/',
    subtitle: 'AuntMinnie Daily Newsletter',
  },
  'am-radcast': {
    ...brands.am,
    name: 'AuntMinnie-Radcast',
    logo: {
      src: '/files/base/smg/all/image/static/am/AM__RADCast.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.auntminnie.com/user/subscribe',
  },
  'am-senl': {
    ...brands.am,
    name: 'AuntMinnie-SENL',
    logo: {
      src: '/files/base/smg/all/image/static/am/auntminnie-SpecialEditionNewsletter.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://my.auntminnie.com/unsubscribe-from-newsletter/',
    subtitle: 'AuntMinnie Daily Newsletter',
  },
  'am-rsna': {
    ...brands.am,
    name: 'AuntMinnie-RSNA',
    logo: {
      src: '/files/base/smg/all/image/static/am/AM__RADCast.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.auntminnie.com/user/subscribe',
  },
  'am-rsna-preview': {
    ...brands.am,
    name: 'AuntMinnie-RSNA Preview',
    logo: {
      src: '/files/base/smg/all/image/static/am/AM__RSNA_Preview_header.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.auntminnie.com/user/subscribe',
  },
  'ame-senl': {
    ...brands.ame,
    name: 'AuntMinnieEurope-SENL',
    logo: {
      src: '/files/base/smg/all/image/static/ame/AME-SpecialEditionNewsletter.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.auntminnieeurope.com/user/subscribe',
  },
  'ame-breaking-news': {
    ...brands.ame,
    name: 'AuntMinnieEurope-Breaking News',
    logo: {
      src: '/files/base/smg/all/image/static/ame/AuntMinnieEurope-BreakingNews.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.auntminnieeurope.com/user/subscribe',
  },
  'ame-case-of-the-week': {
    ...brands.ame,
    name: 'AuntMinnieEurope-Case of the Week',
    logo: {
      src: '/files/base/smg/all/image/static/ame/AuntMinnieEurope-weekly.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.auntminnieeurope.com/user/subscribe',
  },
  'ame-community-insider': {
    ...brands.ame,
    name: 'AuntMinnieEurope-Community Insider',
    logo: {
      src: '/files/base/smg/all/image/static/ame/AuntMinnieEurope-Insider.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.auntminnieeurope.com/user/subscribe',
  },
  'ame-lfte': {
    ...brands.ame,
    name: 'AuntMinnieEurope-LFTE',
    logo: {
      src: '/files/base/smg/all/image/static/ame/AuntMinnieEurope-LFTE.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://my.auntminnie.com/unsubscribe-from-newsletter/',
    subtitle: 'AuntMinnieEurope Daily Newsletter',
  },
  'ame-radcast': {
    ...brands.ame,
    name: 'AuntMinnieEurope-Radcast',
    logo: {
      src: '/files/base/smg/all/image/static/ame/AuntMinnieEurope-Radcast.png',
      footerWidth: 200,
    },
    preferenceCenter: 'https://www.auntminnieeurope.com/user/subscribe',
  },
};

module.exports = config;
