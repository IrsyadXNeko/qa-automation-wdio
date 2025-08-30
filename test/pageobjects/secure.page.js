const { $, expect } = require('@wdio/globals')

class SecurePage  {
    async existing(key) {
        await expect($(key)).toBeExisting()
    }

    async validateText(key, text) {
        await expect($(key)).toHaveText(expect.stringContaining(text))
    }
}

module.exports = new SecurePage();
