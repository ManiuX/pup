const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false,slowMo:1250});
    const page = await browser.newPage();
    await page.goto('http://www.hightopo.com/guide/guide/core/beginners/examples/example_editor.html');
    await page.screenshot({path: 'example.png'});

    // await page.click('a')；

    await page.mouse.click(140,14);

    for(let i=0;i<1000;i++){
        await page.mouse.click(162,148+i);
    }



    await browser.close();
})();