const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const object = [];
  if (ids.length < 1) {
    return object;
  }

  // const { species } = data;
  species.forEach((specie) => {
    ids.forEach((id) => {
      if (specie.id === id) {
        object.push(specie);
      }
    });
  });
  return object;
}

module.exports = getSpeciesByIds;
// Fiz este Desafio em conjunto com Matheus Cabral e da Mentoria do Caíque - T16A
