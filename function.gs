//Get group name
function getGroupName(){
  var fileName = SpreadsheetApp.getActive().getName();
  var NUMBERS_EXTRA_TEXTS = 10;
  var groupName = fileName.substring(fileName.length - NUMBERS_EXTRA_TEXTS, 0);
  
  return groupName + '収支報告\n';
}

//Add ','
function cleanNum(num){
  // Change to String
  num = String(num);
  
  var len = num.length;
  
  // Loop
  if(len > 3){
    // add '','
    return cleanNum(num.substring(0,len-3))+','+num.substring(len-3);
  } else {
    return num;
  }
}

//Get cell values
function getVal(range, row, colmun, percent){  
  var val = range.getCell(row, colmun).getValue().toString(10);
  
  if(percent === true){
    return Math.round(val * 1000)/10 + '%';
  } else {
    return '¥' + cleanNum(val);
  }
}

//Create Sales Report per 1 pragraph
function createReport(type, target, salesFixed, salesProspected, salesFixedRate, salesProspectedRate){    
  var title;
  
  if(typeof type === 'number'){
    title = '▼' + type + '月';
  } else {
    
    if(type === 'firstHalfYear'){
      title = '【上期】';
    } else if(type === 'secondHalfYear'){
      title = '【下期】';
    } else if(type === 'quarter1'){
      title = '【Q1】';
    } else if(type === 'quarter2'){
      title = '【Q2】';
    } else if(type === 'quarter3'){
      title = '【Q3】';
    } else if(type === 'quarter4'){
      title = '【Q4】';
    }
    
  }
  
  var paragraph = title + '\n' +
    '売上目標： ' + target + '\n' +
    '売上実績（現状）： ' + salesFixed + '（' + salesFixedRate + '）\n' +
    '売上実績（見込）： ' + salesProspected + '（' + salesProspectedRate + '）\n';
  
  return paragraph;
}

//Get this month
function getMonthKey(){
  var date = new Date();
  var monthVal = date.getMonth();
  return monthVal;
}

function getMonthName(key){
  var monthKeys = ['jan', 'feb', 'mar', 'apl', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  return monthKeys[key];
}
