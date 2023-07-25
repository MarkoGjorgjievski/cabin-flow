<script>
  import { PageTitle } from "$organisms";
  import { SeatingMap, ZoneMealList, MealList } from "$organisms";

  export let data

  const cabin = 'business'
  const { food, positions } = data
</script>

<PageTitle title='Zones' />

<div class='flex gap-4 relative pb-4'>
  <!--{cabin === "economy" && "sticky top-4"}-->
  <div class='h-fit w-full '>
    <div class='w-full flex flex-col gap-4'>

      {#each Object.entries(positions) as [galley, position], i}
        {#each position.cabin as cabin, j}
          <ZoneMealList title={cabin[0]} upperCorner='{galley}'>
            <MealList services='{food}' position='{0}' galley='{galley}' />
          </ZoneMealList>
        {/each}
      {/each}
    </div>
  </div>

  <SeatingMap {cabin} />

  <!--{cabin === "economy" && "sticky top-4"}-->
  <div class='h-fit w-full'>
    <div class='w-full flex flex-col gap-4'>
      {#each Object.entries(positions) as [galley, position], i}
        {#each position.cabin as cabin, j}
          <ZoneMealList title={cabin[1]} upperCorner='{galley}'>
            <MealList services='{food}' position='{1}' galley='{galley}' />
          </ZoneMealList>
        {/each}
      {/each}
    </div>
  </div>
</div>
