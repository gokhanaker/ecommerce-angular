import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart/cart.model';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../model/product/product.model';
import { ProductRepository } from '../../model/product/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  public selectedCategory: string = 'Lord of the Rings Toys';

  public storeProducts: Product[] = [];
  public storeCategories: string[] = [];

  // TODO Add pagination for displaying store products after fetching them from product repository
  constructor(
    private repository: ProductRepository,
    private cart: Cart,
    private router: Router,
    private productService: ProductService
  ) {
    this.storeProducts = this.getProducts();
    this.storeCategories = this.getCategories();
  }

  ngOnInit() {
    this.storeProducts = this.getProducts();
    this.storeCategories = this.getCategories();
    // this.storeProducts = this.productService.getProducts(this.selectedCategory);
    // console.log('product list fetched is ', this.storeProducts);
  }

  getProducts() {
    //this.storeProducts = this.productService.getProducts(this.selectedCategory);
    this.storeProducts = this.repository.getProducts(this.selectedCategory);
    return this.storeProducts;
  }

  getCategories(): string[] {
    this.storeCategories = this.repository.getCategories();
    return this.storeCategories;
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory ? newCategory : 'Category 1';
    this.getProducts();
  }

  addSelectedProductToCart(product: Product) {
    this.cart.addCartItem(product);
    this.router.navigateByUrl('/cart');
  }
}
