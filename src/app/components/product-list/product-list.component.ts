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
    this.listProductsFromSpecificPage();
  }

  listProductsFromSpecificPage() {  
    this.productService.getProductListFromSpecificPage(1, 5).subscribe(data => {
      this.products = data;
      console.log('Product List:', this.products);
      this.products.forEach(book => {
        console.log(book);
      });
      console.log(this.products[0].unitPrice);
      console.log(data);
    });
  }

  listProducts() {
    //this method is invoked once you 'subscribe' to the observable, and it populates the products array with the data from the sql database
    this.productService.getProductList().subscribe(data => {
      //asign the results to the products array
      this.products = data;
       console.log('Product List:', this.products); // Log the product list as an array
      //some logs to see the data clearly in the console
      //to see each book in the array
      this.products.forEach(book => {
        console.log(book);
      });

      //to see the first book's cost
      console.log(this.products[0].unitPrice);
      //to see all of the books as an array
      console.log(data);
    }); 
  }


}
