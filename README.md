# WebdriverIO Selenium Project

Automated testing project using WebdriverIO + Selenium.
This project uses Mocha as the test framework and supports Allure Report for test result visualization.

---

## 🚀 Tech Stack
- [Node.js](https://nodejs.org/) v18+
- [WebdriverIO](https://webdriver.io/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Allure Reporter](https://docs.qameta.io/allure/)

---

## ⚙️ Setup & Installation
1. Clone this repo
```bash
git clone <repo-url>
cd project
```

2. Install dependencies
```bash
npm install
```

3. Make sure Node.js is installed with at least version 18:
```bash
node -v
```

---

## ▶️ Running Tests
1. Run all tests
```bash
npm run wdio
```

2. Run a specific test file
```bash
npx wdio run ./wdio.conf.js --spec ./test/specs/test.e2e.positif.js
```

3. Run multiple test files
```bash
npx wdio run ./wdio.conf.js --spec ./test/specs/login.e2e.js ./test/specs/dashboard.e2e.js
```

---

## 📊 Allure Report
1. Run tests
```bash
npm run wdio
```

2. Open the report in the browser
```bash
npm run allure:open
```

The Allure report is automatically generated after the test execution is completed

---

## 📜 License
MIT License © 2025 IrsyadXNeko