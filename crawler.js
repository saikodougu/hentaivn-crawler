const puppeteer = require('puppeteer');

module.exports = async function crawlChapter(url) {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    console.log('🧭 Đang mở trang:', url);
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.waitForFunction(() => window.chapImages?.length > 0);
    const imageUrls = await page.evaluate(() => window.chapImages);
    await browser.close();
    return imageUrls;
};