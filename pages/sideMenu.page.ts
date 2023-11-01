import {Locator, Page} from '@playwright/test'

export class SideMenu {
    readonly page: Page
    readonly dashboardMainBtn: Locator
    readonly dashboardSalesBtn: Locator
    readonly dashboardAnalyticsBtn: Locator
    readonly dashboardFinanceBtn: Locator
    readonly dashboardCryptoBtn: Locator


    constructor(page: Page) {
        this.page = page
        this.dashboardMainBtn = page.locator("xpath=(//button[@type='button'])[2]")
        this.dashboardSalesBtn = page.locator("xpath=(//li[contains(.,'Sales')])[2]")
        this.dashboardAnalyticsBtn = page.locator("xpath=(//li[contains(.,'Analytics')])[2]")
        this.dashboardFinanceBtn = page.locator("xpath=(//li[contains(.,'Finance')])[2]")
        this.dashboardCryptoBtn = page.locator("xpath=(//li[contains(.,'Crypto')])[2]")  
    }

    async goToSalesDashboard() {
        await this.dashboardSalesBtn.click()
    }

    async goToFinanceDashboard() {
        await this.dashboardFinanceBtn.click()
    }

    async goToAnalyticsDashboard() {
        await this.dashboardAnalyticsBtn.click()
    }

    async goToCryptoDashboard() {
        await this.dashboardCryptoBtn.click()
    }

}