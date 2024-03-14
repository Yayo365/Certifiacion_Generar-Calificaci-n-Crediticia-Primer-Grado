import {test, expect } from "@playwright/test"
//Utilizar data de un archivo .env
import dotenv from "dotenv"
dotenv.config()

exports.Load = class Loadweb{
    constructor (page){
        this.page=page
        this.url = process.env.Linkurlweb
        this.title = process.env.Titleweb
        this.Footer = process.env.Copyrightfooter
    }
    //Open Url
    async Openurl(){
        await this.page.goto(this.url);
    }
    async ValidateTitle(){
        await expect(this.page).toHaveTitle(this.title)
    }
    async Copyright(){
        const Footer = this.page.locator(this.Footer)
        await expect(Footer).toBeVisible()
        await expect(Footer).toContainText("©2023 All rights reserved")
    }
}