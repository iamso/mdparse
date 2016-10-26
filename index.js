(function() {
  'use strict';

  const express    = require('express');
  const app        = express();
  const bodyParser = require('body-parser');
  const multipart  = require('connect-multiparty');
  const morgan     = require('morgan');
  const port       = process.env.PORT || 8808;

  const api1       = require('./lib/routes/v1');

  // app.use(morgan('combined'));
  app.use(express.static(`${__dirname}/public`));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(bodyParser.text({ type: 'text/plain' }));
  app.use(multipart());

  // app.use('/v1', api1);
  app.use('/*', api1);

  app.use((req, res, next) => {
    if (process.env.REDIRECT) {
      res.redirect(301, process.env.REDIRECT);
    }
    else {
      res.end('nothing to see');
    }
  });

  let server = app.listen(port, () => {
    console.log(`Listening on port ${server.address().port}`);
  });


})();
