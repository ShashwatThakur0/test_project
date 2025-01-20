// Testing a whole module
const { calculateAge, getUserFullName, getUserInitials } = require('../function/userUtils');

// Test suite or procedure
describe('user Utilities', () => {

  // Test cases
  describe('getUserFullName', () => {
    it('should return the full name of the user with first and last name', () => {
      const user = { firstName: 'Batman', lastName: 'Wayne' };
      expect(getUserFullName(user)).toBe('Batman Wayne');
    });

    it('should throw an error if the user data is incomplete', () => {
      const user = { firstName: 'Batman' };
      expect(() => getUserFullName(user)).toThrow('Invalid user data');
    });

  });

  describe('calculateAge', () => {
    it('should calculate the correct age based on birth year & current year', () => {
      const birthYear = 2000;
      const currentYear = 2025;
      expect(calculateAge(birthYear, currentYear)).toBe(25);
    });

    it('should error if one of the input is a float & not a integer', () => {
      const birthYear = 2.00;
      const currentYear = 2025;
      expect(() => calculateAge(birthYear, currentYear)).toThrow('Invalid year');
    });

  })

});