# Test Project

A Node.js application with comprehensive testing setup using Jest and Cypress, featuring automated CI/CD with GitHub Actions.

## Description

This project is built with Express.js and uses EJS as the template engine. It includes a robust testing infrastructure with both unit tests (Jest) and end-to-end tests (Cypress), along with automated testing pipelines using GitHub Actions.

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm

## Installation

```bash
npm install
```

## Available Scripts

- `npm start` - Starts the application
- `npm test` - Runs Jest unit tests

## Project Structure

```
├── src/               # Source code
├── views/             # EJS templates
├── cypress/           # Cypress E2E tests
├── coverage/         # Test coverage reports
├── app.js            # Application entry point
└── jest.config.js    # Jest configuration
```

## Testing

### Unit Tests
Unit tests are written using Jest. Run them with:
```bash
npm test
```

### End-to-End Tests
E2E tests are written using Cypress. The project includes additional Cypress plugins:
- cypress-clipboard
- cypress-real-events

## Continuous Integration

This project uses GitHub Actions for automated testing on every push and pull request:

### Jest Workflow
- Triggers on: Push
- Runs all Jest unit tests
- Uses Node.js 18
- Automatically installs dependencies and executes test suite

### Cypress Workflow
- Triggers on: Push and Pull Requests
- Runs all Cypress E2E tests
- Uses Node.js 18
- Sets up and starts the application
- Waits for the application to be ready at http://localhost:3000/home
- Executes the full E2E test suite

Both workflows use Ubuntu latest as the running environment and ensure code quality with every code change.

## License

ISC