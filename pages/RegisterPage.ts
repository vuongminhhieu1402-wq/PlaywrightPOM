import { Page, Locator, expect, LocatorScreenshotOptions } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {

  
  // Locators
  readonly txtNewUserSignup: Locator;
  readonly ipName: Locator;
  readonly ipEmail: Locator;
  readonly btSignup: Locator;
  readonly txtEnterAccountInformation: Locator;
  readonly RdoTitle: Locator;
  readonly ipPassWord: Locator;
  readonly ddlDay: Locator;
  readonly ddlMonth: Locator;
  readonly ddlYear: Locator;
  readonly chkNewsletter: Locator;
  readonly chkReceive: Locator;
  readonly ipFirtName: Locator;
  readonly ipLastName: Locator;
  readonly ipCompany: Locator;
  readonly ipAddress: Locator;
  readonly ipAddress2: Locator;
  readonly ddlCountry: Locator;
  readonly ipSate: Locator;
  readonly ipCity: Locator;
  readonly ipZipcode: Locator;
  readonly ipMobileNumber: Locator;
  readonly btCreatAcc: Locator;
  


  constructor(page: Page) {
    super(page);
    this.txtNewUserSignup = page.locator("//h2[text()='New User Signup!']");
    this.ipName = page.locator("//input[@data-qa='signup-name']");
    this.ipEmail = page.locator("//input[@data-qa='signup-email']");
    this.btSignup = page.locator("//button[@data-qa='signup-button']");
    this.txtEnterAccountInformation = page.locator("//b[text()='Enter Account Information']")
    this.RdoTitle = page.locator("//input[@value='Mr']");
    this.ipPassWord = page.locator("//input[@data-qa='password']");
    this.ddlDay = page.locator("//select[@id='days']");
    this.ddlMonth = page.locator("//select[@id='months']");
    this.ddlYear = page.locator("//select[@id='years']");
    this.chkNewsletter = page.locator("//input[@name='newsletter']");
    this.chkReceive = page.locator("//input[@name='optin']");
    this.ipFirtName = page.locator("//input[@data-qa='first_name']");
    this.ipLastName = page.locator("//input[@data-qa='last_name']");
    this.ipCompany = page.locator("//input[@data-qa='company']");
    this.ipAddress = page.locator("//input[@data-qa='address']");
    this.ipAddress2 = page.locator("//input[@data-qa='address2']");
    this.ddlCountry = page.locator("//select[@id='country']");
    this.ipSate = page.locator("//input[@data-qa='state']");
    this.ipCity = page.locator("//input[@data-qa='city']");
    this.ipZipcode = page.locator("//input[@data-qa='zipcode']");
    this.ipMobileNumber = page.locator("//input[@data-qa='mobile_number']");
    this.btCreatAcc = page.locator("//button[@data-qa='create-account']");
   

  }
  //Signup Login page
  async expectNewUserSignUpVisible(): Promise<void> {
    await expect(this.txtNewUserSignup).toBeVisible();
  }
  
  async inputNameEMail(name: string, email: string): Promise<void> {
    await this.ipName.fill(name);
    await this.ipEmail.fill(email);
  }

  async clickButtonSignup(): Promise<void> {
    await this.btSignup.click();
  }

  // Registerpage

  async expectEnterAccountInformationVisible(): Promise<void> {
    await expect(this.txtEnterAccountInformation).toBeVisible();
  }

  async clickChkTitle(): Promise<void> {
    await this.RdoTitle.check();
    await expect(this.RdoTitle).toBeChecked();
  }

  async inputPassword(password: string): Promise<void>{
    await this.ipPassWord.fill(password);
  } 
  async selectDateOfBirth (day: string, month: string, year: string): Promise<void>{
    await this.ddlDay.selectOption(day);
    await this.ddlMonth.selectOption(month);
    await this.ddlYear.selectOption(year);
  }
  async subscribeNewsletter(): Promise<void> {
    await this.chkNewsletter.check();
    }

    async subscribeSpecialOffers(): Promise<void> {
    await this.chkReceive.check();
    }

    async inputAddressInformation(first_name: string, last_name: string, company: string, address: string, address2: string, country: string, state: string,
      city: string, zipcode: string, mobile_number: string): Promise<void>{
      await this.ipFirtName.fill(first_name);
      await this.ipLastName.fill(last_name);
      await this.ipCompany.fill(company);
      await this.ipAddress.fill(address);
      await this.ipAddress2.fill(address2);
      await this.ddlCountry.selectOption(country);
      await this.ipSate.fill(state);
      await this.ipCity.fill(city);
      await this.ipZipcode.fill(zipcode);
      await this.ipMobileNumber.fill(mobile_number);
    }

    async clickCreatAccountButton(): Promise<void>{
      await this.btCreatAcc.click();
    }

} 

