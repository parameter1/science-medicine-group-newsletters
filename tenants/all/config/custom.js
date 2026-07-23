const { get } = require('@mindful-web/object-path');
const { SUPPORTED, BRAZE } = require('@science-medicine-group/package-common/utils/esp-tokens');

module.exports = {
  // Resolves the email service provider for the requested newsletter and
  // exposes it to all components as `out.global.emailProvider`.
  onBeforeRenderHook: async ({ req, res, templateData }) => {
    // ?esp=mailchimp|braze preview override, else the newsletter's provider
    // type from the CMS, else braze.
    const qs = `${get(req, 'query.esp') || ''}`.toLowerCase();
    const type = `${get(templateData, 'newsletter.provider.type') || ''}`.toLowerCase();
    let emailProvider = BRAZE;
    if (SUPPORTED.includes(qs)) {
      emailProvider = qs;
    } else if (SUPPORTED.includes(type)) {
      emailProvider = type;
    }
    res.locals.emailProvider = emailProvider;
  },
};
