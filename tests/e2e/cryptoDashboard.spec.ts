import { test, expect } from '@playwright/test';
import { CryptoDashboard } from '../../pages/cryptoDashboard.page';
import { common } from '../../utils/common';
import { SideMenu } from '../../pages/sideMenu.page';

test.describe('Crypto Dashboard checks', () => {
    let sideMenu: SideMenu | null = null;
    let cryptoDashboard: CryptoDashboard | null = null;
  
    test.beforeEach(async ({ page }) => {
      sideMenu = new SideMenu(page);
      cryptoDashboard = new CryptoDashboard(page);
      await page.goto(common.baseURL);
      await sideMenu.dashboardMainBtn.click();
      await sideMenu.goToCryptoDashboard();
    });
  

    test('Check visibility of elements on the Finance Dashboard', async () => {
        expect(await cryptoDashboard!.isBitCoinsTypesGridVisible).toBeTruthy();
        expect(await cryptoDashboard!.isActionWidgetVisible).toBeTruthy();
        expect(await cryptoDashboard!.isCurrentBitcoinDetailPanelVisible).toBeTruthy();
        expect(await cryptoDashboard!.isPriceHistoryGraphVisible).toBeTruthy();
        });
    });