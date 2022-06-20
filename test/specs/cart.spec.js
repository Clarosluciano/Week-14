import SwagLabsLogin from '../pageobjects/login.swagLabs.page'
import InventoryPage from '../pageobjects/inventory.page'
import CartPage from '../pageobjects/cart.page'

describe('In Cart page', ()=> {
    it('Step prior to checkout', async ()=> {
        await SwagLabsLogin.open();
        await SwagLabsLogin.Login('standard_user', 'secret_sauce');
        await InventoryPage.addAll();
        await InventoryPage.buttonCart.click();
        await InventoryPage.removeAll();
        await CartPage.continueShopping.click();
        await InventoryPage.addAll();
        await InventoryPage.buttonCart.click();
        await CartPage.checkout.click();
    });
});