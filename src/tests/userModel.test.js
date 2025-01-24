const mongoose = require('mongoose');
const { createUser } = require('../function/userModel');

// Mocking the mongoose module
jest.mock('mongoose');

const MockedUser = mongoose.model('User');


describe('User model tests', () => {
  // jest hook 
  afterEach(() => {
    //clear all mocks after each test case 
    jest.resetAllMocks();

  });

  describe('createUser', () => {

  });
})