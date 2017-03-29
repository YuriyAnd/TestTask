/**
 * Created by Юра on 3/25/2017.
 */
var logoutLinkMenu = element(by.css('.btn.btn-s.round.filled.dropdown-btn.ng-isolate-scope'));
var logoutLink = element(by.css('.drop-button'));
exports
export class MainPage1{
    public logout(){
        logoutLinkMenu.click();
        logoutLink.click();
    }
}