import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('library App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be in home page', () => {
    page.navigateHome();
    expect(page.getParagraphText()).toEqual('Livraria');
  });

  it('should be able to include items in cart', () => {
    element(by.css('lib-button')).click();
    expect('.ajs-message').toBeTruthy();
  });

  it('should update the item number in cart icon', () => {
    const regex = /\((\d+)\)/;
    const cart = element(by.css('header .cart-button'));
    cart.getText().then(str => {
      let rgxArray = str.match(regex);
      expect(rgxArray[1]).toEqual('1');
    });
  });

  it('should be in cart page', () => {
    page.navigateCart();
    expect(page.getParagraphText()).toEqual('Carrinho');
  });

  it('should show the item added previously', () => {
    const row = page.getCartRow();
    expect(row).toBeTruthy();
  });

  it('should show the correct price', () => {
    const price = element(by.css('app-cart-row .item-price'));
    const subTotal = element(by.css('app-cart-row .item-subtotal'));
    const totalPrice = element(by.css('app-cart-grid .price-total'));
    expect(price.getText()).toBe('R$10,00');
    expect(subTotal.getText()).toBe('R$10,00');
    expect(totalPrice.getText()).toBe('R$10,00');
  });

  it('should update the price on change quant', () => {
    const price = element(by.css('app-cart-row .item-price'));
    const subTotal = element(by.css('app-cart-row .item-subtotal'));
    const totalPrice = element(by.css('app-cart-grid .price-total'));

    const inputPrice = element(by.css('app-cart-row .item-quant input'));
    inputPrice.clear();
    inputPrice.sendKeys('2');

    expect(price.getText()).toBe('R$10,00');
    expect(subTotal.getText()).toBe('R$20,00');
    expect(totalPrice.getText()).toBe('R$20,00');
  });

  it('should remove the item in cart', () => {
    element(by.css('button.button-remove')).click();
    element(by.css('.ajs-dialog .ajs-buttons .ajs-ok')).click();
    
    expect(page.getCartRow().isPresent()).toBeFalsy();
  });

  it('cart must be empty', () => {
    const cartMessage = element(by.css('.empty-cart-message'));
    expect(cartMessage.getText()).toEqual('Nenhum item adicionado ao carrinho');
  });
});
