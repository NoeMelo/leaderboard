/**********************
 * DOM INSTANCES
 *********************/
const mainFormUI = document.getElementById("popup-form");
//const add_spreadsheet = document.getElementById("progress_scroll");
const cancelMainFormButton = document.getElementById("cancel-main-form-button");
const mainForm = document.getElementById("main_form");
const manual = document.getElementById("manual");
const helpIcon = document.getElementById("help_icon");
const cancelHelpView = document.getElementById("help_close");


var data = [];

/**********************
 * Google Sheets
 *********************/
const sheetDataHandler = (sheetData) => {
  painterItemsHTML(sheetData);
};
window.addEventListener("DOMContentLoaded", (event) => {
  // storage
  let sheetIdStorage = getItemStorage('sheetID');
  let sheetNameStorage = getItemStorage('sheetName');

  if (sheetIdStorage == null){
    getSheetData({
      sheetID: "1dkjYUfcCoQGUdAN5k0nkOwA1lteGjMSFgAooGHoIUKA",
      sheetName: "datos",
      query: "SELECT * WHERE C > 1000",
      callback: sheetDataHandler,
    });
    //validar data sql
  }else{
    console.log('storage: ', sheetIdStorage, sheetNameStorage);
    getSheetData({
      sheetID: sheetIdStorage,
      sheetName: sheetNameStorage,
      query: "SELECT * ",
      callback: sheetDataHandler,
    });
  }
  });
/**********************
 * DOM Events
 *********************/
mainForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    //
    loading_effect();

    const sheetIDForm = document.getElementById('spreadsheet_id_area').value;
    const sheetNameForm = document.getElementById('spreadsheet_sheet_area').value;
    getSheetData({
      sheetID: getSpreadsheetID(sheetIDForm),
      sheetName: sheetNameForm,
      query: "SELECT * ",
      callback: sheetDataHandler,
    });
    //
    mainFormUI.classList.remove("open-tag");
});
add_spreadsheet.addEventListener('click', ()=>{
  mainFormUI.classList.add("open-tag");
});
cancelMainFormButton.addEventListener('click', ()=>{
  mainFormUI.classList.remove("open-tag");
});
helpIcon.addEventListener('click',()=>{
  console.log("help");
  manual.classList.add("open-tag");
});
cancelHelpView.addEventListener('click',()=>{
  console.log("cancel");
  manual.classList.remove("open-tag");
});
