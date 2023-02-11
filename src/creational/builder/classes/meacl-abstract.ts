/* eslint-disable prettier/prettier */
import { MealCompositeProtocol } from '../interfaces/meal-composite-prot';

export abstract class  AbstracMeal implements MealCompositeProtocol {
  constructor(private name: string, private price: number) {}
  getPrice(): number {
    return this.price;
  }
}
