// export const ssr = false

import { getMeals, updateCounter } from "$lib/server/database";

let galley

export const load = async ({ params }) => {
  galley = params.galley
  return {
    galley: params.galley,
    food: await getMeals(),
  };
};

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    return await updateCounter(galley, formData)
  },
};
