import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountCreatedPage extends BasePage {
 
  // Locators
  readonly txtAccountCreated: Locator;
  readonly btCountinue: Locator;

  constructor(page: Page) {
    super(page)
    this.txtAccountCreated = page.locator("//b[text()='Account Created!']");
    this.btCountinue = page.locator("//a[@data-qa='continue-button']");
  }

 
  
  async expecAccountcreatedVisible(): Promise<void> {
    await expect(this.txtAccountCreated).toBeVisible();
  }
  
  async clickContinueButton(): Promise<void> {
    await this.btCountinue.click();
  }

  
}