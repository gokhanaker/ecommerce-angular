import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart/cart.model';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../model/product/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  public selectedCategory: string = '';
  public storeProducts: Product[] = [];
  public storeCategories: string[] = [];
  public displayedProducts: Product[] = [];

  constructor(
    private cart: Cart,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.storeProducts = data;
      console.log(this.storeProducts);
      const productCategories = this.storeProducts.map(
        (product) => product.category
      );
      this.storeCategories = [...new Set(productCategories)];
      this.displayedProducts = this.storeProducts;
    });
  }

  getProductsByCategory(category?: string) {
    this.displayedProducts = category
      ? this.storeProducts.filter((p) => p.category === category)
      : this.storeProducts;
  }

  getProductById(id: number): Product | undefined {
    return this.storeProducts.find((p) => p.id === id);
  }

  getProductByName(title: string) {
    this.displayedProducts = this.storeProducts.find((p) => p.title === title)
      ? this.storeProducts.filter((p) => p.title === title)
      : [];
  }

  getCategories(): string[] {
    return this.storeCategories;
  }

  changeCategory(newCategory?: string) {
    if (newCategory) {
      this.selectedCategory = newCategory;
      this.getProductsByCategory(newCategory);
    } else {
      this.displayedProducts = this.storeProducts;
    }
  }

  addSelectedProductToCart(product: Product) {
    this.cart.addCartItem(product);
    this.router.navigateByUrl('/cart');
  }
}
