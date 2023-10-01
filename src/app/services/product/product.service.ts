import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../model/product/product.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private basePath = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product> {
    return this.http
      .get<Product>(this.basePath + '/products?sort=asc')
      .pipe(retry(1), catchError(this.handleError));
  }

  getAllCategories(): Observable<string> {
    return this.http
      .get<string>(this.basePath + '/categories')
      .pipe(retry(1), catchError(this.handleError));
  }

  getProductById(id: number): Observable<Product> {
    return this.http
      .get<Product>(this.basePath + '/products/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  getProductsByCategory(category: string): Observable<Product> {
    return this.http
      .get<Product>(this.basePath + '/products/category/' + category)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
