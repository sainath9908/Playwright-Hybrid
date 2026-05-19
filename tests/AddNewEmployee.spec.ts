import { test } from '@playwright/test';
import { CommonUtils } from '../lib/CommonUtils';

test("Validate Add Employee Functionality",async({page})=>{
    const obj=new CommonUtils(page);
    await obj.openApplication();
    await obj.login();
    await obj.clickAdd();
    await obj.addEmployee();
    await obj.save();
    await obj.logOut();
})