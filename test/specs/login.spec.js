import SwagLabsLogin from '../pageobjects/login.swagLabs'

describe('Login page testing', ()=> {
    beforeAll('Open browser', ()=> {
        browser.url('https://www.saucedemo.com');
    });
    it('Login success', async ()=> {
      await SwagLabsLogin.Login('standard_user', 'secret_sauce');
    })
});