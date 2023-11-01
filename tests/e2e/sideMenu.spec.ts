import { test, expect } from '@playwright/test';
import { SideMenu } from '../../pages/sideMenu.page';
import { SalesDashboard } from '../../pages/salesDashboard.page';
import { common } from '../../utils/common';

test.describe('Side Menu Dashboard Navigation', () => {
    let sideMenu: SideMenu | null = null;
    let salesDashboard: SalesDashboard | null = null;
  
    test.beforeEach(async ({ page }) => {
      sideMenu = new SideMenu(page);
      salesDashboard = new SalesDashboard(page);
      await page.goto(common.baseURL);
      await sideMenu.dashboardMainBtn.click();
    });
  

  test('Should navigate to Sales Dashboard', async ({page}) => {
    await expect(salesDashboard!.revenueGraph).toBeVisible();
  });

  test('Should navigate to Finance Dashboard', async ({page}) => {
    await sideMenu!.goToFinanceDashboard();
    await expect(page).toHaveURL(common.baseURL + '/finance');
  });

  test('Should navigate to Analytics Dashboard', async ({page}) => {
    await sideMenu!.goToAnalyticsDashboard();
    await expect(page).toHaveURL(common.baseURL + '/analytics');
  });

  test('Should navigate to Crypto Dashboard', async ({page}) => {
    await sideMenu!.goToCryptoDashboard();
    await expect(page).toHaveURL(common.baseURL + '/crypto');
  });
});