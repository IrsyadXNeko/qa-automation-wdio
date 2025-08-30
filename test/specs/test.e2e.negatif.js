const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const { takeStepScreenshot } = require('../utils/screenshot')
const { default: SecureKey } = require('../key-object/secure.key')

describe('My Login application', () => {
    it('Login with invalid username', async () => {
        await LoginPage.open();
        await takeStepScreenshot('Open Login Page');

        await LoginPage.login('123', '123!');
        await takeStepScreenshot('User Login Failure');

        await SecurePage.existing(SecureKey.flashAlert);
        await SecurePage.validateText(SecureKey.flashAlert, 'Your username is invalid!');
        await takeStepScreenshot('Validate Alert');
    })

    it('Login with invalid password', async () => {
        await LoginPage.open();
        await takeStepScreenshot('Open Login Page');

        await LoginPage.login('tomsmith', '123!');
        await takeStepScreenshot('User Login Failure');

        await SecurePage.existing(SecureKey.flashAlert);
        await SecurePage.validateText(SecureKey.flashAlert, 'Your password is invalid!');
        await takeStepScreenshot('Validate Alert');
    })
})

