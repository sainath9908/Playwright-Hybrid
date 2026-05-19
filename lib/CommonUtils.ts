// To provide All reusable method/functions related to program

import { ObjectRepository } from "./ObjectRepository";

 export class CommonUtils extends ObjectRepository{

    /****User-defined:Re-usable Methods /Functions ******/
    async openApplication(){
        await this.page.goto(this.url);
    }
    async login(){
        await this.page.locator(this.testbox_loginname).fill(this.Username);
        await this.page.locator(this.testbox_password).fill(this.Password);
        await this.page.locator(this.link_login).click();
        console.log("Login Completed")
    }
    async logOut(){
        await this.page.locator(this.link_logout).click();
        console.log("Logout Completed")
    }
    async clickAdd(){
        const frame=await this.page.frameLocator(this.frame_empInfo);
        await frame.getByRole('button', { name: 'Add' }).click();
    }
    async addEmployee(){
        const frame=await this.page.frameLocator(this.frame_empInfo);
        await frame.locator(this.txt_employeeLastname).fill(this.EmployeeLastName);
        await frame.locator(this.txt_employeefirstName).fill(this.EmployeeFirstName) 
    }
    async save(){
        const frame=await this.page.frameLocator(this.frame_empInfo);
         await frame.getByRole(this.link_saveBtn);
   
    }
 }