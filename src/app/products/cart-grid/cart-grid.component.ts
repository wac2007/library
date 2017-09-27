import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../shared/alert/alert.service';
import { CartItem } from '../shared/cart-service/cart-item';
import { CartService } from '../shared/cart-service/cart.service';


@Component({
  selector: 'app-cart-grid',
  templateUrl: './cart-grid.component.html',
  styleUrls: ['./cart-grid.component.css']
})
export class CartGridComponent implements OnInit {
  public cartItems: Array<CartItem> = [];

  constructor(
    public cartService: CartService,
    public alertService: AlertService
  ) { 
  }

  ngOnInit() {
    this.getCartItems();
  }
  
  getCartItems() {
    this.cartItems = this.cartService.getIterableItems();
  }

  getCountTotal() {
    return this.cartService.getCountTotal();
  }

  getPriceTotal() {
    return this.cartService.getPriceTotal();
  }

  
  deleteItem(cartItem: CartItem) {
    this.cartService.removeItem(cartItem.product.id);
    this.getCartItems();
    this.alertService.showAlert(`${cartItem.product.title} removido com sucesso!`)
  }

  askDelete(cartItem: CartItem) {
    this.alertService.confirm(`Deseja remover ${cartItem.product.title} do carrinho?`)
    .then(val => {
      if (val) {
        this.deleteItem(cartItem);
      }
    });
  }

  updateItem(cartItem: CartItem) {
    this.cartService.updateItem(cartItem);
  }

}
