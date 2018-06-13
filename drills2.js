'use strict';
function makeStudentsReport(data) {
  let studentResults = [];
  for (let i = 0; i < data.length; i++){
    const item = data[i];
    studentResults.push(`${item.name}: ${item.grade}`);
  }
  return studentResults;
}

function enrollInSummerSchool(students) {
  students.forEach(student => student.status = 'In Summer School');
  return students;
}