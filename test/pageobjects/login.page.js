const { $, browser } = require('@wdio/globals');
const { default: LoginKey } = require('../key-object/login.key');

class LoginPage {
    async open() {
        await browser.url('/login');
    }

    async inputValue(value, key) {
        await $(key).setValue(value);
    }

    async click(key) {
        await $(key).click();
    }

    async login(username, password) {
        await this.inputValue(username, LoginKey.inputUsername);
        await this.inputValue(password, LoginKey.inputPassword);
        await this.click(LoginKey.btnSubmit);
    }

    async existing(key) {
        await expect($(key)).toBeExisting()
    }

    async validateText(key, text) {
        await expect($(key)).toHaveText(expect.stringContaining(text))
    }
}

module.exports = new LoginPage();
