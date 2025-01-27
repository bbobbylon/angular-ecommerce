import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }


  //returns an observable of Product array, we are going to map the data from spring Data Rest service to the product array
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

//this will unwrap the json data from spring Data Rest _embedded entry that comes back from the REST api, and will access the array of Products
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
