<script>
  import { page } from "$app/stores";
  import { Button, Toggle } from "$atoms";
  import { enhance, applyAction } from '$app/forms';
  import { MealListItem } from "$organisms";
  import { mealQuantity, totalMealsPerService, totalMealsPerOption } from "$lib/stores/economyMeals.js";

  export let data;

  let showDescription = false;
  let editMode = false;

  const updateCount = (count, galley, i, j) => {
    if (galley !== 'total') {
      $mealQuantity[galley][i][j] = count
    }
  }
</script>

<form method='POST' use:enhance={() => async ({ result }) => await applyAction(result)}>
  <div class='flex justify-between w-full'>
    <h2 class='capitalize'>{data.galley}</h2>
    <div class='flex justify-end mt-1'>
      <Toggle bind:checked='{editMode}' labelOff='Edit mode' disabled={data.galley === 'total'} />
    </div>
  </div>

  <div class='flex justify-end mt-1'>
    <Toggle bind:checked='{showDescription}' labelOff='Meal description' />
  </div>

  <div class='flex justify-between gap-4 py-4 h-fit'>
    {#each data.meals as service, i}
      <div class='flex flex-col gap-4 w-full'>
        <h6 class='text-xs uppercase pl-1'>{service.label}</h6>
        <div class='w-full flex flex-col gap-4'>
          {#each service.options as option, j}
            <MealListItem {option} {showDescription} range='{!!editMode}' {editMode}
                          count='{data.galley === 'total' ? $totalMealsPerOption[i][j] : $mealQuantity[data.galley][i][j]}' {i} {j} {updateCount} galley={data.galley} />
          {/each}
          {#if data.galley !== 'total'}<pre>total {$totalMealsPerService[data.galley][i]}</pre>{/if}
        </div>
      </div>
    {/each}
  </div>
</form>
