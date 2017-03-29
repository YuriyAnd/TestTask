/**
 * Created by Юра on 3/25/2017.
 */

const EC = protractor.ExpectedConditions;

describe('4. Authorization page. Empty fields.', function() {

    var startPage = 'https://ssls.com';
    var linkToLoginPage = element(by.css('.btn.flat-dark.ng-scope'));
    var loginField = element(by.css('.form-group.email>input'));
    var loginButton = element(by.css('.btn.block.primary'));
    var errorEmail = element(by.xpath(".//*[@id='ng-app']/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[1]/div/div[2]/div/div[1]/span"));
    var errorEmailMessage = "Oops, please\nenter your email";
    var errorPassword = element(by.xpath(".//*[@id='ng-app']/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div/div[1]/div/div[1]/span"));
    var errorPasswordMessage = "Looks like you’ve\nmissed this one";
    browser.ignoreSynchronization = true;

    it('1. 1. Open Home page.', function() {
        browser.get(startPage);
        expect(linkToLoginPage.exists);
    });

    it('2. Click on "LOG IN" text.', function() {
        linkToLoginPage.click();
        browser.wait(EC.presenceOf(loginField), 5000);
    });

    it('3. On the authorization page don’t fill Email and Password.', function() {
    });

    it('4. Click "Login" button.', function() {
        loginButton.click();
        browser.wait(EC.presenceOf(errorEmail), 5000);
        var errorEText = errorEmail.getText();
        expect(errorEmailMessage).toEqual(errorEText);
        var errorPText = errorPassword.getText();
        expect(errorPasswordMessage).toEqual(errorPText);
    });
});
