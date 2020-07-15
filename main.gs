function main() {

  //Difine Spreadsheet App
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  //Get sheet
  var sheet = spreadsheet.getSheetByName('集計');
  var range = sheet.getRange('A1:BZ59');
  var data = config(range);

  //Define array for report texts
  var reports = [];
  
  //Half yearly report
  var createHalfYearlyReport = function(){

    //Get data of this month
    var monthVal = getMonthKey() + 1; //Exact number of month
    var halfYear;
    
    // Judge "1st half of Year" or "2nd half of Year"
    if(4 <= monthVal && monthVal <= 9){
      halfYear = 'firstHalfYear';
    } else {
      halfYear = 'secondHalfYear';
    }
    
    reports.push(
      createReport(
        halfYear, //type
        data[halfYear].fixed[0], //target
        data[halfYear].fixed[1], //salesFixed
        data[halfYear].prospect[1], //salesProspected
        data[halfYear].fixed[2], //salesFixedRate
        data[halfYear].prospect[2]  //salesProspectedRate
      )
    );
  };
  
  //Quarter
  var createQuarterReport = function(){

    //Get data of this month
    var monthVal = getMonthKey() + 1; //Exact number of month
    var quarter;
    
    if(4 <= monthVal && monthVal <= 6){
      quarter = 'quarter1';
    } else if(7 <= monthVal && monthVal <= 9){
      quarter = 'quarter2';
    } else if(10 <= monthVal && monthVal <= 12){
      quarter = 'quarter3';
    } else { // Jan - May
      quarter = 'quarter4';
    }
    
    reports.push(
      createReport(
        quarter, //type
        data[quarter].fixed[0], //target
        data[quarter].fixed[1], //salesFixed
        data[quarter].prospect[1], //salesProspected
        data[quarter].fixed[2], //salesFixedRate
        data[quarter].prospect[2]  //salesProspectedRate
      )
    );
  };
  
  //3 monthly reports
  var createMonthlyReport = function(){
    var i = 0;
    var limit = 3;
    
    while(i < limit){
      var key = getMonthKey() + i;
      var monthName = getMonthName(key);
      var monthVal = key + 1; //Exact number of month
      //Logger.log(monthName);
      
      reports.push(
        createReport(
          monthVal, //type
          data.month[monthName].fixed[0], //target
          data.month[monthName].fixed[1], //salesFixed
          data.month[monthName].prospect[1], //salesProspected
          data.month[monthName].fixed[2], //salesFixedRate
          data.month[monthName].prospect[2]  //salesProspectedRate
        )
      );
      
      i++;
    }
  };
  
  //Run functions & Unify Report
  var updateReport = function(){
    reports.push(getGroupName());
    createHalfYearlyReport();
    createQuarterReport();
    createMonthlyReport();
    reports.push('【課題と対応策（具体的に）】\n' +'{ ここに任意のテキストを入れる }');
    
    //Write to sheet
    spreadsheet.getSheetByName('レポート').getRange(1, 1).setValue(reports.join('\n'));
    
    //For debug
    Logger.log(reports.join('\n'));
  }
  updateReport();
}