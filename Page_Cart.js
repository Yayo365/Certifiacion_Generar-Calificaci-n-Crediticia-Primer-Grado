import {test, expect} from "@playwright/test"

import dotenv from "dotenv"
dotenv.config()

exports.Cart = class AddCart {
    constructor (page){
        this.page = page
        this.Add = process.env.Addcart
        this.addopt = process.env.Addcart
        this.addopt1 = process.env.Addcart1
        this.Remopt = process.env.Remove
        this.Cart = process.env.Cart
        this.Enroll1 = process.env.Enroll
        this.ModeoTitle = process.env.ModeoTitle
        this.Address = process.env.Address
        this.Phone = process.env.Phone
        this.CancelButoton = process.env.CancelButoton
        this.EnrollButton = process.env.EnrollButton
        this.Ordercreated = process.env.Ordercreated
        
    }
    //AGREGA 2 PRODUCTOS AL CARRITO
    async Addtocart (){
        const Add1 = this.page.locator (this.Add)
        await expect(Add1).toBeVisible()
        const Click1 = this.page.locator(this.addopt)
        await Click1.click();
        
        const Add2 = this.page.locator (this.addopt1)
        await expect(Add2).toBeVisible()
        const Click2 = this.page.locator(this.addopt1)
        await Click2.click();
    }
    //VALIDA SE MUESTRE LA ETIQUETA DE REMOVE, UNA VEZ AGREGADO AL CARRITO
    async Assertremove () {
        const RemoveButton = this.page.locator(this.Remopt)
        await expect(RemoveButton).toBeVisible()
    }
    //CLICK AL ICONO DE CART
    async Checkout_Cart () {
        const CartButton = this.page.locator(this.Cart)
        await CartButton.click()
    }
    //VALIDA SE MUESTRE el BOTON ENROLL
    async AssertEnroll () {
        const EnrollButton = this.page.locator(this.Enroll1)
        await expect(EnrollButton).toBeVisible()
    }
    //CLICK AL ICONO DE ENROLL
    async Enroll_Buttom () {
        const ClickEnroll = this.page.locator(this.Enroll1)
        await ClickEnroll.click()
    }
    //VALIDA LA MODAL DE ENROLL NOW
    async AssertsEnrollwindow() {
        const EnrollWindow = this.page.locator(this.ModeoTitle)
        await expect(EnrollWindow).toBeVisible()
        await expect(EnrollWindow).toBeEnabled()
        
        const EnrollAddress = this.page.locator(this.Address)
        await expect(EnrollAddress).toBeVisible()
        await expect(EnrollAddress).toBeEnabled()
        await expect(EnrollAddress).toBeEmpty()

        const EnrollPhone = this.page.locator(this.Phone)
        await expect(EnrollPhone).toBeVisible()
        await expect(EnrollPhone).toBeEnabled()
        await expect(EnrollPhone).toBeEmpty()

        const EnrollCancelButoton = this.page.locator(this.CancelButoton)
        await expect(EnrollCancelButoton).toBeVisible()
        await expect(EnrollCancelButoton).toBeEnabled()

        const EnrollButton = this.page.locator(this.EnrollButton)
        await expect(EnrollButton).toBeVisible()
        await expect(EnrollButton).toBeEnabled()
    }
    //IMGRESAR DATOS EN LA MODAL DE ENROLL
    async EnterDataEnroll() {
        const Address = this.page.locator(this.Address)
        await Address.fill("Conocido No. 100")
        
        const Phone = this.page.locator(this.Phone)
        await Phone.fill("5545738938")
    }
    //CLICK EN PARA ENROLAR AL USUARIO
    async ModalEnrollClick () {
        const EnrollClick = this.page.locator(this.EnrollButton)
        await EnrollClick.click()
    }
    async Ordercreated1 () {
        const Numberoforder = this.page.locator(this.Ordercreated)
        await expect(Numberoforder).toContainText("Your order id is")
        await this.page.locator("//button[@type='button']").click()
        await this.page.locator("//button[contains(text(),'Shop Now')]").click()
    }
}