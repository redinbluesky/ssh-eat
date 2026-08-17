/**
 * @file deployment-guide.md
 * @description Instructions for deploying the Google Apps Script backend for Shh-eat lead collection.
 */

# Google Apps Script Deployment Guide

To enable lead collection (tester applications and notifications), you need to deploy a small Google Apps Script as a web app.

## 1. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.new).
2. Name your spreadsheet (e.g., `Shh-eat Leads`).
3. Rename the first sheet to `Leads`.
4. Set up the header row (Row 1) with these exact names:
   `Timestamp | Type | Name | Email | Message`

## 2. Create the Script
1. In your Google Sheet, go to **Extensions > Apps Script**.
2. Replace the existing code in `Code.gs` with the following:

```javascript
/**
 * Google Apps Script for Shh-eat Lead Collection
 * Handles POST requests from the Next.js landing page.
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
  
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Extract data
    const timestamp = new Date();
    const type = data.type || 'unknown';
    const name = data.name || 'N/A';
    const email = data.email || 'N/A';
    const message = data.message || '';

    // Append to sheet
    sheet.appendRow([timestamp, type, name, email, message]);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy as Web App
1. Click the **Deploy** button (top right) > **New deployment**.
2. Select type: **Web app**.
3. Description: `Shh-eat Lead Collector`.
4. Execute as: **Me** (your email).
5. Who has access: **Anyone** (This is crucial for the web app to receive POST requests).
6. Click **Deploy**.
7. **Authorize Access**: You will see a popup. Click "Review Permissions", select your account, click "Advanced", and then "Go to Shh-eat (unsafe)". Click "Allow".
8. **Copy the Web App URL**: It will look like `https://script.google.com/macros/s/.../exec`.

## 4. Configure Environment Variable
1. Create a `.env.local` file in your project root (if not already present).
2. Add your URL:
   ```env
   NEXT_PUBLIC_GAS_URL=your_copied_url_here
   ```
3. **Note**: For production (GitHub Pages), you will need to use a different approach for environment variables or hardcode the URL (not recommended for secrets, but okay for public endpoints like this).
