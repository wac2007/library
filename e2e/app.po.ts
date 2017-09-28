import { browser, by, element } from 'protractor';

export class AppPage {
  getCartRow() {
    return element(by.css('app-cart-row'));
  }
  
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getProductPrice() {
    return element(by.css('app-root h1')).getText();
  }
  
  navigateHome() {
    return browser.get('/');
  }

  navigateCart() {
    return browser.get('/cart');
  }
}
