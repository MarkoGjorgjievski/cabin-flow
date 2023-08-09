import { getMeals, getPositions, getPositionsArray, getServiceAcronyms } from "$lib/server/economy/database";

export const load = async ({ params }) => {
  return {
    service: params.service,
    meals: await getMeals(),
    positions: await getPositions(),
    positionsArray: await getPositionsArray(),
    serviceAcronyms: getServiceAcronyms()
  };
};
