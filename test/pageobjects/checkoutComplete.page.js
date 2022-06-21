class CheckoutCompletePage {
    //Getters
    get complete() {return $('#header_container > div.header_secondary_container > span')};
    get thankYou() {return $('.complete-header')};
    get ponyText() {return $('.complete-text')};
    get ponyImg() {return $('.pony_express')};
    get backHomeBtn() {return $('#back-to-products')};

    //Methods
    async finalPageChecker() {
        await this.complete.isDisplayed();
        await this.thankYou.isDisplayed();
        await this.ponyText.isDisplayed();
        await this.ponyImg.isDisplayed();
        await this.backHomeBtn.click();
    };
};

export default new CheckoutCompletePage();