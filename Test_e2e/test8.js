/**
 * Created by Юра on 3/25/2017.
 */

const EC = protractor.ExpectedConditions;

describe('8. Home page. Filters.', function() {

    var startPage = 'https://ssls.com';
    var linkToLoginPage = element(by.css('.btn.flat-dark.ng-scope'));
    var txtLoginField = element(by.css('.form-group.email>input'));
    var txtLogin ='ssls.automation+5@gmail.com';
    var txtPasswordField = element(by.css('.input-box.password>input'));
    var txtPassword ='123456';
    var btnLoginButton = element(by.css('.btn.block.primary'));
    var btnPersonal = element(by.xpath(".//*[@id='ng-app']/body/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/a"));
    var btnMultiDomain =element(by.xpath(".//*[@id='ng-app']/body/div[1]/div/div/div[2]/div[2]/div[2]/div[2]/a"));
    var btnCheapestFeatured =element(by.xpath(".//*[@id='ng-app']/body/div[1]/div/div/div[2]/div[3]/a"));
    var txtFilteredValues = '.ssl-name.ng-binding';
    var lnkMenu = element(by.css('.btn.btn-s.round.filled.dropdown-btn.ng-isolate-scope'));
    var lnkLogout = element(by.css('.drop-button'));

    browser.ignoreSynchronization = true;

    it('1. Open Home page.', function() {
        browser.get(startPage);
        expect(linkToLoginPage.exists);
        linkToLoginPage.click();
        browser.wait(EC.presenceOf(txtLoginField), 5000);
        txtLoginField.sendKeys(txtLogin);
        txtPasswordField.sendKeys(txtPassword);
        btnLoginButton.click();
    });

    it('2. Click on "Personal" filter button.', function() {
        //var txtFilteredValues = '.ssl-name.ng-binding';
        btnPersonal.click;
        var allElements = element.all(by.css(txtFilteredValues));
        allElements.each(function (item) {
            var tmpStrValue = item.getText();
            expect(tmpStrValue.includes('Personal'));
        });
        btnPersonal.click; //deselect.
    });

    it('3. Click on "Multi-Domain” filter button.', function() {
        btnMultiDomain.click;
        var allElements = element.all(by.css(txtFilteredValues));
        allElements.each(function (item) {
            var tmpStrValue = item.getText();
            expect(tmpStrValue.includes('Multi-Domain'));
        });
        btnMultiDomain.click;//deselect.
    });

    it('4. Click on “Cheapest/Featured” filter button.', function() {
        btnCheapestFeatured.click;
        var allElements = element.all(by.css(txtFilteredValues));
        allElements.each(function (item) {
            var tmpStrValue = item.getText();
            expect(tmpStrValue.includes('Multi-Domain'));
        });
        btnCheapestFeatured.click;//deselect.
        lnkMenu.click();
        lnkLogout.click();
    });


    browser.ignoreSynchronization = false;
});
