import {Locator, Page} from '@playwright/test'

export class CryptoDashboard {
    readonly page: Page
    readonly bitCoinsTypesGrid: Locator
    readonly currentBitcoinDetailPanel: Locator
    readonly actionWidget: Locator
    readonly priceHistoryGraph: Locator



    constructor(page: Page) {
        this.page = page
        this.bitCoinsTypesGrid = page.locator("xpath=(//div[contains(@class,'panel')])[1]")
        this.currentBitcoinDetailPanel = page.locator("div[class='flex flex-1 items-start ltr:pr-4 rtl:pl-4']")
        this.actionWidget = page.locator("(//div[@class='mb-5 grid grid-rows-1 gap-4 border-b border-[#ebedf2] p-4 dark:border-[#253b5c] sm:grid-cols-4'])[1]")
        this.priceHistoryGraph = page.locator(".flex-1.px-4")
    }

    async isBitCoinsTypesGridVisible() {
        await this.bitCoinsTypesGrid.isVisible();
    }

    async isCurrentBitcoinDetailPanelVisible() {
        await this.currentBitcoinDetailPanel.isVisible();
    }

    async isActionWidgetVisible() {
        await this.actionWidget.isVisible();
    }

    async isPriceHistoryGraphVisible() {
        await this.priceHistoryGraph.isVisible();
    }
}