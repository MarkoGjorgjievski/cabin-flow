<script>
  import { SeatingMap2, ZoneMealList } from "$organisms";
  import { OptionLabel } from "$molecules";
  import { passengerLoad, passengerGrid, mainServiceSplit, minorServiceSplit } from "$lib/stores/economy.js";
  import { mealSplit, zoneConfig, rearrangeZones, splitArray } from "$hooks";
  import { mealQuantity } from "$lib/stores/economyMeals.js";

  export let data

  let serviceIndex = 0
  let zoneSplit = zoneConfig($mainServiceSplit, data.positions)
  let mealSplitting = mealSplit($mealQuantity, zoneSplit, serviceIndex)
  let meal = data.meals.find(meal => meal.acronym === data.service)

  const handleZoneShift = (subZone, shiftTo) => {
    if (data.service === 'WS') {
      $minorServiceSplit = rearrangeZones($minorServiceSplit, subZone, shiftTo)
    } else {
      $mainServiceSplit = rearrangeZones($mainServiceSplit, subZone, shiftTo)
    }
  }

  $: {
    zoneSplit = zoneConfig($mainServiceSplit, data.positions)
    mealSplitting = mealSplit($mealQuantity, zoneSplit, serviceIndex)
    meal = data.meals.find(meal => meal.acronym === data.service)
    serviceIndex = data.serviceAcronyms.findIndex(acr => acr === data.service)
    if (data.service === 'WS') {
      zoneSplit = zoneConfig($minorServiceSplit, data.positions)
      mealSplitting = mealSplit($mealQuantity, zoneSplit, serviceIndex, Math.round($passengerLoad/4))
    }
  }
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
            totalMeals={zone[0].totalMeals}
            totalOccupants={zone[0].totalOccupants}
          >
            {#each data.meals as foodService}
              {#if foodService.acronym === data.service}
                <h6 class='text-xs uppercase pt-2 pl-1 opacity-60'>{foodService.label}</h6>
                {#each foodService.options as option, j}
                  <OptionLabel {option} quantity='{zone[0].mealSplit[j]}' showQuantity />
                {/each}
              {/if}
            {/each}
          </ZoneMealList>
        {/each}
    </div>
  </div>

  <SeatingMap2 cabin='economy' meal={meal} zones={data.service === 'WS' ? $minorServiceSplit : $mainServiceSplit} handleZoneShift={handleZoneShift} />

  <div class='h-fit w-full sticky top-4'>
    <div class='w-full flex flex-col gap-4'> 
      {#each mealSplitting as zone, i}
          <ZoneMealList
            title={zone[1].position} 
            upperCorner='{zone[1].galley}' 
            border={i % 2 === 0 ? 'border-info/40' : 'border-secondary/40'}
            specialMeals={zone[1].specialMeals}
            totalMeals={zone[1].totalMeals}
            totalOccupants={zone[1].totalOccupants}
           >
            {#each data.meals as foodService}
              {#if foodService.acronym === data.service}
                <h6 class='text-xs uppercase pt-2 pl-1 opacity-60'>{foodService.label}</h6>
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
