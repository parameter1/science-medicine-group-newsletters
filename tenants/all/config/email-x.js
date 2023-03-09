const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://smg.serve.email-x.parameter1.com');

config
  .setAdUnits('labpulse-lfte', [
    {
      name: 'ad-slot-1',
      id: '632b08a058002aacbb708185',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('labpulse-community-insider', [
    {
      name: 'ad-slot-1',
      id: '6406ae3af620c908f1892b97',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('labpulse-breaking-news', [
    {
      name: 'ad-slot-1',
      id: '6406ae62f620c93890892bbc',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('drb-lfte', [
    {
      name: 'ad-slot-1',
      id: '638616ca58002acd72708c99',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('drb-community-insider', [
    {
      name: 'ad-slot-1',
      id: '6406adc8f620c95b20892b32',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('drb-breaking-news', [
    {
      name: 'ad-slot-1',
      id: '6406adf2f89e5844504c5583',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('sab', [
    {
      name: 'ad-slot-1',
      id: '638616fd58002a6962708cd2',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
