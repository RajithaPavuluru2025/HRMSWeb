import { ExcelUtility } from "../Utils/ExcelUtility";
// const suppliers= ExcelUtility.getExcelData("D:/HRMS_Automation/TestData/ERPExcelData.xlsx","SupplierData")
// console.log(suppliers)
// const customers= ExcelUtility.getExcelData("D:/HRMS_Automation/TestData/ERPExcelData.xlsx","CustomerData")
// console.log(customers)
import { AdminLogin } from "../Pages/AdminLogin";
import { AddCustomers } from "../Pages/AddCustomers";
import { AddSupplier } from "../Pages/AddSupplier";
import { AdminLogout } from "../Pages/AdminLogout";
import path from "path";
import { beforeEach } from 'node:test';
import test from "@playwright/test";
import { deflateRawSync } from "zlib";

let login:AdminLogin;
let supplier:AddSupplier;
let customer:AddCustomers;
let logout:AdminLogout;
//to store excel sheet data 
let supdata:any
let cusdata:any
//read path of excel file
let filePath=path.join(__dirname,'../TestData/ERPExcelData.xlsx')

try {
supdata=ExcelUtility.getExcelData(filePath,"SupplierData")
cusdata=ExcelUtility.getExcelData(filePath,"CustomerData")
console.log(supdata)
console.log(cusdata)
    
} catch (error) {
    console.log(error)
}
test.beforeEach(async({page})=>{

    login=new AdminLogin(page)
        await login.ERPUrl(process.env.BASE_URL!)
        await login.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)
  })

  test.describe('ERP Modules',()=>{
    //supplier module

    for (const data of supdata )
    {
        test( `Supplier Multiple Data ${data.SupplierName}`,async({page})=>{
            supplier=new AddSupplier(page)
            await supplier.addSupplierDeatils(
                data.SupplierName,
                data.Address,
                data.City,
                data.Country,
                data.ContactPerson,
                data.Phone,
                data.Email,
                data.Mobile,
                data.Notes
            )
        })
   }

 for ( const data of cusdata){
  test(`Add Customer Multiple Data ${data.CustomerName}`,async({page})=>{

    customer=new AddCustomers(page)
    await customer.addCustomerDatials(

        data.CustomerName,
        data.Address,
        data.City,
        data.Country,
        data.ContactPerson,
        data.Phone,
        data.Email,
        data.Mobile,
        data.Notes
    )
  })
}
})

 test.afterEach(async({page})=>{
    logout=new AdminLogout(page)
    await logout.ERPLogout()
    await page.close()

  })