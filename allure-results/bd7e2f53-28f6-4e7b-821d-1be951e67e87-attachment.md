# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MultipleDatausingExcel.spec.ts >> ERP Modules >> Supplier Multiple Data John
- Location: tests\MultipleDatausingExcel.spec.ts:46:13

# Error details

```
Error: locator.fill: value: expected string, got number
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AddSupplier
  4  | {
  5  |     //declare variables for supplier module
  6  |    page: Page
  7  |     clickSuppliers: Locator
  8  |     clickAddIcon: Locator
  9  |     SupplierNumber: Locator
  10 |     SupplierName :Locator
  11 |     SAddress :Locator
  12 |     Scity : Locator
  13 |     Scountry: Locator
  14 |     SContactPerson : Locator
  15 |     SphoneNum : Locator
  16 |     SEmail : Locator
  17 |     SmobileNum : Locator
  18 |     SNotes: Locator
  19 |     ClickAddBtn : Locator
  20 |     clickconfirmOk : Locator
  21 |     clickAlertok : Locator
  22 |     searchPanel : Locator
  23 |     searchTextBox: Locator
  24 |     searchButton :Locator
  25 |     SupplierTable :Locator
  26 |     constructor(page:Page)
  27 |     {
  28 |         this.page=page
  29 |         this.clickSuppliers = page.getByRole('link',{name:'Suppliers'})
  30 |         // this.clickSuppliers=page.locator('li#mi_a_suppliers')
  31 |         this.clickAddIcon = page.locator("span[data-caption='Add']").first()
  32 |         this.SupplierNumber =page.locator('#x_Supplier_Number')
  33 |         this.SupplierName = page.locator('#x_Supplier_Name')
  34 |         this.SAddress =  page.locator('#x_Address')
  35 |         this.Scity =  page.locator('#x_City')
  36 |         this.Scountry =  page.locator('#x_Country')
  37 |         this.SContactPerson = page.locator('#x_Contact_Person')
  38 |         this.SphoneNum =  page.locator('#x_Phone_Number')
  39 |         this.SEmail =  page.locator('#x__Email')
  40 |         this.SmobileNum =  page.locator('#x_Mobile_Number')
  41 |         this.SNotes =  page.locator('#x_Notes')
  42 |         this.ClickAddBtn =  page.locator('#btnAction')
  43 |         this.clickconfirmOk = page.getByText('OK!', { exact: true })
  44 |         this.clickAlertok =  page.locator('button.ajs-button.btn.btn-primary')
  45 |         this.searchPanel =  page.locator('.glyphicon.glyphicon-search.ewIcon')
  46 |         this.searchTextBox =  page.locator('#psearch')
  47 |         this.searchButton =  page.locator('#btnsubmit')
  48 |         this.SupplierTable =  page.locator('.table.ewTable tbody tr:nth-child(1) td:nth-child(6) div span span')
  49 |     }
  50 | //write method for add supplierdeatils
  51 | 
  52 | async addSupplierDeatils(sname:string,Address:string,city:string,country:string,cperson:string,
  53 |         pnumber:string,email:string,mnumber:string,notes:string)
  54 |     {
  55 |        await this.clickSuppliers.waitFor()
  56 |        await this.clickSuppliers.click()
  57 |        await this.clickAddIcon.waitFor()
  58 |        await this.clickAddIcon.click()
  59 |        await this.SupplierNumber.waitFor()
  60 |        const Exp_num = await this.SupplierNumber.inputValue()
  61 |        await this.SupplierName.fill(sname)
  62 |        await this.SAddress.fill(Address)
  63 |        await this.Scity.fill(city)
  64 |        await this.Scountry.fill(country)
  65 |        await this.SContactPerson.fill(cperson)
> 66 |        await this.SphoneNum.fill(pnumber)
     |                             ^ Error: locator.fill: value: expected string, got number
  67 |        await this.SEmail.fill(email)
  68 |        await this.SmobileNum.fill(mnumber)
  69 |        await this.SNotes.fill(notes)
  70 |        await this.ClickAddBtn.click()
  71 |        await this.clickconfirmOk.waitFor()
  72 |        await this.clickconfirmOk.click()
  73 |        await this.clickAlertok.waitFor()
  74 |        await this.clickAlertok.click()
  75 |        await this.searchPanel.waitFor()
  76 |        if(!await this.searchTextBox.isVisible())
  77 |         await this.searchPanel.click()
  78 |         await this.searchTextBox.clear()
  79 |         await this.searchTextBox.fill(Exp_num)
  80 |         await this.searchButton.click()
  81 |         const Act_Num =  await this.SupplierTable.innerText()
  82 |         if((await Act_Num).match(Exp_num))
  83 |         {
  84 |             console.log(`Supplier Number Found in table ${Exp_num}  ${Act_Num}`)
  85 |         }
  86 |         else{
  87 |             console.log(`Supplier Number Not Found in table ${Exp_num}  ${Act_Num}`)
  88 |         }
  89 | 
  90 |     }
  91 | 
  92 | }
```