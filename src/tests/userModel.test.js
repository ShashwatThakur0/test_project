const mongoose = require("mongoose");
const { createUser, User } = require("../function/userModel");

// Mocking the mongoose module

describe("User model tests", () => {
  // jest hook
  beforeEach(() => {
    //clear all mocks before each test case
    jest.resetAllMocks();
  });

  describe("createUser", () => {

    it('should create a new user', async () => {

      // Arrange - setup the variables 
      const mockUser = {
        name: "Batman",
        email: "batman@rdpolytech.ca",
        password: "vengeance",
        age: 45,
      };
      jest.spyOn(User.prototype, 'save').mockResolvedValue(mockUser);

      const result = await createUser('Batman', 'batman@rdpolytech.ca', 'vengeance', 45);

      // Assert 
      expect(result).toEqual(expect.objectContaining(mockUser));
      expect(User.prototype.save).toBeCalledTimes(1);

    });

  });
});

