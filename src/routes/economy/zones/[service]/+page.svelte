<script>
  import { SeatingMap, ZoneMealList } from "$organisms";
  import { OptionLabel } from "$molecules";
import { useConfig } from "$hooks";
import { getContext } from "svelte";

  export let data

  const config = getContext('config');
  const { load, zones, passengerList, splitByQuantity } = useConfig(config)

  $: console.log(load, zones, passengerList, splitByQuantity)
</script>

<div class='flex gap-4 relative pb-4'>
  <div class='h-fit w-full sticky top-4'>
    <div class='w-full flex flex-col gap-4'>
      {#each Object.entries(data.positions) as [galley, position], i}
        {#each position.cabin as cabin, j}
          <ZoneMealList title={cabin[0]} upperCorner='{galley}'>
            {#each data.food as foodService}
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

  <SeatingMap cabin='economy' />

  <div class='h-fit w-full sticky top-4'>
    <div class='w-full flex flex-col gap-4'>
      {#each Object.entries(data.positions) as [galley, position], i}
        {#each position.cabin as cabin, j}
          <ZoneMealList title={cabin[1]} upperCorner='{galley}'>
            {#each data.food as foodService}
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
