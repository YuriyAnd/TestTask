/**
 * Created by Юра on 3/25/2017.
 */

const EC = protractor.ExpectedConditions;

describe('3. Authorization page. Invalid email.', function() {

    var startPage = 'https://ssls.com';
    var linkToLoginPage = element(by.css('.btn.flat-dark.ng-scope'));
    var loginField = element(by.css('.form-group.email>input'));
    var login ='test@@test.com';
    var passwordField = element(by.css('.input-box.password>input'));
    var password ='123456';
    var eyeImageButton = element(by.css('.btn-input.btn-input-block'));
    var loginButton = element(by.css('.btn.block.primary'));
    var errorLogin = element(by.css('.tooltip-text'));
    var errorMessageElement = element(by.xpath(".//*[@id='ng-app']/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[1]/div/div[1]/div/div[1]/span"));
    var errorMessageText = "Uh oh! This\nisn’t an email";

    it('1. 1. Open Home page.', function() {
        browser.get(startPage);
        expect(linkToLoginPage.exists);
    });

    it('2. Click on "LOG IN" text.', function() {
        linkToLoginPage.click();
        browser.wait(EC.presenceOf(loginField), 5000);
    });

    it('3. On the authorization page enter valid email and password for previously registered ' +
        'user (to check entered password, click on "eye” icon in password field.).', function() {
        loginField.sendKeys(login);
        passwordField.sendKeys(password);
        eyeImageButton.click();
        var tmpStr = passwordField.getText();
    });

    it('4. Click "Login" button.', function() {
        browser.wait(EC.presenceOf(loginButton), 1000);
        loginButton.click();
        browser.wait(EC.presenceOf(errorLogin), 5000);
        var errorText = errorMessageElement.getText();
        expect(errorText).toEqual(errorMessageText);
    });



});
