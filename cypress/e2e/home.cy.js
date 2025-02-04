// test suite 
describe('Login page', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000/home');
  });

  // Arrange 
  it('should login with valid credentials', () => {
    cy.get('#email').type('batmanbegins@example.com');
    cy.get('#password').type('vengeance');

    // act 
    cy.get('#login-form').click();

    // assert
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Login Sucessful!');
    });
  });

  //Negative testing
  it('should display error message if wrong credentials', () => {
    //Arrange
    cy.get('#email').type('test@examples.com');
    cy.get('#password').type('password123');

    //Act
    cy.get('#login-button').click();

    //Assert
    cy.get('#error-message').should(
      'contain',
      'Invalid email or password'
    );
  });


});