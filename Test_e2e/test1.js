
/**
 * Created by Юра on 3/25/2017.
 */
//import {MainPage} from "/page_elements/mainPage";
//var mainPage = require('MainPage1');
//import { MainPage } from '/page_elements/mainPage';
//var MainPage1 = require('MainPage1');
//import { MainPage1 } from 'node.js';

//const EC = protractor.ExpectedConditions;
//MainPage.placeHolderString.linkToLoginPage;
//var BasePage_1 = require('./BasePage');
//import {browser, by, element} from "protractor";

describe('1. Authorization page (Welcome back!).', function() {
    var startPage = 'https://ssls.com';
    var linkToLoginPage = element(by.css('.btn.flat-dark.ng-scope'));
    var loginField = element(by.css('.form-group.email>input'));
    var login ='ssls.automation+5@gmail.com';
    var passwordField = element(by.css('.input-box.password>input'));
    var password ='123456';
    var eyeImageButton = element(by.css('.btn-input.btn-input-block'));
    var loginButton = element(by.css('.btn.block.primary'));
    var userEmailButton = element(by.css('.btn.btn-s.round.filled.user-btn.ng-binding'));
    var logoutLinkMenu = element(by.css('.btn.btn-s.round.filled.dropdown-btn.ng-isolate-scope'));
    var logoutLink = element(by.css('.drop-button'));

    //browser.ignoreSynchronization = true;

    it('1. Open Home page.', function() {
        browser.get(startPage);
        //browser.wait(protractor.until.elementIsEnabled(linkToLoginPage),9000);
        expect(linkToLoginPage.exists);
    });

    it('2. Click on "LOG IN" text.', function() {
        linkToLoginPage.click();
        expect(eyeImageButton.exists);
        //browser.wait(visibilityOf(this.loginField), 9000);
        /*browser.wait(protractor.until.elementIsVisible(loginField),9000);
        //browser.isElementPresent(loginField);
        //browser.driver.wait(protractor.until.elementIsNotVisible(loginField));
        expect(loginField.exists);/**/
    });

    it('3. On the authorization page enter valid email and password for previously registered ' +
        'user (to check entered password, click on "eye” icon in password field.).', function() {
        loginField.sendKeys("ssls.automation+5@gmail.com");
        passwordField.sendKeys(password);
        eyeImageButton.click();
        var tmpStr = passwordField.getText();
    });


    it('4. Click "Login" button.', function() {
        //browser.isElementPresent(loginButton);
        loginButton.click();
        //browser.isElementPresent(userEmailButton);
        logoutLinkMenu.click();
        logoutLink.click();
    });
});
