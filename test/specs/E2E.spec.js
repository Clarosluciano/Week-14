import SwagLabsLogin from '../pageobjects/login.swagLabs.page'
import InventoryPage from '../pageobjects/inventory.page'
import CartPage from '../pageobjects/cart.page'
import CheckoutStepOnePage from '../pageobjects/checkoutStepOne.page'
import CheckoutStepTwoPage from '../pageobjects/checkoutStepTwo.page'
import CheckoutCompletePage from '../pageobjects/checkoutComplete.page'

describe('E2E 1', ()=> {
    it('With standard user', async ()=> {
        await SwagLabsLogin.open();
        await SwagLabsLogin.Login('standard_user', 'secret_sauce');
        await InventoryPage.addAll();
        await InventoryPage.buttonCart.click();
        await CartPage.checkout.click();
        await CheckoutStepOnePage.completeForm('Luciano', 'Claros', '2000');
        await CheckoutStepTwoPage.finishBtn.click();
        await CheckoutCompletePage.finalPageChecker();
        await InventoryPage.logout();
    });
});

describe('E2E 2', ()=> {
    it('With performance glitch user', async ()=> {
        await SwagLabsLogin.open();
        await SwagLabsLogin.Login('performance_glitch_user', 'secret_sauce');
        await InventoryPage.addAll();
        await InventoryPage.buttonCart.click();
        await CartPage.checkout.click();
        await CheckoutStepOnePage.completeForm('Luciano', 'Claros', '2000');
        await CheckoutStepTwoPage.finishBtn.click();
        await CheckoutCompletePage.finalPageChecker();
        await InventoryPage.logout();
    });
});