import SwagLabsLogin from '../pageobjects/login.swagLabs.page'
import InventoryPage from '../pageobjects/inventory.page'
import CartPage from '../pageobjects/cart.page'
import CheckoutStepOnePage from '../pageobjects/checkoutStepOne.page'

describe('In Checkout step one page 1', ()=> {
    it('Complete form with valid info and test the buttons', async ()=> {
        await SwagLabsLogin.open();
        await SwagLabsLogin.Login('standard_user', 'secret_sauce');
        await InventoryPage.addAll();
        await InventoryPage.buttonCart.click();
        await CartPage.checkout.click();
        await CheckoutStepOnePage.cancel.click();
        await CartPage.checkout.click();
        await CheckoutStepOnePage.completeForm('Luciano', 'Claros', '2000');
    });
});
describe('In Checkout step one page 2', ()=> {
    it('Complete form cheking the validations first', async ()=> {
        await SwagLabsLogin.open();
        await SwagLabsLogin.Login('standard_user', 'secret_sauce');
        await InventoryPage.buttonCart.click();
        await CartPage.checkout.click();
        await CheckoutStepOnePage.validationsCheck('Pepe', 'Pepas', '1234');
    });
});