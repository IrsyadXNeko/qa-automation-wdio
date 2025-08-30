import allure from 'allure-commandline';

export const config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    maxInstances: 3,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            // args: ['--headless','--disable-gpu'] // uncomment jika mau headless
            args: ['--window-size=1280,800']
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // --- SERVICES: jalankan Selenium server otomatis ---
    services: [], // selenium-standalone akan install & start driver. :contentReference[oaicite:5]{index=5}

    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'reports/allure-results',
            disableWebdriverScreenshotsReporting: true,
            disableWebdriverStepsReporting: true
        }]
    ],

    onComplete: function(exitCode, config, capabilities, results) {
        const generation = allure(['generate', 'reports/allure-results', '--clean', '-o', 'reports/allure-report']);
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(new Error('Allure report generation timed out')), 60000);

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout);
                if (exitCode !== 0) {
                    return reject(new Error('Could not generate Allure report'));
                }
                console.log('Allure report successfully generated! 🎉');
                resolve();
            });
        });
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // --- hooks: attach screenshot on failure (Allure akan pick-up ketika reporter option di atas false) ---
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            // browser.takeScreenshot() akan membuat attachment ke Allure ketika option disableWebdriverScreenshotsReporting:false
            await browser.takeScreenshot();
        }
    }
}
