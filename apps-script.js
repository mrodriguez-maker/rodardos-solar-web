// ============================================================
// RODARDOS Solar — Apps Script Web App
// 1. Abre el Sheet "RODARDOS Solar — Cotizaciones" en Drive
// 2. Extensiones > Apps Script
// 3. Reemplaza todo el código con este
// 4. Guardar > Implementar > Nueva implementación
//    - Tipo: App web
//    - Ejecutar como: Yo
//    - Acceso: Cualquier usuario
// ============================================================

const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    sheet.appendRow([
      new Date().toLocaleString('es-MX'),
      e.parameter.proyecto || '',
      e.parameter.empresa  || '',
      e.parameter.rol      || '',
      e.parameter.mw       || '',
      e.parameter.mod      || '',
      e.parameter.estado   || '',
      e.parameter.fecha    || '',
      e.parameter.email    || '',
    ]);

    return ContentService
      .createTextOutput('ok')
      .setMimeType(ContentService.MimeType.TEXT);

  } catch (err) {
    return ContentService
      .createTextOutput('error: ' + err.message)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
