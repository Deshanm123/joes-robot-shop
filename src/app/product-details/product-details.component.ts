import { Component,Input,EventEmitter, Output } from '@angular/core';
 import {IProduct} from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {
  @Input() product!: IProduct; //!mark says ignore the  variable initilaization and continue 
  @Output() CartClick = new EventEmitter<any>();
 
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

  AddToCartClicked(product : IProduct){
    this.CartClick.emit()
  //   this.cart.push(product);
  //   console.log(`the product ${product.name} added to cart`);
   }
 
}
