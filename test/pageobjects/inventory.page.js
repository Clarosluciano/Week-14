class InventoryPage {
    //Getters
    get buttonCart() {return $('#shopping_cart_container > a')};

    get backpackImg() {return $('#item_4_img_link')};
    get backpackTitle() {return $('#item_4_title_link')};
    get backpackAdd() {return $('#add-to-cart-sauce-labs-backpack')};
    get backpackRemove() {return $('#remove-sauce-labs-backpack')};

    get bikeLightImg() {return $('#item_0_img_link')};
    get bikeLightTitle() {return $('#item_0_title_link')};
    get bikeLightAdd() {return $('#add-to-cart-sauce-labs-bike-light')};
    get bikeLightRemove() {return $('#remove-sauce-labs-bike-light')};

    get boltTshirtImg() {return $('#item_1_img_link')};
    get boltTshirtTitle() {return $('#item_1_title_link')};
    get boltTshirtAdd() {return $('#add-to-cart-sauce-labs-bolt-t-shirt')};
    get boltTshirtRemove() {return $('#remove-sauce-labs-bolt-t-shirt')};

    get fleeceJacketImg() {return $('#item_5_img_link')};
    get fleeceJacketTitle() {return $('#item_5_title_link')};
    get fleeceJacketAdd() {return $('#add-to-cart-sauce-labs-fleece-jacket')};
    get fleeceJacketRemove() {return $('#remove-sauce-labs-fleece-jacket')};

    get onesieImg() {return $('#item_2_img_link')};
    get onesieTitle() {return $('#item_2_title_link')};
    get onesieAdd() {return $('#add-to-cart-sauce-labs-onesie')};
    get onesieRemove() {return $('#remove-sauce-labs-onesie')};

    get redTshirtImg() {return $('#item_3_img_link')};
    get redTshirtTitle() {return $('#item_3_title_link')};
    get redTshirtAdd() {return $('[name="add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)"]')};
    get redTshirtRemove() {return $('[name="remove-test\.allthethings\(\)-t-shirt-\(red\)"]')};

    get twitterIcon() {return $('#page_wrapper > footer > ul > li.social_twitter > a')};
    get facebookIcon() {return $('#page_wrapper > footer > ul > li.social_facebook > a')};
    get linkedInIcon() {return $('#page_wrapper > footer > ul > li.social_linkedin > a')};

    //Setters

    //Methods
    async addAll() {
       await this.backpackAdd.click();
       await this.bikeLightAdd.click();
       await this.boltTshirtAdd.click();
       await this.fleeceJacketAdd.click();
       await this.onesieAdd.click();
       await this.redTshirtAdd.click();
    };

    async removeAll() {
        await this.backpackRemove.click();
        await this.bikeLightRemove.click();
        await this.boltTshirtRemove.click();
        await this.fleeceJacketRemove.click();
        await this.onesieRemove.click();
        await this.redTshirtRemove.click();
    };
};

export default new InventoryPage();