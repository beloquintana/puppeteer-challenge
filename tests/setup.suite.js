
before(async () => {
    global.puppeteer = require('puppeteer');
    global.expect = require('chai').expect;
});

beforeEach(async () => {
    global.browser = await puppeteer.launch({headless: false});
    global.page = await browser.newPage();
    await page.goto('https://www.testfaceclub.com/login-employee-v2');
});

afterEach(async () => {
    await browser.close();
});