import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
<<<<<<< HEAD
 
  // Locators
  readonly titleAllProducts: Locator;
  readonly proDuctlist: Locator;
  readonly firstPRoduct: Locator;
  readonly txtWomenTopsProduct: Locator;
  readonly menCategoryAccordion: Locator;
  readonly lnkTShirts : Locator;
  readonly titleMenTshirtsProduct: Locator;
  constructor(page: Page) {
    super(page)
    
    this.titleAllProducts = page.locator("//h2[@class='title text-center']");
    this.proDuctlist = page.locator("//div[contains(@class,'product-image-wrapper')]");
    this.firstPRoduct = page.locator("//a[@href='/product_details/1']");
    this.txtWomenTopsProduct = page.locator("//h2[text()='Women - Tops Products']");
    this.menCategoryAccordion = page.locator("//a[@href='#Men']");
    this.lnkTShirts = page.locator("//a[@href='/category_products/3']");
    this.titleMenTshirtsProduct = page.locator("//h2[@class='title text-center']");
  }

 
  async verifyCategoryPageVisible(): Promise<void>  {
    await expect(this.page).toHaveURL('https://automationexercise.com/category_products/2');
  };

  async expectxtAllProductsVisible(): Promise<void> {
    await expect(this.titleAllProducts).toBeVisible();
    await expect(this.titleAllProducts).toContainText('All Products')
  }
  async expectxtProductsListVisible(): Promise<void> {
    await expect(this.proDuctlist.first()).toBeVisible();
    }
  
  async clickFirstProductItems(): Promise<void> {
    await this.firstPRoduct.click();
  }
  async expectxtWomenTopsProductVisible(): Promise<void> {
    await expect(this.txtWomenTopsProduct).toBeVisible();
    }
 
  async clickmenCategoryAccordion(): Promise<void> {
    await this.menCategoryAccordion.click();
    }
  
  async clickTshirtsLink(): Promise<void> {
    await this.lnkTShirts.click();
      }

  async expectxtMenTshirtsProduct(): Promise<void> {
    await expect(this.titleMenTshirtsProduct).toBeVisible();
    await expect(this.titleMenTshirtsProduct).toContainText('Men - Tshirts Products');
  }
  
=======

    // Locators
  readonly allProducttxt: Locator;
  readonly productsList: Locator;
  readonly viewProductFirstItem: Locator;
  readonly categoryMen: Locator;
  readonly categoryNamePage: Locator;

  constructor(page: Page) {
    super(page);
    this.allProducttxt = page.locator("//h2[@class='title text-center']");
    this.productsList = page.locator("//div[@class='features_items']");
    this.viewProductFirstItem = page.locator("//a[@href='/product_details/1']");
    this.categoryMen = page.locator ("//h4 [@class = 'panel-title'] //a [@href = '#Men']");
    this.categoryNamePage = page.locator ("//ol [@class = 'breadcrumb'] //li [@class = 'active']");
  }

  async expectAllProducttxtVisible(): Promise<void> {
    await expect(this.allProducttxt).toBeVisible();
  }

  async expectProductsListVisible(): Promise<void> {
    await expect(this.productsList).toBeVisible();
  }

  async clickViewProductFirstItem(): Promise<void> {
    await this.viewProductFirstItem.click();
  }

  async clickCategoryMen(): Promise <void> {
    await this.categoryMen.click();
  }

  async clickSubCategoryMen(categoryMen: string): Promise <void> {
    const category = this.page.getByText(categoryMen, { exact: true });
    await category.click();
  }

  async expectMenCategoryNamePagecontain(categoryMen: string): Promise <void> {
    await expect(this.categoryNamePage).toContainText(categoryMen);
  }

  async expectWomenCategoryNamePagecontain (categoryWomen: string): Promise <void> {
    await expect(this.categoryNamePage).toContainText(categoryWomen);
  }
>>>>>>> upstream/Ddangw
}