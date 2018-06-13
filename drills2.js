'use strict';
function makeStudentsReport(data) {
  let studentResults = [];
  for (let i = 0; i < data.length; i++){
    const item = data[i];
    studentResults.push(`${item.name}: ${item.grade}`);
  }
  return studentResults;
}