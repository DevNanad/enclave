console.log("background")
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch(async (error) => console.error(error))
