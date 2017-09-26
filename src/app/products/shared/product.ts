export class Product {
  constructor (
    public id: number,
    public title: string,
    public imageUrl: string,
    public price: number,
    public description: string
  ) {}
}