import SwagLabsLogin from '../pageobjects/login.swagLabs.page'
import InventoryPage from '../pageobjects/inventory.page'
import CartPage from '../pageobjects/cart.page'
import CheckoutStepOnePage from '../pageobjects/checkoutStepOne.page'
import CheckoutStepTwoPage from '../pageobjects/checkoutStepTwo.page'

describe('In Checkout step two', ()=> {
    it('Check elements and complete the purchase', async ()=> {
        await SwagLabsLogin.open();
        await SwagLabsLogin.Login('standard_user', 'secret_sauce');
        await InventoryPage.addAll();
        await InventoryPage.buttonCart.click();
        await CartPage.checkout.click();
        await CheckoutStepOnePage.completeForm('Luciano', 'Claros', '2000');
        await CheckoutStepTwoPage.overview.isDisplayed();
        await CheckoutStepTwoPage.summary.isDisplayed();
        await CheckoutStepTwoPage.finishBtn.click();
    });
});