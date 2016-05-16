var howMuchDrunk = require('../howMuchDrunk');
var whoDrankMost = require('../whoDrankMost');
var assert = require('assert');
var whoDrankLeast = require('../whoDrankLeast');




var Monday = [
   {
       "person": "Mdu",
       "coffee": 5,
       "tea": 0,
       "water": 3
   },
   {
       "person": "Brenda",
       "coffee": 1,
       "tea": 3,
       "water": 1
   },
   {
       "person": "Lesego",
       "coffee": 0,
       "tea": 4,
       "water": 2
   }
];

var Tuesday = [
   {
       "person": "Lesego",
       "tea": 3,
       "water": 1,
       "coffee": 1
   },
   {
       "person": "Mdu",
       "tea": 0,
       "water": 5,
       "coffee": 7
   },
   {
       "person": "Brenda",
       "tea": 4,
       "water": 0,
       "coffee": 2
   }
];

var Wednesday = [
   {
       "person": "Brenda",
       "water": 4,
       "coffee": 3,
       "tea": 2
   },
   {
       "person": "Lesego",
       "water": 4,
       "coffee": 0,
       "tea": 3
   },
   {
       "person": "Mdu",
       "water": 9,
       "coffee": 8,
       "tea": 2
   }
];
//var drinksData = Monday.concat(Tuesday,Wednesday);
describe("drinks data",function(){
  it('should give total coffe drunk on Monday',function(){
    var results = howMuchDrunk(Monday, "coffee");
    assert.equal(results,6)
  })
})

describe("drinks data", function(){
  it('give total tea drunk on Tuesday', function(){
    var results = howMuchDrunk(Tuesday, "tea");
    assert.equal(results, 7)
  })
})

describe("drinks data", function(){
  it('give total water drunk on Wednesday', function(){
  var results = howMuchDrunk(Wednesday, "water");
  assert.equal(results, 17)
})
})

describe("drinks", function(){
  it('return least person', function(){
    var results = whoDrankLeast(Monday,"coffee");
    assert.equal(results, "Lesego")
  })
})



describe("drinks", function(){
  it('return least person', function(){
    var results = whoDrankLeast(Wednesday,"water");
    assert.equal(results, "Brenda,Lesogo")
  })
})

describe("drinks", function(){
  it('return person who drank most', function(){
    var results = whoDrankLeast(Tuesday,"water");
    assert.equal(results, "Brenda,Lesogo")
  })
})
