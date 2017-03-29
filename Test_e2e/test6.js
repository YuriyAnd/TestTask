/**
 * Created by Юра on 3/25/2017.
 */

const EC = protractor.ExpectedConditions;

describe('6. My profile page. Client area.', function() {

    var startPage = 'https://ssls.com';
    var linkToLoginPage = element(by.css('.btn.flat-dark.ng-scope'));
    var loginField = element(by.css('.form-group.email>input'));
    var login ='ssls.automation+5@gmail.com';
    var passwordField = element(by.css('.input-box.password>input'));
    var password ='123456';
    var loginButton = element(by.css('.btn.block.primary'));
    var viewProfileButton = element(by.xpath(".//*[@id='ng-app']/body/div[1]/header/div[2]/div[2]/div[1]/div/ul/li[5]/a"));
    var name, email, password, phone, address, support_Pin, newsletter;
    var nameS='.//div[1]/div[2]/span';
    var emailS='.//div[2]/div[2]/span';
    var passwordS='.//div[3]/div[2]/span';
    var phoneS='.//div[4]/div[2]/span';
    var addressS='.//div[5]/div[2]/span';
    var support_PinS='.//div[6]/div[2]/span';
    var newsletterS='.//div[7]/div[2]/span';
    var logoutLinkMenu = element(by.css('.btn.btn-s.round.filled.dropdown-btn.ng-isolate-scope'));
    var logoutLink = element(by.css('.drop-button'));

    it('Preconditions: 1. User has to be logged in.', function() {
        browser.get(startPage);
        expect(linkToLoginPage.exists);
        linkToLoginPage.click();
        browser.wait(EC.presenceOf(loginField), 5000);
        loginField.sendKeys(login);
        passwordField.sendKeys(password);
        loginButton.click();
        browser.wait(EC.presenceOf(logoutLinkMenu), 5000);
        logoutLinkMenu.click();
        viewProfileButton.click();
        name=element(by.xpath(nameS)).getText();
        email=element(by.xpath(emailS)).getText();
        password=element(by.xpath(passwordS)).getText();
        phone=element(by.xpath(phoneS)).getText();
        address=element(by.xpath(addressS)).getText();
        support_Pin=element(by.xpath(support_PinS)).getText();
        newsletter=element(by.xpath(newsletterS)).getText();
        logoutLinkMenu.click();
        logoutLink.click();
    });

    it('1. Open Home page. Click on triangle near the "User@email" button.', function() {
        browser.get(startPage);
        expect(linkToLoginPage.exists);
        linkToLoginPage.click();
        browser.wait(EC.presenceOf(loginField), 5000);
        loginField.sendKeys(login);
        passwordField.sendKeys(password);
        loginButton.click();
        browser.wait(EC.presenceOf(logoutLinkMenu), 5000);

    });

    it('2. In drop-down menu select "View profile".', function() {
        logoutLinkMenu.click();
        viewProfileButton.click();
        expect(name==element(by.xpath(nameS)).getText());
        expect(email==element(by.xpath(emailS)).getText());
        expect(password==element(by.xpath(passwordS)).getText());
        expect(phone==element(by.xpath(phoneS)).getText());
        expect(address==element(by.xpath(addressS)).getText());
        expect(support_Pin==element(by.xpath(support_PinS)).getText());
        expect(newsletter==element(by.xpath(newsletterS)).getText());
        logoutLinkMenu.click();
        logoutLink.click();
    });

});
