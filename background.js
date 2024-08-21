const adBlockerRules = [
    "*://*.doubleclick.net/*",
    "*://*.adnxs.com/*",
    "*://*.adsafeprotected.com/*",
    // Add more rules as needed
  ];
  
  chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      return { cancel: true };
    },
    { urls: adBlockerRules },
    ["blocking"]
  );
  