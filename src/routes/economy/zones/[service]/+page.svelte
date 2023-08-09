<script>
  import { SeatingMap2, ZoneMealList } from "$organisms";
  import { OptionLabel } from "$molecules";
  import { passengerLoad, passengerGrid } from "$lib/stores/economy.js";
  import { intialMealSplit, mealSplit, splitArrayDataByMaxLength, zoneConfig } from "$hooks";
  import { mealQuantity, totalMealsPerOption, mealPercentages } from "$lib/stores/economyMeals.js";

  export let data

  const split = splitArrayDataByMaxLength($passengerGrid);
  const zoneSplit = zoneConfig(split, data.positions)

  $: meal = data.meals.find(meal => meal.acronym === data.service)

  let serviceIndex = 0
  $: data.service, data.serviceAcronyms, serviceIndex = data.serviceAcronyms.findIndex(acronym => acronym === data.service)

  let mealSplitting = mealSplit($mealQuantity, zoneSplit, serviceIndex)

  $: console.log($passengerLoad)

  $: data.service, serviceIndex, mealSplit($mealQuantity, zoneSplit, serviceIndex)
</script>

<div class='flex gap-4 relative pb-4'>
  <div class='h-fit w-full sticky top-4'>
    <div class='w-full flex flex-col gap-4'>
      {#each Object.entries(data.positions) as [galley, position], i}
        {#each position.cabin as cabin, j}
          <ZoneMealList title={cabin[0]} upperCorner='{galley}'>
            {#each data.meals as foodService}
              {#if foodService.acronym === data.service}
                <h6 class='text-xs uppercase pt-2 pl-1'>{foodService.label}</h6>
                {#each foodService.options as option, i}
                  <OptionLabel {option} quantity='{30}' showQuantity />
                {/each}
              {/if}
            {/each}
          </ZoneMealList>
        {/each}
      {/each}
    </div>
  </div>

  <SeatingMap2 cabin='economy' meal={meal} zones={split} />

  <div class='h-fit w-full sticky top-4'>
    <div class='w-full flex flex-col gap-4'>
      {#each Object.entries(data.positions) as [galley, position], i}
        {#each position.cabin as cabin, j}
          <ZoneMealList title={cabin[1]} upperCorner='{galley}'>
            {#each data.meals as foodService}
              {#if foodService.acronym === data.service}
                <h6 class='text-xs uppercase pt-2 pl-1'>{foodService.label}</h6>
                {#each foodService.options as option, i}
                  <OptionLabel {option} quantity='{30}' showQuantity />
                {/each}
              {/if}
            {/each}
          </ZoneMealList>
        {/each}
      {/each}
    </div>
  </div>
</div>
