class CheckoutStepOnePage {

    //Getters
    get firstName() {return $('#first-name')};
    get lastName() {return $('#last-name')};
    get zipCode() {return $('#postal-code')};

    get cancel() {return $('#cancel')};
    get continue() {return $('#continue')};

    //Setters
    async setFirstName(firstName) {
        await this.firstName.setValue(firstName);
    };
    async setLasttName(lastName) {
        await this.lastName.setValue(lastName);
    };
    async setZipCode(zipCode) {
        await this.zipCode.setValue(zipCode);
    };

    //Methods
    async completeForm(firstName, lastName, zipCode) {
        await this.setFirstName(firstName);
        await this.setLasttName(lastName);
        await this.setZipCode(zipCode);
        await this.continue.click();
    }
};

export default new CheckoutStepOnePage();