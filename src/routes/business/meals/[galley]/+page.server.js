import { getMeals, updateCounter } from "$lib/server/business/database";

export const load = async ({ params }) => {
  return {
    galley: params.galley,
    food: await getMeals(),
  };
};

export const actions = {
  default: async ({ request, url }) => {
    const galley = url.pathname.split('/').at(-1)

    const formData = await request.formData();
    return await updateCounter(galley, formData)
  },
};
