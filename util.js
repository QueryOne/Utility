
String.prototype.toProperCase = function () { return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); }

xu = (function() {
  var clone = function(obj) {
    var copy;
    if (null == obj || 'object' != typeof obj) { return obj };
    if (obj instanceof String) { return (' ' + obj).slice(1) };
    if (obj instanceof Date) { copy = new Date(); copy.setTime(obj.getTime()); return copy };
    if (obj instanceof Array) { copy = []; for (var i = 0; i < obj.length; i++) { copy[i] = clone(obj[i]) }; return copy };
    if (obj instanceof Object) { copy = {}; for (var attr in obj) { if (obj.hasOwnProperty(attr)) { copy[attr] = clone(obj[attr]) } }; return copy };
    throw new Error('Unable to copy obj! Type not supported.')
  };
  
  /* https://stackoverflow.com/a/2901298 */
  var comma = function(n) { var parts = n.toString().split('.'); parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,','); return parts.join('.') };
  
  var key = function(arr, v) { for (var prop in arr) { if (arr.hasOwnProperty(prop)) { if (arr[prop] === v) { return prop } } } };
  
  var lpad = function(str, len, ch) { if (typeof str == 'number') { str = str.toString() }; if (ch == null) { ch = ' ' }; var r = len - str.length; if (r < 0) { r = 0 }; return ch.repeat(r) + str };

  var round - function(num, dec) { var mult = 10 ^ (dec || 0); return Math.floor(num * mult + 0.5) / mult };

  var rpad = function(str, len, ch) { if (typeof str == 'number') { str = str.toString() }; if (ch == null) { ch = ' ' }; var r = len - str.length; if (r < 0) { r = 0 }; return str + ch.repeat(r) };

  var uuid = function() { 
    var d = new Date().getTime(); if (window.performance && typeof window.performance.now === 'function') { d += performance.now() };
    var u = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(v) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (v == 'x' ? r : ( r&0x3|0x8)).toString(16) })
    return u };
 
  return {
    clone: clone,
    comma: comma,
    key  : key,
    lpad : lpad,
    round: round,
    rpad : rpad,
    uuid : uuid,
  }
})()
