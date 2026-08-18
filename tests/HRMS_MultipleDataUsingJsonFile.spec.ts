import { AdminLogin } from "../Pages/AdminLogin";
import { AddSupplier } from "../Pages/AddSupplier";
import { AddCustomers } from "../Pages/AddCustomers";
import { AdminLogout } from "../Pages/AdminLogout";

import data from "../TestData/ERPData.json"
import test from "@playwright/test";
import { beforeEach } from "node:test";
let login:AdminLogin
let supplier:AddSupplier
let customer:AddCustomers
let Logout:AdminLogout
test.beforeEach(async({page})=>{
    login=new AdminLogin(page)
    await login.ERPUrl(process.env.BASE_URL!)
    await login.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)
    })
    test.describe('ERP Management Modules',()=>{
  
        for(const sup of data.suppliers)
        {

            test(`Validate Supplier module ${sup.SupplierName}`,async({page})=>{

                supplier=new AddSupplier(page)
                await supplier.addSupplierDeatils(
                     sup.SupplierName,
                     sup.Address,
                     sup.City,
                     sup.Country,
                     sup.ContactPerson,
                     sup.PhoneNumber,
                     sup.Email,
                     sup.MobileNumber,
                     sup.Notes
                )
                
            })
        }

//test for customer module 

for (const cus of data.customers)
{
   test(`Validate Customer ${cus.CustomerName}`,async({page})=>{

        customer =new AddCustomers(page)
        await customer.addCustomerDatials(
            cus.Address,
            cus.City,
            cus.ContactPerson,
            cus.Country,
            cus.CustomerName,
            cus.Email,
            cus.MobileNumber,
            cus.Notes,
            cus.PhoneNumber
        )

    })    
    
}

})

test.afterEach(async({page})=>{
Logout=new AdminLogout(page)
await Logout.ERPLogout()
page.close()
})


