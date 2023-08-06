import { getMeals, updateCounter } from "$lib/server/economy/database";

export const load = async ({ params }) => {
  return {
    galley: params.galley,
    meals: await getMeals(),
  };
};

export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();
    return await updateCounter(params.galley, formData);
  },
};
