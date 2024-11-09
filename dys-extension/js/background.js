chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "highlightText",
      title: "Highlight selected text",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "highlightText" && info.selectionText) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          const selection = window.getSelection();
          if (!selection.rangeCount) return;
  
          const range = selection.getRangeAt(0);
          const span = document.createElement("span");
          span.style.backgroundColor = "yellow";
          range.surroundContents(span);
        },
      });
    }
  });
  