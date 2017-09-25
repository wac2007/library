export class Product {
  public id: number;
  public title: string;
  public imageUrl: string;
  public price: number;
  public description: string;

  constructor (id: number, title: string, imageUrl: string, price: number, description: string) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}