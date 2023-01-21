import { Inject, Injectable } from "@angular/core";

@Injectable()
export class Order {
    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public country: string;
    public shipped: boolean;

    constructor(
        @Inject(Number) id: number,
        @Inject(String) name: string,
        @Inject(String) address: string,
        @Inject(String) city: string,
        @Inject(String) country: string,
        @Inject(String) shipped: boolean
    ) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.country = country;
        this.shipped = shipped;
    }
}