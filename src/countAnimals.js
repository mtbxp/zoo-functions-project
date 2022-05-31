const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const totAnimais = species.reduce((accumulator, { name, residents }) =>
      ({ ...accumulator, [name]: residents.length }), {});
    return totAnimais;
  }
  if (Object.keys(animal).includes('specie') && !Object.keys(animal).includes('sex')) {
    const findAnimal = species.find((specie) => animal.specie === specie.name);
    const residentsLength = findAnimal.residents.length;
    return residentsLength;
  } if (Object.keys(animal).includes('specie', 'sex')) {
    const locateAnimal = species.find((specie) => animal.specie === specie.name);
    const filterResidents = locateAnimal.residents.filter((resident) =>
      resident.sex === animal.sex);
    const totalResidentsLength = filterResidents.length;
    return totalResidentsLength;
  }
}
// Desafio feito em conjunto com Matheus Cabral T16A

module.exports = countAnimals;
