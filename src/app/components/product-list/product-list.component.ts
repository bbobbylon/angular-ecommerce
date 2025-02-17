import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  products: Product[] = [];
  currentCategoryId: number | undefined;
    //inject our ProductService via constructor
  constructor(private productService: ProductService, private route: ActivatedRoute) { }



  //similar to our @POSTConstruct
  ngOnInit(): void {
    //subscribe to the paramMap on the given route
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
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

    //check if 'id' parameter is available via the activated route 'route'
    // the state of the route at this given moment in time 'snapshot', and the paramMap which is a map of all the route parameters
    // then we read the route parameter 'id'
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      //get the 'id' param string then convert the 'id' string to a number using the '+' symbol, and adding a ! to tell the compiler that it is not null
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      //if there is no category id available, then set the default category id to 1
      this.currentCategoryId = 1;
    }
        //this method is invoked once you 'subscribe' to the observable, and it populates the products array with the data from the sql database
    this.productService.getProductList(this.currentCategoryId).subscribe(data => {
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
