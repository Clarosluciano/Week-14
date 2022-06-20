import SwagLabsLogin from '../pageobjects/login.swagLabs.page'
import InventoryPage from '../pageobjects/inventory.page'

describe('All products', ()=> {
    it('Add and remove', async ()=> {
        await SwagLabsLogin.open();
        await SwagLabsLogin.Login('standard_user', 'secret_sauce');
        await InventoryPage.addAll();
        await InventoryPage.removeAll();
    });
});
describe('Social media check', ()=> {
    it('twitter, facebook and linkedIn', async ()=> {
        await SwagLabsLogin.open();
        await SwagLabsLogin.Login('standard_user', 'secret_sauce');
        await InventoryPage.twitterIcon.click();
        await browser.navigateTo('https://www.saucedemo.com/inventory.html');
        await InventoryPage.facebookIcon.click();
        await browser.navigateTo('https://www.saucedemo.com/inventory.html');
        await InventoryPage.linkedInIcon.click();
        await browser.navigateTo('https://www.saucedemo.com/inventory.html');
    });
});