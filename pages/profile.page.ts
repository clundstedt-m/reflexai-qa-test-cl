import {Locator, Page} from '@playwright/test'

export class ProfilePage {
    readonly page: Page
    readonly profileInfoPanel: Locator
    readonly taskGrid: Locator
    readonly summaryGrid: Locator
    readonly proPlanDetails: Locator
    readonly paymentHistoryPanel: Locator
    readonly cardDetailsPanel: Locator



    constructor(page: Page) {
        this.page = page
        this.profileInfoPanel = page.locator("xpath=(//div[@class='panel'])[1]")
        this.taskGrid = page.locator("div[class='panel lg:col-span-2 xl:col-span-3']")
        this.summaryGrid = page.locator("xpath=(//div[@class='panel'])[2]")
        this.proPlanDetails = page.locator("xpath=(//div[@class='panel'])[3]")
        this.paymentHistoryPanel = page.locator("xpath=(//div[@class='panel'])[4]")
        this.cardDetailsPanel = page.locator("xpath=(//div[@class='panel'])[5]")

    }

    async isProfileInfoPanelVisible() {
        await this.profileInfoPanel.isVisible();
    }

    async isTaskGridVisible() {
        await this.taskGrid.isVisible();
    }

    async isSummaryGridVisible() {
        await this.summaryGrid.isVisible();
    }

    async isProPlanDetailsVisible() {
        await this.proPlanDetails.isVisible();
    }

    async isPaymentHistoryPanelVisible() {
        await this.paymentHistoryPanel.isVisible();
    }

    async isCardDetailsPanelVisible() {
        await this.cardDetailsPanel.isVisible();
    }

}