export class Product {
  public id: Number;
  public title: string;
  public imageUrl: string;
  public price: Number;
  public description: string;

  constructor (id: Number, title: string, imageUrl: string, price: Number, description: string) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}