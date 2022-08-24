/*!
 * editrrr - version 0.4.0
 *
 * Made with ❤ by Steve Ottoz so@dev.so
 *
 * Copyright (c) 2022 Steve Ottoz
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Editrrr=e()}(this,(function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var s=0,r=function(){};return{s:r,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){l=!0,a=t},f:function(){try{o||null==i.return||i.return()}finally{if(l)throw a}}}}var i={textarea:null,replaceTab:!0,softTabs:!0,tabSize:2,autoOpen:!0,overwrite:!0,autoStrip:!0,autoIndent:!0,continueList:!0,moveLine:!0,duplicateLine:!0},s=[{open:'"',close:'"',canBreak:!1},{open:"'",close:"'",canBreak:!1},{open:"`",close:"`",canBreak:!1},{open:"(",close:")",canBreak:!1},{open:"[",close:"]",canBreak:!0},{open:"{",close:"}",canBreak:!0},{open:"<",close:">",canBreak:!1}],r={};return function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=Object.assign({},i,t),this.textarea=this.options.textarea,this.init()}var a,o,l;return a=e,l=[{key:"addHook",value:function(t,e){Array.isArray(t)||(t=[t]);var i,s=n(t);try{for(s.s();!(i=s.n()).done;){var a=i.value;r[a]||(r[a]=[]),r[a].push(e)}}catch(t){s.e(t)}finally{s.f()}}},{key:"getHook",value:function(t){return r[t]}}],(o=[{key:"callHook",value:function(t,i){var s=e.getHook(t);if(s){this.textarea.value,this.getCursor();var r,a=n(s);try{for(a.s();!(r=a.n()).done;)r.value.call(this,this,i)}catch(t){a.e(t)}finally{a.f()}}return this}},{key:"getLineNr",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCursor();return Math.max(this.value.substring(0,t).split("\n").length-1,0)}},{key:"getLine",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCursor(),e=this.getLines(),n=this.getLineNr(t);return e[n]}},{key:"getLineCursor",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCursor();return this.value.substring(0,t).split("\n").pop().length}},{key:"getLines",value:function(){return this.value.split(/\r?\n/)}},{key:"getCursor",value:function(){return this.textarea.selectionStart}},{key:"setCursor",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return this.textarea.focus(),this.textarea.setSelectionRange(t,e),this}},{key:"getSelection",value:function(){var t=this.textarea.selectionStart,e=this.textarea.selectionEnd;return t!==e&&{start:t,end:e}}},{key:"focus",value:function(){return this.textarea.focus(),this}},{key:"blur",value:function(){return this.textarea.blur(),this}},{key:"levelsDeep",value:function(){var t,e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCursor(),r=this.value.substring(0,i),a=["'",'"'],o=0,l=0,h=n(r);try{for(h.s();!(e=h.n()).done;){var u,c=e.value,v=n(s);try{for(v.s();!(u=v.n()).done;){var f=u.value;f.canBreak&&(f.open===c&&o++,f.close===c&&o--)}}catch(t){v.e(t)}finally{v.f()}}}catch(t){h.e(t)}finally{h.f()}var g,y=n(s);try{for(y.s();!(g=y.n()).done;){var p=g.value;if(p.canBreak){var b,d=n(a);try{for(d.s();!(b=d.n()).done;){var k=b.value;l+=r.split(k).filter((function(t,e){return e%2})).join("").split(p.open).length-1}}catch(t){d.e(t)}finally{d.f()}}}}catch(t){y.e(t)}finally{y.f()}return t=o-l,Math.max(t,0)}},{key:"tabKey",value:function(t){var e;if("Tab"===t.key){t.preventDefault(),this.callHook("tab:before");var n=this.getSelection(),i=this.getCursor();if(e=!0,n){for(var s=n.start;s--;)if("\n"===this.value.charAt(s)){n.start=s+1;break}var r=this.value.substring(n.start,n.end),a=r.split("\n");if(t.shiftKey){for(var o in a){var l=a[o];l.substring(0,this.tab.length)===this.tab&&(a[o]=l.substring(this.tab.length))}r=a.join("\n"),this.value="".concat(this.value.substring(0,n.start)).concat(r).concat(this.value.substring(n.end)),this.setCursor(n.start,n.start+r.length)}else{for(var h in a)a[h]=this.tab+a[h];r=a.join("\n"),this.value="".concat(this.value.substring(0,n.start)).concat(r).concat(this.value.substring(n.end)),this.setCursor(n.start,n.start+r.length)}}else{var u=this.value.substring(0,i),c=this.value.substring(i),v="".concat(u).concat(this.tab).concat(c);t.shiftKey?this.value.substring(i-this.tab.length,i)===this.tab&&(this.value="".concat(this.value.substring(0,i-this.tab.length)).concat(c),this.setCursor(i-this.tab.length)):(this.value=v,this.setCursor(i+this.tab.length),e=!1)}this.callHook("tab:after")}return e}},{key:"enterKey",value:function(t){if("Enter"===t.key){t.preventDefault(),this.callHook("enter:before");var e=this.getCursor();if(this.isMac&&t.metaKey||this.isWin&&t.ctrlKey){var i=this.getLine(),r=this.getLineCursor();e+=i.length-r,t.shiftKey&&(e-=i.length+1)}var a,o=this.value.substring(0,e),l=this.value.substring(e),h=o.charAt(o.length-1),u=l.charAt(0),c=this.levelsDeep(e),v="",f="";if(c){for(;c--;)v+=this.tab;a=v.length+1;var g,y=n(s);try{for(y.s();!(g=y.n()).done;){var p=g.value;p.open===h&&p.close===u&&(f=this.newLine)}}catch(t){y.e(t)}finally{y.f()}}else a=1;this.value="".concat(o).concat(this.newLine).concat(v).concat(f).concat(v.substring(0,v.length-this.tab.length)).concat(l),this.setCursor(e+a),this.callHook("enter:after")}}},{key:"enterKeyList",value:function(t){if("Enter"===t.key){t.preventDefault(),this.callHook("enter:before");var e,n,i=this.getCursor(),s=this.value.substring(0,i),r=this.value.substring(i),a=Math.max(0,s.split(/\r?\n/).length-2),o=this.getLines(),l=o[a];(e=l.match(/^\s*([\-\–\—\+\*\•\·\»\>]|\d+\.)\s(\[[\sx]\]\s)?/))&&(l===e[0]?(i-=l.length,o[a]="",n=o.join("\n")):(n="".concat(s).concat(e[0]).concat(r),i+=e[0].length),this.value=n,this.setCursor(i)),this.callHook("enter:after")}}},{key:"deleteKey",value:function(t){if("Backspace"===t.key&&!t.altKey){t.preventDefault(),this.callHook("delete:before");var e=this.getCursor(),i=this.value.substring(0,e),r=this.value.substring(e),a=i.charAt(i.length-1),o=r.charAt(0);if(!1===this.getSelection()){var l,h=n(s);try{for(h.s();!(l=h.n()).done;){var u=l.value;if(u.open===a&&u.close===o)return this.value="".concat(this.value.substring(0,e-1)).concat(this.value.substring(e+1)),void this.setCursor(e-1)}}catch(t){h.e(t)}finally{h.f()}this.value="".concat(this.value.substring(0,e-1)).concat(this.value.substring(e)),this.setCursor(e-1)}else{var c=this.getSelection();this.value="".concat(this.value.substring(0,c.start)).concat(this.value.substring(c.end)),this.setCursor(e)}this.callHook("delete:after")}}},{key:"moveLine",value:function(t){if(!t.shiftKey&&t.altKey&&["ArrowUp","ArrowDown"].includes(t.key)){t.preventDefault();var e=this.getSelection(),n=this.getLines();if(e){var i,s,r=this.getLineNr(e.start),a=this.getLineNr(e.end);if("ArrowUp"===t.key){if(r>0){for(var o=r;o<=a;o++)n=this.lineUp(n,o);r--,a--}}else if("ArrowDown"===t.key&&a<n.length-1){for(var l=a;l>=r;l--)n=this.lineDown(n,l);r++,a++}i=n.slice(0,r).join("\n").length,s=n.slice(0,a+1).join("\n").length,i>0&&i++,this.value=n.join("\n"),this.setCursor(i,s)}else{var h=this.getLineNr(),u=this.getCursor(),c=u;"ArrowUp"===t.key?h>0&&(c=u-(n=this.lineUp(n,h))[h].length-1):"ArrowDown"===t.key&&h<n.length-1&&(c=u+(n=this.lineDown(n,h))[h].length+1),this.value=n.join("\n"),this.setCursor(c)}}}},{key:"duplicateLine",value:function(t){if(t.shiftKey&&t.altKey&&["ArrowUp","ArrowDown"].includes(t.key)){t.preventDefault();var e=this.getSelection(),n=this.getLines();if(e){for(var i,s,r=this.getLineNr(e.start),a=this.getLineNr(e.end),o=a-r+1,l=a,h=r;h<=a;h++)l++,n.splice(l,0,n[h]);i=n.slice(0,r+o).join("\n").length,s=n.slice(0,a+o+1).join("\n").length,i>0&&i++,this.value=n.join("\n"),this.setCursor(i,s)}else{var u=this.getLineNr(),c=this.getCursor(),v=c;n.splice(u+1,0,n[u]),"ArrowDown"===t.key&&(v=c+n[u].length+1),this.value=n.join("\n"),this.setCursor(v)}}}},{key:"openedChar",value:function(t,e){e.preventDefault(),this.callHook("openChar:before");var n=this.getCursor(),i=this.value.substring(0,n),s=this.value.substring(n);this.value="".concat(i).concat(t.open).concat(t.close).concat(s),this.setCursor(n+1),this.callHook("openChar:after")}},{key:"closedChar",value:function(t,e){var n=this.getCursor();return this.value.substring(n,n+1)===t.close&&(e.preventDefault(),this.callHook("closeChar:before"),this.setCursor(n+1),this.callHook("closeChar:after"),!0)}},{key:"filter",value:function(t){var e,i=n(s);try{for(i.s();!(e=i.n()).done;){var r=e.value;r.close==t.key?(!this.options.overwrite||!this.closedChar(r,t))&&r.open===t.key&&this.options.autoOpen&&this.openedChar(r,t):r.open===t.key&&this.options.autoOpen&&this.openedChar(r,t)}}catch(t){i.e(t)}finally{i.f()}}},{key:"addEvent",value:function(t,e){return this.textarea.addEventListener(t,e,!1),this}},{key:"removeEvent",value:function(t,e){return this.textarea.removeEventListener(t,e,!1),this}},{key:"listen",value:function(){var t=this;this.listeners={keydown:[],keypress:[],keyup:[],input:[]},this.options.replaceTab&&this.listeners.keydown.push(this.tabKey.bind(this)),this.options.autoIndent&&this.listeners.keydown.push(this.enterKey.bind(this)),this.options.autoStrip&&this.listeners.keydown.push(this.deleteKey.bind(this)),this.options.continueList&&this.listeners.keydown.push(this.enterKeyList.bind(this)),this.options.moveLine&&this.listeners.keydown.push(this.moveLine.bind(this)),this.options.duplicateLine&&this.listeners.keydown.push(this.duplicateLine.bind(this)),this.listeners.keypress.push(this.filter.bind(this)),this.listeners.keydown.push((function(e){t.callHook("keydown",e)})),this.listeners.keyup.push((function(e){t.callHook("keyup",e)})),this.listeners.input.push((function(e){t.callHook("input",e)}));for(var e=0,i=Object.keys(this.listeners);e<i.length;e++){var s,r=i[e],a=n(this.listeners[r]);try{for(a.s();!(s=a.n()).done;){var o=s.value;this.addEvent(r,o)}}catch(t){a.e(t)}finally{a.f()}}return this}},{key:"defineTabSize",value:function(t){return this.textarea.style[this.prefix("tab-size")]=t,this}},{key:"defineNewLine",value:function(){var t=document.createElement("textarea");return t.value="\n",this.newLine=2===t.value.length?"\r\n":"\n",this}},{key:"lineUp",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getLines(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(e>0){var n=t[e],i=t[e-1];t[e]=i,t[e-1]=n}return t}},{key:"lineDown",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getLines(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(e<t.length-1){var n=t[e],i=t[e+1];t[e]=i,t[e+1]=n}return t}},{key:"prefix",value:function(t,e,n,i){for(i?i=e.toUpperCase():e=4;!i&&e--;i=(i=i.replace(/-(.)/g,this.prefix))in(new Image).style&&i)i=[["Moz-","Webkit-","Ms-","O-"][e]]+t;return i||t}},{key:"init",value:function(){return this.isMac=/(Mac)/gi.test(navigator.platform),this.isWin=/(Win)/gi.test(navigator.platform),this.textarea&&(this.callHook("init:before"),this.defineNewLine(),this.options.softTabs?this.tab=" ".repeat(this.options.tabSize):(this.tab="\t",this.defineTabSize(this.options.tabSize)),this.listen(),this.callHook("init:after")),this}},{key:"destroy",value:function(){this.callHook("destroy:before");for(var t=0,e=Object.keys(this.listeners);t<e.length;t++){var i,s=e[t],r=n(this.listeners[s]);try{for(r.s();!(i=r.n()).done;){var a=i.value;this.removeEvent(s,a)}}catch(t){r.e(t)}finally{r.f()}}return this.callHook("destroy:before"),this}},{key:"value",get:function(){return this.textarea.value.replace(/\r/g,"")},set:function(t){this.textarea.value=t}}])&&t(a.prototype,o),l&&t(a,l),e}()}));