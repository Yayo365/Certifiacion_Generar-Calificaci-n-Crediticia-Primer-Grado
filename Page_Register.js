import {test, expect} from "@playwright/test"

import dotenv from "dotenv"
dotenv.config()

exports.Register = class RegisterWeb{
    constructor (page){
        this.page=page
        this.IconMenu = process.env.IconMenu
        this.Menuoption= process.env.MenuOption
        this.LabelSingin = process.env.LabelSingin
        this.Butonsingin = process.env.Butonsingin
        this.LinkSingup = process.env.LinkSingup
        this.urlvalidate = process.env.UrlValidate
        this.name = process.env.Name
        this.email = process.env.Email
        this.pass = process.env.Pass
        this.check1 = process.env.ChecksP
        this.check2 = process.env.ChecksR
        this.check3 = process.env.ChecksS
        this.radiobuttonM = process.env.RadioM
        this.radiobuttonF = process.env.RadioF
        this.Selectopt = process.env.Select
        this.Selectlis = process.env.Selectlist

    }           
    async OpenSigninWindow(){
        //Click on Menu icon
        const ClickIcon = this.page.locator(this.IconMenu)
        await ClickIcon.click()
        const ClickOption = this.page.locator(this.Menuoption)
        await ClickOption.click()
    }
    async AssertSignin(){
        //Validate Page of Singup
        const Ass_in = this.page.locator(this.LabelSingin)
        await expect(Ass_in).toBeVisible()
        await expect(Ass_in).toContainText("Sign In")
        const But_in = this.page.locator(this.Butonsingin)
        await expect(But_in).toBeVisible()
        await expect(But_in).toBeEnabled()
        const Lin_in = this.page.locator(this.LinkSingup)
        await expect(Lin_in).toBeVisible()
        await expect(Lin_in).toBeEnabled()
        await Lin_in.click()
        await expect (this.page).toHaveURL(this.urlvalidate)
    }
    async EnterdatatoSignup(){
       const namefield = this.page.locator(this.name)
       await expect(namefield).toBeVisible()
       await expect(namefield).toBeEmpty()
       await namefield.fill("Testing")
            
       const emailfield = this.page.locator(this.email)
       await expect(emailfield).toBeVisible()
       await expect(emailfield).toBeEmpty()
       await emailfield.fill("Testing1@gmail.com")
            
       const passfield = this.page.locator(this.pass)
       await expect(passfield).toBeVisible()
       await expect(passfield).toBeEmpty()
       await passfield.fill("@L1234567a")     
    }
    async Check(){
        const Checkbox1 = this.page.locator(this.check1);
        await expect(Checkbox1).toBeVisible()
        await expect(Checkbox1).toBeEnabled()
        await Checkbox1.check()

        const Checkbox2 = this.page.locator(this.check2);
        await expect(Checkbox2).toBeVisible()
        await expect(Checkbox2).toBeEnabled()
        await Checkbox2.check()

        const Checkbox3 = this.page.locator(this.check3);
        await expect(Checkbox3).toBeVisible()
        await expect(Checkbox3).toBeEnabled()
        await Checkbox3.check()
    }    
    async Radio(){
        const RadiobuttonM = this.page.locator(this.radiobuttonM);
        await expect(RadiobuttonM).toBeVisible()
        await expect(RadiobuttonM).toBeEnabled()
        await RadiobuttonM.click()
        const RadiobuttonF = this.page.locator(this.radiobuttonF);
        await expect(RadiobuttonF).toBeVisible()
        await expect(RadiobuttonF).toBeEnabled()
        await RadiobuttonF.click()
        await RadiobuttonM.click()
    }  
     async SelectCombo(){
        const ComboSelect = this.page.locator(this.Selectopt);
        await ComboSelect.selectOption({label: "Haryana"})
        await ComboSelect.selectOption({label: "Rajasthan"})
    }
    async Selectlist(){
        const ComboSelectlist = this.page.locator(this.Selectlis);
        await ComboSelectlist.selectOption({label: "Swimming"})
        await ComboSelectlist.selectOption({label: "Dancing"})
        const SiunguoButton = this.page.locator("//button[@type='submit']")
        await expect(SiunguoButton).toBeEnabled()
        await SiunguoButton.click()
    }
}