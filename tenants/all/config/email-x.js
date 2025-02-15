const EmailXConfiguration = require('@mindful-web/marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://delivery.mindfulcms.com/smg/default/compat/email-banner');

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
  .setAdUnits('labpulse-senl', [
    {
      name: 'ad-slot-1',
      id: '6523478bd423c99fb0f1701a',
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
    {
      name: 'ad-slot-2',
      id: '66db2afc676b8ccccc086870',
      width: 300,
      height: 250,
    },
    {
      name: 'case-sponsor',
      id: '669949c5a9b3ee2103a0eca4',
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
  .setAdUnits('drb-senl', [
    {
      name: 'ad-slot-1',
      id: '652347b9d423c9192ef17048',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('am-lfte', [
    {
      name: 'ad-slot-1',
      id: '663a7caddf81cf4fba80f612',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-2',
      id: '647e1b53f89e58ac004ca4f7',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-3',
      id: '671708e08a67fca32e87440d',
      width: 300,
      height: 250,
    },
    {
      name: 'case-sponsor',
      id: '6644e5313a17bf3cf0123d9d',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('am-community-insider', [
    {
      name: 'ad-slot-1',
      id: '64ff47f8c6835cc9a256a2a0',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('am-breaking-news', [
    {
      name: 'ad-slot-1',
      id: '64ff4833d423c961b2f13e27',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('am-case-of-the-week', [
    {
      name: 'ad-slot-1',
      id: '64ff4859c6835c815256a320',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('am-radcast', [
    {
      name: 'ad-slot-1',
      id: '64ff5929d423c90e3af13ebf',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('am-senl', [
    {
      name: 'ad-slot-1',
      id: '652347e6c6835c370c56d52f',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('am-rsna', [
    {
      name: 'ad-slot-1',
      id: '654bbc997ed2851ec164a656',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('am-rsna-preview', [
    {
      name: 'ad-slot-1',
      id: '654bbcb87ed28543e664a684',
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
  ])
  .setAdUnits('ame-senl', [
    {
      name: 'ad-slot-1',
      id: '6523481fc6835ca12556d55d',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('ame-lfte', [
    {
      name: 'ad-slot-1',
      id: '65493d957ed285419964a0e7',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('ame-community-insider', [
    {
      name: 'ad-slot-1',
      id: '65493dc45df77b42a6a1f8b9',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('ame-breaking-news', [
    {
      name: 'ad-slot-1',
      id: '65493de57ed2853fea64a14b',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('ame-case-of-the-week', [
    {
      name: 'ad-slot-1',
      id: '654945655df77b23f9a1f91d',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('ame-radcast', [
    {
      name: 'ad-slot-1',
      id: '6549457f7ed285655364a1b8',
      width: 300,
      height: 250,
    },
  ])
  .setAdUnits('am-weekly', [
    {
      name: 'ad-slot-1',
      id: '6674422515168281400d5833',
      width: 300,
      height: 250,
    },
    {
      name: 'ad-slot-2',
      id: '6674423d311907bdd103a543',
      width: 300,
      height: 250,
    },
    {
      name: 'case-sponsor',
      id: '66744255311907260003a556',
      width: 300,
      height: 250,
    },
  ]);

module.exports = config;
