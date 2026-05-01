chrome.sidePanel.setPanelBehavior({openPanelOnActionClick:!0}).catch(e=>console.error(e));chrome.action.onClicked.addListener(e=>{e.id&&chrome.sidePanel.open({tabId:e.id})});
