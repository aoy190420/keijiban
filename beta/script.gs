function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function getData() {
  var ss = SpreadsheetApp.openById("16RTdDHiKnjP3PYpdBw2XyQ8saZG2_mSSHIWQ8qRg7rY");
  var values = ss.getSheetByName("KeijibanV2After").getDataRange().getValues();

  return values;
}