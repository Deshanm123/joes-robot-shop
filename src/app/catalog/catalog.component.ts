import { Component,inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

//https://www.geeksforgeeks.org/constructor-vs-ngoninit-in-angular/


export class CatalogComponent {
    products : any;
    filterType : string =  '';

    //injecting the cart Service using DI
    // instead of this you can do the constructor injection which makes easier for testing 
   // private cartSvc : CartService = inject(CartService)


   //following is the constructor injection
    constructor(
      private cartSvc : CartService,
      private productSvc : ProductService,
      private router : Router,
      private route : ActivatedRoute
     //The constructor is a feature JS, and it is used to initialize the class and its properties.
      // It is primarily used for dependency injection.
    ){
      //   this.products =[
      //     {
      //      id : 1,
      //      description:"A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
      //      name:"Large Cyclops",
      //      imageName:"head-big-eye.png",
      //      category : "Heads",
      //      price: 945.3,
      //      discount:0.2
      //   },
      //   {
      //     id: 17,
      //     description: "A spring base - great for reaching high places.",
      //     name: "Spring Base",
      //     imageName: "base-spring.png",
      //     category: "Bases",
      //     price: 1190.5,
      //     discount: 0,
      //   },     
      //   {
      //     id: 18,
      //     description:
      //       "An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.",
      //     name: "Triple Wheeled Base",
      //     imageName: "base-triple-wheel.png",
      //     category: "Bases",
      //     price: 700.5,
      //     discount: 0,
      //   }
      // ];
    }

    //ngOnInit is a lifecycle hook provided by Angular.
    // It is intended for component initialization that requires Angular bindings to be set up.
    ngOnInit(){
      this.productSvc.getProducts().subscribe(products => {
        this.products = products;
      })

      this.route.params.subscribe((params)=>{
        this.filterType = params['filterType'] ?? '';
      })

    }

    getFilteredProducts(){
      let filteredProducts;
      if(this.filterType === ''){
        filteredProducts = this.products;
      }else{
        filteredProducts = this.products?.filter((product : any) => product.category == this.filterType);
      }
      return filteredProducts;
    }

    AddToCart(product:any){
        this.cartSvc.AddItem(product);
        this.router.navigate(['/cart']);
    }
   
}
