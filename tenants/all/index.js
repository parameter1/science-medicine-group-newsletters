const newrelic = require('newrelic');
const { startServer } = require('@mindful-web/marko-newsletters');
const coreConfig = require('./config/core');
const customConfig = require('./config/custom');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  customConfig,
  publicPath: 'public',
  newsletterQueryFragment: 'fragment NewsletterProviderFragment on EmailNewsletter { provider { type } }',
  onStart: (app) => app.set('trust proxy', 'loopback, linklocal, uniquelocal'),
  onAsyncBlockError: (e) => newrelic.noticeError(e),
}).then(() => log('Newsletters started!')).catch((e) => setImmediate(() => { throw e; }));
