module.exports = exports = (() => {
  'use strict';

  const requestIp  = require('request-ip');

  return (req, res, next) => {
    let ip = requestIp.getClientIp(req);
    try {
      req.ip = ip;
    }
    catch(e) {}
    next();
  };

})();
