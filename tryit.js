//  Ignore this file
let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];

let bigCities = cities.filter(city => (city.population > 3000000));

console.log(bigCities);
console.log(cities);

