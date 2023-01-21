import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product/product.model';
import { ProductRepository } from '../../model/product/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  public selectedCategory: string = 'Category 1';
  public productsPerPage: number = 4;
  public selectedPage: number = 1;

  public storeProducts: Product[] = [];
  public storeCategories: String[] = [];

  constructor(public repository: ProductRepository) {
    this.storeProducts = this.getProducts();
    console.log("check ", this.storeProducts);
  }

  getProducts(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  getCategories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    if (newCategory)
      this.selectedCategory = newCategory;
    else
      this.selectedCategory = 'Category 1';
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
}
