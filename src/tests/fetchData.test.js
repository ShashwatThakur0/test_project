const fetchData = require('../function/fetchData');

// Mock the global fetch function 
global.fetch = jest.fn();

describe('fetchData', () => {
  beforeEach(() => {
    //reset the mock object before each test 
    fetch.mockClear();
  });

  it('fetches data from the API endpoint and returns it as JSON', async () => {
    // mock the fetch response
    const mockResponse = { userId: 1, id: 1, title: 'Test title', completed: false };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1');

    expect(data).toEqual(mockResponse);

  });
})