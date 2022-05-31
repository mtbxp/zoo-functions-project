const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // Filtro os ids dos funcionarios que sao iguais ao id do funcionario passado como parametro
  const filterEmployee = employees.filter((employee) => id === employee.id);
  // Acho o id do primeiro animal que o funcionario é responsavel
  const findFirstAnimal = filterEmployee.find((firstAnimal) =>
    firstAnimal.responsibleFor).responsibleFor[0];
  // Comparo o id do primeiro animal em que o funcionario é responsavel com o id da specie e armazeno os residentes numa variavel
  const findAnimal = species.find((specie) => specie.id === findFirstAnimal).residents;
  let oldestAnimal = findAnimal[0];
  // Para cada especie de animal compare se a idade do resident é maior que a idade do resident anterior
  findAnimal.forEach((animal) => {
    if (animal.age > oldestAnimal.age) {
      oldestAnimal = animal;
    }
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}
// getOldestFromFirstSpecies(id);
module.exports = getOldestFromFirstSpecies;

// Retirei o foreach e coloquei um find no lugar na linha 11 por causa do lint
// species.forEach((specie) => {
//   if (specie.id === findFirstAnimal) {
//   findAnimal = specie.residents
//   }
// });

// Fiz este Desafio em conjunto com Matheus Cabra - T16A e com Ajuda da mentoria do Bernardo 20/10/21