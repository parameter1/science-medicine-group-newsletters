const NativeXConfiguration = require('@parameter1/base-cms-marko-newsletters-native-x/config');

const config = new NativeXConfiguration('https://smg.native-x.parameter1.com/email-placement', { enabled: true });

config
  // default is equivalent to ROS
  .setAliasPlacements('default', [
    { name: 'default', id: '632b0922e063f70001d48fc8' },
  ])
  .setAliasPlacements('labpulse-lfte', [
    { name: 'slot-1', id: '632b0922e063f70001d48fc8' },
  ])
  .setAliasPlacements('labpulse-community-insider', [
    { name: 'community', id: '6406ac7a93fb8e0001c3abf3' },
    { name: 'slot-1', id: '64904c499f8e110001498812' },
  ])
  .setAliasPlacements('labpulse-breaking-news', [
    { name: 'slot-1', id: '6406aca393fb8e0001c3ac2a' },
  ])
  .setAliasPlacements('drb-lfte', [
    { name: 'slot-1', id: '638619dad6ced5000110a551' },
    { name: 'case-sponsor', id: '643d7f61b91bf50001eff980' },
  ])
  .setAliasPlacements('drb-community-insider', [
    { name: 'community', id: '6406acf593fb8e0001c3ac7c' },
    { name: 'slot-1', id: '64904c3261871f00013e0229' },
  ])
  .setAliasPlacements('drb-breaking-news', [
    { name: 'slot-1', id: '6406ad19e78b060001976ca1' },
  ])
  .setAliasPlacements('sab', [
    { name: 'slot-1', id: '63861a1cadecb1000112fe8b' },
  ])
  .setAliasPlacements('drb-case-of-the-week', [
    { name: 'case-sponsor', id: '642310db713241000128c421' },
  ]);

module.exports = config;
