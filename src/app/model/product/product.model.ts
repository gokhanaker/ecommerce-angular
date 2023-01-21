import { Inject, Injectable } from "@angular/core";

@Injectable()
export class Product {
    public id: number;
    public name: string;
    public category: string;
    public description: string;
    public price: number;

    constructor(
        @Inject(Number) id: number,
        @Inject(String) name: string,
        @Inject(String) category: string,
        @Inject(String) description: string,
        @Inject(Number) price: number
    ){
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
}
