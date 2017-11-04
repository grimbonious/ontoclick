'use strict';

console.log('ontoclick popup');

chrome.tabs.executeScript( {
    code: 'window.getSelection().toString();'
}, function(selection) {
  if(selection === undefined) {
    return
  }
  enterState(STATE_SEARCH)
  dispaySearch()
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

function displaySearch() {
  Array.prototype.map.call(document.getElementsByClassName('keywords'), function(el) {
    el.innerHTML = selection;
  });
}

function updateResult(result) {

  // ontology class properties

  // result.recognized_text
  // result.hpo
  // result.preferred_label
  // result.texttual_definition

  $('recognized_text').innerHTML = result.recognized_text
  $('hpo').innerHTML = hpo
  $('preferred_label').innerHTML = preferred_label
  $('texttual_definition').innerHTML = texttual_definition

  // ontology class lists

  // result.synonyms_list
  // result.superclasses_list
  // result.subclasses_list

  replaceListNodes('synonyms_list', result.synonyms_list)
  replaceListNodes('superclasses_list', result.superclasses_list)
  replaceListNodes('subclasses_list', result.subclasses_list)
}

function replaceListNodes(listId, items) {
  $(listId).innerHTML = ''
  var nodes = [];
  $.each(items, function(i, item) {
    nodes.push('<li>' + item + '</li>');
  });
  $(listId).append( nodes.join('') );
}
