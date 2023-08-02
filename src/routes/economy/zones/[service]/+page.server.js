import { getMeals, getPositions } from "$lib/server/economy/database";

export const load = async ({ params }) => {
  return {
    service: params.service,
    food: getMeals(),
    positions: getPositions()
  };
};
