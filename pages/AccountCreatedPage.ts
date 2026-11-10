import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountCreatedPage extends BasePage {
<<<<<<< HEAD
 
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

  
=======

    //locator
    readonly accountCreatedtxt: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.accountCreatedtxt = page.locator("//h2 [@data-qa = 'account-created']");
        this.continueBtn = page.locator ("//a [@data-qa = 'continue-button']");

    }

    async expectAccountCreatedtextVisible() : Promise <void> {
        await expect (this.accountCreatedtxt).toBeVisible();
    }

    async clickContinueBtn() : Promise <void> {
        await this.continueBtn.click();
    }

>>>>>>> upstream/Ddangw
}