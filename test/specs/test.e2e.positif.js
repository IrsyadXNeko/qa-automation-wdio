const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const { takeStepScreenshot } = require('../utils/screenshot')
const { default: SecureKey } = require('../key-object/secure.key')

describe('My Login application', () => {
    it('Login with valid credentials', async () => {
        await LoginPage.open();
        await takeStepScreenshot('Open Login Page');

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await takeStepScreenshot('User Login Successfully');

        await SecurePage.existing(SecureKey.flashAlert);
        await SecurePage.validateText(SecureKey.flashAlert, 'You logged into a secure area!');
        await takeStepScreenshot('Validate Alert');
    })
})

