import { Component,Input } from '@angular/core';
 import {IProduct} from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct; //!mark says ignore the  variable initilaization and continue 
  cart : IProduct[] = [];
 
  getImageUrl(product : any){
    if(product !== null  && product.imageName !== '')
        return "/assets/images/robot-parts/"+ product.imageName ;
    return '';
  }

  getDiscountedClasses(product : IProduct){
    if(product.discount)
      return 'strikethrough';
    else
      return '';
  }

  addToCart(product : IProduct){
    this.cart.push(product);
    console.log(`the product ${product.name} added to cart`);
  }
 
}
