import { test, expect } from '@playwright/test';
import { SignInBoxedPage } from '../../pages/signIn.page';
import { common } from '../../utils/common';

test.describe('Sign In Boxed Page checks', () => {
    let signInPage: SignInBoxedPage | null = null;
  
    test.beforeEach(async ({ page }) => {
        signInPage = new SignInBoxedPage(page);
        await page.goto(common.baseURL + '/auth/boxed-signin#');
    });

    test('Credentials should be fillable', async () => {
        await signInPage!.enterCredentials('test@example.com', 'password');
        expect(await signInPage!.emailInput.inputValue()).toBe('test@example.com');
        expect(await signInPage!.passwordInput.inputValue()).toBe('password');
    });

    test('Sign in button should be clickable', async () => {
        await signInPage!.clickSignInBtn();
    });

    test('Subscribe button should be clickable', async () => {
        await signInPage!.clickSubscribeBtn();
    });

    test('Instagram button should be clickable', async () => {
        await signInPage!.clickInstagramBtn();
    });

    test('Facebook button should be clickable', async () => {
        await signInPage!.clickFacebookBtn();
    });

    test('Twitter button should be clickable', async () => {
        await signInPage!.clickTwitterBtn();
    });

    test('Google button should be clickable', async () => {
        await signInPage!.clickGoogleBtn();
    });

    test('Sign up button should be clickable', async () => {
        await signInPage!.clickSignUpBtn();
    });

    test('Should change language to Spanish', async () => {
        await signInPage!.changeLanguageToSpanish();
    });
});