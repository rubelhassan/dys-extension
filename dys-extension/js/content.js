document.addEventListener("DOMContentLoaded", () => {
  // Inject floating toolbar after the page is fully loaded
  console.log("DOM fully loaded and parsed. Creating toolbar...");
  // createToolbar();
});

// Inject floating toolbar
function createToolbar() {
  const toolbar = document.createElement("div");
  toolbar.id = "floatingToolbar";
  // toolbar.innerHTML = `
  //   <button id="increaseFont"><i class="fa-regular fa-plus"></i></button>
  //   <button id="decreaseFont"><i class="fa-regular fa-minus"></i></button>
  //   <button id="highlightText"><i class="fa-regular fa-highlighter"></i></button>
  //   <button id="increaseLineHeight"><i class="fa-regular fa-text-height"></i>+</button>
  //   <button id="decreaseLineHeight"><i class="fa-regular fa-text-height"></i>-</button>
  //   <button id="increaseSpacing"><i class="fa-regular fa-text-width"></i>+</button>
  //   <button id="decreaseSpacing"><i class="fa-regular fa-text-width"></i>-</button>
  //   <button id="toggleContrast"><i class="ffa-regular fa-adjust"></i></button>
  // `;
  toolbar.innerHTML = `
        <button id="increaseFont">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
            </svg>
        </button>
        <button id="decreaseFont">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
            </svg>
        </button>
        <button id="highlightText">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20" height="20">
                <path d="M315 315l158.4-215L444.1 70.6 229 229 315 315zm-187 5s0 0 0 0l0-71.7c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0c11.4 0 22.4 4.5 30.5 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5c0 9.2-2.9 18.2-8.4 25.6L334.4 396.5c-9 12.3-23.4 19.5-38.6 19.5L224 416l-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320zM7 466.3l63-63 70.6 70.6-31 31c-4.5 4.5-10.6 7-17 7L24 512c-13.3 0-24-10.7-24-24l0-4.7c0-6.4 2.5-12.5 7-17z"/>
            </svg>
        </button>
        <button id="increaseLineHeight">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20" height="20">
                <path d="M64 128l0-32 64 0 0 320-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320 64 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-26.5-21.5-48-48-48L160 32 48 32C21.5 32 0 53.5 0 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32zM502.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 192-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-192 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"/>
            </svg>
            <span>+</span>
        </button>
        <button id="decreaseLineHeight">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20" height="20">
                <path d="M64 128l0-32 64 0 0 320-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320 64 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-26.5-21.5-48-48-48L160 32 48 32C21.5 32 0 53.5 0 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32zM502.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 192-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-192 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"/>
            </svg>
            <span>-</span>
        </button>
        <button id="increaseSpacing">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                <path d="M64 128l0-32 128 0 0 128-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-128 128 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-26.5-21.5-48-48-48L224 32 48 32C21.5 32 0 53.5 0 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32zM9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 192 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 32-192 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64z"/>
            </svg>
            <span>+</span>
        </button>
        <button id="decreaseSpacing">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                <path d="M64 128l0-32 128 0 0 128-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-128 128 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-26.5-21.5-48-48-48L224 32 48 32C21.5 32 0 53.5 0 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32zM9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 192 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 32-192 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64z"/>
            </svg>
            <span>-</span>
        </button>
        <button id="magnifyIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </button>
        <button id="toggleContrast">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
            </svg>
        </button>
    `;
  document.body.appendChild(toolbar);

  // Add functionality to each button
  document
    .getElementById("increaseFont")
    .addEventListener("click", () => adjustFontSize(1));
  document
    .getElementById("decreaseFont")
    .addEventListener("click", () => adjustFontSize(-1));
  document
    .getElementById("highlightText")
    .addEventListener("click", highlightSelection);
  document
    .getElementById("increaseLineHeight")
    .addEventListener("click", () => adjustLineHeight(1));
  document
    .getElementById("decreaseLineHeight")
    .addEventListener("click", () => adjustLineHeight(-1));
  document
    .getElementById("increaseSpacing")
    .addEventListener("click", () => adjustLetterSpacing(1));
  document
    .getElementById("decreaseSpacing")
    .addEventListener("click", () => adjustLetterSpacing(-1));
    document
    .getElementById("magnifyIcon")
    .addEventListener("click", magnifyWeb)
  document
    .getElementById("toggleContrast")
    .addEventListener("click", toggleContrast);
}

// Utility functions for toolbar functionality
function adjustFontSize(adjustment) {
  document.body.style.fontSize = `${
    parseFloat(getComputedStyle(document.body).fontSize) + adjustment
  }px`;
}

function highlightSelection() {
  const selection = document.getSelection();
  if (selection && selection.rangeCount) {
    const range = selection.getRangeAt(0);

    // Create a temporary span to wrap the selection
    const span = document.createElement("span");

    // Apply initial styles to analyze text color
    span.appendChild(range.cloneContents()); // Clone the selected contents into the span
    document.body.appendChild(span); // Temporarily add it to the DOM to measure color

    // Get computed style of the text color within the selection
    const computedColor = getComputedStyle(span).color;
    span.remove(); // Remove the temporary span

    // Extract RGB values
    const rgbValues = computedColor.match(/\d+/g).map(Number);
    const [r, g, b] = rgbValues;

    // Calculate brightness
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

    // Set background color based on brightness of text color
    if (brightness > 128) {
      // Text is light, so make background dark
      span.style.backgroundColor = "#333333"; // Dark background
      span.style.color = "#FFFFFF"; // Light text to maintain contrast
    } else {
      // Text is dark, so make background light
      span.style.backgroundColor = "#FFFF99"; // Light background
      span.style.color = "#000000"; // Dark text to maintain contrast
    }

    // Finally, insert the span to wrap the selection
    range.surroundContents(span);
  }
}

