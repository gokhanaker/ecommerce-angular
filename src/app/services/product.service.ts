import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../model/product/product.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productServiceUrl = 'http://localhost:3000/products';
  private products: Product[] = [];

  constructor(private httpClient: HttpClient) {
    this.fetchProducts();
  }

  fetchProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<any>(this.productServiceUrl).subscribe({
        next: (data) => {
          this.products = data.products;
          console.log('products ', this.products);
          resolve(this.products);
        },
        error: (err) => {
          console.log('Error! While fetching products: ', err);
          reject(err);
        }
      });
    });
  }

  getProducts(category: string): Product[] {
    return this.products.filter((p) => p.category === category);
  }
}

/*
  fetchProducts(): Promise<Product[]> {
    console.log("Fetching product list");
    return new Promise((resolve, reject) => {
      this.httpClient.get<any>(this.productServiceUrl).subscribe({
        next: (data) => {
          this.products = data.products;
          console.log("data ", data);
          resolve(data);
        },
        error: (err) => { 
          console.log("Error! While fetching products: ", err);
          reject(err);
        },
      });
    });
  }
*/
