import { MENU } from "$lib/constants";
import { CONFIGURATION } from "../../constants";

const meals = [...MENU.business.food];
const positions = { ...CONFIGURATION.business.positions }

export const getMeals = async () => {
  return meals
}

export const getPositions = async () => {
  return positions
}

export const updateCounter = async (galley, data) => {
  meals.map(service => service.categories.map(cat => cat.options.map(option => {
    option.quantity[galley] = +data.get(option.id);
    option.quantity.total = option.quantity.FWD + option.quantity.MID + option.quantity.AFT
  })))
}
