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
    async setLastName(lastName) {
        await this.lastName.setValue(lastName);
    };
    async setZipCode(zipCode) {
        await this.zipCode.setValue(zipCode);
    };

    //Methods
    async completeForm(firstName, lastName, zipCode) {
        await this.setFirstName(firstName);
        await this.setLastName(lastName);
        await this.setZipCode(zipCode);
        await this.continue.click();
    }
    async validationsCheck(firstName,lastName, zipCode) {
        await this.continue.click();
        await this.setFirstName(firstName);
        await this.continue.click();
        await this.setLastName(lastName);
        await this.continue.click();
        await this.setZipCode(zipCode);
        await this.continue.click();
    }
};

export default new CheckoutStepOnePage();