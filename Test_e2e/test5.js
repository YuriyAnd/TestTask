/**
 * Created by Юра on 3/25/2017.
 */

const EC = protractor.ExpectedConditions;

describe('5. Log Out.', function() {

    var startPage = 'https://ssls.com';
    var linkToLoginPage = element(by.css('.btn.flat-dark.ng-scope'));
    var loginField = element(by.css('.form-group.email>input'));
    var login ='ssls.automation+5@gmail.com';
    var passwordField = element(by.css('.input-box.password>input'));
    var password ='123456';
    var loginButton = element(by.css('.btn.block.primary'));
    var userEmailButton = element(by.css('.btn.btn-s.round.filled.user-btn.ng-binding'));
    var logoutLinkMenu = element(by.css('.btn.btn-s.round.filled.dropdown-btn.ng-isolate-scope'));
    var logoutLink = element(by.css('.drop-button'));

    it('Preconditions: 1. User has to be logged in.', function() {
        browser.get(startPage);
        expect(linkToLoginPage.exists);
        linkToLoginPage.click();
        browser.wait(EC.presenceOf(loginField), 5000);
        loginField.sendKeys(login);
        passwordField.sendKeys(password);
        browser.wait(EC.presenceOf(loginButton), 1000);
        loginButton.click();
        browser.wait(EC.presenceOf(logoutLinkMenu), 5000);
    });

    it('1. Click on triangle near the "User@email" button and select “Log out”.', function() {
        logoutLinkMenu.click();
        logoutLink.click();
        browser.wait(EC.presenceOf(loginField), 5000);
        expect(browser.getCurrentUrl()=='https://www.ssls.com/authorize');
    });


});
