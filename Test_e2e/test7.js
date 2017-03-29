/**
 * Created by Юра on 3/25/2017.
 */

const EC = protractor.ExpectedConditions;

describe('7. My profile page. Refresh support pin.', function() {

    var startPage = 'https://ssls.com';
    var linkTotxtLoginPage = element(by.css('.btn.flat-dark.ng-scope'));
    var txtLoginField = element(by.css('.form-group.email>input'));
    var txtLogin ='ssls.automation+5@gmail.com';
    var txtPasswordField = element(by.css('.input-box.password>input'));
    var txtPassword ='123456';
    var btnLoginButton = element(by.css('.btn.block.primary'));
    var btnViewProfileButton = element(by.xpath(".//*[@id='ng-app']/body/div[1]/header/div[2]/div[2]/div[1]/div/ul/li[5]/a"));
    var txtSupport_Pin,txtSupport_Pin2;
    var NameS='.//div[1]/div[2]/span';
    var txtSupport_PinS='.//div[6]/div[2]/span';
    var btnSupport_PinUpdate=element(by.css('.btn.square.flat-dark.ng-pristine.ng-untouched.ng-valid.ng-not-empty'));
    var lnkMenu = element(by.css('.btn.btn-s.round.filled.dropdown-btn.ng-isolate-scope'));
    var lnkLogout = element(by.css('.drop-button'));

    it('Preconditions: 1. User has to be logged in.', function() {
        browser.get(startPage);
        expect(linkTotxtLoginPage.exists);
        linkTotxtLoginPage.click();
        browser.wait(EC.presenceOf(txtLoginField), 5000);
        txtLoginField.sendKeys(txtLogin);
        txtPasswordField.sendKeys(txtPassword);
        btnLoginButton.click();
        browser.wait(EC.presenceOf(lnkMenu), 5000);
    });

    it('1. Open Home page. Click on triangle near the "User@email" button.', function() {
        lnkMenu.click();
    });

    it('2. In drop-down menu select "View profile".', function() {
        btnViewProfileButton.click();
        var txtName=element(by.xpath(NameS));
        browser.wait(EC.elementToBeClickable(txtName), 5000);
        txtSupport_Pin=element(by.xpath(txtSupport_PinS)).getText();
    });

    it('3. Click "Update" button in “support pin field” to re-generation a new support pin.', function() {
        btnSupport_PinUpdate.click();
        browser.wait(EC.elementToBeClickable(txtSupport_Pin), 5000);
        txtSupport_Pin2=element(by.xpath(txtSupport_PinS)).getText();
        expect(txtSupport_Pin2!=txtSupport_Pin);
        lnkMenu.click();
        lnkLogout.click();
    });

});
