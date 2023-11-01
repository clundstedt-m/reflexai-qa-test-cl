import {Locator, Page} from '@playwright/test'

export class FinanceDashboard {
    readonly page: Page
    readonly usersVisitWidget: Locator
    readonly sessionsWidget: Locator
    readonly timeOnSiteWidget: Locator
    readonly bounceRateWidget: Locator
    readonly favoritesGridPanel: Locator
    readonly livePricesGridPanel: Locator
    readonly statementPanels: Locator
    readonly recentTransactionsGrid: Locator


    constructor(page: Page) {
        this.page = page
        this.usersVisitWidget = page.locator(".panel.bg-gradient-to-r.from-cyan-500.to-cyan-400")
        this.sessionsWidget = page.locator(".panel.bg-gradient-to-r.from-violet-500.to-violet-400")
        this.timeOnSiteWidget = page.locator(".panel.bg-gradient-to-r.from-blue-500.to-blue-400")
        this.bounceRateWidget = page.locator(".panel.bg-gradient-to-r.from-fuchsia-500.to-fuchsia-400")
        this.favoritesGridPanel = page.locator("xpath=(//div)[149]")
        this.livePricesGridPanel = page.locator("xpath=(//div)[203]")
        this.statementPanels = page.locator("div[class='grid gap-6 xl:grid-flow-row']")
        this.recentTransactionsGrid = page.locator("xpath=(//div[@class='panel'])[7]")

    }

    async isUsersVisitWidgetVisible() {
        await this.usersVisitWidget.isVisible();
    }

    async isSessionsWidgetVisible() {
        await this.sessionsWidget.isVisible();
    }

    async isTimeOnSiteWidgetVisible() {
        await this.timeOnSiteWidget.isVisible();
    }

    async isBounceRateWidgetVisible() {
        await this.bounceRateWidget.isVisible();
    }

    async isFavoritesGridPanelVisible() {
        await this.favoritesGridPanel.isVisible();
    }

    async isLivePricesGridPanelVisible() {
        await this.livePricesGridPanel.isVisible();
    }

    async isStatementPanelsVisible() {
        await this.statementPanels.isVisible();
    }

    async isRecentTransactionsGridVisible() {
        await this.recentTransactionsGrid.isVisible();
    }


}