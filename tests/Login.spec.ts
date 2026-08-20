import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Verify valid HRMS login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    
    await page.goto(process.env.BASE_URL!);

     await loginPage.login(
        process.env.BASE_User!,
        process.env.BASE_Pass!
    );

    await expect(page).toHaveURL(/dashboard/i);


});

