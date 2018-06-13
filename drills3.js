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
console.log(`The hobit's fourth meal of the day is ${buffet.meals[3]}!`);