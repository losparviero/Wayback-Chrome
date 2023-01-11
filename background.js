chrome.browserAction.onClicked.addListener(function(tab) {
  var currentUrl = tab.url;
  var waybackUrl = "https://web.archive.org/save/" + currentUrl;
  chrome.tabs.create({ url: waybackUrl, active: false });
});