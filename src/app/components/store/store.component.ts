import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '@models/cart/cart.model';
import { ProductService } from '@services/product/product.service';
import { Product } from '@models/product/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  selectedCategory: string = '';
  storeProducts: Product[] = [];
  storeCategories: string[] = [];
  displayedProducts: Product[] = [];

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
    this.router.navigate(['/cart']);
  }

  generateStarsArray(rating: number): number[] {
    return new Array(Math.trunc(rating));
  }

  truncateProductTitle(title: string): string {
    return title.length > 30 ? title.slice(0, 30) + '...' : title;
  }
}
