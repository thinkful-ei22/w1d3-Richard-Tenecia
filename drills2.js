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

function findById(items, idNum) {
  return items.find(item => item.id === idNum);
}

function validateKeys(object, expectedKeys) {
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }

  for (let i=0; i<expectedKeys.length; i++){
    if (!Object.keys(object).find(key => key === expectedKeys[i])){
      return false;
    }
  }
  return true;
}