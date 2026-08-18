import { AdminLogin } from "../Pages/AdminLogin";
import { AddSupplier } from "../Pages/AddSupplier";
import { AddCustomers } from "../Pages/AddCustomers";
import { AdminLogout } from "../Pages/AdminLogout";

import test from "@playwright/test"

let login:AdminLogin
let sup:AddSupplier
let cus:AddCustomers
let logout:AdminLogout
test.beforeEach(async({page})=>{
    login=new AdminLogin(page)

    await login.ERPUrl(process.env.BASE_URL!)
    await login.ERPLogin(process.env.BASE_User!,process.env.BASE_Pass!)
   })

   test.describe('ERP management Module',()=>{
    test('Validate supplier',async({page})=>{

        sup=new AddSupplier(page)
        await sup.addSupplierDeatils('John','USA','London','UK','Qedge','1134567887','abc@gmail.com','8765432123','Added Suppliers')

    })
    
     test('Validate Customer',async({page})=>{

        cus=new AddCustomers(page)
        await cus.addCustomerDatials('test123','Srnagar','Hyd','India','Rajitha','12341','abcd@gmail.com.','9876543','Added customer')
        
    })
})  
    test.afterEach(async({page})=>{
        logout=new AdminLogout(page)
        await logout.ERPLogout()
    })



   
