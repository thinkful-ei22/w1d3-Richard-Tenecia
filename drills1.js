'use strict';
function createMyObject() {
  let newObject = {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello : function () {
      return 'hello';
    }
  };

  return newObject;
}

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}