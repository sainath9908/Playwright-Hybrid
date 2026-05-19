import { test } from '@playwright/test';
import { CommonUtils } from '../lib/CommonUtils';

test.describe("Login module",()=>{

  test("Validate the Login Functionality",async({page})=>{
    const obj= new CommonUtils(page);
    await obj.openApplication();
    await obj.login()
    await obj.logOut();


})
})