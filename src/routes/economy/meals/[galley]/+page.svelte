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

  $: data.galley === "total" && (editMode = false);
</script>

<form method='POST' use:enhance={() => async ({ result }) => await applyAction(result)}>
  <div class='flex justify-between w-full'>
    <h2 class='capitalize'>{data.galley}</h2>
    {#if editMode}
      <Button state='primary' on:click={() => editMode = false}>Stop editing</Button>
    {:else}
      <Button state='ghost' disabled='{data.galley === "total"}' on:click={() => editMode = true}>Edit quantity</Button>
    {/if}
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
          {#if data.galley !== 'total'}
          <div class='flex border border-base-200 bg-base-200 rounded-lg overflow-hidden h-full'>
            <div class='rounded-lg p-3 w-full flex flex-col h-full'>
              Total
            </div>
            <div>
              <div class='flex flex-col w-12 h-full justify-center items-center px-1'>
                <span class='text-center'>{$totalMealsPerService[data.galley][i]}</span>
              </div>
            </div>
          </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</form>
