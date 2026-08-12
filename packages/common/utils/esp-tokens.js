/* eslint-disable no-template-curly-in-string */
const BRAZE = 'braze';
const MAILCHIMP = 'mailchimp';

const TOKENS = {
  [BRAZE]: {
    // When null, footers build the unsubscribe link from the newsletter's
    // configured `preferenceCenter` URL + params.
    unsubscribeUrl: null,
    email: '{{${email_address} | url_encode }}',
    userId: '{{${user_id}}}',
    emailxEmail: '{{${braze_id}}}',
    // Appended to every link. Key order matters: it determines query param
    // order in the rendered URLs.
    linkParams: {
      braze_int_id: '{{${braze_id}}}',
      braze_ext_id: '{{${user_id}}}',
      utm_medium: 'email',
    },
  },
  [MAILCHIMP]: {
    // Used verbatim as the unsubscribe href (no params appended).
    unsubscribeUrl: '*|UNSUB|*',
    email: '*|URL:EMAIL|*',
    userId: '*|UNIQID|*',
    emailxEmail: '*|UNIQID|*',
    linkParams: {
      mc_campaign: '*|CAMPAIGN_UID|*',
      mc_id: '*|UNIQID|*',
      utm_medium: 'email',
    },
  },
};

const resolve = (provider) => (TOKENS[provider] ? provider : BRAZE);

module.exports = {
  BRAZE,
  MAILCHIMP,
  SUPPORTED: Object.keys(TOKENS),
  resolve,
  getTokens: (provider) => TOKENS[resolve(provider)],
  isMailchimp: (provider) => resolve(provider) === MAILCHIMP,
};
