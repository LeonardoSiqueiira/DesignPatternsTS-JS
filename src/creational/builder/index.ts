/* eslint-disable prettier/prettier */
import { MainDishBuilder } from './classes/dish-main-builder';

const maindishbuilder = new MainDishBuilder ()
maindishbuilder.makeMeal().makeDessert().makeWatter()

console.log(maindishbuilder.geatMeal().getPrice())