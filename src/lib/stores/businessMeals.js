import { derived, writable } from 'svelte/store';
import { MENU } from '$lib/constants';
import { cloneDeep, getPercentage, sumNestedArrays } from '$hooks';
import { fromLocalStorage, toLocalStorage } from '$hooks/localStorage';

const initialMealQuantities = MENU.business.food.map(service => service.categories.map(category => category.options.map(_ => 0)))

const quantityPerGalley = {
    FWD: cloneDeep(initialMealQuantities),
    MID: cloneDeep(initialMealQuantities),
    AFT: cloneDeep(initialMealQuantities),
}

const businessMealQuantity = writable(fromLocalStorage('businessMeals', quantityPerGalley));
toLocalStorage(businessMealQuantity, 'businessMeals');

const totalBusinessMealsPerOption = derived(businessMealQuantity, $businessMealQuantity => sumNestedArrays($businessMealQuantity));
toLocalStorage(totalBusinessMealsPerOption, 'totalBusinessMealsPerOption');

const businessMealPercentages = derived(businessMealQuantity, $businessMealQuantity => getPercentage($businessMealQuantity));

export { businessMealQuantity, totalBusinessMealsPerOption, businessMealPercentages };
