<script>
  import { ZoneMealList, SeatingMap } from "$organisms";
  import MealList from "../organisms/lists/MealList.svelte";

  export let cabin;
  export let serviceZones = [];
  export let food = [];
</script>

<div class='flex gap-4 relative pb-4'>
  <!--{cabin === "economy" && "sticky top-4"}-->
  <div class='h-fit w-full '>
    <div class='w-full flex flex-col gap-4'>
      {#each serviceZones as position, i}
        <ZoneMealList title={position[0]}>
          <MealList services='{food}' position='{0}' />
        </ZoneMealList>
      {/each}
    </div>
  </div>

  <SeatingMap {cabin} />

  <!--{cabin === "economy" && "sticky top-4"}-->
  <div class='h-fit w-full'>
    <div class='w-full flex flex-col gap-4'>
      {#each serviceZones as position, i}
        <ZoneMealList title={position[1]}>
          <MealList services='{food}' position='{1}' />
        </ZoneMealList>
      {/each}
    </div>
  </div>
</div>
