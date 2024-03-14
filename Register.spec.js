import {test} from "@playwright/test"
import {Register} from "./Pages/Page_Register"
import {Load} from "./Pages/Page_URL"

const Time = 1500

test.beforeEach(async ({page})=> {
    const LaodWeb = new Load (page)
    //Abrir URL
    await LaodWeb.Openurl()
})
test.describe("User registration validation", ()=> {
    test("Open Singup Window", async ({page}) =>{
        const Window = new Register (page)
        await Window.OpenSigninWindow()
        await Window.AssertSignin()
        await page.waitForTimeout(Time);
    })
        test("Happy paht Singup", async ({page}) =>{
        const Singup = new Register (page)
        await Singup.OpenSigninWindow() 
        await Singup.AssertSignin()
        await page.waitForTimeout(Time)
        await Singup.EnterdatatoSignup()
        await Singup.Check()
        await Singup.Radio()
        await Singup.SelectCombo()
        await Singup.Selectlist()
        await page.waitForTimeout(Time)
    })
})
