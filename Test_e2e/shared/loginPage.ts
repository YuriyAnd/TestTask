import { browser, element, by, ElementFinder, $ } from 'protractor';
import { AbstractPage } from './abstractPage';

export class LoginPage {

  public static emailInput: ElementFinder = element(by.id('JobSeekerLoginV3_cbsys_login_email'));
  public static passwordInput: ElementFinder = element(by.id('JobSeekerLoginV3_cbsys_login_password'));
  public static loginButton: ElementFinder = element(by.id('btnsignin'));
  public static redirectWindow: ElementFinder = $('.inner-dialog');

  public static login(): any {
    browser.get('https://accounts.careerbuilder.com/share/login.aspx');
    browser.wait(AbstractPage.getEC().not(AbstractPage.getEC().visibilityOf(this.redirectWindow)), 9000);
    AbstractPage.sendQuery(this.emailInput, 'testvalorsoftware@gmail.com');
    AbstractPage.sendQuery(this.passwordInput, 'Qwerty1234');
    this.loginButton.click();
  };

  public static logout(): any {
    browser.get('http://accounts.careerbuilder.com/share/logout.aspx');
    browser.driver.manage().deleteAllCookies();
  };
}
