import { browser } from '$app/environment';
import { derived, writable, get } from 'svelte/store';
import { MENU } from '$lib/constants';
import cloneDeep from 'lodash.clonedeep'
import { sumArrays } from '$hooks';

const initialMealQuantities = MENU.economy.food.map(service => service.options.map(_ => 0))

const quantityPerGalley = {
    FWD: cloneDeep(initialMealQuantities),
    MID: cloneDeep(initialMealQuantities),
    AFT: cloneDeep(initialMealQuantities),
}

const initialMeals = browser ? window.localStorage.getItem('economyMeals') ?? quantityPerGalley : quantityPerGalley;

const mealQuantity = writable(initialMeals);

mealQuantity.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('meals', value);
    }
});

const totalMealsPerService = derived(mealQuantity, $mealQuantity => {
    let result = { FWD: [], MID: [], AFT: [] }
    Object.entries($mealQuantity).map(([key, value]) => value.map(item => result[key].push(item.reduce((a,b) => a+b))))
    return result
});

const totalMealsPerOption = derived(mealQuantity, $mealQuantity => Object.values($mealQuantity).reduce(sumArrays));

// mealQuantity.update(val => ({ ...val, total: get(totalMealsPerOption)}))
  
// totalMealQuantity.subscribe((value) => {
//     if (browser) {
//         window.localStorage.setItem('totalMeals', value);
//     }
// });

export { mealQuantity, totalMealsPerService, totalMealsPerOption };
