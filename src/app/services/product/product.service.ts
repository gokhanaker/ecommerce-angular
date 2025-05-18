import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../model/product/product.model';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandlerService } from '../error/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly basePath = 'https://fakestoreapi.com';

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.basePath}/products?sort=asc`)
      .pipe(
        retry(1),
        catchError((error) => this.errorHandler.handleError(error))
      );
  }

  getAllCategories(): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.basePath}/categories`)
      .pipe(
        retry(1),
        catchError((error) => this.errorHandler.handleError(error))
      );
  }

  getProductById(id: number): Observable<Product> {
    return this.http
      .get<Product>(`${this.basePath}/products/${id}`)
      .pipe(
        retry(1),
        catchError((error) => this.errorHandler.handleError(error))
      );
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.basePath}/products/category/${category}`)
      .pipe(
        retry(1),
        catchError((error) => this.errorHandler.handleError(error))
      );
  }
}
