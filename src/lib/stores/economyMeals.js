import { derived, writable } from 'svelte/store';
import { MENU } from '$lib/constants';
import { cloneDeep, getPercentage, sumArrays } from '$hooks';
import { fromLocalStorage, toLocalStorage } from '$hooks/localStorage';

const initialMealQuantities = MENU.economy.food.map(service => service.options.map(_ => 0))

const quantityPerGalley = {
    FWD: cloneDeep(initialMealQuantities),
    MID: cloneDeep(initialMealQuantities),
    AFT: cloneDeep(initialMealQuantities),
}

const mealQuantity = writable(fromLocalStorage('economyMeals', quantityPerGalley));
toLocalStorage(mealQuantity, 'economyMeals');

const totalMealsPerOption = derived(mealQuantity, $mealQuantity => Object.values($mealQuantity).reduce(sumArrays));
toLocalStorage(totalMealsPerOption, 'totalMealsPerOption');

const mealPercentages = derived(mealQuantity, $mealQuantity => getPercentage($mealQuantity));

const totalMealsPerService = derived(mealQuantity, $mealQuantity => {
    let result = { FWD: [], MID: [], AFT: [] }
    Object.entries($mealQuantity).map(([key, value]) => value.map(item => result[key].push(item.reduce((a,b) => a+b))))
    return result
});
toLocalStorage(totalMealsPerService, 'totalMealsPerService');

export { mealQuantity, totalMealsPerService, totalMealsPerOption, mealPercentages };