function adjustLineHeight(adjustment) {
  document.body.style.lineHeight = `${
    parseFloat(getComputedStyle(document.body).lineHeight) + adjustment
  }px`;
}

function adjustLetterSpacing(adjustment) {
  // Get the current letter-spacing of the body element
  const currentSpacing = getComputedStyle(document.body).letterSpacing;

  // Check if letterSpacing is "normal", if so, set it to 0
  const spacingValue =
    currentSpacing === "normal" ? 0 : parseFloat(currentSpacing);

  // Apply the adjustment
  document.body.style.letterSpacing = `${spacingValue + adjustment}px`;
}

function magnifyWeb() {
    // Track if zoom mode is enabled
    let zoomEnabled = false;
    
    // Toggle the zoom mode when magnify icon is clicked
    document.querySelector('#magnifyIcon').addEventListener('click', () => {
        zoomEnabled = !zoomEnabled;
        if (zoomEnabled) {
            activateImageZoom();
        } else {
            deactivateImageZoom();
        }
    });

    function activateImageZoom() {
        // Add event listeners for mouse movements and hover effects on images
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('mouseover', zoomIn);
            img.addEventListener('mousemove', moveZoom);
            img.addEventListener('mouseout', zoomOut);
        });
    }

    function deactivateImageZoom() {
        // Remove event listeners from images
        document.querySelectorAll('img').forEach(img => {
            img.removeEventListener('mouseover', zoomIn);
            img.removeEventListener('mousemove', moveZoom);
            img.removeEventListener('mouseout', zoomOut);
            img.style.transform = ''; // Reset transformations
            img.style.transition = '';
            img.style.transformOrigin = '';
        });
    }

    function zoomIn(event) {
        const img = event.target;
        if (zoomEnabled) {
            img.style.transition = 'transform 0.2s ease';
            img.style.transform = 'scale(2)'; // Adjust the scale factor as needed
            img.style.transformOrigin = 'center center'; // Zoom from the center of the image
        }
    }

    function moveZoom(event) {
        const img = event.target;
        if (zoomEnabled) {
            const rect = img.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            img.style.transformOrigin = `${x}% ${y}%`; // Move zoom point to cursor position
        }
    }

    function zoomOut(event) {
        const img = event.target;
        img.style.transform = 'scale(1)'; // Reset the zoom
        img.style.transformOrigin = 'center center';
    }
}




function toggleContrast() {
  const body = document.body;
  const highContrastClass = "high-contrast";

  // Function to calculate brightness of an RGB color
  function getBrightness(color) {
    const rgbValues = color.match(/\d+/g).map(Number);
    const [r, g, b] = rgbValues;
    return 0.299 * r + 0.587 * g + 0.114 * b;
  }

  // Toggle the high-contrast mode on or off
  if (body.classList.contains(highContrastClass)) {
    // If high-contrast mode is already on, turn it off by removing custom styles
    body.classList.remove(highContrastClass);
    body.style.backgroundColor = ""; // Reset background color
    body.style.color = ""; // Reset text color
    body.style.fontSize = ""; // Reset font size
    body.style.letterSpacing = ""; // Reset letter spacing
    body.style.lineHeight = ""; // Reset line height
    body.style.fontFamily = ""; // Reset font family
  } else {
    // Turn on high-contrast mode and apply custom styles
    body.classList.add(highContrastClass);

    // Get current background and text colors
    const computedStyles = getComputedStyle(body);
    const currentBgColor = computedStyles.backgroundColor;
    const currentTextColor = computedStyles.color;

    // Detect white background with black text and apply minimal adjustments only
    const isWhiteBgBlackText =
      currentBgColor === "rgb(255, 255, 255)" &&
      currentTextColor === "rgb(0, 0, 0)";

    if (isWhiteBgBlackText) {
      // Only apply slight readability adjustments without changing colors
      body.style.fontSize = "17px"; // Slightly larger font size
      body.style.letterSpacing = "0.03em"; // Small increase in letter spacing
      body.style.lineHeight = "1.5"; // Moderate line height increase
      body.style.fontFamily = `"OpenDyslexic", Arial, sans-serif`; // Use a dyslexia-friendly font if available
    } else {
      // For other cases, apply contrast adjustments as before
      const bgBrightness = getBrightness(currentBgColor);

      if (bgBrightness > 128) {
        // Light background, switch to dark gray background with off-white text
        body.style.backgroundColor = "#2E2E2E"; // Dark gray background
        body.style.color = "#F5F5F5"; // Off-white text color
      } else {
        // Dark background, use light background with dark text
        body.style.backgroundColor = "#FAFAFA"; // Light off-white background
        body.style.color = "#1A1A1A"; // Dark gray text color
      }

      // Apply readability enhancements as per WCAG recommendations
      body.style.fontSize = "18px"; // Slightly larger font size
      body.style.letterSpacing = "0.05em"; // Increased letter spacing for readability
      body.style.lineHeight = "1.6"; // Increased line height for readability
      body.style.fontFamily = `"OpenDyslexic", Arial, sans-serif`; // Use a dyslexia-friendly font if available
    }
  }
}

createToolbar();
