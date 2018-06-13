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

// const words = {
//   foo: 'hello',
//   bar: 'crunch',
//   fum: 'goodbye',
//   quux: 'giant',
//   spam: 'and eggs'
// };
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

// for (let i=0; i<staff.length; i++) {
//   let employee = staff[i];{
//     console.log(employee.boss === undefined ? `${employee.jobTitle} ${employee.name} doesn't report to anybody.` : `${employee.jobTitle} ${employee.name} reports to ${employee.boss}`);
//   }
// }
const cipher = {
  a:2,
  b:3,
  c:4,
  d:5
};

function decode(word) {
  if (cipher[word[0]]) {
    return word[cipher[word[0]]-1];
  }
  else return ' ';
}


const str = 'craft block argon meter bells brown croon droop';

function decodeWords(decode, str) {
  let strSplit = str.split(' ');
  // return strSplit.forEach(decode);
  return strSplit.map(decode).join('');
  //ask about commas without parameter for join
}

//console.log(decodeWords(decode,str));


const createCharacter = function (name, nickName, race, origin, attack, defense, weapon){

  return {name, 
    nickName, 
    origin, 
    race, 
    attack, 
    defense,
    weapon,
    describe: function(){
      console.log(`${name} is a ${race} from ${origin} who uses ${weapon}`);
    },
    evaluateFight: function(character){
      // if (this.attack < character.defense && character.attack < this.defense){
      //   return 'Your opponent takes 0 damage and you receive 0 damage';
      // }
      // if  (this.attack < character.defense){
      //   return `Your opponent takes 0 damage and you receive ${character.attack - this.defense} damage`;
      // }
      // if (character.attack < this.defense ){
      //   return `Your opponent takes ${this.attack - character.defense} damage and you receive 0 damage`;
      // }
      // else{
      return `Your opponent takes ${this.attack > character.defense ? this.attack - character.defense : 0} damage and you receive ${character.attack > this.defense ? character.attack - this.defense:0} damage`;
      // }
    }
  };

};

const character = [
  createCharacter('Gandalf the White', 'gandalf','Wizard','Middle Earth', 10, 6, 'wizard staff'),
  createCharacter('Biblo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2 ,1, 'the Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3,2, 'String and Barrow Blade'),
  createCharacter('Aragorn, son of Arathorn','aragorn','Man','Dunnedain',6,8, 'Anduril'),
  createCharacter('Legolas','legolas','Elf','Woodland Realm',8,5, 'Bow and Arrow')
];

character.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 4,7, 'Hadhafang'));

// character.find(char => char.nickName === 'aragorn').describe();

// character.filter(char => char.race === 'Hobbit').map(obj => obj.describe());
character.filter(char => char.attack > 5).map(obj => obj.describe());



