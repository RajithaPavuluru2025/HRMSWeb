# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MultipleDatausingExcel.spec.ts >> ERP Modules >> Add Customer Multiple Data Kumar
- Location: tests\MultipleDatausingExcel.spec.ts:63:7

# Error details

```
Error: locator.fill: value: expected string, got number
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test"
  2  | export class AddCustomers{
  3  |     //declare varibales for supplier module
  4  |         page: Page
  5  |         clickCustomers: Locator
  6  |         clickAddIcon: Locator
  7  |         CustomerNumber: Locator
  8  |         CustomerName :Locator
  9  |         CAddress :Locator
  10 |         Ccity : Locator
  11 |         Ccountry: Locator
  12 |         CContactPerson : Locator
  13 |         CphoneNum : Locator
  14 |         CEmail : Locator
  15 |         CmobileNum : Locator
  16 |         CNotes: Locator
  17 |         ClickAddBtn : Locator
  18 |         clickconfirmOk : Locator
  19 |         clickAlertok : Locator
  20 |         searchPanel : Locator
  21 |         searchTextBox: Locator
  22 |         searchButton :Locator
  23 |         SupplierTable :Locator
  24 |         constructor(page:Page)
  25 |         {
  26 |           this.page=page
  27 |         this.clickCustomers=page.getByRole('link', { name: 'Customers' })
  28 |         this.clickAddIcon = page.locator("span[data-caption='Add']").first()
  29 |         this.CustomerNumber =page.locator('#x_Customer_Number')
  30 |         this.CustomerName = page.locator('#x_Customer_Name')
  31 |         this.CAddress =  page.locator('#x_Address')
  32 |         this.Ccity =  page.locator('#x_City')
  33 |         this.Ccountry =  page.locator('#x_Country')
  34 |         this.CContactPerson = page.locator('#x_Contact_Person')
  35 |         this.CphoneNum =  page.locator('#x_Phone_Number')
  36 |         this.CEmail =  page.locator('#x__Email')
  37 |         this.CmobileNum =  page.locator('#x_Mobile_Number')
  38 |         this.CNotes =  page.locator('#x_Notes')
  39 |         this.ClickAddBtn =  page.locator('#btnAction')
  40 |         this.clickconfirmOk = page.getByText('OK!', { exact: true })
  41 |         this.clickAlertok =  page.locator('button.ajs-button.btn.btn-primary')
  42 |         this.searchPanel =  page.locator('.glyphicon.glyphicon-search.ewIcon')
  43 |         this.searchTextBox =  page.locator('#psearch')
  44 |         this.searchButton =  page.locator('#btnsubmit')
  45 |         this.SupplierTable =  page.locator('.table.ewTable tbody tr:nth-child(1) td:nth-child(5) div span span')
  46 |         }
  47 |         async addCustomerDatials(cname:string,address:string,city:string,country:string,
  48 |             cperson:string,pnumber:string,email:string,mnumber:string,notes:string)
  49 |             {
  50 |                 await this.clickCustomers.waitFor()
  51 |        await this.clickCustomers.click()
  52 |        await this.clickAddIcon.waitFor()
  53 |        await this.clickAddIcon.click()
  54 |        await this.CustomerNumber.waitFor()
  55 |        const Exp_num = await this.CustomerNumber.inputValue()
  56 |        await this.CustomerName.fill(cname)
  57 |        await this.CAddress.fill(address)
  58 |        await this.Ccity.fill(city)
  59 |        await this.Ccountry.fill(country)
  60 |        await this.CContactPerson.fill(cperson)
> 61 |        await this.CphoneNum.fill(pnumber)
     |                             ^ Error: locator.fill: value: expected string, got number
  62 |        await this.CEmail.fill(email)
  63 |        await this.CmobileNum.fill(mnumber)
  64 |        await this.CNotes.fill(notes)
  65 |        await this.ClickAddBtn.click()
  66 |        await this.clickconfirmOk.waitFor()
  67 |        await this.clickconfirmOk.click()
  68 |        await this.clickAlertok.waitFor()
  69 |        await this.clickAlertok.click()
  70 |        await this.searchPanel.waitFor()
  71 |        if(!await this.searchTextBox.isVisible())
  72 |         await this.searchPanel.click()
  73 |         await this.searchTextBox.clear()
  74 |         await this.searchTextBox.fill(Exp_num)
  75 |         await this.searchButton.click()
  76 |         const Act_Num =await this.SupplierTable.innerText()
  77 |         if((await Act_Num).match(Exp_num))
  78 |         {
  79 |             console.log(`Customer Number Found in table ${Exp_num}  ${Act_Num}`)
  80 |         }
  81 |         else{
  82 |             console.log(`Customer Number Not Found in table ${Exp_num}  ${Act_Num}`)
  83 |         }
  84 | 
  85 |            }
  86 | 
  87 |         }
```