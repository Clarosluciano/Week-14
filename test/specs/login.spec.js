import SwagLabsLogin from '../pageobjects/login.swagLabs.page'

describe('Login page 1', ()=> {
    it('Login with standard user', async ()=> {
      await SwagLabsLogin.open();
      await SwagLabsLogin.loginImg.isDisplayed();
      await SwagLabsLogin.Login('standard_user', 'secret_sauce');
    });
});
describe('Login page 2', ()=> {
  it('Login with locked out user', async ()=> {
    await SwagLabsLogin.open();
    await SwagLabsLogin.Login('locked_out_user', 'secret_sauce');
  });
});
describe('Login page 3', ()=> {
  it('Login with problem user', async ()=> {
    await SwagLabsLogin.open();
    await SwagLabsLogin.Login('problem_user', 'secret_sauce');
  });
});
describe('Login page 4', ()=> {
  it('Login with performance glitch user', async ()=> {
    await SwagLabsLogin.open();
    await SwagLabsLogin.Login('performance_glitch_user', 'secret_sauce');
  });
});