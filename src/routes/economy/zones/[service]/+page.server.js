import { getMeals, getPositions, getPositionsArray } from "$lib/server/economy/database";

export const load = async ({ params }) => {
  return {
    service: params.service,
    meals: await getMeals(),
    positions: await getPositions(),
    positionsArray: await getPositionsArray(),
    
  };
};
