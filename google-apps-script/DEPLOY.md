# Deploying the Google Apps Script (contact form)

Steps to deploy the script so your site can POST contact submissions to your Google Sheet:

1. Create a Google Sheet where submissions will be stored.
2. Open the sheet and copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`).
3. Open `Extensions → Apps Script` in the Google Sheet.
4. Replace `REPLACE_WITH_SPREADSHEET_ID` in `Code.gs` with your spreadsheet ID.
5. Save the script, then choose `Deploy → New deployment`.
   - Select **Web app**.
   - **Execute as:** Me
   - **Who has access:** Anyone
6. Deploy and **copy the Web app URL**.
7. Open `script.js` in your project and set `scriptURL` to the Web app URL.
8. Save and redeploy if you update the Apps Script.

Security notes:
- Deploying as **Anyone** allows anonymous posts to the script URL; keep an eye on spam.
- If you need restricted access, you can implement a secret token check in the POST handler and append a matching header or hidden field from your site.

Exporting to Excel:
- From Google Sheets: `File → Download → Microsoft Excel (.xlsx)`
