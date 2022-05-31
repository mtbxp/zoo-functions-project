const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const busca = species.find((specie) => specie.name === animal);
  const resultado = busca.residents.every((resident) => resident.age >= age);
  return resultado;
}

module.exports = getAnimalsOlderThan;

// Fiz este Desafio em conjunto com Matheus Cabra - T16A