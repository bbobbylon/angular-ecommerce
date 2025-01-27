import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
  //templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //inject our ProductService

  constructor(private productService: ProductService) { }
  products: Product[] = [];

  //similar to our @POSTConstruct
  ngOnInit(): void {
    this.listProducts();
  }
  listProducts() {
    //this method is invoked once you 'subscribe' to the observable
    this.productService.getProductList().subscribe(data => {
      //asign the results to the products array
      this.products = data;
    }); 
  }


}
