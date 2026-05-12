// RODARDOS Solar — Apps Script Web App

function doGet(e) {
  // Función de prueba: visita la URL en el navegador para verificar que funciona
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sheet.appendRow([
    new Date().toLocaleString('es-MX'),
    'PRUEBA', 'PRUEBA', 'PRUEBA', '', '', '', '', ''
  ]);
  return ContentService.createTextOutput('OK - fila de prueba guardada').setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
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
    return ContentService.createTextOutput('ok').setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err.message).setMimeType(ContentService.MimeType.TEXT);
  }
}
