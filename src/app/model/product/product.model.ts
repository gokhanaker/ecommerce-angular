import { Inject, Injectable } from '@angular/core';

@Injectable()
export class Product {
  public id: number;
  public title: string;
  public price: number;
  public description: string;
  public category: string;
  public image: string;
  public rating: {
    rate: number;
    count: number;
  }

  constructor(
    @Inject(Number) id: number,
    @Inject(String) title: string,
    @Inject(Number) price: number,
    @Inject(String) description: string,
    @Inject(String) category: string,
    @Inject(String) image: string,
    @Inject(Object) rating: {
      rate: number;
      count: number;
    }
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }
}
