class CheckoutStepTwoPage {

    //Getters
    get overview() {return $('#header_container > div.header_secondary_container > span')};
    get summary() {return $('.summary_info')};
    get finishBtn() {return $('#finish')};
};

export default new CheckoutStepTwoPage();