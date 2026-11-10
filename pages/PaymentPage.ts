<<<<<<< HEAD
import { Page, Locator, expect, LocatorScreenshotOptions } from '@playwright/test';
import { BasePage } from './BasePage';

export class PaymentPage extends BasePage {
 
  // Locators
  readonly ipNameOnCard : Locator;
  readonly ipCardNumber : Locator;
  readonly ipCVC : Locator;
  readonly ipExpirationMonth : Locator;
  readonly ipEXpirationYear : Locator;
  readonly btPayAndConfirmOrder : Locator;
  readonly txtPaymentdone : Locator;
  readonly btDownloadInvoice : Locator;
  readonly btContinue : Locator;
  constructor(page: Page) {
    super(page)
    
    this.ipNameOnCard = page.locator("//input[@name='name_on_card']");
    this.ipCardNumber = page.locator("//input[@name='card_number']")
    this.ipCVC = page.locator("//input[@name='cvc']");
    this.ipExpirationMonth = page.locator("//input[@name='expiry_month']");
    this.ipEXpirationYear = page.locator("//input[@name='expiry_year']");
    this.btPayAndConfirmOrder = page.locator("//button[@data-qa='pay-button']");
    this.txtPaymentdone = page.locator("//p[text()='Congratulations! Your order has been confirmed!']");
    this.btDownloadInvoice = page.locator("//a[@href='/download_invoice/1000']")
    this.btContinue = page.locator("//a[@data-qa='continue-button']");
  }
  //Payment
async inputPaymentInformations(name_on_card : string, card_number: string, cvc: string, expiration_month: string, expiration_year: string):  Promise<void>  {
    await this.ipNameOnCard.fill(name_on_card);
    await this.ipCardNumber.fill(card_number);
    await this.ipCVC.fill(cvc);
    await this.ipExpirationMonth.fill(expiration_month);
    await this.ipEXpirationYear.fill(expiration_year);
};

async clickPayAndConfirmOrder():  Promise<void>  {

    await this.btPayAndConfirmOrder.click();

}

async verifyPaymentdone():  Promise<void>  {
    await expect(this.txtPaymentdone).toBeVisible();

}

async clickDownloadInvoiceButton():  Promise<void>  {

    await this.btDownloadInvoice.click();

}
async clickContinueButton():  Promise<void>  {

    await this.btContinue.click();

}
=======
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class PaymentPage extends BasePage {

    // Locators
    readonly nameOnCard: Locator;
    readonly cardNumber: Locator;
    readonly cvc: Locator;
    readonly expirationMonth: Locator;
    readonly expirationYear: Locator;
    readonly payConfirmbtn: Locator;

    constructor (page: Page) {
        super(page);
        this.nameOnCard = page.locator("//input [@name= 'name_on_card']");
        this.cardNumber = page.locator("//input [@name= 'card_number']");
        this.cvc = page.locator("//input [@name= 'cvc']");
        this.expirationMonth = page.locator("//input [@name= 'expiry_month']");
        this.expirationYear = page.locator("//input [@name= 'expiry_year']");
        this.payConfirmbtn = page.locator("//button [@id= 'submit']");
    }

    async fillNameOnCard(nameOnCard: string): Promise <void> {
        await this.nameOnCard.fill(nameOnCard);
    }

    async fillCardNumber(cardNumber: string): Promise <void> {
        await this.cardNumber.fill(cardNumber);
    }

    async fillCVC(cvc: string): Promise <void> {
        await this.cvc.fill(cvc);
    }

    async fillExpirationMonth(expirationMonth: string): Promise <void> {
        await this.expirationMonth.fill(expirationMonth);
    }

    async fillExpirationYear(expirationYear: string): Promise <void> {
        await this.expirationYear.fill(expirationYear);
    }

    async clickPayConfirmbtn(): Promise <void> {
        await this.payConfirmbtn.click();
    }
>>>>>>> upstream/Ddangw
}