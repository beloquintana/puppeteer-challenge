class EmployeePage{

    constructor(page) {
        this.page = page;
        this.userNameHeader = '#contentEmployee > h4 > span';
        this.employeeNameInput = '#name';
        this.employeeAddressInput = '#address';
        this.employeeCityInput = '[ng-model="city"]';
        this.employeeStateInput = '#state';
        this.employeePostCodeInput = '#postcode';
        this.employeeEmailInput = '#email';
        this.employeePhoneNumberInput = '#phoneNumber';
        this.addButton = '#addButton';
        this.successAlert = '#success-alert';
    }

    async getUserNameText(){
        return this.page.evaluate((selector) => document.querySelector(selector).innerHTML, this.userNameHeader);
        //Usando XPATH
        /*await page.waitForXPath("//*[@id='contentEmployee']/h4/span");
        let [element] = await page.$x("//*[@id='contentEmployee']/h4/span");
        let text = await page.evaluate(el => el.textContent, element);*/
    }

    async fillEmployeeForm(employeName, employeeAddress, employeeCity, employeeState, employeePostCode, employeeEmail, employeePhoneNumber){
        await this.page.type(this.employeeNameInput, employeName);
        await this.page.type(this.employeeAddressInput, employeeAddress);
        await this.page.type(this.employeeCityInput, employeeCity);
        await this.page.type(this.employeeStateInput, employeeState);
        await this.page.type(this.employeePostCodeInput, employeePostCode);
        await this.page.type(this.employeeEmailInput, employeeEmail);
        await this.page.type(this.employeePhoneNumberInput, employeePhoneNumber);
    }

    async addEmployee(){
        await this.page.click(this.addButton);
    }

    async getSuccessAlertText(){
        return this.page.evaluate((selector) => document.querySelector(selector).textContent, this.successAlert);
    }

    async isSuccessAlertDisplayed(){
        try{
            await this.page.waitForSelector(this.successAlert, { visible: true})
              return true;
        }catch (error) {
            return false;
        }        
    }
    ///https://github.com/puppeteer/puppeteer/issues/545
    /**
     * 
    const isVisible = await page.evaluate(() => {
        const e = document.querySelector('my-selector');
        if (!e)
            return false;
        const style = window.getComputedStyle(node);
        return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    });
     * 
     * / */
}

module.exports = EmployeePage;