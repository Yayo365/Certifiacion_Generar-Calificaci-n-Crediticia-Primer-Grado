import {test, expect} from "@playwright/test"

import dotenv from "dotenv"
dotenv.config()

exports.Login = class LoginWeb{
    constructor (page){
        this.page=page
        this.email = process.env.EemailLogin
        this.pass = process.env.PassNameLogin
        this.Butonsingin = process.env.Butonsingin
        this.Cart = process.env.Cart
        this.Empty = process.env.Error_Empty
        this.Notmatch = process.env.Error_Notmatch
        this.Mpass = process.env.Error_misspass
        this.Memail = process.env.Error_missemail
        this.welcome =process.env.Welcome

    }   
//DATOS PARA REALIZAR LOGIN EN LA PAGINA WEB
async EnterdatatoLogin(){
    const emailfield = this.page.locator(this.email)
    await emailfield.fill("Testing1@gmail.com")
         
    const passfield = this.page.locator(this.pass)
    await passfield.fill("@L1234567a")    
    
    const But_in = this.page.locator(this.Butonsingin)
    await But_in.click()
 }
 async EnterdatatoLogin_Empty(){
    const But_in = this.page.locator(this.Butonsingin)
    await But_in.click()
 }
 async EnterdatatoLogin_NotMatch(){
    const emailfield = this.page.locator(this.email)
    await emailfield.fill("test@gmail.com")
         
    const passfield = this.page.locator(this.pass)
    await passfield.fill("@L12345")    
    
    const But_in = this.page.locator(this.Butonsingin)
    await But_in.click()
 }
 async EnterdatatoLogin_missemail(){
    const emailfield = this.page.locator(this.email)
    await emailfield.fill("")
         
    const passfield = this.page.locator(this.pass)
    await passfield.fill("@L1234567a")    
    
    const But_in = this.page.locator(this.Butonsingin)
    await But_in.click()
 }
 async EnterdatatoLogin_misspass(){
    const emailfield = this.page.locator(this.email)
    await emailfield.fill("test@gmail.com")
         
    const passfield = this.page.locator(this.pass)
    await passfield.fill("")    
    
    const But_in = this.page.locator(this.Butonsingin)
    await But_in.click()
 }
 //VALIDA QUE EL ICONO DE CART Y LABEL DE PAGINA WEB ESTEN VISIBLES
 async Homepage(){
    const CartButton = this.page.locator(this.Cart)
    await expect(CartButton).toBeVisible()
    await expect(CartButton).toBeEnabled()    
    
    const Welcome = this.page.locator(this.welcome)
    await expect(Welcome).toBeVisible()
    await expect(Welcome).toBeEnabled() 
    await expect(Welcome).toContainText("Welcome")
 }
 //VALIDACIONES A LOS DATOS PARA REALIZAR LOGIN
 async Assert_fail_Empty(){
    const EmptyLogin = this.page.locator(this.Empty)
    await expect(EmptyLogin).toBeVisible()
    await expect(EmptyLogin).toBeEnabled()
 }
 async Assert_fail_notmatch(){
    const notmatchLogin = this.page.locator(this.Notmatch)
    await expect(notmatchLogin).toBeVisible()
    await expect(notmatchLogin).toBeEnabled()
 }
 async Assert_fail_missemail(){
    const missemailLogin = this.page.locator(this.Memail)
    await expect(missemailLogin).toBeVisible()
    await expect(missemailLogin).toBeEnabled()
 }
 async Assert_fail_misspass(){
    const misspassLogin = this.page.locator(this.Mpass)
    await expect(misspassLogin).toBeVisible()
    await expect(misspassLogin).toBeEnabled()
 }
}