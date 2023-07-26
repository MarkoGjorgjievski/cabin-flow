<script>
  import { SeatingMap, ZoneMealList, MealList, PageTitle } from "$organisms";

  export let data
</script>

<PageTitle title='Zones' />

<div class='flex gap-4 relative pb-4'>
  <div class='h-fit w-full'>
    <div class='w-full flex flex-col gap-4'>
      {#each Object.entries(data.positions) as [galley, position], i}
        {#each position.cabin as cabin, j}
          <ZoneMealList title={cabin[0]} upperCorner='{galley}'>
            <MealList services='{data.food}' position='{0}' galley='{galley}' />
          </ZoneMealList>
        {/each}
      {/each}
    </div>
  </div>

  <SeatingMap cabin='business' />

  <div class='h-fit w-full'>
    <div class='w-full flex flex-col gap-4'>
      {#each Object.entries(data.positions) as [galley, position], i}
        {#each position.cabin as cabin, j}
          <ZoneMealList title={cabin[1]} upperCorner='{galley}'>
            <MealList services='{data.food}' position='{1}' galley='{galley}' />
          </ZoneMealList>
        {/each}
      {/each}
    </div>
  </div>
</div>
