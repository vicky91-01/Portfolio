/**
 * Google Apps Script to accept POST requests from the contact form
 * and append submissions to a Google Sheet.
 *
 * Usage:
 * 1. Create a Google Sheet and note its ID from the URL.
 * 2. Replace SPREADSHEET_ID below with that ID.
 * 3. In Apps Script, Deploy -> New deployment -> Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web app URL and paste into `script.js` as scriptURL.
 */

const SPREADSHEET_ID = 'REPLACE_WITH_SPREADSHEET_ID';

function doPost(e) {
  try {
    const params = e.parameter || {};
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheets()[0]; // first sheet

    // Ensure header exists (optional)
    const headers = ['ServerTimestamp', 'Name', 'Email', 'Message', 'SubmittedAt', 'SubmittedAt_ISO'];
    const firstRow = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0] || [];
    if (firstRow.join('') === '') {
      sheet.getRange(1,1,1,headers.length).setValues([headers]);
    }

    const row = [
      new Date(),
      params.Name || '',
      params.Email || '',
      params.Message || '',
      params.SubmittedAt || '',
      params.SubmittedAt_ISO || ''
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
