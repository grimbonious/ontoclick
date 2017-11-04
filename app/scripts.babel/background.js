'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

// chrome.browserAction.setBadgeText({text: 'onto'});



console.log('\'ontoclick Event Page for Browser Action');
