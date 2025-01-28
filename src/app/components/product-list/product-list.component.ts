import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  //templateUrl: './product-list-table.component.html',
  //templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //inject our ProductService

  constructor(private productService: ProductService) { }
  products: Product[] = [];

  //similar to our @POSTConstruct
  ngOnInit(): void {
    this.listProducts();
  }
  listProducts() {
    //this method is invoked once you 'subscribe' to the observable, and it populates the products array with the data from the sql database
    this.productService.getProductList().subscribe(data => {
      //asign the results to the products array
      this.products = data;
      //some logs to see the data clearly in the console
      //to see each book in the array
      this.products.forEach(book => {
        console.log(book);
      });
      //to see each book as an array
      console.log(this.products);
      //to see the first book's cost
      console.log(this.products[0].unitPrice);
      //to see all of the books as an array
      console.log(data);
    }); 
  }


}
