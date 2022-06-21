import SwagLabsLogin from '../pageobjects/login.swagLabs.page'
import InventoryPage from '../pageobjects/inventory.page'

describe('Inventory page test', ()=> {
    beforeAll('Add and remove', async ()=> {
        await SwagLabsLogin.open();
        await SwagLabsLogin.Login('standard_user', 'secret_sauce');
        await InventoryPage.addAll();
        await InventoryPage.removeAll();
    });
    it('Sort products', async ()=> {
        await InventoryPage.productSorter();
    });
    it('Check elements of header', async ()=> {
        await InventoryPage.headerChecker();
    });
    it('Check elements of footer', async ()=> {
        await InventoryPage.footerChecker();
    });
    it('Logout', async ()=> {
        await InventoryPage.logout();
    });
});