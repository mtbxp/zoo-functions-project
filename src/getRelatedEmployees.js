const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const isManagerOrNot = employees.some((employee) => employee.managers.includes(id));
  return isManagerOrNot;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const subordinatesArray = [];
  const message = 'O id inserido não é de uma pessoa colaboradora gerente!';
  if (isManager(managerId) === false) throw new Error(message);
  const subordinates = employees.filter((manager) => manager.managers.includes(managerId));
  subordinates.forEach((subordinate) => {
    subordinatesArray.push(`${subordinate.firstName} ${subordinate.lastName}`);
  });
  return subordinatesArray;
}

module.exports = { isManager, getRelatedEmployees };

// Fiz este Desafio em conjunto com Matheus Cabra e Danilo Meneguela - T16A
