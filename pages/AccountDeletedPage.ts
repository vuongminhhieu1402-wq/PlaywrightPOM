import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountDeletedPage extends BasePage {
 
  // Locators
  readonly txtAccountDeleted: Locator;
  readonly btCountinue: Locator;

  constructor(page: Page) {
    super(page)
    this.txtAccountDeleted = page.locator("//b[text()='Account Deleted!']");
    this.btCountinue = page.locator("//a[@data-qa='continue-button']");
  }

 
  
  async expectxtAccountDeletedVisible(): Promise<void> {
    await expect(this.txtAccountDeleted).toBeVisible();
  }
  
  async clickCoutinueButton(): Promise<void> {
    await this.btCountinue.click();
  }

  
}