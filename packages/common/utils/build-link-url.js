/* eslint-disable no-template-curly-in-string */
const liquidVar = /{{.*?}}/;
const isObj = (v) => typeof v === 'object';

const alwaysAppend = {
  braze_int_id: '{{${braze_id}}}',
  braze_ext_id: '{{${user_id}}}',
  utm_medium: 'email',
};

module.exports = (href, params = {}) => {
  const url = new URL(href);
  const toAppend = { ...(isObj(params) && { ...params }), ...alwaysAppend };

  // Set append the values to the URL
  Object.entries(toAppend).forEach(([key, value]) => { url.searchParams.set(key, value); });

  let encoded = `${url}`;
  // Decode any liquid tags to ensure successful replacement.
  Object.entries(toAppend).forEach(([, value]) => {
    if (liquidVar.test(value)) {
      encoded = encoded.replace(`${encodeURIComponent(value)}`.replace(/%20/ig, '+'), decodeURIComponent(value));
    }
  });
  return encoded;
};
