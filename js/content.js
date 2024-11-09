document.addEventListener("DOMContentLoaded", () => {
    // Inject floating toolbar after the page is fully loaded
    console.log("DOM fully loaded and parsed. Creating toolbar...");
    // createToolbar();
  });


// Inject floating toolbar
function createToolbar() {
    const toolbar = document.createElement("div");
    toolbar.id = "floatingToolbar";
    toolbar.innerHTML = `
      <button id="increaseFont"><i class="fa-regular fa-plus"></i></button>
      <button id="decreaseFont"><i class="fa-regular fa-minus"></i></button>
      <button id="highlightText"><i class="fa-regular fa-highlighter"></i></button>
      <button id="increaseLineHeight"><i class="fa-regular fa-text-height"></i>+</button>
      <button id="decreaseLineHeight"><i class="fa-regular fa-text-height"></i>-</button>
      <button id="increaseSpacing"><i class="fa-regular fa-text-width"></i>+</button>
      <button id="decreaseSpacing"><i class="fa-regular fa-text-width"></i>-</button>
      <button id="toggleContrast"><i class="ffa-regular fa-adjust"></i></button>
    `;
    document.body.appendChild(toolbar);
  
    // Add functionality to each button
    document.getElementById("increaseFont").addEventListener("click", () => adjustFontSize(1));
    document.getElementById("decreaseFont").addEventListener("click", () => adjustFontSize(-1));
    document.getElementById("highlightText").addEventListener("click", highlightSelection);
    document.getElementById("increaseLineHeight").addEventListener("click", () => adjustLineHeight(1));
    document.getElementById("decreaseLineHeight").addEventListener("click", () => adjustLineHeight(-1));
    document.getElementById("increaseSpacing").addEventListener("click", () => adjustLetterSpacing(1));
    document.getElementById("decreaseSpacing").addEventListener("click", () => adjustLetterSpacing(-1));
    document.getElementById("toggleContrast").addEventListener("click", toggleContrast);
  }
  
  // Utility functions for toolbar functionality
  function adjustFontSize(adjustment) {
    document.body.style.fontSize = `${parseFloat(getComputedStyle(document.body).fontSize) + adjustment}px`;
  }
  
  function highlightSelection() {
    const selection = document.all
    ? document.selection.createRange().text
    : document.getSelection();
  
    if (!selection.rangeCount) return;

    setXaxis(e.clientX / 2);
    setYaxis(e.clientY / 2);
  
    const range = selection.getRangeAt(0);
  
    // Create a span to wrap around the selected text
    const span = document.createElement("span");
    span.style.backgroundColor = "yellow";
  
    // Check if the selection range fully selects a single text node
    if (range.startContainer === range.endContainer && range.startContainer.nodeType === Node.TEXT_NODE) {
      range.surroundContents(span);
    } else {
      // If the selection spans multiple nodes, we need to handle each part separately
  
      const fragment = range.cloneContents();
      const walker = document.createTreeWalker(fragment, NodeFilter.SHOW_TEXT, null, false);
  
      let currentNode;
      const textNodes = [];
  
      while ((currentNode = walker.nextNode())) {
        textNodes.push(currentNode);
      }
  
      // Highlight each text node within the selection
      textNodes.forEach((node) => {
        const wrapper = document.createElement("span");
        wrapper.style.backgroundColor = "yellow";
        node.parentNode.replaceChild(wrapper, node);
        wrapper.appendChild(node);
      });
  
      // Clear the original selection
      selection.removeAllRanges();
    }
  }
  
  
  function adjustLineHeight(adjustment) {
    document.body.style.lineHeight = `${parseFloat(getComputedStyle(document.body).lineHeight) + adjustment}px`;
  }
  
  function adjustLetterSpacing(adjustment) {
    document.body.style.letterSpacing = `${parseFloat(getComputedStyle(document.body).letterSpacing) + adjustment}px`;
  }
  
  function toggleContrast() {
    document.body.classList.toggle("high-contrast");
  }
  

  createToolbar();

  