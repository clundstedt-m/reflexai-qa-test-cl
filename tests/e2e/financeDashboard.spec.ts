import { test, expect } from '@playwright/test';
import { FinanceDashboard } from '../../pages/financeDashboard.page';
import { common } from '../../utils/common';
import { SideMenu } from '../../pages/sideMenu.page';

test.describe('Finance Dashboard checks', () => {
    let sideMenu: SideMenu | null = null;
    let financeDashboard: FinanceDashboard | null = null;
  
    test.beforeEach(async ({ page }) => {
      sideMenu = new SideMenu(page);
      financeDashboard = new FinanceDashboard(page);
      await page.goto(common.baseURL);
      await sideMenu.dashboardMainBtn.click();
      await sideMenu.goToFinanceDashboard();
    });
  

    test('Check visibility of elements on the Finance Dashboard', async () => {
        expect(await financeDashboard!.isBounceRateWidgetVisible).toBeTruthy();
        expect(await financeDashboard!.isFavoritesGridPanelVisible).toBeTruthy();
        expect(await financeDashboard!.isLivePricesGridPanelVisible).toBeTruthy();
        expect(await financeDashboard!.isRecentTransactionsGridVisible).toBeTruthy();
        expect(await financeDashboard!.isSessionsWidgetVisible).toBeTruthy();
        expect(await financeDashboard!.isStatementPanelsVisible).toBeTruthy();
        expect(await financeDashboard!.isTimeOnSiteWidgetVisible).toBeTruthy();
        expect(await financeDashboard!.isUsersVisitWidgetVisible).toBeTruthy();
        });
    });