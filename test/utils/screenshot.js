import allure from '@wdio/allure-reporter';

export async function takeStepScreenshot(stepName) {
    const ss = await browser.takeScreenshot();
    allure.addAttachment(stepName, Buffer.from(ss, 'base64'), 'image/png');
}