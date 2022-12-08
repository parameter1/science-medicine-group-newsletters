const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://smg.serve.email-x.parameter1.com');

config
  .setAdUnits('letter-from-the-editor', [
    {
      name: 'ad-slot-1',
      id: '632b08a058002aacbb708185',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('bicuspid', [
    {
      name: 'ad-slot-1',
      id: '638616ca58002acd72708c99',
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
