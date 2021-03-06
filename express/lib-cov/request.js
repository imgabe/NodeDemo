/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['request.js']) {
  _$jscoverage['request.js'] = [];
  _$jscoverage['request.js'][12] = 0;
  _$jscoverage['request.js'][22] = 0;
  _$jscoverage['request.js'][49] = 0;
  _$jscoverage['request.js'][50] = 0;
  _$jscoverage['request.js'][53] = 0;
  _$jscoverage['request.js'][56] = 0;
  _$jscoverage['request.js'][86] = 0;
  _$jscoverage['request.js'][87] = 0;
  _$jscoverage['request.js'][99] = 0;
  _$jscoverage['request.js'][100] = 0;
  _$jscoverage['request.js'][101] = 0;
  _$jscoverage['request.js'][115] = 0;
  _$jscoverage['request.js'][116] = 0;
  _$jscoverage['request.js'][117] = 0;
  _$jscoverage['request.js'][141] = 0;
  _$jscoverage['request.js'][142] = 0;
  _$jscoverage['request.js'][143] = 0;
  _$jscoverage['request.js'][161] = 0;
  _$jscoverage['request.js'][162] = 0;
  _$jscoverage['request.js'][163] = 0;
  _$jscoverage['request.js'][167] = 0;
  _$jscoverage['request.js'][185] = 0;
  _$jscoverage['request.js'][186] = 0;
  _$jscoverage['request.js'][187] = 0;
  _$jscoverage['request.js'][191] = 0;
  _$jscoverage['request.js'][213] = 0;
  _$jscoverage['request.js'][215] = 0;
  _$jscoverage['request.js'][218] = 0;
  _$jscoverage['request.js'][221] = 0;
  _$jscoverage['request.js'][225] = 0;
  _$jscoverage['request.js'][227] = 0;
  _$jscoverage['request.js'][267] = 0;
  _$jscoverage['request.js'][268] = 0;
  _$jscoverage['request.js'][269] = 0;
  _$jscoverage['request.js'][270] = 0;
  _$jscoverage['request.js'][271] = 0;
  _$jscoverage['request.js'][272] = 0;
  _$jscoverage['request.js'][273] = 0;
  _$jscoverage['request.js'][274] = 0;
  _$jscoverage['request.js'][275] = 0;
  _$jscoverage['request.js'][276] = 0;
  _$jscoverage['request.js'][277] = 0;
  _$jscoverage['request.js'][279] = 0;
  _$jscoverage['request.js'][294] = 0;
  _$jscoverage['request.js'][295] = 0;
  _$jscoverage['request.js'][296] = 0;
  _$jscoverage['request.js'][310] = 0;
  _$jscoverage['request.js'][311] = 0;
  _$jscoverage['request.js'][324] = 0;
  _$jscoverage['request.js'][325] = 0;
  _$jscoverage['request.js'][338] = 0;
  _$jscoverage['request.js'][339] = 0;
  _$jscoverage['request.js'][351] = 0;
  _$jscoverage['request.js'][352] = 0;
  _$jscoverage['request.js'][364] = 0;
  _$jscoverage['request.js'][365] = 0;
  _$jscoverage['request.js'][375] = 0;
  _$jscoverage['request.js'][376] = 0;
  _$jscoverage['request.js'][377] = 0;
}
_$jscoverage['request.js'][12]++;
var http = require("http"), utils = require("./utils"), connect = require("connect"), parse = require("url").parse, mime = require("mime");
_$jscoverage['request.js'][22]++;
var req = exports = module.exports = {__proto__: http.IncomingMessage.prototype};
_$jscoverage['request.js'][49]++;
req.get = (function (name) {
  _$jscoverage['request.js'][50]++;
  switch (name = name.toLowerCase()) {
  case "referer":
  case "referrer":
    _$jscoverage['request.js'][53]++;
    return this.headers.referrer || this.headers.referer;
  default:
    _$jscoverage['request.js'][56]++;
    return this.headers[name];
  }
});
_$jscoverage['request.js'][86]++;
req.accepts = (function (type) {
  _$jscoverage['request.js'][87]++;
  return utils.accepts(type, this.get("Accept"));
});
_$jscoverage['request.js'][99]++;
req.acceptsCharset = (function (charset) {
  _$jscoverage['request.js'][100]++;
  var accepted = this.acceptedCharsets;
  _$jscoverage['request.js'][101]++;
  return accepted.length? ~ accepted.indexOf(charset): true;
});
_$jscoverage['request.js'][115]++;
req.acceptsLanguage = (function (lang) {
  _$jscoverage['request.js'][116]++;
  var accepted = this.acceptedLanguages;
  _$jscoverage['request.js'][117]++;
  return accepted.length? ~ accepted.indexOf(lang): true;
});
_$jscoverage['request.js'][141]++;
req.__defineGetter__("accepted", (function () {
  _$jscoverage['request.js'][142]++;
  var accept = this.get("Accept");
  _$jscoverage['request.js'][143]++;
  return accept? utils.parseAccept(accept): [];
}));
_$jscoverage['request.js'][161]++;
req.__defineGetter__("acceptedLanguages", (function () {
  _$jscoverage['request.js'][162]++;
  var accept = this.get("Accept-Language");
  _$jscoverage['request.js'][163]++;
  return accept? utils.parseQuality(accept).map((function (obj) {
  _$jscoverage['request.js'][167]++;
  return obj.value;
})): [];
}));
_$jscoverage['request.js'][185]++;
req.__defineGetter__("acceptedCharsets", (function () {
  _$jscoverage['request.js'][186]++;
  var accept = this.get("Accept-Charset");
  _$jscoverage['request.js'][187]++;
  return accept? utils.parseQuality(accept).map((function (obj) {
  _$jscoverage['request.js'][191]++;
  return obj.value;
})): [];
}));
_$jscoverage['request.js'][213]++;
req.param = (function (name, defaultValue) {
  _$jscoverage['request.js'][215]++;
  if (this.body && undefined !== this.body[name]) {
    _$jscoverage['request.js'][215]++;
    return this.body[name];
  }
  _$jscoverage['request.js'][218]++;
  if (this.params && this.params.hasOwnProperty(name) && undefined !== this.params[name]) {
    _$jscoverage['request.js'][221]++;
    return this.params[name];
  }
  _$jscoverage['request.js'][225]++;
  if (undefined !== this.query[name]) {
    _$jscoverage['request.js'][225]++;
    return this.query[name];
  }
  _$jscoverage['request.js'][227]++;
  return defaultValue;
});
_$jscoverage['request.js'][267]++;
req.is = (function (type) {
  _$jscoverage['request.js'][268]++;
  var ct = this.get("Content-Type");
  _$jscoverage['request.js'][269]++;
  if (! ct) {
    _$jscoverage['request.js'][269]++;
    return false;
  }
  _$jscoverage['request.js'][270]++;
  ct = ct.split(";")[0];
  _$jscoverage['request.js'][271]++;
  if (! ~ type.indexOf("/")) {
    _$jscoverage['request.js'][271]++;
    type = mime.lookup(type);
  }
  _$jscoverage['request.js'][272]++;
  if (~ type.indexOf("*")) {
    _$jscoverage['request.js'][273]++;
    type = type.split("/");
    _$jscoverage['request.js'][274]++;
    ct = ct.split("/");
    _$jscoverage['request.js'][275]++;
    if ("*" == type[0] && type[1] == ct[1]) {
      _$jscoverage['request.js'][275]++;
      return true;
    }
    _$jscoverage['request.js'][276]++;
    if ("*" == type[1] && type[0] == ct[0]) {
      _$jscoverage['request.js'][276]++;
      return true;
    }
    _$jscoverage['request.js'][277]++;
    return false;
  }
  _$jscoverage['request.js'][279]++;
  return ! ! ~ ct.indexOf(type);
});
_$jscoverage['request.js'][294]++;
req.__defineGetter__("protocol", (function (trustProxy) {
  _$jscoverage['request.js'][295]++;
  var trustProxy = this.app.settings["trust proxy"];
  _$jscoverage['request.js'][296]++;
  return this.secure? "https": trustProxy? (this.get("X-Forwarded-Proto") || "http"): "http";
}));
_$jscoverage['request.js'][310]++;
req.__defineGetter__("secure", (function () {
  _$jscoverage['request.js'][311]++;
  return this.connection.encrypted;
}));
_$jscoverage['request.js'][324]++;
req.__defineGetter__("subdomains", (function () {
  _$jscoverage['request.js'][325]++;
  return this.get("Host").split(".").slice(0, -2).reverse();
}));
_$jscoverage['request.js'][338]++;
req.__defineGetter__("path", (function () {
  _$jscoverage['request.js'][339]++;
  return parse(this.url).pathname;
}));
_$jscoverage['request.js'][351]++;
req.__defineGetter__("fresh", (function () {
  _$jscoverage['request.js'][352]++;
  return ! this.stale;
}));
_$jscoverage['request.js'][364]++;
req.__defineGetter__("stale", (function () {
  _$jscoverage['request.js'][365]++;
  return connect.utils.modified(this, this.res);
}));
_$jscoverage['request.js'][375]++;
req.__defineGetter__("xhr", (function () {
  _$jscoverage['request.js'][376]++;
  var val = this.get("X-Requested-With") || "";
  _$jscoverage['request.js'][377]++;
  return "xmlhttprequest" == val.toLowerCase();
}));
_$jscoverage['request.js'].source = ["","/*!"," * Express - request"," * Copyright(c) 2010 TJ Holowaychuk &lt;tj@vision-media.ca&gt;"," * MIT Licensed"," */","","/**"," * Module dependencies."," */","","var http = require('http')","  , utils = require('./utils')","  , connect = require('connect')","  , parse = require('url').parse","  , mime = require('mime');","","/**"," * Request prototype."," */","","var req = exports = module.exports = {","  __proto__: http.IncomingMessage.prototype","};","","/**"," * Return request header."," *"," * The `Referrer` header field is special-cased,"," * both `Referrer` and `Referer` will yield are"," * interchangeable."," *"," * Examples:"," *"," *     req.get('Content-Type');"," *     // =&gt; \"text/plain\""," *     "," *     req.get('content-type');"," *     // =&gt; \"text/plain\""," *     "," *     req.get('Something');"," *     // =&gt; undefined"," *     "," * @param {String} name"," * @return {String} "," * @api public"," */","","req.get = function(name){","  switch (name = name.toLowerCase()) {","    case 'referer':","    case 'referrer':","      return this.headers.referrer","        || this.headers.referer;","    default:","      return this.headers[name];","  }","};","","/**"," * Check if the given `type` is acceptable,"," * otherwise you should respond with 406 \"Not Acceptable\"."," *"," * Examples:"," * "," *     // Accept: text/html"," *     req.accepts('html');"," *     // =&gt; true"," *"," *     // Accept: text/*; application/json"," *     req.accepts('html');"," *     req.accepts('text/html');"," *     req.accepts('text/plain');"," *     req.accepts('application/json');"," *     // =&gt; true"," *"," *     req.accepts('image/png');"," *     req.accepts('png');"," *     // =&gt; false"," *"," * @param {String} type"," * @return {Boolean}"," * @api public"," */","","req.accepts = function(type){","  return utils.accepts(type, this.get('Accept'));","};","","/**"," * Check if the given `charset` is acceptable,"," * otherwise you should respond with 406 \"Not Acceptable\"."," *"," * @param {String} charset"," * @return {Boolean}"," * @api public"," */","","req.acceptsCharset = function(charset){","  var accepted = this.acceptedCharsets;","  return accepted.length","    ? ~accepted.indexOf(charset)","    : true;","};","","/**"," * Check if the given `lang` is acceptable,"," * otherwise you should respond with 406 \"Not Acceptable\"."," *"," * @param {String} lang"," * @return {Boolean}"," * @api public"," */","","req.acceptsLanguage = function(lang){","  var accepted = this.acceptedLanguages;","  return accepted.length","    ? ~accepted.indexOf(lang)","    : true;","};","","/**"," * Return an array of Accepted media types"," * ordered from highest quality to lowest."," *"," * Examples:"," *"," *     [ { value: 'application/json',"," *         quality: 1,"," *         type: 'application',"," *         subtype: 'json' },"," *       { value: 'text/html',"," *         quality: 0.5,"," *         type: 'text',"," *         subtype: 'html' } ]"," *"," * @return {Array}"," * @api public"," */","","req.__defineGetter__('accepted', function(){","  var accept = this.get('Accept');","  return accept","    ? utils.parseAccept(accept)","    : [];","});","","/**"," * Return an array of Accepted languages"," * ordered from highest quality to lowest."," *"," * Examples:"," *"," *     Accept-Language: en;q=.5, en-us"," *     ['en-us', 'en']"," *"," * @return {Array}"," * @api public"," */","","req.__defineGetter__('acceptedLanguages', function(){","  var accept = this.get('Accept-Language');","  return accept","    ? utils","      .parseQuality(accept)","      .map(function(obj){","        return obj.value;","      })","    : [];","});","","/**"," * Return an array of Accepted charsets"," * ordered from highest quality to lowest."," *"," * Examples:"," *"," *     Accept-Charset: iso-8859-5;q=.2, unicode-1-1;q=0.8"," *     ['unicode-1-1', 'iso-8859-5']"," *"," * @return {Array}"," * @api public"," */","","req.__defineGetter__('acceptedCharsets', function(){","  var accept = this.get('Accept-Charset');","  return accept","    ? utils","      .parseQuality(accept)","      .map(function(obj){","        return obj.value;","      })","    : [];","});","","/**"," * Return the value of param `name` when present or `defaultValue`."," *"," *  - Checks body params, ex: id=12, {\"id\":12}"," *  - Checks route placeholders, ex: _/user/:id_"," *  - Checks query string params, ex: ?id=12"," *"," * To utilize request bodies, `req.body`"," * should be an object. This can be done by using"," * the `connect.bodyParser()` middleware."," *"," * @param {String} name"," * @param {Mixed} defaultValue"," * @return {String}"," * @api public"," */","","req.param = function(name, defaultValue){","  // req.body","  if (this.body &amp;&amp; undefined !== this.body[name]) return this.body[name];","","  // route params","  if (this.params","    &amp;&amp; this.params.hasOwnProperty(name)","    &amp;&amp; undefined !== this.params[name]) {","    return this.params[name]; ","  }","","  // query-string","  if (undefined !== this.query[name]) return this.query[name]; ","","  return defaultValue;","};","","/**"," * Check if the incoming request contains the \"Content-Type\" "," * header field, and it contains the give mime `type`."," *"," * Examples:"," *"," *      // With Content-Type: text/html; charset=utf-8"," *      req.is('html');"," *      req.is('text/html');"," *      req.is('text/*');"," *      // =&gt; true"," *     "," *      // When Content-Type is application/json"," *      req.is('json');"," *      req.is('application/json');"," *      req.is('application/*');"," *      // =&gt; true"," *     "," *      req.is('html');"," *      // =&gt; false"," * "," *  Now within our route callbacks, we can use to to assert content types"," *  such as \"image/jpeg\", \"image/png\", etc."," * "," *      app.post('/image/upload', function(req, res, next){"," *        if (req.is('image/*')) {"," *          // do something"," *        } else {"," *          next();"," *        }"," *      });"," * "," * @param {String} type"," * @return {Boolean}"," * @api public"," */","","req.is = function(type){","  var ct = this.get('Content-Type');","  if (!ct) return false;","  ct = ct.split(';')[0];","  if (!~type.indexOf('/')) type = mime.lookup(type);","  if (~type.indexOf('*')) {","    type = type.split('/');","    ct = ct.split('/');","    if ('*' == type[0] &amp;&amp; type[1] == ct[1]) return true;","    if ('*' == type[1] &amp;&amp; type[0] == ct[0]) return true;","    return false;","  }","  return !! ~ct.indexOf(type);","};","","/**"," * Return the protocol string \"http\" or \"https\""," * when requested with TLS. When the \"trust proxy\" "," * setting is enabled the \"X-Forwarded-Proto\" header"," * field will be trusted. If you're running behind"," * a reverse proxy that supplies https for you this"," * may be enabled."," *"," * @return {String}"," * @api public"," */","","req.__defineGetter__('protocol', function(trustProxy){","  var trustProxy = this.app.settings['trust proxy'];","  return this.secure","    ? 'https'","    : trustProxy","      ? (this.get('X-Forwarded-Proto') || 'http')","      : 'http';","});","","/**"," * Short-hand for `req.connection.encrypted`."," *"," * @return {Boolean}"," * @api public"," */","","req.__defineGetter__('secure', function(){","  return this.connection.encrypted;","});","","/**"," * Return subdomains as an array."," *"," * For example \"tobi.ferrets.example.com\""," * would provide `[\"ferrets\", \"tobi\"]`."," *"," * @return {Array}"," * @api public"," */","","req.__defineGetter__('subdomains', function(){","  return this.get('Host')","    .split('.')","    .slice(0, -2)","    .reverse();","});","","/**"," * Short-hand for `require('url').parse(req.url).pathname`."," *"," * @return {String}"," * @api public"," */","","req.__defineGetter__('path', function(){","  return parse(this.url).pathname;","});","","/**"," * Check if the request is fresh, aka"," * Last-Modified and/or the ETag"," * still match."," *"," * @return {Boolean}"," * @api public"," */","","req.__defineGetter__('fresh', function(){","  return ! this.stale;","});","","/**"," * Check if the request is stale, aka"," * \"Last-Modified\" and / or the \"ETag\" for the"," * resource has changed."," *"," * @return {Boolean}"," * @api public"," */","","req.__defineGetter__('stale', function(){","  return connect.utils.modified(this, this.res);","});","","/**"," * Check if the request was an _XMLHttpRequest_."," *"," * @return {Boolean}"," * @api public"," */","","req.__defineGetter__('xhr', function(){","  var val = this.get('X-Requested-With') || '';","  return 'xmlhttprequest' == val.toLowerCase();","});"];
