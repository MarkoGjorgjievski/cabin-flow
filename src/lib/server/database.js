import { MENU } from "$lib/constants";

const meals = [...MENU.business.food];

export const getMeals = async () => {
  return meals
}

export const updateCounter = async (galley, data) => {
  meals.map(service => service.categories.map(cat => cat.options.map(option => option.quantity[galley] = +data.get(option.id))))
}
