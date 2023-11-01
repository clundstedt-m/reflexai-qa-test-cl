import {Locator, Page} from '@playwright/test'

export class AnalyticsDashboard {
    readonly page: Page
    readonly statisticsPanel: Locator
    readonly expensesPanel: Locator
    readonly totalBalancePanel: Locator
    readonly uniqueVisitorsGraph: Locator
    readonly activityLogGrid: Locator
    readonly visitorsByBrowserPanel: Locator
    readonly followersGraph: Locator
    readonly referralGraph: Locator
    readonly engagementGraph: Locator
    readonly footerPanels: Locator


    constructor(page: Page) {
        this.page = page
        this.statisticsPanel = page.locator("div[class='panel h-full sm:col-span-2 lg:col-span-1']")
        this.expensesPanel = page.locator("div[class='mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'] div[class='panel h-full']")
        this.totalBalancePanel = page.locator("xpath=//div[contains(@class, 'panel grid h-full grid-cols-1 content-between overflow-hidden before:absolute before:-right-44 before:top-0 before:bottom-0 before:m-auto before:h-96 before:w-96 before:rounded-full before:bg-')]")
        this.uniqueVisitorsGraph = page.locator("div[class='panel h-full p-0 lg:col-span-2']")
        this.activityLogGrid = page.locator("div[class='mb-6 grid gap-6 lg:grid-cols-3'] div[class='panel h-full']")
        this.visitorsByBrowserPanel = page.locator("div[class='panel h-full sm:col-span-3 xl:col-span-2']")
        this.followersGraph = page.locator("xpath=(//div[@class='panel h-full p-0'])[1]")
        this.referralGraph = page.locator("xpath=(//div[@class='panel h-full p-0'])[2]")
        this.engagementGraph = page.locator("xpath=(//div[@class='panel h-full p-0'])[3]")
        this.footerPanels = page.locator("div[class='grid gap-6 md:grid-cols-2 xl:grid-cols-3']")
    }

    async isStatisticsPanelVisible() {
        return await this.statisticsPanel.isVisible();
    }

    async isExpensesPanelVisible() {
        return await this.expensesPanel.isVisible();
    }

    async isTotalBalancePanelVisible() {
        return await this.totalBalancePanel.isVisible();
    }

    async isUniqueVisitorsGraphVisible() {
        return await this.uniqueVisitorsGraph.isVisible();
    }

    async isActivityLogGridVisible() {
        return await this.activityLogGrid.isVisible();
    }

    async isVisitorsByBrowserPanelVisible() {
        return await this.visitorsByBrowserPanel.isVisible();
    }

    async isFollowersGraphVisible() {
        return await this.followersGraph.isVisible();
    }

    async isReferralGraphVisible() {
        return await this.referralGraph.isVisible();
    }

    async isEngagementGraphVisible() {
        return await this.engagementGraph.isVisible();
    }

    async isFooterPanelsVisible() {
        return await this.footerPanels.isVisible();
    }

}