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
  .setAdUnits('drb-case-of-the-week', [
    {
      name: 'ad-slot-1',
      id: '6446764ff620c92f5c89387b',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('drb-sample', [
    {
      name: 'ad-slot-1',
      id: '6446c3f7f89e5833c74c6448',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-2',
      id: '6446c413f620c94b888939b4',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-3',
      id: '6446c421f620c974228939be',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-4',
      id: '6446c432f620c9f0168939d1',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-5',
      id: '6446c446f89e5869944c6488',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-6',
      id: '6446c459f620c942a18939ed',
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
