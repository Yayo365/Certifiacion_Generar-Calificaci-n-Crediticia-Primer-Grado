import {test} from "@playwright/test"
import {Login} from "./Pages/Page_Login"
import {Load} from "./Pages/Page_URL"
import {Register} from "./Pages/Page_Register"
import {Cart} from "./Pages/Page_Cart"

test.beforeEach (async ({page})=> {
    const Cart = new Load (page)
    await Cart.Openurl()
})
test("Add products to cart", async ({page}) =>{
    const Openlogin = new Register (page)
    await Openlogin.OpenSigninWindow()
    
    const Login1 = new Login (page)
    await Login1.EnterdatatoLogin()
    await Login1.Homepage()
    
    const Add = new Cart (page)
    await Add.Addtocart()
    await Add.Assertremove()
    await Add.Checkout_Cart()
    await Add.AssertEnroll()
    await Add.Enroll_Buttom()

    const EnrollWindowEnterData = new Cart (page)
    await EnrollWindowEnterData.AssertsEnrollwindow()
    await EnrollWindowEnterData.EnterDataEnroll()

    const EnrollWindow = new Cart (page)
    await EnrollWindow.ModalEnrollClick()

    const Ordercreated = new Cart (page)
    await Ordercreated.Ordercreated1()

    await page.waitForTimeout(1500);
})
