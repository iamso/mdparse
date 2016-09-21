module.exports = exports = (() => {
  'use strict';

  const marked   = require('marked');
  const hljs = require("highlight.js");
  let renderer = new marked.Renderer();

  // renderer.heading = function (text, level) {
  //   var escapedText = text.toLowerCase().replace(/\&[a-z0-9A-Z]+\;/g, '').replace(/[^\w]/g, '-');

  //   return '<h' + level + '>' +
  //             '<a name="' + escapedText + '" class="heading-anchor" href="#' + escapedText +'"></a>' +
  //             text +
  //           '</h' + level + '>\n';
  // };

  // renderer.code = function(code, language) {
  //   var result = hljs.getLanguage(language)? hljs.highlight(language, code) : hljs.highlightAuto(code);
  //   return '<pre><code data-code="' + code + '" class="hljs ' + language + '">' + result.value + '</code></pre>';
  // };

  // renderer.codespan = function(code) {
  //   var result = hljs.highlightAuto(code);
  //   return '<code class="hljs ' + result.language + '">' + result.value + '</code>';
  // };

  // renderer.table = function(header, body) {
  //   var table = '\n<div class="table"><table>';
  //   if (header) {
  //     table += '<thead>' + header + '</thead>';
  //   }
  //   if (body) {
  //     table += '<tbody>' + body + '</tbody>';
  //   }
  //   table += '</table></div>\n';
  //   return table;
  // };

  // renderer.listitem = function(text) {
  //   var cls = 'task';
  //   if (/^\s*\[[x ]\]\s*/.test(text)) {
  //     cls += /^\s*\[x\]\s*/.test(text) ? ' done' : '';
  //     text = text.replace(/^\s*\[[x ]\]\s*/, '<span class="checkbox"></span>');
  //     return '<li class="' + cls + '">' + text + '</li>\n';
  //   }
  //   else {
  //     return '<li>' + text + '</li>\n';
  //   }
  // };

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code, language) {
      var result = hljs.getLanguage(language)? hljs.highlight(language, code) : hljs.highlightAuto(code);
      return result.value;
    }
  });

  return marked;

})();
