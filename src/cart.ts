import Buyable from './buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  calculationSum(): number {
    let sum: number = 0;
    
    this._items.forEach(item => sum += item.price);
    return sum;
  }

  calculationDiscountedAmount(discount: number): number {
    let sum: number = this.calculationSum();
    discount = discount / 100;
    sum = sum * (1 - discount);
    return sum;
  }

  remove(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
  }
}
