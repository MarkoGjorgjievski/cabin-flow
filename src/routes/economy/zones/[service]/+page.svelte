<script>
  import { SeatingMap2, ZoneMealList } from "$organisms";
  import { OptionLabel } from "$molecules";
  import { passengerLoad, passengerGrid } from "$lib/stores/economy.js";
  import { mealSplit, splitArrayDataByMaxLength, zoneConfig } from "$hooks";
  import { mealQuantity } from "$lib/stores/economyMeals.js";

  export let data

  const split = splitArrayDataByMaxLength($passengerGrid);
  const zoneSplit = zoneConfig(split, data.positions)

  $: meal = data.meals.find(meal => meal.acronym === data.service)

  let serviceIndex = 0
  let mealSplitting = mealSplit($mealQuantity, zoneSplit, serviceIndex)

  $: data.service, serviceIndex, mealSplit($mealQuantity, zoneSplit, serviceIndex)
  $: data.service, data.serviceAcronyms, serviceIndex = data.serviceAcronyms.findIndex(acronym => acronym === data.service)
</script>

<div class='flex gap-4 relative pb-4'>
  <div class='h-fit w-full sticky top-4'>
    <div class='w-full flex flex-col gap-4'>
        {#each mealSplitting as zone, i}
          <ZoneMealList 
            title={zone[0].position} 
            upperCorner='{zone[0].galley}' 
            border={i % 2 === 0 ? 'border-info/40' : 'border-secondary/40'}
            specialMeals={zone[0].specialMeals}
          >
            {#each data.meals as foodService}
              {#if foodService.acronym === data.service}
                <h6 class='text-xs uppercase pt-2 pl-1'>{foodService.label}</h6>
                {#each foodService.options as option, j}
                  <OptionLabel {option} quantity='{zone[0].mealSplit[j]}' showQuantity />
                {/each}
              {/if}
            {/each}
          </ZoneMealList>
        {/each}
    </div>
  </div>

  <SeatingMap2 cabin='economy' meal={meal} zones={split} />

  <div class='h-fit w-full sticky top-4'>
    <div class='w-full flex flex-col gap-4'> 
      {#each mealSplitting as zone, i}
          <ZoneMealList
            title={zone[1].position} 
            upperCorner='{zone[1].galley}' 
            border={i % 2 === 0 ? 'border-info/40' : 'border-secondary/40'}
            specialMeals={zone[1].specialMeals}
           >
            {#each data.meals as foodService}
              {#if foodService.acronym === data.service}
                <h6 class='text-xs uppercase pt-2 pl-1'>{foodService.label}</h6>
                {#each foodService.options as option, j}
                  <OptionLabel {option} quantity='{zone[1].mealSplit[j]}' showQuantity />
                {/each}
              {/if}
            {/each}
          </ZoneMealList>
        {/each}
    </div>
  </div>
</div>
