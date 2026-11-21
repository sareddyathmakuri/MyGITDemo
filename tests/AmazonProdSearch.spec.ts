import {test} from '@playwright/test';

test('mtAmz',async({page})=>{
await page.goto("https://www.amazon.in/s?k=Mobile&crid=1WMAQUI9U98FP&sprefix=mobile%2Caps%2C251&ref=nb_sb_noss_2");
const Nl = page.locator('div.s-main-slot.s-result-list');
console.log(Nl);
});