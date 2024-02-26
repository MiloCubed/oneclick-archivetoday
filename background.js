browser.browserAction.onClicked.addListener(tab => {
    browser.tabs.create({
      url: "https://archive.today/latest/" + tab.url,
    });
})
