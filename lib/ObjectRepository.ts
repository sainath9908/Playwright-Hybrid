//To Provide Test Data & objects /Elements locators 

import {Page} from "@playwright/test"

export class ObjectRepository{
    constructor(public page:Page){
        this.page=page;
    }
    //****Test Data ********/
    public url:string="https://ctcorphyd.com/SureshIT/login.php";
    public Username:string='sureshit';
    public Password:string='sureshit';
    public EmployeeLastName='Sai'
    public EmployeeFirstName='Nath'

    //****Objects /Elements Locators****** */
    public testbox_loginname:string="//input[@name='txtUserName']";
    public testbox_password:string="//input[@name='txtPassword']";
    public link_login:string="//input[@name='Submit']";
    public link_logout:string="//a[text()='Logout']";
    public frame_empInfo='#rightMenu'
    public txt_employeeLastname:string="//input[@name='txtEmpLastName']"
    public txt_employeefirstName:string="//input[@name='txtEmpFirstName']"
    public link_saveBtn:any="('button', { name: 'Save' })"



}