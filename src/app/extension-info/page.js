"use client";

import { useEffect } from 'react';


export default function ExtensionInfo() {
    useEffect(() => {
        const toolbar = document.createElement('div');
        toolbar.id = 'floatingToolbar';
        toolbar.innerHTML = `
            <button id="increaseFont">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
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
        return () => document.body.removeChild(toolbar);  // Cleanup on unmount
    }, []);

    return (
      <div className="extension-info">
      <h1>Web Accessibility Toolbar for Dyslexic Users</h1>
      <p>
          This web accessibility extension is designed to support users with dyslexia by providing a variety of tools that can
          be customized to adjust text, images, and the general page layout to enhance readability and comprehension. Below are
          the features available on this toolbar that can help you customize the web page to suit your needs.
      </p>

      <h2>How to Use the Toolbar</h2>
      <p>
          To activate the toolbar, simply click the floating buttons that appear on the right side of your screen. Each button
          corresponds to a different feature that you can use to customize your reading experience. Here’s how you can interact with
          the toolbar:
      </p>
      <ol>
          <li>Click on the buttons to adjust text size, line height, or enable high-contrast mode.</li>
          <li>Use the image zoom feature by hovering over images to enlarge them.</li>
          <li>Activate the text highlighter to focus on specific portions of text.</li>
      </ol>

      <h2>Benefits for Dyslexic Users</h2>
      <p>
          These features are designed to make web content more accessible and easier to read for people with dyslexia. By
          providing flexibility in text size, font options, and contrast, users can create a customized reading environment that
          suits their individual needs. The goal of this toolbar is to remove barriers to reading and make digital content
          accessible to everyone, regardless of their learning differences.
      </p>
      <p>
          If you have any suggestions for additional features or improvements, please feel free to reach out to us. We are
          committed to making the web more accessible for all users.
      </p>  

      <h2>Toolbar Features</h2>
      <ul>
          <li>
              <strong>Text Size Increase:</strong>
              <p>
                  This feature allows you to increase the font size of the text displayed on the webpage. For many dyslexic users,
                  larger text can make reading easier, as it helps reduce the visual clutter and strain associated with small text.
                  You can use this button to enlarge the font size to a level that works best for you.
              </p>
          </li>
          <li>
              <strong>Text Size Decrease:</strong>
              <p>
                  Just as increasing the font size can aid readability, some users may prefer smaller text. This feature lets you
                  decrease the font size, ensuring that the content is displayed at your preferred reading level.
              </p>
          </li>
          <li>
              <strong>Text Highlighter:</strong>
              <p>
                  The text highlighter feature helps dyslexic users by highlighting the text they are currently reading. By visually
                  isolating the text, it improves focus and helps to avoid distractions from the surrounding content. You can activate
                  the highlighter tool to select text and highlight it for easier reading.
              </p>
          </li>
          <li>
              <strong>Line Height Adjustments:</strong>
              <p>
                  Adjusting line height is a key feature for users with dyslexia. By increasing the space between lines of text, it
                  reduces the visual clutter and improves text alignment, making reading smoother. You can increase or decrease the
                  line height depending on what feels most comfortable for you.
              </p>
          </li>
          <li>
              <strong>Image Zoom:</strong>
              <p>
                  This feature allows users to zoom in on images for a more detailed view. Images can be a valuable source of
                  information, but small or low-resolution images may be difficult to see. With this tool, you can hover over an image
                  to enlarge it and view more details, improving comprehension.
              </p>
          </li>
          <li>
              <strong>Contrast Changer:</strong>
              <p>
                  A high-contrast mode can significantly improve text readability for users with dyslexia. By toggling this feature,
                  you can adjust the contrast between the text and background, making the content clearer and more distinct. This
                  feature also reduces strain on the eyes, making reading less exhausting, especially in low-light environments.
              </p>
          </li>
      </ul>

      
  </div>
    );
}

