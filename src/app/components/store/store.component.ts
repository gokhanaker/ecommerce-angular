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
  public selectedCategory: string = 'Lord of the Rings Toys';

  public storeProducts: Product[] = [];
  public storeCategories: string[] = [];

  public displayedProducts: Product[] = [];

  // TODO Add pagination for displaying store products after fetching them from product repository
  constructor(
    private cart: Cart,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getApiProducts().subscribe((data: any) => {
      this.storeProducts = data.products;
      const productCategories = this.storeProducts.map(
        (product) => product.category
      );
      this.storeCategories = [...new Set(productCategories)];
    });
  }

  getProducts(category?: string) {
    this.displayedProducts = category
      ? this.storeProducts.filter((p) => p.category === category)
      : this.storeProducts;
  }

  getProduct(id: number): Product | undefined {
    return this.storeProducts.find((p) => p.id === id);
  }

  getCategories(): string[] {
    return this.storeCategories;
  }

  changeCategory(newCategory?: string) {
    this.getProducts(newCategory);
  }

  addSelectedProductToCart(product: Product) {
    this.cart.addCartItem(product);
    this.router.navigateByUrl('/cart');
  }
}
