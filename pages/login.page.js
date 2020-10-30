class LoginPage{

    constructor(page) {
        this.page = page;
        this.userNameInput = '#user';
        this.passWordInput = '#pass';
        this.loginButton = '#loginButton';
    }

    async loginAs(userName, passWord){
        await this.page.type(this.userNameInput, userName);
        await this.page.type(this.passWordInput, passWord);

        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(this.loginButton),            
            ]);
    }
}

module.exports = LoginPage;