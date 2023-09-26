import Buyable from './buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sum(): number {
    let sum: number = 0;
    
    this._items.forEach(item => sum += item.price);
    return sum;
  }

  discountedAmount(discount: number): number {
    let sum: number = 0;

    this._items.forEach(item => sum += item.price);

    discount = discount / 100;
    sum = sum * (1 - discount);
    return sum;
  }

  remove(id: number): void {
    this._items.forEach((item, index) => {
      if (item.id === id) {
        this._items.splice(index, 1);
      }
    });
  }
}
