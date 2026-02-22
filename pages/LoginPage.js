class LoginPage {
  
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.signInButton = page.getByRole('button', { name: 'Login' });

  }

  // Navigate to Login Page
  async goto() {
    await this.page.goto('https://wccqa.on24.com/webcast/login');
  }

  // Login action
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  // Get error message text
  async getErrorMessage() {
    await this.errorMessage.waitFor();
    return await this.errorMessage.textContent();
  }
}

module.exports = { LoginPage };
