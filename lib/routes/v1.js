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
  const getip      = require('../getip');
  const marked     = require('../marked');

  const emojione   = require('emojione');
  emojione.ascii   = true;

  // const Datastore  = require('nedb');
  // let db           = {};

  // db.log = new Datastore({ filename: 'data/log.db', autoload: true });
  // db.history = new Datastore({ filename: 'data/history.db', autoload: true });

  // db.log.persistence.setAutocompactionInterval(60000);
  // db.history.persistence.setAutocompactionInterval(60000);

  router.use(getip);
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
        res.send(marked(emojione.unifyUnicode(md)));
        // db.history.insert({
        //   md: sha512(md).toString('hex'),
        //   time: time,
        //   ip: req.ip,
        // });
      }
      catch(e) {
        res.send(md);
        // db.log.insert({
        //   err: e,
        //   time: time,
        //   ip: req.ip,
        // });
      }
    }
    res.end();
  }

  return router;

})();
