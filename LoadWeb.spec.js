import {test} from "@playwright/test"
import {Load} from "./Pages/Page_URL"

const Time = 1500

test("Test load web", async({page}) =>{
    const load = new Load (page)
    await load.Openurl()
    await load.ValidateTitle()
    await load.Copyright()
    await page.waitForTimeout(Time);
})