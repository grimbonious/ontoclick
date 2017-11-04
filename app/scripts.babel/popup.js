'use strict';

console.log('ontoclick popup');

chrome.tabs.executeScript( {
    code: 'window.getSelection().toString();'
}, function(selection) {

  Array.prototype.map.call(document.getElementsByClassName('keywords'), function(el) {
    el.innerHTML = selection;
  });
});
