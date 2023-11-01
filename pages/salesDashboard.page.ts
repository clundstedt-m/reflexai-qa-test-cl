import {Locator, Page} from '@playwright/test'

export class SalesDashboard {
    readonly page: Page
    readonly mainGraphContainer: Locator
    readonly revenueGraph: Locator
    readonly salesByCategoryGraph: Locator
    readonly dailySalesGraph: Locator
    readonly summaryGraph: Locator 
    readonly totalOrdersGraph: Locator
    readonly recentActivitiesPanel: Locator
    readonly transactionsPanel: Locator
    readonly walletBalancePanel: Locator
    readonly recentOrdersGrid: Locator
    readonly topSellingProductGrid: Locator


    constructor(page: Page) {
        this.page = page
        this.mainGraphContainer = page.locator(".pt-5")
        this.revenueGraph = page.locator("div[class='panel h-full xl:col-span-2']")
        this.salesByCategoryGraph = page.locator("div[class='mb-6 grid gap-6 xl:grid-cols-3'] div[class='panel h-full']")
        this.dailySalesGraph = page.locator("div[class='panel h-full sm:col-span-2 xl:col-span-1']")
        this.summaryGraph = page.locator("xpath=(//div[@class='panel h-full'])[2]")
        this.totalOrdersGraph = page.locator(".rounded-lg.bg-transparent")
        this.recentActivitiesPanel = page.locator("div[class='panel h-full pb-0 sm:col-span-2 xl:col-span-1']")
        this.transactionsPanel = page.locator("xpath=(//div[@class='panel h-full'])[3]")
        this.walletBalancePanel = page.locator(".panel.h-full.overflow-hidden.border-0.p-0")
        this.recentOrdersGrid = page.locator("xpath=(//div[@class='panel h-full w-full'])[1]")
        this.topSellingProductGrid = page.locator("xpath=(//div[@class='panel h-full w-full'])[2]")
    }

    async isMainGraphContainerVisible() {
        return await this.mainGraphContainer.isVisible();
    }

    async isRevenueGraphVisible() {
        return await this.revenueGraph.isVisible();
    }

    async isSalesByCategoryGraphVisible() {
        return await this.salesByCategoryGraph.isVisible();
    }

    async isDailySalesGraphVisible() {
        return await this.dailySalesGraph.isVisible();
    }

    async isSummaryGraphVisible() {
        return await this.summaryGraph.isVisible();
    }

    async isTotalOrdersGraphVisible() {
        return await this.totalOrdersGraph.isVisible();
    }

    async isRecentActivitiesPanelVisible() {
        return await this.recentActivitiesPanel.isVisible();
    }

    async isTransactionsPanelVisible() {
        return await this.transactionsPanel.isVisible();
    }

    async isWalletBalancePanelVisible() {
        return await this.walletBalancePanel.isVisible();
    }

    async isRecentOrdersGridVisible() {
        return await this.recentOrdersGrid.isVisible();
    }

    async isTopSellingProductGridVisible() {
        return await this.topSellingProductGrid.isVisible();
    }

}