import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly url = 'https://automationexercise.com';
  
  // Locators
  readonly homePageIsVisible: Locator;
  readonly signupLogiButton: Locator;
  readonly txtLoggedisas: Locator;
  readonly btDeleteAccount: Locator;

  constructor(page: Page) {
    super(page)
    this.homePageIsVisible = page.locator("//img[@alt='Website for automation practice']");
    this.signupLogiButton = page.locator("//a[@href='/login']");
    this.txtLoggedisas = page.locator("//i[@class='fa fa-user']//parent::a");
    this.btDeleteAccount = page.locator("//a[@href='/delete_account']");
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
  
  async expectHomePageVisible(): Promise<void> {
    await expect(this.homePageIsVisible).toBeVisible();
  }
  
  async clickSignupLogin(): Promise<void> {
    await this.signupLogiButton.click();
  }
  async expectLoggedisasVisible(): Promise<void> {
    await expect(this.txtLoggedisas).toBeVisible();
  }
  async clickDeleteAccountButton(): Promise<void> {
    await this.btDeleteAccount.click();
  }
  
}
