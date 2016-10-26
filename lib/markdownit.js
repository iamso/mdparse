const hljs       = require('highlight.js')
const md = require('markdown-it')({
    html:         true,
    xhtmlOut:     false,
    breaks:       true,
    langPrefix:   'language-',
    linkify:      true,
    linkTarget:   '',
    typographer:  true,
    quotes: '“”‘’',

    highlight(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }
      // else {
      //   try {
      //     return hljs.highlightAuto(str).value;
      //   } catch (__) {}
      // }
      return ''; // use external default escaping
    }
  })
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-anchor'), {
    level: 1,
    slugify: function(str, md) {
      return str.toLowerCase().replace(/\&[a-z0-9A-Z]+\;/g, '').replace(/[^\w]/g, '-');
    },
    permalink: true,
    permalinkClass: 'heading-anchor',
    permalinkSymbol: '',
    permalinkBefore: false,
  })
  .use(require('markdown-it-attrs'))
  .use(require('markdown-it-block-embed'), {
    containerClassName: 'video-embed'
  })
  .use(require('markdown-it-block-image'), {
    outputContainer: true,
    containerClassName: 'image-container'
  })
  .use(require('markdown-it-center-text'))
  .use(require('markdown-it-checkbox'))
  .use(require('markdown-it-container'), 'warning')
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-emoji'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-hashmention'), {
    hashtags: {
      href: '/tags/',
    },
    mentions: {
      href: '/users/',
    },
  })
  .use(require('markdown-it-ins'))
  .use(require('markdown-it-mark'))
  .use(require('markdown-it-sub'))
  .use(require('markdown-it-sup'));


function render(input) {
  return md.render(input);
}

module.exports = exports = render;
