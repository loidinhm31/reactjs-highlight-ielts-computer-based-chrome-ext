(()=>{"use strict";chrome.commands.onCommand.addListener((function(e){"toggle-extension"===e&&chrome.storage.local.get("enabled",(function(e){e.enabled?chrome.storage.local.set({enabled:!1}):chrome.storage.local.set({enabled:!0}),chrome.tabs.reload()})),chrome.tabs.query({active:!0,lastFocusedWindow:!0},(function(o){var t=o[0].url;(null==t?void 0:t.startsWith("https://study4.com"))&&"control-player"===e&&chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.sendMessage(e[0].id,"control-player")}))}))}))})();