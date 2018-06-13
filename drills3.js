'use strict';
let loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return this.water/this.flour * 100;   
  },


};
//console.log(loaf.flour);
//console.log(loaf.water);

// console.log(loaf.hydration());

const words = {
  foo: 'hello',
  bar: 'crunch',
  fum: 'goodbye',
  quux: 'giant',
  spam: 'and eggs'
};
//for (let key in words) {
  //console.log(key, words[key]);
//};

let buffet = {
  meals: ['breakfast', 'second breakfast',
    'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};
// console.log(`The hobit's fourth meal of the day is ${buffet.meals[3]}!`);

const staff = [
  {name: 'Mr. Burns', jobTitle: 'Boss'},
  {name: 'Peter', jobTitle: 'Kidnapper', boss:'Mr. Burns'},
  {name: 'Homer', jobTitle: 'Nuclear Plant Worker', boss:'Mr. Burns'},
  {name: 'James', jobTitle: 'Secret Agent', boss:'Mr. Burns'}
];

for (let i=0; i<staff.length; i++) {
  let employee = staff[i];{
    console.log(employee.boss === undefined ? `${employee.jobTitle} ${employee.name} doesn't report to anybody.` : `${employee.jobTitle} ${employee.name} reports to ${employee.boss}`);
  }
}