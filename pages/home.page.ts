import {Locator, Page} from '@playwright/test'

export class HomePage {
    readonly page: Page
    readonly appsSideMenu: Locator
    readonly headerContainer: Locator
    readonly searchBar: Locator
    readonly profileBtn: Locator
    readonly languagePickerBtn: Locator
    readonly accesibilityBtn: Locator
    readonly messagesBtn: Locator
    readonly notificationsBtn: Locator
    readonly calendarBtn: Locator
    readonly todoListBtn: Locator
    readonly chatBtn: Locator
    readonly userProfileBtn: Locator
    readonly userProfileDetailsBtn: Locator
    readonly inboxViewBtn: Locator
    readonly lockScreenBtn: Locator
    readonly signOutBtn: Locator
    readonly homeBtn: Locator


    constructor(page: Page) {
        this.page = page
        this.appsSideMenu = page.locator("xpath=(//button[@type='button'])[1]")
        this.headerContainer = page.locator(".z-40")
        this.searchBar = page.locator("input[placeholder='Search...']")
        this.profileBtn = page.locator("img[alt='userProfile']")
        this.languagePickerBtn = page.locator("img[alt='flag']")
        this.messagesBtn = page.locator("xpath=(//div[@class='dropdown shrink-0'])[2]")
        this.notificationsBtn = page.locator("xpath=(//div[@class='dropdown shrink-0'])[3]")     
        this.accesibilityBtn = page.locator("xpath=//button[contains(@class,'flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60')]")
        this.todoListBtn = page.locator("xpath=(//li)[112]")
        this.calendarBtn = page.locator("xpath=(//li)[111]")
        this.chatBtn = page.locator("xpath=(//li)[113]")
        this.userProfileBtn = page.locator("img[alt='userProfile']")
        this.userProfileDetailsBtn = page.locator("xpath=(//a[@class='dark:hover:text-white'][normalize-space()='Profile'])[1]")
        this.inboxViewBtn = page.locator("xpath=//a[normalize-space()='Inbox']")
        this.lockScreenBtn = page.locator("xpath=(//a[normalize-space()='Lock Screen'])[1]")
        this.signOutBtn = page.locator("a[class='!py-3 text-danger']")
        this.homeBtn = page.locator("xpath=(//a[@class='main-logo flex shrink-0 items-center'])[1]")

    }

    async goBackToHomePage() {
        await this.homeBtn.click()
    }

    async isAppsSideMenuVisible() {
        await this.appsSideMenu.isVisible();
    }

    async isHeaderContainerVisible() {
        await this.headerContainer.isVisible();
    }

    async isSearchBarVisible() {
        await this.searchBar.isVisible();
    }

    async isProfileBtnVisible() {
        await this.profileBtn.isVisible();
    }

    async isLanguagePickerBtnVisible() {
        await this.languagePickerBtn.isVisible();
    }

    async isMessagesBtnVisible() {
        await this.messagesBtn.isVisible();
    }

    async isNotificationsBtnVisible() {
        await this.notificationsBtn.isVisible();
    }

    async isCalendarBtnVisible() {
        await this.calendarBtn.isVisible();
    }

    async isTodoListBtnVisible() {
        await this.todoListBtn.isVisible();
    }

    async isChatBtnVisible() {
        await this.chatBtn.isVisible();
    }

    async isAccesibilityBtnVisible() {
        await this.accesibilityBtn.isVisible();
    }

    async searchBoxFill(text: string) {
        await this.searchBar.fill(text)
    }

    async goToProfile() {
        await this.profileBtn.click()
        await this.userProfileDetailsBtn.click()
    }
}