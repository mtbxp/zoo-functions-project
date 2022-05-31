const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const resultado = employees.find((employee) => employeeName === employee.firstName
  || employeeName === employee.lastName);
  return resultado;
}

module.exports = getEmployeeByName;

// Fiz este Desafio em conjunto com Matheus Cabra e Danilo Meneguela - T16A
