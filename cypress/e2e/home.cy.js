//test suite
describe('Login Page', () => {
  //pre-conditions. alternatively, we can use afterEach for post-conditions
  beforeEach(() => {

    cy.visit('http://localhost:3000/home');
  });


  //Positive testing
  it('should login with valid credentials', () => {
    //Arrange
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');

    //Act
    cy.get('#login-button').click();

    //Assert
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Login Successful!')
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
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Inavlid credentials')
    });
  });

  it('should only submit once', () => {
    //Arrange
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');

    //Act
    for (var i = 0; i < 3; i++) {
      cy.get('#login-button').click();
    }

    //Assertion  
    cy.get('#submitCount').should('have.to', '1')
  });

  //Brute force testing 
  it('should for multiple failed login attempts', () => {

    for (let i = 0; i < 5; i++) {
      cy.get('#email').clear().type('wrongexample@gmail.com')
      cy.get('#password').clear().type('wrongpassword')
      cy.get('#login-button').click()
    }
    //Assert
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Inavlid credentials')
    });
  });


});