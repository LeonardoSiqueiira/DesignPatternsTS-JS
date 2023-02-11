/* eslint-disable prettier/prettier */
import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MeakBox } from './box';
import { Beans, Dessert, Meat, Rice, Watter } from './meals-world';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MeakBox = new MeakBox();

  reset(): this {
    this._meal = new MeakBox()
    return this
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 6);
    const meat = new Meat('Picanha', 50);
    this._meal.add(rice, beans, meat)
    return this
  }
  makeWatter(): this {
    const beverage = new Watter('Beija-Flor', 5)
    this._meal.add(beverage)
    return this
  }
  makeDessert(): this {
    const dessert = new Dessert('Pudim', 2)
    this._meal.add(dessert)
    return this
  }
  geatMeal(): MeakBox {
    
    return this._meal
  }
}
