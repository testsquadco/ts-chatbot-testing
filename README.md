<p align="center">
  <img src="https://staging.testsquad.co/wp-content/uploads/2025/02/testsquad-logo-500-469x100.png" width="400"/>
</p>

# TestSquad - Botium Chatbot Testing Framework

## About TestSquad

TestSquad is a software testing company specializing in manual and automated testing solutions, ensuring high-quality software for global clients. We provide expert QA services, including mobile automation, to enhance product reliability and performance.

📩 Contact us: info@testsquad.co | 🌐 Website: https://testsquad.co

---

## Overview

A flexible and modular Proof-of-Concept (PoC) for testing chatbots using Botium. This framework allows easy integration with various chatbot platforms and provides detailed test reporting.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Configuration](#configuration)
  - [Basic Configuration](#basic-configuration)
  - [Supported Chatbot Platforms](#supported-chatbot-platforms)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Extending the Framework](#extending-the-framework)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A chatbot deployed on a supported platform

## Project Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd botium-chatbot-testing
```

2. Install dependencies:
```bash
npm install
```

3. Create necessary directories:
```bash
mkdir -p tests/convos reports
```

## Configuration

### Basic Configuration

The main configuration file is `botium.json`. This file contains all the settings needed to connect to your chatbot and run tests.

```json
{
  "botium": {
    "Capabilities": {
      "PROJECTNAME": "Your Project Name",
      "CONTAINERMODE": "directline3",
      "DIRECTLINE3_SECRET": "YOUR_SECRET_HERE"
    }
  }
}
```

### Supported Chatbot Platforms

#### Microsoft Bot Framework
```json
{
  "botium": {
    "Capabilities": {
      "CONTAINERMODE": "directline3",
      "DIRECTLINE3_SECRET": "YOUR_SECRET",
      "DIRECTLINE3_WEBHOOK_PORT": "3000"
    }
  }
}
```

#### Dialogflow
```json
{
  "botium": {
    "Capabilities": {
      "CONTAINERMODE": "dialogflow",
      "DIALOGFLOW_PROJECT_ID": "YOUR_PROJECT_ID",
      "DIALOGFLOW_CLIENT_EMAIL": "YOUR_CLIENT_EMAIL",
      "DIALOGFLOW_PRIVATE_KEY": "YOUR_PRIVATE_KEY"
    }
  }
}
```

#### Watson Assistant
```json
{
  "botium": {
    "Capabilities": {
      "CONTAINERMODE": "watson",
      "WATSON_WORKSPACE_ID": "YOUR_WORKSPACE_ID",
      "WATSON_API_KEY": "YOUR_API_KEY",
      "WATSON_URL": "YOUR_ASSISTANT_URL"
    }
  }
}
```

## Running Tests

The framework provides several test commands:

```bash
# Run basic tests
npm test

# Run tests with verbose logging
npm run test:verbose

# Run tests with detailed reporting
npm run test:report

# Clean previous test reports
npm run clean:reports
```

### Test Structure

Test conversations are defined in `.convo.txt` files under the `tests/convos` directory. Example:

```text
Test Case Name

#me
user message

#bot
expected bot response
```

### Available Test Cases

1. Welcome Flow (`welcome.convo.txt`)
   - Tests basic greeting and menu options
   - Verifies bot's welcome message
   - Tests goodbye interaction

2. Weather Flow (`weather_flow.convo.txt`)
   - Tests weather checking functionality
   - Verifies intent recognition
   - Tests entity extraction for city names

3. Error Handling (`error_handling.convo.txt`)
   - Tests bot's response to invalid inputs
   - Verifies fallback messages
   - Tests recovery options

### Special Commands

- `INTENT`: Assert specific intent recognition
- `ENTITY`: Assert entity extraction
- `BUTTONS`: Check for button options in response

Example:
```text
#me
what's the weather in London?

#bot
INTENT weather.check
ENTITY city="London"
```

## Test Reports

Test reports are generated in the `reports` directory in JSON format. Each report includes:

- Total number of tests
- Number of passed/failed tests
- Pass rate percentage
- Detailed results for each test case
- Timestamps and error messages (if any)

Example report structure:
```json
{
  "summary": {
    "total": 10,
    "passed": 8,
    "failed": 2,
    "passRate": "80.00%"
  },
  "details": [
    {
      "name": "Welcome Flow",
      "status": "PASSED",
      "timestamp": "2024-01-01T12:00:00.000Z"
    }
  ]
}
```

## Extending the Framework

### Adding New Test Cases

1. Create a new `.convo.txt` file in `tests/convos/`
2. Follow the conversation format:
```text
Test Name

#me
user input

#bot
expected response
```

### Custom Assertions

Add custom assertions in `botium.json`:
```json
{
  "botium": {
    "Capabilities": {
      "ASSERTERS": [
        {
          "ref": "CUSTOM",
          "src": "./scripts/custom-asserter.js"
        }
      ]
    }
  }
}
```

### Custom Hooks

The framework supports custom hooks in `scripts/custom.js` for:
- Bot preparation
- Test start/end
- Message processing
- Response validation

Example:
```javascript
module.exports = {
  beforeInput: async (container, msg) => {
    console.log(`Processing user input: ${msg.messageText}`);
  },
  afterOutput: async (container, msg) => {
    console.log(`Bot response received: ${msg.messageText}`);
  }
};
```

## Troubleshooting

Common issues and solutions:

1. Connection Timeout
   - Increase `WAITFORBOTTIMEOUT` in botium.json
   - Check network connectivity
   - Verify bot endpoint is accessible

2. Authentication Failures
   - Double-check API credentials
   - Ensure all required permissions are granted
   - Verify token expiration

3. Response Mismatches
   - Check for exact text matching (including punctuation)
   - Verify intent/entity assertions
   - Enable verbose logging for detailed debugging

4. Report Generation Issues
   - Ensure write permissions for reports directory
   - Check disk space
   - Verify JSON formatting in test files

For more information about Botium capabilities and advanced features, visit the [Botium Documentation](https://botium.atlassian.net/wiki/spaces/BOTIUM/overview).


## Support

Need help implementing this framework or looking for custom automation solutions? Contact TestSquad:

- 📧 Email: info@testsquad.co
- 🌐 Website: https://testsquad.co
- 💼 Services: Mobile Testing, Automation Solutions, QA Consulting


## License

Released under the [MIT License](LICENSE).

---

<p align="center">Powered by <a href="https://testsquad.co">TestSquad</a> - Your Quality Assurance Partner</p>
