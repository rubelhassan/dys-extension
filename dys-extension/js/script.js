console.log("script.js");
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

  document
    .getElementById("increaseLineHeight")
    .addEventListener("click", () => {
      sendMessage({ type: "adjustLineHeight", adjustment: 1 });
    });

  document
    .getElementById("decreaseLineHeight")
    .addEventListener("click", () => {
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
        document.dispatchEvent(
          new CustomEvent("extensionMessage", { detail: msg })
        );
      },
      args: [message],
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("sidebarToggle");
  const showSidebarToggle = document.getElementById("showSidebarToggle");

  toggleButton.addEventListener("change", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(
              tabs[0].id,
              { type: "toggleSidebarBackground" },
              (response) => {
                  if (chrome.runtime.lastError) {
                      console.error("Error:", chrome.runtime.lastError.message);
                  } else if (response && response.status === "toggled") {
                      console.log("Sidebar background toggled successfully");
                  }
              }
          );
      });
  });


  /* code for show hide sidebar */

  showSidebarToggle.addEventListener("change", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { type: "toggleSidebarVisibility" },
            (response) => {
                if (chrome.runtime.lastError) {
                    console.error("Error:", chrome.runtime.lastError.message);
                } else if (response && response.status === "visibility toggled") {
                    console.log("Sidebar visibility toggled successfully");
                }
            }
        );
    });
});
});

