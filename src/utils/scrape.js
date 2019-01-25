// const puppeteer = require('puppeteer');
// (async () => {
//   const browser = await puppeteer.launch({
//     dumpio: true
//   });
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   await page.screenshot({
//     path: 'example.png'
//   });
//   browser.close();
// })();
// const Nightmare = require('nightmare')
// import "nightmare"

// async function getLatestDate(n, url) {
//     n.goto(url) // ページへ移動
//     // 任意のJavaScriptを実行
//     return n.evaluate(() => document.querySelector('.newsList').children[0].firstChild.textContent.trim())
//   }

//   !(async () => {
//     try {
//       const n = new Nightmare({
//         show: false // trueにするとブラウザが表示されます。
//       })

//       const latestDate = await getLatestDate(n, 'http://www.uec.ac.jp/')
//       console.log(`最新の新着情報の日付は${latestDate}です。`)

//       n.halt()
//     } catch (e) {
//       console.error(e)
//     }
//   })()