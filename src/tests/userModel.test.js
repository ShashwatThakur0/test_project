const mongoose = require("mongoose");
const { createUser } = require("../function/userModel");

// Mocking the mongoose module
jest.mock('mongoose');

const MockedUser = mongoose.model("User");

describe("User model tests", () => {
  // jest hook
  afterEach(() => {
    //clear all mocks after each test case
    jest.resetAllMocks();
  });

  describe("createUser", () => {


    it('should create a new user', async () => {

      // Arrange - setup the variables 
      const mockUser = {
        name: "Batman",
        email: "batman@dc.com",
        password: "vengeance",
        age: 45,
      };

      // Action 
      MockedUser.prototype.save = jest.fn().mockResolvedValue(mockUser);

      const result = await createUser('Iron Man', 'ironman@avengers.com', 'forget', 45);

      // Assert 
      expect(result).toEqual(mockUser);
      expect(MockedUser.prototype.save).toBeCalledTimes(1);

    });

  });
});
