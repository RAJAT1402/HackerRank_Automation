let solution = require("./solution");

let puppeteer = require("puppeteer");

let browserStartPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized", "--disable-notifications"],
  });

  let browser,page;

  (async function fn(){
        try{
            let browserObj = await browserStartPromise;
            console.log("browser opened");
            browser = browserObj;
            //new tab
            page = await browserObj.newPage();
            await page.goto("https://www.google.com/");
            console.log("Google page opened");
            await page.type("input[title = 'Search']","HackerRank");
            await page.keyboard.press("Enter", { delay: 100 });
            await waitAndClick(".mslg.dmenKe .usJj9c .l",page);
            await page.waitForSelector("#input-1");
            await page.type("#input-1","simoba7948@macauvpn.com");
            await page.type("#input-2","pepcoding",{delay:100});
            await page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled",{delay:100});
            await waitAndClick("#base-card-1-link",page);
            await waitAndClick("a[data-attr1='warmup']",page);
            await page.waitForSelector(".content--list_body",{visible:true});
            let questionArr = await page.$$(".content--list_body");
            await solve(page,questionArr[0],solution.arr[0]);
        } catch(err){
            console.log(err);
        }
  })()  

  function solve(cpage,question,ans){
        (async function fn(){
            await question.click();
            await cpage.waitFor(3000);
            await cpage.click(".checkbox-input");
            await cpage.type(".input.text-area.custominput.auto-width",ans);
            await cpage.click(".input.text-area.custominput.auto-width");
            await cpage.keyboard.down("Control");
            await cpage.keyboard.press("A");
            await cpage.keyboard.press("X");
            await cpage.keyboard.up("Control");
            await cpage.click(".monaco-editor.no-user-select.vs");
            await cpage.keyboard.down("Control");
            await cpage.keyboard.press("A");
            await cpage.keyboard.press("V");
            await cpage.keyboard.up("Control");
            await cpage.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
        })()    
  }

  function waitAndClick(selector,cPage){
        (async function fb(){
            await cPage.waitForSelector(selector,{visible:true});
            await cPage.click(selector,{delay:100});
        })()
}