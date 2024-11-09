document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("increaseFont").addEventListener("click", () => {
    sendMessage({ type: "adjustFontSize", adjustment: 1 });
  });

  document.getElementById("decreaseFont").addEventListener("click", () => {
    sendMessage({ type: "adjustFontSize", adjustment: -1 });
  });

  document.getElementById("highlightText").addEventListener("click", () => {
    sendMessage({ type: "highlightText" });
  });

  document.getElementById("increaseLineHeight").addEventListener("click", () => {
    sendMessage({ type: "adjustLineHeight", adjustment: 1 });
  });

  document.getElementById("decreaseLineHeight").addEventListener("click", () => {
    sendMessage({ type: "adjustLineHeight", adjustment: -1 });
  });

  document.getElementById("increaseSpacing").addEventListener("click", () => {
    sendMessage({ type: "adjustLetterSpacing", adjustment: 1 });
  });

  document.getElementById("decreaseSpacing").addEventListener("click", () => {
    sendMessage({ type: "adjustLetterSpacing", adjustment: -1 });
  });

  document.getElementById("toggleContrast").addEventListener("click", () => {
    sendMessage({ type: "toggleContrast" });
  });
});

function sendMessage(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: (msg) => {
        document.dispatchEvent(new CustomEvent("extensionMessage", { detail: msg }));
      },
      args: [message],
    });
  });
}
