const cars = require('./datasets/cars').cars; 
const companies = require('./datasets/companies').companies;
const jedi = require('./datasets/jedi').jedi;
//const dreamTeam = require('./datasets/dreamTeam').dreamTeam; 

const ages = [23, 65, 78, 24, 57, 12, 34, 97, 45, 5, 7, 1, 32, 9, 64, 72, 34, 35, 14, 54, 24, 98, 38, 24];

//******************  FOREACH  **************************

cars.forEach(cars => {
  if (cars.maxSpeed > 120) {
    console.log(cars.model + ': ' + cars.maxSpeed + 'mph');
  }
});


//******************  FILTER ************************** 

const carsfil = cars.filter(cars => cars.year >= 2000 && cars.year <= 2006);

console.log(carsfil);


//******************  MAP  **************************

const carsMap = cars.map(cars => cars.model);

const carsMap2 = cars.map(cars => {
  return `${cars.weight} [${cars.maxSpeed}]`;
});

console.log(carsMap);
console.log(carsMap2);

const ageMap = ages
.map(x => x / 3)
.map(y => Math.sqrt(y))
.map(x => Math.round(x));

console.log(ageMap);


//******************  SORT  **************************

const sortAges = ages.sort((a,b) => a - b);

const sortComp = companies.sort((a,b) => a.foundingYear > b.foundingYear ? 1 : -1);

const sortCars = cars.sort((a,b) => a.year > b.year ? 1 : -1);

const sortSpeed = cars.sort((a,b) => {
  if(a.maxSpeed > b.maxSpeed) {
    return 1;
  } else {
    return -1;
  }
  });

console.log(sortComp);
console.log(sortAges);
console.log(sortCars);
console.log(sortSpeed);

//******************  REDUCE  **************************
ageSum = ages.reduce((total, age)=> total + age, 0);

console.log('AGESUM:' + ageSum);


const totalJediScore = jedi.reduce((acc, person) => person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc, 0);

console.log(totalJediScore);


const companiesRed = companies.reduce((total, comp) => total + (comp.endingYear - comp.foundingYear), 0);

console.log('companies reduce practice : ', companiesRed);
