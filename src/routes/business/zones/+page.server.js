import { getMeals, getPositions } from "$lib/server/business/database";

export const load = async () => {
  return {
    food: getMeals(),
    positions: getPositions()
  };
};
