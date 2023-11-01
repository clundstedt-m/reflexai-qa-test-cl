import { test, expect } from '@playwright/test';
import { AnalyticsDashboard } from '../../pages/analyticsDashboard.page';
import { common } from '../../utils/common';
import { SideMenu } from '../../pages/sideMenu.page';

test.describe('Analytics Dashboard checks', () => {
    let sideMenu: SideMenu | null = null;
    let analyticsDashboard: AnalyticsDashboard | null = null;
  
    test.beforeEach(async ({ page }) => {
      sideMenu = new SideMenu(page);
      analyticsDashboard = new AnalyticsDashboard(page);
      await page.goto(common.baseURL);
      await sideMenu.dashboardMainBtn.click();
      await sideMenu.goToAnalyticsDashboard();
    });

    test('Check visibility of elements on the Analytics Dashboard', async () => {
        expect(await analyticsDashboard!.isActivityLogGridVisible).toBeTruthy();
        expect(await analyticsDashboard!.isStatisticsPanelVisible).toBeTruthy();
        expect(await analyticsDashboard!.isEngagementGraphVisible).toBeTruthy();
        expect(await analyticsDashboard!.isExpensesPanelVisible).toBeTruthy();
        expect(await analyticsDashboard!.isFollowersGraphVisible).toBeTruthy();
        expect(await analyticsDashboard!.isFooterPanelsVisible).toBeTruthy();
        expect(await analyticsDashboard!.isReferralGraphVisible).toBeTruthy();
        expect(await analyticsDashboard!.isTotalBalancePanelVisible).toBeTruthy();
        expect(await analyticsDashboard!.isUniqueVisitorsGraphVisible).toBeTruthy();
        expect(await analyticsDashboard!.isVisitorsByBrowserPanelVisible).toBeTruthy();
    });
});