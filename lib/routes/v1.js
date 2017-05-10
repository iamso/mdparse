module.exports = exports = (() => {
  'use strict';

  const fs         = require('fs');

  const express    = require('express');

  const ejs        = require('ejs');
  const router     = express.Router();

  const motesMd    = require('motes-md')({
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
    if (md) {
      try {
        res.send(motesMd.render(md));
      }
      catch(e) {
        res.send(md);
      }
    }
    res.end();
  }

  return router;

})();
