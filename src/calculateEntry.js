const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const kid = (entrant) => entrant.age < 18;
  const filterKid = entrants.filter(kid);
  const underAgeLength = filterKid.length;
  const adult = (entrant) => entrant.age >= 18 && entrant.age < 50;
  const filterAdults = entrants.filter(adult);
  const adultLength = filterAdults.length;
  const senior = (entrant) => entrant.age >= 50;
  const filterSeniors = entrants.filter(senior);
  const oldLength = filterSeniors.length;
  const resultObject = {
    child: underAgeLength,
    adult: adultLength,
    senior: oldLength,
  };
  return resultObject;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length < 1) {
    return 0;
  }
  const countEntrantsFunction = countEntrants(entrants);
  const kidsPrice = (countEntrantsFunction.child) * 20.99;
  const adultsPrice = (countEntrantsFunction.adult) * 49.99;
  const seniorsPrice = (countEntrantsFunction.senior) * 24.99;
  const totalPrice = (kidsPrice + seniorsPrice + adultsPrice);
  return totalPrice;
}
module.exports = { calculateEntry, countEntrants };
// Desafio feito em conjunto com Matheus Cabral T16A
