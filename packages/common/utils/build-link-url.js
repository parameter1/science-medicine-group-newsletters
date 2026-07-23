const { getTokens, isMailchimp } = require('./esp-tokens');

const liquidVar = /{{.*?}}/;
const isObj = (v) => typeof v === 'object';

module.exports = (href, params, provider) => {
  const url = new URL(href);
  const toAppend = { ...(isObj(params) && { ...params }), ...getTokens(provider).linkParams };

  // Set append the values to the URL
  Object.entries(toAppend).forEach(([key, value]) => { url.searchParams.set(key, value); });

  // Un-escape merge-tag pipes so Mailchimp can replace them.
  if (isMailchimp(provider)) return `${url}`.replace(/%7C/ig, '|');

  let encoded = `${url}`;
  // Decode any liquid tags to ensure successful replacement.
  Object.entries(toAppend).forEach(([, value]) => {
    if (liquidVar.test(value)) {
      encoded = encoded.replace(`${encodeURIComponent(value)}`.replace(/%20/ig, '+'), decodeURIComponent(value));
    }
  });
  return encoded;
};
