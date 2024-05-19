import {Component, OnInit} from '@angular/core';
import {IProduct} from '../catalog/product.model';
import {CartService} from './cart.service';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent  implements OnInit{

  private cart : IProduct[] = [];
  constructor(private cartService : CartService) {}

  ngOnInit(){
    this.cartService.GetCart().subscribe({
       next : (cart) => this.cart = cart
    });
  }

  get CartItems(){
    return this.cart;
  }


  //This is an accessor method. In Angular, accessor methods allow you to define a getter (or setter) for a property. This method can be used as a property, enabling this.CartTotal to be used without invoking it as a method (i.e., without parentheses).
  get CartTotal(){
    return this.cart.reduce((prev,next)=>{
        let discount = next.discount && next.discount > 0 ?  1 - next.discount : 1 ;
        return prev + next.price * discount
    },0);
  }

  removeFromCart(product : IProduct){
    this.cartService.RemoveItem(product);
  }


  getImageUrl(product : IProduct){
    if(!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}

