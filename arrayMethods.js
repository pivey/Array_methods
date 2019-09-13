const { cars } = require('./datasets/cars');
const { companies } = require('./datasets/companies');
const { jedi } = require('./datasets/jedi');
// const dreamTeam = require('./datasets/dreamTeam').dreamTeam;

const ages = [23, 65, 78, 24, 57, 12, 34, 97, 45, 5, 7, 1, 32, 9, 64, 72, 34, 35, 14, 54, 24, 98, 38, 24];

//* *****************  FOREACH  **************************

cars.forEach(cars => {
        if (cars.maxSpeed > 120) {
                console.log(`${cars.model}: ${cars.maxSpeed}mph`);
        }
});

//* *****************  FILTER **************************

const carsfil = cars.filter(cars => cars.year >= 2000 && cars.year <= 2006);

console.log(carsfil);

//* *****************  MAP  **************************

const carsMap = cars.map(cars => cars.model);

const carsMap2 = cars.map(cars => `${cars.weight} [${cars.maxSpeed}]`);

console.log(carsMap);
console.log(carsMap2);

const ageMap = ages
        .map(x => x / 3)
        .map(y => Math.sqrt(y))
        .map(x => Math.round(x));

console.log(ageMap);

//* *****************  REDUCE  **************************
ageSum = ages.reduce((total, age) => total + age, 0);

// [ 'F', 'L', 'O', 'R' ]

const totalJediScore = jedi.reduce(
        (acc, person) => (person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc),
        0
);

console.log(totalJediScore);

const companiesRed = companies.reduce((total, comp) => total + (comp.endingYear - comp.foundingYear), 0);

console.log('companies reduce practice : ', companiesRed);

//* *****************  SORT  **************************

const sortAges = ages.sort((a, b) => a - b);

const sortComp = companies.sort((a, b) => (a.foundingYear > b.foundingYear ? 1 : -1));

const sortCars = cars.sort((a, b) => (a.year > b.year ? 1 : -1));

const sortSpeed = cars.sort((a, b) => {
        if (a.maxSpeed > b.maxSpeed) {
                return 1;
        }
        return -1;
});

const votes = [
        { title: 'Apple', votes: 1 },
        { title: 'Milk', votes: 2 },
        { title: 'Carrot', votes: 3 },
        { title: 'Banana', votes: 2 },
];

const sortVote = votes.sort((a, b) => {
        if (a.votes > b.votes) return 1;
        if (a.votes < b.votes) return -1;
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
});

console.log('sortVote :', sortVote);

const letters = ['R', 'O', 'F', 'L'];

const letterSort = letters.sort(function(a, b) {
        const x = a.toLowerCase();
        const y = b.toLowerCase();

        return x < y ? -1 : x > y ? 1 : 0;
});

console.log('letterSort :', letterSort);

const shapes = [[5, 'Pentagon'], [3, 'Triangle'], [8, 'Octagon'], [4, 'Rectangle']];

shapes.sort(function(a, b) {
        return a[0] - b[0];
});

console.log('shapes :', shapes);

const objects = [[4, 'Trapezium'], [5, 'Pentagon'], [3, 'Triangle'], [4, 'Rectangle'], [4, 'Square']];

const secondarySort = objects.sort(function(a, b) {
        if (a[0] === b[0]) {
                const x = a[1].toLowerCase();
                const y = b[1].toLowerCase();

                return x < y ? -1 : x > y ? 1 : 0;
        }
        return a[0] - b[0];
});

console.log('#####', secondarySort);
