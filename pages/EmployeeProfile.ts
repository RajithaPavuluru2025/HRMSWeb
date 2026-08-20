import { Page,Locator } from "@playwright/test";
export class EmployeeProfilePage{
    readonly page:Page;
    employeeprofile:Locator;
    profile:Locator;
    personalDetails:Locator;

    constructor(page:Page)
    {
        this.page=page

      this.employeeprofile =page.getByText('Employee Profile', { exact: true });
      this.profile=page.getByText('Profile', { exact: true });
      this.personalDetails =page.getByText('Personal Details', { exact: true });
    }

    async EmployeeProfile()
    {
        await this.employeeprofile.hover();
        await this.profile.hover();
        await this.personalDetails.click();
        
    }

}













