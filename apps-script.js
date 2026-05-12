// ============================================================
// RODARDOS Solar — Apps Script Web App
// Pega este código en: Extensions > Apps Script dentro del
// Google Sheet "RODARDOS Solar — Cotizaciones"
// Luego: Deploy > New deployment > Web app
//   - Execute as: Me
//   - Who has access: Anyone
// Copia la URL del deployment y pégala en index.html donde
// dice APPS_SCRIPT_URL
// ============================================================

const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toLocaleString('es-MX'),
      data.proyecto   || '',
      data.empresa    || '',
      data.rol        || '',
      data.mw         || '',
      data.mod        || '',
      data.estado     || '',
      data.fecha      || '',
      data.email      || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Permite CORS desde cualquier origen
function doOptions(e) {
  return ContentService.createTextOutput('').setMimeType(ContentService.MimeType.TEXT);
}
