const LoginPage = require('../pages/login.page');
const EmployeePage = require('../pages/employee.page');

describe('Employee', () => {
    it('should add employee', async () => {
        const loginPage = new LoginPage(page);
        await loginPage.loginAs('admin', 'admin123');

        const employeePage = new EmployeePage(page);
        await employeePage.fillEmployeeForm('Juan','MTZ','MTZ','Cuba','11500','Juan@gmail.com','5368554');
        await employeePage.addEmployee();

        expect(await employeePage.isSuccessAlertDisplayed()).to.be.true;
        expect(await employeePage.getSuccessAlertText()).to.be.equal(" Success!  Employee added successfully.");
    });
})