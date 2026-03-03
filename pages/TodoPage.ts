import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TodoPage extends BasePage {
  readonly url = 'https://demo.playwright.dev/todomvc';

  // Locators
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;
  readonly todoTitles: Locator;
  readonly todoCount: Locator;
  readonly toggleAll: Locator;
  readonly clearCompletedButton: Locator;
  readonly allLink: Locator;
  readonly activeLink: Locator;
  readonly completedLink: Locator;

  constructor(page: Page) {
    super(page);
    this.newTodoInput = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.getByTestId('todo-item');
    this.todoTitles = page.getByTestId('todo-title');
    this.todoCount = page.getByTestId('todo-count');
    this.toggleAll = page.getByLabel('Mark all as complete');
    this.clearCompletedButton = page.getByRole('button', { name: 'Clear completed' });
    this.allLink = page.getByRole('link', { name: 'All' });
    this.activeLink = page.getByRole('link', { name: 'Active' });
    this.completedLink = page.getByRole('link', { name: 'Completed' });
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }

  // Todo Item Actions
  async addTodo(text: string): Promise<void> {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async addMultipleTodos(items: readonly string[]): Promise<void> {
    for (const item of items) {
      await this.addTodo(item);
    }
  }

  getNthTodoItem(index: number): Locator {
    return this.todoItems.nth(index);
  }

  getNthTodoCheckbox(index: number): Locator {
    return this.todoItems.nth(index).getByRole('checkbox');
  }

  async checkNthTodo(index: number): Promise<void> {
    await this.todoItems.nth(index).getByRole('checkbox').check();
  }

  async uncheckNthTodo(index: number): Promise<void> {
    await this.todoItems.nth(index).getByRole('checkbox').uncheck();
  }

  async doubleClickNthTodo(index: number): Promise<void> {
    await this.todoItems.nth(index).dblclick();
  }

  async editNthTodo(index: number, newText: string): Promise<void> {
    const editInput = this.todoItems.nth(index).getByRole('textbox', { name: 'Edit' });
    await editInput.fill(newText);
    await editInput.press('Enter');
  }

  getNthTodoEditInput(index: number): Locator {
    return this.todoItems.nth(index).getByRole('textbox', { name: 'Edit' });
  }

  // Toggle All Actions
  async markAllAsComplete(): Promise<void> {
    await this.toggleAll.check();
  }

  async unmarkAllAsComplete(): Promise<void> {
    await this.toggleAll.uncheck();
  }

  // Filter Actions
  async filterByAll(): Promise<void> {
    await this.allLink.click();
  }

  async filterByActive(): Promise<void> {
    await this.activeLink.click();
  }

  async filterByCompleted(): Promise<void> {
    await this.completedLink.click();
  }

  async clearCompleted(): Promise<void> {
    await this.clearCompletedButton.click();
  }

  // Assertions
  async expectTodoTitles(titles: readonly string[] | string[]): Promise<void> {
    await expect(this.todoTitles).toHaveText([...titles]);
  }

  async expectTodoCount(count: number): Promise<void> {
    await expect(this.todoItems).toHaveCount(count);
  }

  async expectTodoCountText(text: string | RegExp): Promise<void> {
    if (typeof text === 'string') {
      await expect(this.todoCount).toContainText(text);
    } else {
      await expect(this.todoCount).toHaveText(text);
    }
  }

  async expectNewTodoInputEmpty(): Promise<void> {
    await expect(this.newTodoInput).toBeEmpty();
  }

  async expectTodoItemsClasses(classes: string[]): Promise<void> {
    await expect(this.todoItems).toHaveClass(classes);
  }

  async expectNthTodoClass(index: number, className: string): Promise<void> {
    await expect(this.todoItems.nth(index)).toHaveClass(className);
  }

  async expectNthTodoNotClass(index: number, className: string): Promise<void> {
    await expect(this.todoItems.nth(index)).not.toHaveClass(className);
  }

  async expectToggleAllChecked(): Promise<void> {
    await expect(this.toggleAll).toBeChecked();
  }

  async expectToggleAllNotChecked(): Promise<void> {
    await expect(this.toggleAll).not.toBeChecked();
  }

  async expectClearCompletedVisible(): Promise<void> {
    await expect(this.clearCompletedButton).toBeVisible();
  }

  async expectClearCompletedHidden(): Promise<void> {
    await expect(this.clearCompletedButton).toBeHidden();
  }

  async expectFilterSelected(filter: 'All' | 'Active' | 'Completed'): Promise<void> {
    const filterLink = filter === 'All' ? this.allLink : 
                       filter === 'Active' ? this.activeLink : this.completedLink;
    await expect(filterLink).toHaveClass('selected');
  }

  // Local Storage Helpers
  async checkNumberOfTodosInLocalStorage(expected: number): Promise<void> {
    await this.page.waitForFunction(e => {
      return JSON.parse(localStorage['react-todos']).length === e;
    }, expected);
  }

  async checkNumberOfCompletedTodosInLocalStorage(expected: number): Promise<void> {
    await this.page.waitForFunction(e => {
      return JSON.parse(localStorage['react-todos']).filter((todo: any) => todo.completed).length === e;
    }, expected);
  }

  async checkTodosInLocalStorage(title: string): Promise<void> {
    await this.page.waitForFunction(t => {
      return JSON.parse(localStorage['react-todos']).map((todo: any) => todo.title).includes(t);
    }, title);
  }

  // Navigation helpers
  async goBack(): Promise<void> {
    await this.page.goBack();
  }

  async reload(): Promise<void> {
    await this.page.reload();
  }
}
