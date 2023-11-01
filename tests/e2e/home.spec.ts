import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { common } from '../../utils/common';

test.describe('Home Page checks', () => {
    let homePage: HomePage | null = null;
  
    test.beforeEach(async ({ page }) => {
      homePage = new HomePage(page);
      await page.goto(common.baseURL);
      await homePage.goBackToHomePage();
    });
  

    test('Check visibility of elements on the Home page', async () => {
        expect(await homePage!.isAppsSideMenuVisible).toBeTruthy();
        expect(await homePage!.isHeaderContainerVisible).toBeTruthy();
        expect(await homePage!.isSearchBarVisible).toBeTruthy();
        expect(await homePage!.isProfileBtnVisible).toBeTruthy();
        expect(await homePage!.isLanguagePickerBtnVisible).toBeTruthy();
        expect(await homePage!.isMessagesBtnVisible).toBeTruthy();
        expect(await homePage!.isNotificationsBtnVisible).toBeTruthy();
        expect(await homePage!.isCalendarBtnVisible).toBeTruthy();
        expect(await homePage!.isTodoListBtnVisible).toBeTruthy();
        expect(await homePage!.isChatBtnVisible).toBeTruthy();
        expect(await homePage!.isAccesibilityBtnVisible).toBeTruthy();
    });
});