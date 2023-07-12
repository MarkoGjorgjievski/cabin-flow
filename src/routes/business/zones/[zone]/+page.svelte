<script>
  import { page } from "$app/stores";
  import { MENU } from "$lib/constants";
  import { ZoneMealList } from "$organisms";
  import { getCabin } from "$hooks";
  import { CONFIGURATION } from "$lib/constants";

  export let data;

  const cabin = getCabin($page)
  $: serviceZones = CONFIGURATION[cabin].positions[data.zone].cabin;
</script>

<div class='order-1 h-fit w-full'>

  <div class='w-full flex flex-col-reverse gap-4'>
    {#each serviceZones as position, i}
      <ZoneMealList
        services='{MENU.business.food}'
        {cabin}
        showSpecialMeals
        buttonLabel='Details'
        title='{position[0]}'
        rows='10-19'
        passengerNumber='40'
      />
    {/each}
  </div>

</div>

<div class='order-3 h-fit w-full'>
  <div class='w-full flex flex-col-reverse gap-4'>
    {#each serviceZones as position, i}
      <ZoneMealList
        services='{MENU.business.food}'
        {cabin}
        showSpecialMeals
        buttonLabel='Details'
        title='{position[1]}'
        rows='10-19'
        passengerNumber='40'
      />
    {/each}
  </div>
</div>
