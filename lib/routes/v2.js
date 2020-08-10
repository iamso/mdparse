module.exports = exports = (() => {
  'use strict';

  const fs         = require('fs');

  const express    = require('express');

  const ejs        = require('ejs');
  const router     = express.Router();

  const motesMd    = require('@motes/md')({
    hashtag: 'https://www.hashatit.com/hashtags/',
    mention: 'https://github.com/'
  });

  router.route('/')
    .get((req, res) => {
      let md = req.query.md;
      sendOutput(md, req, res);
    })
    .post((req, res) => {
      let params = Object.assign({}, req.query, req.body);
      let md = params.md !== undefined ? params.md : req.body;
      sendOutput(md, req, res);
    });


  function sendOutput(md, req, res) {
    motesMd.meta = {};
    if (md) {
      try {
        const env = {};
        const html = motesMd.render(md, env);
        res.json({
          env,
          html,
          meta: motesMd.meta,
        });
      }
      catch(e) {
        res.status(500).json({
          env: {},
          html: md,
          meta: {},
        });
      }
    }
    res.end();
  }

  return router;

})();
