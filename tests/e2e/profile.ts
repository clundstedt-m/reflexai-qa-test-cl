import { test, expect } from '@playwright/test';
import { ProfilePage } from '../../pages/profile.page';
import { common } from '../../utils/common';
import { HomePage } from '../../pages/home.page';

test.describe('Finance Dashboard checks', () => {
    let homePage: HomePage | null = null;
    let profilePage: ProfilePage | null = null;
  
    test.beforeEach(async ({ page }) => {
      homePage = new HomePage(page);
      profilePage = new ProfilePage(page);
      await page.goto(common.baseURL);
      await homePage.goToProfile();
    });

    test('Check visibility of elements on the Profile Page', async () => {
        expect(await profilePage!.isProfileInfoPanelVisible()).toBeTruthy();
        expect(await profilePage!.isCardDetailsPanelVisible()).toBeTruthy();
        expect(await profilePage!.isPaymentHistoryPanelVisible()).toBeTruthy();
        expect(await profilePage!.isProPlanDetailsVisible()).toBeTruthy();
        expect(await profilePage!.isSummaryGridVisible()).toBeTruthy();
        expect(await profilePage!.isTaskGridVisible()).toBeTruthy();
    });
});