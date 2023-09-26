import Buyable from './buyable';

export default class Movie implements Buyable {
  constructor (
    readonly id: number,
    readonly name: string,
    readonly nameEn: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string,
    readonly time: string,
    readonly price: number,
  ) {
    this.id = id;
    this.name = name;
    this.nameEn = nameEn;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.time = time;
    this.price = price;
  }
}
