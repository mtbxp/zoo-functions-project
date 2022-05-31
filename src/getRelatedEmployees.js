const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = Object.keys(hours);
const obj = {};
days.forEach((day) => {
  const animal = species.reduce((accumulator, specie) => {
    if (specie.availability.includes(day)) {
      accumulator.push(specie.name);
    }
    return accumulator;
  }, []);
  obj[day] = {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: animal,
  };
});
// console.log(obj);
obj.Monday = {
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!' };

const speciesName = species.map((specie) => specie.name);
// console.log(speciesName)

function getSchedule(scheduleTarget) {
  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: obj[scheduleTarget],
    };
  }
  if (speciesName.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return obj;
}

// console.log(getSchedule(undefined))

module.exports = getSchedule;
// Realizei com a ajuda do Igor Felipe e Raffael Marinho T16A
