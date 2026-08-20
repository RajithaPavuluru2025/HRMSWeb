import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { EmployeeProfilePage } from '../pages/EmployeeProfile';


test('Verify Employee Profile',async({page})=>
{
    const loginPage= new LoginPage(page)
     await page.goto(process.env.BASE_URL!);

    await loginPage.login(
        process.env.BASE_User!,
        process.env.BASE_Pass!
    );
     
        const employeeProfilePage = new EmployeeProfilePage(page);

    await employeeProfilePage.EmployeeProfile()
    
    

 
})
