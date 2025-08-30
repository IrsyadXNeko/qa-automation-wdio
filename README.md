# WebdriverIO Selenium Project

Automated testing project menggunakan **[WebdriverIO](https://webdriver.io/)** + Selenium.  
Project ini menggunakan **Mocha** sebagai test framework dan mendukung **Allure Report** untuk visualisasi hasil test.

---

## 🚀 Tech Stack
- [Node.js](https://nodejs.org/) v18+
- [WebdriverIO](https://webdriver.io/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Allure Reporter](https://docs.qameta.io/allure/)

---

## ⚙️ Setup & Installation
1. Clone repo ini
```bash
git clone <repo-url>
cd project
```

2. Install dependencies
```bash
npm install
```

3. Pastikan Node.js terinstall minimal versi 18:
```bash
node -v
```

---

## ▶️ Running Tests
1. Run semua test
```bash
npm run wdio
```

2. Run salah satu file test
```bash
npx wdio run ./wdio.conf.js --spec ./test/specs/test.e2e.positif.js
```

3. Run lebih dari satu test file
```bash
npx wdio run ./wdio.conf.js --spec ./test/specs/login.e2e.js ./test/specs/dashboard.e2e.js
```

---

## 📊 Allure Report
1. Jalankan test
```bash
npm run wdio
```

2. Buka report di browser
```bash
npm run allure:open
```

Generate allure report sudah diset automatis setelah menjalankan test berakhir

---

## 📜 License
MIT License © 2025 IrsyadXNeko