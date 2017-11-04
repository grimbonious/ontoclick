'use strict';

console.log('ontoclick popup');

chrome.tabs.executeScript( {
    code: 'window.getSelection().toString();'
}, function(selection) {
  enterState(STATE_SEARCH)
  Array.prototype.map.call(document.getElementsByClassName('keywords'), function(el) {
    el.innerHTML = selection;
  });
});

// display states
const STATE_INFO='STATE_INFO'
const STATE_SEARCH='STATE_SEARCH'
const STATE_RESULT_FOUND='STATE_RESULT_FOUND'
const STATE_RESULT_NOT_FOUND='STATE_RESULT_NOT_FOUND'

var current_state = STATE_INFO
function enterState(state) {
  if(current_state) {
    _hideDiv(current_state)
  }
  current_state = state;
  _showDiv(current_state)
}

function _showDiv(id) {

}

function _hideDiv(id) {

}
