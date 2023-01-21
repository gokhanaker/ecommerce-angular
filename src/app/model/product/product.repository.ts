import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "../static.datasource";

@Injectable({
    providedIn: 'root'
})
export class ProductRepository {
    public products: Product[] = [];
    public categories: string[] = [];

    constructor(dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = [...new Set(data.map(p => p.category))]; // Removes duplicated categories
        });
    }

    getProducts(category: string): Product[] {
        return this.products.filter(p => p.category === category);
    }

    getProduct(id: number): Product | undefined  {
        return this.products.find(p => p.id === id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}