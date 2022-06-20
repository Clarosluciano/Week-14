class SwagLabsLogin {

    //Getters
    get inputUsername() {return $('#user-name')};
    get inputPassword() {return $('#password')};
    get btnLogin() {return $('#login-button')};

    //Setters
    async setUsername(username){
        await this.inputUsername.setValue(username);
    };
    async setPassword(password){
        await this.inputPassword.setValue(password);
    };

    //Methods
    async Login(username, password){
        await this.setUsername(username);
        await this.setPassword(password);
        await this.btnLogin.click();
    };
    open() {
        return browser.url('https://www.saucedemo.com');
    }
};

export default new SwagLabsLogin();