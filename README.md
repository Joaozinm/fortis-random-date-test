# Test Automation Project - Random Date Generator

This project contains an automation script developed with **Playwright** to validate the functionality of the date generator on the [random.org](https://www.random.org/calendar-dates/) website.

The test's objective is to verify that the site can generate a specific number of random dates within a user-defined time range.

## 🚀 Technologies Used

- **Automation Framework:** [Playwright](https://playwright.dev/)
- **Language:** JavaScript with Node.js
- **Package Manager:** NPM
- **Date Library:** [date-fns](https://date-fns.org/)

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [NPM](https://www.npmjs.com/) (usually installed with Node.js)

## ⚙️ Installation

1.  **Clone the repository:**

    ```bash
    git clone <https://github.com/Joaozinm/fortis-random-date-test>
    cd fortis-random-date-test
    ```

2.  **Install the project dependencies:**

    ```bash
    npm install
    ```

3.  **Install the Playwright browsers:**
    (This command downloads the necessary browsers for test execution)
    ```bash
    npx playwright install
    ```

## ▶️ Running the Tests

To run the automation script, use the following command in your terminal:

```bash
npm test
```

Or

```bash
npm run test:headed
```

This command will launch Playwright, which will open a browser (Chromium, by default), execute the steps defined in the test, and display the results in the terminal.

## 🏛️ Project Structure

The project follows an architecture based on the Page Object Model (POM) with an Actions layer to improve readability and maintainability:

- tests/: Contains the test specification files (.spec.js).
- pages/: Contains the Page Object classes, responsible for mapping elements and interaction methods for each page.
- actions/: Contains classes that orchestrate the Page Object interactions to execute business flows.
- utils/: Contains utility functions, such as date handling.
- playwright.config.js: The Playwright configuration file.
- package.json: Defines the project's dependencies and scripts.

```
/
├── actions/
│   └── RandomDatesActions.js
├── pages/
│   └── RandomDatesPage.js
├── tests/
│   └── randomDates.spec.js
├── utils/
│   └── dateUtils.js
├── playwright.config.js
└── package.json

```
