# Red URL Saver

**Red URL Saver** is a simple and efficient Chrome extension that allows you to save the URL of the current active tab along with a custom remark. All data is stored locally in your browser using Chrome's Sync Storage, so your saved links are persistent.

## Features

*   **Save Current URL**: Automatically fetches the URL of the active tab.
*   **Add Remarks**: Add a custom note or remark for each saved URL.
*   **Persistent Storage**: Uses `chrome.storage.sync` to save your data.
*   **Management**: View your list of saved URLs and delete them when no longer needed.

## Installation

Since this extension is not yet in the Chrome Web Store, you can install it manually using "Developer Mode".

1.  **Clone or Download this Repository**
    *   Clone: `git clone https://github.com/Rishabh157/Red-URL-Saver.git`
    *   Or download the ZIP and extract it.

2.  **Open Chrome Extensions Page**
    *   Open Google Chrome.
    *   Navigate to `chrome://extensions/` in the address bar.

3.  **Enable Developer Mode**
    *   Toggle the **Developer mode** switch in the top-right corner of the page.

4.  **Load the Extension**
    *   Click the **Load unpacked** button that appears in the top-left.
    *   Select the directory where you cloned/extracted this project (the folder containing `manifest.json`).

5.  **Pin and Use**
    *   The extension icon should appear in your toolbar. Pin it for easy access!

## Usage

1.  Navigate to any website you want to save.
2.  Click the **Red URL Saver** extension icon.
3.  The "Current URL" field will automatically populate.
4.  (Optional) Enter a **Remark** to describe the link.
5.  Click **Save**.
6.  The link will appear in your "Saved Links" list below.

## File Structure

*   `manifest.json`: Configuration file for the Chrome Extension.
*   `popup.html`: The HTML structure of the extension popup.
*   `style.css`: Styling for the popup.
*   `popup.js`: Logic for handling user interactions and storage.
