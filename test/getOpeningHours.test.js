const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('não passando argumentos. Deverá retornar o objeto:', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  test('retorna a string \'The zoo is closed\' ao passar os argumentos Monday e 09:00-AM', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(expected);
  });
  test('retorna a string \'The zoo is open\' ao passar os argumentos Tuesday e 09:00-AM', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(expected);
  });
  test('retorna a string \'The zoo is closed\' quando recebe Wednesday e 09:00-PM', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(expected);
  });
  test('retorna a mensagem \'The day must be valid. Example: Monday\' ao passar os argumentos Thu e 09:00-AM', () => {
    const received = ('Thu', '09:00-AM');
    const expected = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours(received)).toThrow(expected);
  });
  test('retorna a mensagem \'The abbreviation must be \'AM\' or \'PM\' ao passar os argumentos Friday e 09:00-ZM', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(expected);
  });
  test('retorna a mensagem \'The hour should represent a number\' ao passar os argumentos Saturday e C9:00-AM', () => {
    const expected = 'The hour should represent a number';
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(expected);
  });
  test('retorna a mensagem \'The minutes should represent a number\' ao passar os argumentos Saturday e 09:c0-AM', () => {
    const expected = 'The minutes should represent a number';
    expect(() => getOpeningHours('Saturday', '09:c0-AM')).toThrow(expected);
  });
  test('retorna a mensagem \'The hour must be between 0 and 12\' ao passar os argumentos Monday e 13:00-AM', () => {
    const expected = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(expected);
  });
  test('retorna a mensagem \'The minutes must be between 0 and 59\' ao passar os argumentos Tuesday e 09:60-AM', () => {
    const expected = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(expected);
  });
});
