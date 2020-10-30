const LoginPage = require('../pages/login.page');
const EmployeePage = require('../pages/employee.page');

describe('Login', () => {
    it('should login successfully', async () => {
        const loginPage = new LoginPage(page);
        await loginPage.loginAs('admin', 'admin123');

        const employeePage = new EmployeePage(page);

        expect(await employeePage.getUserNameText()).to.be.equal(" admin");
    });
})

