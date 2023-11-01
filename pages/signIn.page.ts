import {Locator, Page} from '@playwright/test'

export class SignInBoxedPage {
    readonly page: Page
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly signinBtn: Locator
    readonly subscribeBtn: Locator
    readonly instagramBtn: Locator
    readonly facebookBtn: Locator
    readonly twitterBtn: Locator
    readonly googleBtn: Locator
    readonly signUpBtn: Locator
    readonly languagePickerBtn: Locator


    constructor(page: Page) {
        this.page = page
        this.emailInput = page.locator("#Email")
        this.passwordInput = page.locator("#Password")
        this.subscribeBtn = page.locator("input[type='checkbox']")
        this.signinBtn = page.locator("button[type='submit']")
        this.instagramBtn = page.locator("xpath=(//li)[1]")
        this.facebookBtn = page.locator("xpath=(//li)[2]")
        this.twitterBtn = page.locator("xpath=(//li)[3]")
        this.googleBtn = page.locator("xpath=(//li)[4]")
        this.signUpBtn = page.locator("xpath=(//a[normalize-space()='SIGN UP'])[1]")
        this.languagePickerBtn = page.locator(".dropdown")
    }

    async enterCredentials(email: string, password: string) {
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
    }

    async clickSignInBtn() {
        await this.signinBtn.click()
    }

    async clickSubscribeBtn() {
        await this.subscribeBtn.click()
    }

    async clickInstagramBtn() {
        await this.instagramBtn.click()
    }

    async clickFacebookBtn() {
        await this.facebookBtn.click()
    }

    async clickTwitterBtn() {
        await this.twitterBtn.click()
    }

    async clickGoogleBtn() {
        await this.googleBtn.click()
    }

    async clickSignUpBtn() {
        await this.signUpBtn.click()
    }

    async changeLanguageToSpanish() {
        await this.languagePickerBtn.click()
        await this.page.locator("xpath(//button[@type='button'])[14]")
    }


}