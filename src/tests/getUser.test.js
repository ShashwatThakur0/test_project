const { getUserFromDatabase } = require('../function/getUser.js');

//Mocking the entire database module 
jest.fn('../src/database');

//test suites or procedure
test('fetch user from database', () => {
  jest.fn().mockReturnValueOnce({ id: 1, name: 'Guess who' });

  const user = getUserFromDatabase(1);

  expect(user.name).toBe('Guess who');
});