(window.webpackJsonp=window.webpackJsonp||[]).push([["npm._htmlparser26.1.0@htmlparser2"],{5105:function(t,e,i){"use strict";var s,n=this&&this.__extends||(s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=this&&this.__createBinding||(Object.create?function(t,e,i,s){void 0===s&&(s=i),Object.defineProperty(t,s,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,s){void 0===s&&(s=i),t[s]=e[i]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&a(e,t,i);return o(e,t),e},h=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.parseFeed=e.FeedHandler=void 0;var c,u,l=h(i("8c1c")),d=r(i("ed67")),p=i("b0e5");!function(t){t[t.image=0]="image",t[t.audio=1]="audio",t[t.video=2]="video",t[t.document=3]="document",t[t.executable=4]="executable"}(c||(c={})),function(t){t[t.sample=0]="sample",t[t.full=1]="full",t[t.nonstop=2]="nonstop"}(u||(u={}));var f=function(t){function e(e,i){return"object"==typeof e&&(i=e=void 0),t.call(this,e,i)||this}return n(e,t),e.prototype.onend=function(){var t,e,i=m(S,this.dom);if(i){var s={};if("feed"===i.name){var n=i.children;s.type="atom",x(s,"id","id",n),x(s,"title","title",n);var a=y("href",m("link",n));a&&(s.link=a),x(s,"description","subtitle",n),(o=g("updated",n))&&(s.updated=new Date(o)),x(s,"author","email",n,!0),s.items=b("entry",n).map((function(t){var e={},i=t.children;x(e,"id","id",i),x(e,"title","title",i);var s=y("href",m("link",i));s&&(e.link=s);var n=g("summary",i)||g("content",i);n&&(e.description=n);var a=g("updated",i);return a&&(e.pubDate=new Date(a)),e.media=_(i),e}))}else{var o;n=null!==(e=null===(t=m("channel",i.children))||void 0===t?void 0:t.children)&&void 0!==e?e:[];s.type=i.name.substr(0,3),s.id="",x(s,"title","title",n),x(s,"link","link",n),x(s,"description","description",n),(o=g("lastBuildDate",n))&&(s.updated=new Date(o)),x(s,"author","managingEditor",n,!0),s.items=b("item",i.children).map((function(t){var e={},i=t.children;x(e,"id","guid",i),x(e,"title","title",i),x(e,"link","link",i),x(e,"description","description",i);var s=g("pubDate",i);return s&&(e.pubDate=new Date(s)),e.media=_(i),e}))}this.feed=s,this.handleCallback(null)}else this.handleCallback(new Error("couldn't find root of feed"))},e}(l.default);function _(t){return b("media:content",t).map((function(t){var e={medium:t.attribs.medium,isDefault:!!t.attribs.isDefault};return t.attribs.url&&(e.url=t.attribs.url),t.attribs.fileSize&&(e.fileSize=parseInt(t.attribs.fileSize,10)),t.attribs.type&&(e.type=t.attribs.type),t.attribs.expression&&(e.expression=t.attribs.expression),t.attribs.bitrate&&(e.bitrate=parseInt(t.attribs.bitrate,10)),t.attribs.framerate&&(e.framerate=parseInt(t.attribs.framerate,10)),t.attribs.samplingrate&&(e.samplingrate=parseInt(t.attribs.samplingrate,10)),t.attribs.channels&&(e.channels=parseInt(t.attribs.channels,10)),t.attribs.duration&&(e.duration=parseInt(t.attribs.duration,10)),t.attribs.height&&(e.height=parseInt(t.attribs.height,10)),t.attribs.width&&(e.width=parseInt(t.attribs.width,10)),t.attribs.lang&&(e.lang=t.attribs.lang),e}))}function b(t,e){return d.getElementsByTagName(t,e,!0)}function m(t,e){return d.getElementsByTagName(t,e,!0,1)[0]}function g(t,e,i){return void 0===i&&(i=!1),d.getText(d.getElementsByTagName(t,e,i,1)).trim()}function y(t,e){return e?e.attribs[t]:null}function x(t,e,i,s,n){void 0===n&&(n=!1);var a=g(i,s,n);a&&(t[e]=a)}function S(t){return"rss"===t||"feed"===t||"rdf:RDF"===t}e.FeedHandler=f,e.parseFeed=function(t,e){void 0===e&&(e={xmlMode:!0});var i=new f(e);return new p.Parser(i,e).end(t),i.feed}},b0e5:function(t,e,i){"use strict";var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Parser=void 0;var n=s(i("f627")),a=new Set(["input","option","optgroup","select","button","datalist","textarea"]),o=new Set(["p"]),r={tr:new Set(["tr","th","td"]),th:new Set(["th"]),td:new Set(["thead","th","td"]),body:new Set(["head","link","script"]),li:new Set(["li"]),p:o,h1:o,h2:o,h3:o,h4:o,h5:o,h6:o,select:a,input:a,output:a,button:a,datalist:a,textarea:a,option:new Set(["option"]),optgroup:new Set(["optgroup","option"]),dd:new Set(["dt","dd"]),dt:new Set(["dt","dd"]),address:o,article:o,aside:o,blockquote:o,details:o,div:o,dl:o,fieldset:o,figcaption:o,figure:o,footer:o,form:o,header:o,hr:o,main:o,nav:o,ol:o,pre:o,section:o,table:o,ul:o,rt:new Set(["rt","rp"]),rp:new Set(["rt","rp"]),tbody:new Set(["thead","tbody"]),tfoot:new Set(["thead","tbody"])},h=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"]),c=new Set(["math","svg"]),u=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),l=/\s|\//,d=function(){function t(t,e){var i,s,a,o,r;void 0===e&&(e={}),this.startIndex=0,this.endIndex=null,this.tagname="",this.attribname="",this.attribvalue="",this.attribs=null,this.stack=[],this.foreignContext=[],this.options=e,this.cbs=null!=t?t:{},this.lowerCaseTagNames=null!==(i=e.lowerCaseTags)&&void 0!==i?i:!e.xmlMode,this.lowerCaseAttributeNames=null!==(s=e.lowerCaseAttributeNames)&&void 0!==s?s:!e.xmlMode,this.tokenizer=new(null!==(a=e.Tokenizer)&&void 0!==a?a:n.default)(this.options,this),null===(r=(o=this.cbs).onparserinit)||void 0===r||r.call(o,this)}return t.prototype.updatePosition=function(t){null===this.endIndex?this.tokenizer.sectionStart<=t?this.startIndex=0:this.startIndex=this.tokenizer.sectionStart-t:this.startIndex=this.endIndex+1,this.endIndex=this.tokenizer.getAbsoluteIndex()},t.prototype.ontext=function(t){var e,i;this.updatePosition(1),this.endIndex--,null===(i=(e=this.cbs).ontext)||void 0===i||i.call(e,t)},t.prototype.onopentagname=function(t){var e,i;if(this.lowerCaseTagNames&&(t=t.toLowerCase()),this.tagname=t,!this.options.xmlMode&&Object.prototype.hasOwnProperty.call(r,t))for(var s=void 0;this.stack.length>0&&r[t].has(s=this.stack[this.stack.length-1]);)this.onclosetag(s);!this.options.xmlMode&&h.has(t)||(this.stack.push(t),c.has(t)?this.foreignContext.push(!0):u.has(t)&&this.foreignContext.push(!1)),null===(i=(e=this.cbs).onopentagname)||void 0===i||i.call(e,t),this.cbs.onopentag&&(this.attribs={})},t.prototype.onopentagend=function(){var t,e;this.updatePosition(1),this.attribs&&(null===(e=(t=this.cbs).onopentag)||void 0===e||e.call(t,this.tagname,this.attribs),this.attribs=null),!this.options.xmlMode&&this.cbs.onclosetag&&h.has(this.tagname)&&this.cbs.onclosetag(this.tagname),this.tagname=""},t.prototype.onclosetag=function(t){if(this.updatePosition(1),this.lowerCaseTagNames&&(t=t.toLowerCase()),(c.has(t)||u.has(t))&&this.foreignContext.pop(),!this.stack.length||!this.options.xmlMode&&h.has(t))this.options.xmlMode||"br"!==t&&"p"!==t||(this.onopentagname(t),this.closeCurrentTag());else{var e=this.stack.lastIndexOf(t);if(-1!==e)if(this.cbs.onclosetag)for(e=this.stack.length-e;e--;)this.cbs.onclosetag(this.stack.pop());else this.stack.length=e;else"p"!==t||this.options.xmlMode||(this.onopentagname(t),this.closeCurrentTag())}},t.prototype.onselfclosingtag=function(){this.options.xmlMode||this.options.recognizeSelfClosing||this.foreignContext[this.foreignContext.length-1]?this.closeCurrentTag():this.onopentagend()},t.prototype.closeCurrentTag=function(){var t,e,i=this.tagname;this.onopentagend(),this.stack[this.stack.length-1]===i&&(null===(e=(t=this.cbs).onclosetag)||void 0===e||e.call(t,i),this.stack.pop())},t.prototype.onattribname=function(t){this.lowerCaseAttributeNames&&(t=t.toLowerCase()),this.attribname=t},t.prototype.onattribdata=function(t){this.attribvalue+=t},t.prototype.onattribend=function(t){var e,i;null===(i=(e=this.cbs).onattribute)||void 0===i||i.call(e,this.attribname,this.attribvalue,t),this.attribs&&!Object.prototype.hasOwnProperty.call(this.attribs,this.attribname)&&(this.attribs[this.attribname]=this.attribvalue),this.attribname="",this.attribvalue=""},t.prototype.getInstructionName=function(t){var e=t.search(l),i=e<0?t:t.substr(0,e);return this.lowerCaseTagNames&&(i=i.toLowerCase()),i},t.prototype.ondeclaration=function(t){if(this.cbs.onprocessinginstruction){var e=this.getInstructionName(t);this.cbs.onprocessinginstruction("!"+e,"!"+t)}},t.prototype.onprocessinginstruction=function(t){if(this.cbs.onprocessinginstruction){var e=this.getInstructionName(t);this.cbs.onprocessinginstruction("?"+e,"?"+t)}},t.prototype.oncomment=function(t){var e,i,s,n;this.updatePosition(4),null===(i=(e=this.cbs).oncomment)||void 0===i||i.call(e,t),null===(n=(s=this.cbs).oncommentend)||void 0===n||n.call(s)},t.prototype.oncdata=function(t){var e,i,s,n,a,o;this.updatePosition(1),this.options.xmlMode||this.options.recognizeCDATA?(null===(i=(e=this.cbs).oncdatastart)||void 0===i||i.call(e),null===(n=(s=this.cbs).ontext)||void 0===n||n.call(s,t),null===(o=(a=this.cbs).oncdataend)||void 0===o||o.call(a)):this.oncomment("[CDATA["+t+"]]")},t.prototype.onerror=function(t){var e,i;null===(i=(e=this.cbs).onerror)||void 0===i||i.call(e,t)},t.prototype.onend=function(){var t,e;if(this.cbs.onclosetag)for(var i=this.stack.length;i>0;this.cbs.onclosetag(this.stack[--i]));null===(e=(t=this.cbs).onend)||void 0===e||e.call(t)},t.prototype.reset=function(){var t,e,i,s;null===(e=(t=this.cbs).onreset)||void 0===e||e.call(t),this.tokenizer.reset(),this.tagname="",this.attribname="",this.attribs=null,this.stack=[],null===(s=(i=this.cbs).onparserinit)||void 0===s||s.call(i,this)},t.prototype.parseComplete=function(t){this.reset(),this.end(t)},t.prototype.write=function(t){this.tokenizer.write(t)},t.prototype.end=function(t){this.tokenizer.end(t)},t.prototype.pause=function(){this.tokenizer.pause()},t.prototype.resume=function(){this.tokenizer.resume()},t.prototype.parseChunk=function(t){this.write(t)},t.prototype.done=function(t){this.end(t)},t}();e.Parser=d},b448:function(t,e,i){"use strict";var s=this&&this.__createBinding||(Object.create?function(t,e,i,s){void 0===s&&(s=i),Object.defineProperty(t,s,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,s){void 0===s&&(s=i),t[s]=e[i]}),n=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&s(e,t,i);return n(e,t),e},o=this&&this.__exportStar||function(t,e){for(var i in t)"default"===i||Object.prototype.hasOwnProperty.call(e,i)||s(e,t,i)},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.RssHandler=e.DefaultHandler=e.DomUtils=e.ElementType=e.Tokenizer=e.createDomStream=e.parseDOM=e.parseDocument=e.DomHandler=e.Parser=void 0;var h=i("b0e5");Object.defineProperty(e,"Parser",{enumerable:!0,get:function(){return h.Parser}});var c=i("8c1c");function u(t,e){var i=new c.DomHandler(void 0,e);return new h.Parser(i,e).end(t),i.root}Object.defineProperty(e,"DomHandler",{enumerable:!0,get:function(){return c.DomHandler}}),Object.defineProperty(e,"DefaultHandler",{enumerable:!0,get:function(){return c.DomHandler}}),e.parseDocument=u,e.parseDOM=function(t,e){return u(t,e).children},e.createDomStream=function(t,e,i){var s=new c.DomHandler(t,e,i);return new h.Parser(s,e)};var l=i("f627");Object.defineProperty(e,"Tokenizer",{enumerable:!0,get:function(){return r(l).default}});var d=a(i("fab6"));e.ElementType=d,o(i("5105"),e),e.DomUtils=a(i("ed67"));var p=i("5105");Object.defineProperty(e,"RssHandler",{enumerable:!0,get:function(){return p.FeedHandler}})},f627:function(t,e,i){"use strict";var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=s(i("2d9f")),a=s(i("59fe")),o=s(i("e9a1")),r=s(i("1e1a"));function h(t){return" "===t||"\n"===t||"\t"===t||"\f"===t||"\r"===t}function c(t){return t>="a"&&t<="z"||t>="A"&&t<="Z"}function u(t,e,i){var s=t.toLowerCase();return t===s?function(t,n){n===s?t._state=e:(t._state=i,t._index--)}:function(n,a){a===s||a===t?n._state=e:(n._state=i,n._index--)}}function l(t,e){var i=t.toLowerCase();return function(s,n){n===i||n===t?s._state=e:(s._state=3,s._index--)}}var d=u("C",24,16),p=u("D",25,16),f=u("A",26,16),_=u("T",27,16),b=u("A",28,16),m=l("R",35),g=l("I",36),y=l("P",37),x=l("T",38),S=u("R",40,1),v=u("I",41,1),w=u("P",42,1),C=u("T",43,1),I=l("Y",45),T=l("L",46),k=l("E",47),A=u("Y",49,1),D=u("L",50,1),O=u("E",51,1),P=l("I",54),E=l("T",55),N=l("L",56),M=l("E",57),j=u("I",58,1),B=u("T",59,1),L=u("L",60,1),z=u("E",61,1),H=u("#",63,64),V=u("X",66,65),F=function(){function t(t,e){var i;this._state=1,this.buffer="",this.sectionStart=0,this._index=0,this.bufferOffset=0,this.baseState=1,this.special=1,this.running=!0,this.ended=!1,this.cbs=e,this.xmlMode=!!(null==t?void 0:t.xmlMode),this.decodeEntities=null===(i=null==t?void 0:t.decodeEntities)||void 0===i||i}return t.prototype.reset=function(){this._state=1,this.buffer="",this.sectionStart=0,this._index=0,this.bufferOffset=0,this.baseState=1,this.special=1,this.running=!0,this.ended=!1},t.prototype.write=function(t){this.ended&&this.cbs.onerror(Error(".write() after done!")),this.buffer+=t,this.parse()},t.prototype.end=function(t){this.ended&&this.cbs.onerror(Error(".end() after done!")),t&&this.write(t),this.ended=!0,this.running&&this.finish()},t.prototype.pause=function(){this.running=!1},t.prototype.resume=function(){this.running=!0,this._index<this.buffer.length&&this.parse(),this.ended&&this.finish()},t.prototype.getAbsoluteIndex=function(){return this.bufferOffset+this._index},t.prototype.stateText=function(t){"<"===t?(this._index>this.sectionStart&&this.cbs.ontext(this.getSection()),this._state=2,this.sectionStart=this._index):!this.decodeEntities||"&"!==t||1!==this.special&&4!==this.special||(this._index>this.sectionStart&&this.cbs.ontext(this.getSection()),this.baseState=1,this._state=62,this.sectionStart=this._index)},t.prototype.isTagStartChar=function(t){return c(t)||this.xmlMode&&!h(t)&&"/"!==t&&">"!==t},t.prototype.stateBeforeTagName=function(t){"/"===t?this._state=5:"<"===t?(this.cbs.ontext(this.getSection()),this.sectionStart=this._index):">"===t||1!==this.special||h(t)?this._state=1:"!"===t?(this._state=15,this.sectionStart=this._index+1):"?"===t?(this._state=17,this.sectionStart=this._index+1):this.isTagStartChar(t)?(this._state=this.xmlMode||"s"!==t&&"S"!==t?this.xmlMode||"t"!==t&&"T"!==t?3:52:32,this.sectionStart=this._index):this._state=1},t.prototype.stateInTagName=function(t){("/"===t||">"===t||h(t))&&(this.emitToken("onopentagname"),this._state=8,this._index--)},t.prototype.stateBeforeClosingTagName=function(t){h(t)||(">"===t?this._state=1:1!==this.special?4===this.special||"s"!==t&&"S"!==t?4!==this.special||"t"!==t&&"T"!==t?(this._state=1,this._index--):this._state=53:this._state=33:this.isTagStartChar(t)?(this._state=6,this.sectionStart=this._index):(this._state=20,this.sectionStart=this._index))},t.prototype.stateInClosingTagName=function(t){(">"===t||h(t))&&(this.emitToken("onclosetag"),this._state=7,this._index--)},t.prototype.stateAfterClosingTagName=function(t){">"===t&&(this._state=1,this.sectionStart=this._index+1)},t.prototype.stateBeforeAttributeName=function(t){">"===t?(this.cbs.onopentagend(),this._state=1,this.sectionStart=this._index+1):"/"===t?this._state=4:h(t)||(this._state=9,this.sectionStart=this._index)},t.prototype.stateInSelfClosingTag=function(t){">"===t?(this.cbs.onselfclosingtag(),this._state=1,this.sectionStart=this._index+1,this.special=1):h(t)||(this._state=8,this._index--)},t.prototype.stateInAttributeName=function(t){("="===t||"/"===t||">"===t||h(t))&&(this.cbs.onattribname(this.getSection()),this.sectionStart=-1,this._state=10,this._index--)},t.prototype.stateAfterAttributeName=function(t){"="===t?this._state=11:"/"===t||">"===t?(this.cbs.onattribend(void 0),this._state=8,this._index--):h(t)||(this.cbs.onattribend(void 0),this._state=9,this.sectionStart=this._index)},t.prototype.stateBeforeAttributeValue=function(t){'"'===t?(this._state=12,this.sectionStart=this._index+1):"'"===t?(this._state=13,this.sectionStart=this._index+1):h(t)||(this._state=14,this.sectionStart=this._index,this._index--)},t.prototype.handleInAttributeValue=function(t,e){t===e?(this.emitToken("onattribdata"),this.cbs.onattribend(e),this._state=8):this.decodeEntities&&"&"===t&&(this.emitToken("onattribdata"),this.baseState=this._state,this._state=62,this.sectionStart=this._index)},t.prototype.stateInAttributeValueDoubleQuotes=function(t){this.handleInAttributeValue(t,'"')},t.prototype.stateInAttributeValueSingleQuotes=function(t){this.handleInAttributeValue(t,"'")},t.prototype.stateInAttributeValueNoQuotes=function(t){h(t)||">"===t?(this.emitToken("onattribdata"),this.cbs.onattribend(null),this._state=8,this._index--):this.decodeEntities&&"&"===t&&(this.emitToken("onattribdata"),this.baseState=this._state,this._state=62,this.sectionStart=this._index)},t.prototype.stateBeforeDeclaration=function(t){this._state="["===t?23:"-"===t?18:16},t.prototype.stateInDeclaration=function(t){">"===t&&(this.cbs.ondeclaration(this.getSection()),this._state=1,this.sectionStart=this._index+1)},t.prototype.stateInProcessingInstruction=function(t){">"===t&&(this.cbs.onprocessinginstruction(this.getSection()),this._state=1,this.sectionStart=this._index+1)},t.prototype.stateBeforeComment=function(t){"-"===t?(this._state=19,this.sectionStart=this._index+1):this._state=16},t.prototype.stateInComment=function(t){"-"===t&&(this._state=21)},t.prototype.stateInSpecialComment=function(t){">"===t&&(this.cbs.oncomment(this.buffer.substring(this.sectionStart,this._index)),this._state=1,this.sectionStart=this._index+1)},t.prototype.stateAfterComment1=function(t){this._state="-"===t?22:19},t.prototype.stateAfterComment2=function(t){">"===t?(this.cbs.oncomment(this.buffer.substring(this.sectionStart,this._index-2)),this._state=1,this.sectionStart=this._index+1):"-"!==t&&(this._state=19)},t.prototype.stateBeforeCdata6=function(t){"["===t?(this._state=29,this.sectionStart=this._index+1):(this._state=16,this._index--)},t.prototype.stateInCdata=function(t){"]"===t&&(this._state=30)},t.prototype.stateAfterCdata1=function(t){this._state="]"===t?31:29},t.prototype.stateAfterCdata2=function(t){">"===t?(this.cbs.oncdata(this.buffer.substring(this.sectionStart,this._index-2)),this._state=1,this.sectionStart=this._index+1):"]"!==t&&(this._state=29)},t.prototype.stateBeforeSpecialS=function(t){"c"===t||"C"===t?this._state=34:"t"===t||"T"===t?this._state=44:(this._state=3,this._index--)},t.prototype.stateBeforeSpecialSEnd=function(t){2!==this.special||"c"!==t&&"C"!==t?3!==this.special||"t"!==t&&"T"!==t?this._state=1:this._state=48:this._state=39},t.prototype.stateBeforeSpecialLast=function(t,e){("/"===t||">"===t||h(t))&&(this.special=e),this._state=3,this._index--},t.prototype.stateAfterSpecialLast=function(t,e){">"===t||h(t)?(this.special=1,this._state=6,this.sectionStart=this._index-e,this._index--):this._state=1},t.prototype.parseFixedEntity=function(t){if(void 0===t&&(t=this.xmlMode?r.default:a.default),this.sectionStart+1<this._index){var e=this.buffer.substring(this.sectionStart+1,this._index);Object.prototype.hasOwnProperty.call(t,e)&&(this.emitPartial(t[e]),this.sectionStart=this._index+1)}},t.prototype.parseLegacyEntity=function(){for(var t=this.sectionStart+1,e=Math.min(this._index-t,6);e>=2;){var i=this.buffer.substr(t,e);if(Object.prototype.hasOwnProperty.call(o.default,i))return this.emitPartial(o.default[i]),void(this.sectionStart+=e+1);e--}},t.prototype.stateInNamedEntity=function(t){";"===t?(this.parseFixedEntity(),1===this.baseState&&this.sectionStart+1<this._index&&!this.xmlMode&&this.parseLegacyEntity(),this._state=this.baseState):(t<"0"||t>"9")&&!c(t)&&(this.xmlMode||this.sectionStart+1===this._index||(1!==this.baseState?"="!==t&&this.parseFixedEntity(o.default):this.parseLegacyEntity()),this._state=this.baseState,this._index--)},t.prototype.decodeNumericEntity=function(t,e,i){var s=this.sectionStart+t;if(s!==this._index){var a=this.buffer.substring(s,this._index),o=parseInt(a,e);this.emitPartial(n.default(o)),this.sectionStart=i?this._index+1:this._index}this._state=this.baseState},t.prototype.stateInNumericEntity=function(t){";"===t?this.decodeNumericEntity(2,10,!0):(t<"0"||t>"9")&&(this.xmlMode?this._state=this.baseState:this.decodeNumericEntity(2,10,!1),this._index--)},t.prototype.stateInHexEntity=function(t){";"===t?this.decodeNumericEntity(3,16,!0):(t<"a"||t>"f")&&(t<"A"||t>"F")&&(t<"0"||t>"9")&&(this.xmlMode?this._state=this.baseState:this.decodeNumericEntity(3,16,!1),this._index--)},t.prototype.cleanup=function(){this.sectionStart<0?(this.buffer="",this.bufferOffset+=this._index,this._index=0):this.running&&(1===this._state?(this.sectionStart!==this._index&&this.cbs.ontext(this.buffer.substr(this.sectionStart)),this.buffer="",this.bufferOffset+=this._index,this._index=0):this.sectionStart===this._index?(this.buffer="",this.bufferOffset+=this._index,this._index=0):(this.buffer=this.buffer.substr(this.sectionStart),this._index-=this.sectionStart,this.bufferOffset+=this.sectionStart),this.sectionStart=0)},t.prototype.parse=function(){for(;this._index<this.buffer.length&&this.running;){var t=this.buffer.charAt(this._index);1===this._state?this.stateText(t):12===this._state?this.stateInAttributeValueDoubleQuotes(t):9===this._state?this.stateInAttributeName(t):19===this._state?this.stateInComment(t):20===this._state?this.stateInSpecialComment(t):8===this._state?this.stateBeforeAttributeName(t):3===this._state?this.stateInTagName(t):6===this._state?this.stateInClosingTagName(t):2===this._state?this.stateBeforeTagName(t):10===this._state?this.stateAfterAttributeName(t):13===this._state?this.stateInAttributeValueSingleQuotes(t):11===this._state?this.stateBeforeAttributeValue(t):5===this._state?this.stateBeforeClosingTagName(t):7===this._state?this.stateAfterClosingTagName(t):32===this._state?this.stateBeforeSpecialS(t):21===this._state?this.stateAfterComment1(t):14===this._state?this.stateInAttributeValueNoQuotes(t):4===this._state?this.stateInSelfClosingTag(t):16===this._state?this.stateInDeclaration(t):15===this._state?this.stateBeforeDeclaration(t):22===this._state?this.stateAfterComment2(t):18===this._state?this.stateBeforeComment(t):33===this._state?this.stateBeforeSpecialSEnd(t):53===this._state?j(this,t):39===this._state?S(this,t):40===this._state?v(this,t):41===this._state?w(this,t):34===this._state?m(this,t):35===this._state?g(this,t):36===this._state?y(this,t):37===this._state?x(this,t):38===this._state?this.stateBeforeSpecialLast(t,2):42===this._state?C(this,t):43===this._state?this.stateAfterSpecialLast(t,6):44===this._state?I(this,t):29===this._state?this.stateInCdata(t):45===this._state?T(this,t):46===this._state?k(this,t):47===this._state?this.stateBeforeSpecialLast(t,3):48===this._state?A(this,t):49===this._state?D(this,t):50===this._state?O(this,t):51===this._state?this.stateAfterSpecialLast(t,5):52===this._state?P(this,t):54===this._state?E(this,t):55===this._state?N(this,t):56===this._state?M(this,t):57===this._state?this.stateBeforeSpecialLast(t,4):58===this._state?B(this,t):59===this._state?L(this,t):60===this._state?z(this,t):61===this._state?this.stateAfterSpecialLast(t,5):17===this._state?this.stateInProcessingInstruction(t):64===this._state?this.stateInNamedEntity(t):23===this._state?d(this,t):62===this._state?H(this,t):24===this._state?p(this,t):25===this._state?f(this,t):30===this._state?this.stateAfterCdata1(t):31===this._state?this.stateAfterCdata2(t):26===this._state?_(this,t):27===this._state?b(this,t):28===this._state?this.stateBeforeCdata6(t):66===this._state?this.stateInHexEntity(t):65===this._state?this.stateInNumericEntity(t):63===this._state?V(this,t):this.cbs.onerror(Error("unknown _state"),this._state),this._index++}this.cleanup()},t.prototype.finish=function(){this.sectionStart<this._index&&this.handleTrailingData(),this.cbs.onend()},t.prototype.handleTrailingData=function(){var t=this.buffer.substr(this.sectionStart);29===this._state||30===this._state||31===this._state?this.cbs.oncdata(t):19===this._state||21===this._state||22===this._state?this.cbs.oncomment(t):64!==this._state||this.xmlMode?65!==this._state||this.xmlMode?66!==this._state||this.xmlMode?3!==this._state&&8!==this._state&&11!==this._state&&10!==this._state&&9!==this._state&&13!==this._state&&12!==this._state&&14!==this._state&&6!==this._state&&this.cbs.ontext(t):(this.decodeNumericEntity(3,16,!1),this.sectionStart<this._index&&(this._state=this.baseState,this.handleTrailingData())):(this.decodeNumericEntity(2,10,!1),this.sectionStart<this._index&&(this._state=this.baseState,this.handleTrailingData())):(this.parseLegacyEntity(),this.sectionStart<this._index&&(this._state=this.baseState,this.handleTrailingData()))},t.prototype.getSection=function(){return this.buffer.substring(this.sectionStart,this._index)},t.prototype.emitToken=function(t){this.cbs[t](this.getSection()),this.sectionStart=-1},t.prototype.emitPartial=function(t){1!==this.baseState?this.cbs.onattribdata(t):this.cbs.ontext(t)},t}();e.default=F}}]);