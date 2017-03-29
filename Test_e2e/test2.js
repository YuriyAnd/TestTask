/**
 * Created by Юра on 3/25/2017.
 */
//import { MainPage } from '.page_elements/mainPage';
//import { MainPage } from './page_elements/mainPage';
//import {browser, by, element, protractor} from "protractor";

//const EC = protractor.ExpectedConditions;

describe('2. Authorization page. Not registered user.', function() {
    var startPage = 'https://ssls.com';
    var linkToLoginPage = element(by.css('.btn.flat-dark.ng-scope'));
    var loginField = element(by.css('.form-group.email>input'));
    var login ="email"+Math.random().toString()+"@1.com";
    var passwordField = element(by.css('.input-box.password>input'));
    var password ='1234567654321';
    var eyeImageButton = element(by.css('.btn-input.btn-input-block'));
    var loginButton = element(by.css('.btn.block.primary'));
    var errorMessageElement = element(by.css('.notification.information>div>div>span'));
    var errorMessageText = "Uh oh! Email or password is incorrect";
    var logoutLinkMenu = element(by.css('.btn.btn-s.round.filled.dropdown-btn.ng-isolate-scope'));
    var logoutLink = element(by.css('.drop-button'));

    it('1. 1. Open Home page.', function() {
        browser.get(startPage);
        expect(linkToLoginPage.exists);
    });

    it('2. Click on "LOG IN" text.', function() {
        linkToLoginPage.click();
        browser.isElementPresent(loginField);
    });

    it('3. On the authorization page enter valid email and password for previously registered ' +
        'user (to check entered password, click on "eye” icon in password field.).', function() {
        loginField.sendKeys(login);
        passwordField.sendKeys(password);
        eyeImageButton.click();
        var tmpStr = passwordField.getText();
    });

    it('4. Click "Login" button.', function() {
        browser.isElementPresent(loginButton);
        loginButton.click();
        browser.isElementPresent(errorMessageElement);
        var errorText = errorMessageElement.getText();
        expect(errorText).toEqual(errorMessageText);
    });
});
