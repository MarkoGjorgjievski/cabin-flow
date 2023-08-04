import { getArrayOfPositions } from "$hooks";
import { MENU } from "$lib/constants";
import { CONFIGURATION } from "../../constants";

const meals = [...MENU.economy.food];
const positions = { ...CONFIGURATION.economy.positions }

export const getMeals = async () => {
  return meals
}

export const getPositions = async () => {
  return positions
}

export const getPositionsArray = async() => {
  return getArrayOfPositions(positions)
}

export const updateCounter = async (galley, data) => {
   meals.map(service => service.options.map(option => {
     option.quantity[galley] = +data.get(option.id)
     option.quantity.total = option.quantity.FWD + option.quantity.MID + option.quantity.AFT
   }))
}
