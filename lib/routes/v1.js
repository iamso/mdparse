module.exports = exports = (() => {
  'use strict';

  const fs         = require('fs');

  const express    = require('express');
  const moment     = require('moment');
  const xss        = require('xss');
  const _          = require('lodash');
  const u          = require('ujs');
  const sha512     = require('sha512');

  const ejs        = require('ejs');
  const router     = express.Router();

  const prepare    = require('../prepare');
  const markdownit = require('../markdownit');

  const emojione   = require('emojione');
  emojione.ascii   = true;

  router.use(prepare);

  router.route('/')
    .get((req, res) => {
      let md = req.query.md;
      sendOutput(md, req, res);
    })
    .post((req, res) => {
      let params = Object.assign({}, req.query, req.body);
      let md = params.md || req.body;
      sendOutput(md, req, res);
    });


  function sendOutput(md, req, res) {
    if (md) {
      let time = moment().unix();
      try {
        res.send(markdownit(md));
      }
      catch(e) {
        res.send(md);
      }
    }
    res.end();
  }

  return router;

})();
