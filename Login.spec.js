import {test} from "@playwright/test"
import {Register} from "./Pages/Page_Register"
import {Load} from "./Pages/Page_URL"
import {Login} from "./Pages/Page_Login"

test.beforeEach (async ({page})=> {
    const Loginweb = new Load (page)
    await Loginweb.Openurl()
})

test.describe("Try Login with an accout created", ()=> {
    test("MissEmail_Login Window", async ({page}) =>{
        const Login1 = new Register (page)
        await Login1.OpenSigninWindow()
        const Login2 = new Login (page)
        await Login2.EnterdatatoLogin_missemail()
        await Login2.Assert_fail_missemail()
        await page.waitForTimeout(1500);
    })
    test("MissPass_Login Window", async ({page}) =>{
        const Login1 = new Register (page)
        await Login1.OpenSigninWindow()
        const Login2 = new Login (page)
        await Login2.EnterdatatoLogin_misspass()
        await Login2.Assert_fail_misspass()
        await page.waitForTimeout(1500);
    })
    test("EmptyFields_Login Window", async ({page}) =>{
        const Login1 = new Register (page)
        await Login1.OpenSigninWindow()
        const Login2 = new Login (page)
        await Login2.EnterdatatoLogin_Empty()
        await Login2.Assert_fail_Empty()
        await page.waitForTimeout(1500);
    })
    test("NotMatch_Login Window", async ({page}) =>{
        const Login1 = new Register (page)
        await Login1.OpenSigninWindow()
        const Login2 = new Login (page)
        await Login2.EnterdatatoLogin_NotMatch()
        await Login2.Assert_fail_notmatch()
        await page.waitForTimeout(1500);
    })
    test("Happy_Login Window", async ({page}) =>{
        const Login1 = new Register (page)
        await Login1.OpenSigninWindow()
        const Login2 = new Login (page)
        await Login2.EnterdatatoLogin()
        await Login2.Homepage()
        await page.waitForTimeout(1500);
    })
})