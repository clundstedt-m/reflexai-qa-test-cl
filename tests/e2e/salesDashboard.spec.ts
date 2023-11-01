import { test, expect } from '@playwright/test';
import { SalesDashboard } from '../../pages/salesDashboard.page';
import { common } from '../../utils/common';
import { SideMenu } from '../../pages/sideMenu.page';

test.describe('Sales Dashboard checks', () => {
    let sideMenu: SideMenu | null = null;
    let salesDashboard: SalesDashboard | null = null;
  
    test.beforeEach(async ({ page }) => {
      sideMenu = new SideMenu(page);
      salesDashboard = new SalesDashboard(page);
      await page.goto(common.baseURL);
      await sideMenu.dashboardMainBtn.click();
      await sideMenu.goToSalesDashboard();
    });

    test('Check visibility of elements on the Sales Dashboard', async () => {
        expect(await salesDashboard!.isMainGraphContainerVisible).toBeTruthy();
        expect(await salesDashboard!.isRevenueGraphVisible).toBeTruthy();
        expect(await salesDashboard!.isSalesByCategoryGraphVisible).toBeTruthy();
        expect(await salesDashboard!.isDailySalesGraphVisible).toBeTruthy();
        expect(await salesDashboard!.isSummaryGraphVisible).toBeTruthy();
        expect(await salesDashboard!.isTotalOrdersGraphVisible).toBeTruthy();
        expect(await salesDashboard!.isRecentActivitiesPanelVisible).toBeTruthy();
        expect(await salesDashboard!.isTransactionsPanelVisible).toBeTruthy();
        expect(await salesDashboard!.isWalletBalancePanelVisible).toBeTruthy();
        expect(await salesDashboard!.isRecentOrdersGridVisible).toBeTruthy();
        expect(await salesDashboard!.isTopSellingProductGridVisible).toBeTruthy();

    });
});