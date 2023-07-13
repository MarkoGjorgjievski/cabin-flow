<script>
  import { MENU } from "$lib/constants";
  import { ZoneMealList } from "$organisms";
  import { SeatingMap } from "../organisms";

  export let cabin
  export let serviceZones = [];
  export let options
</script>

<div class='flex gap-4'>
<div class='h-fit w-full'>
  <div class='w-full flex flex-col-reverse gap-4'>
    {#each serviceZones as position, i}
      <ZoneMealList
        services='{MENU[cabin].food}'
        {cabin}
        showSpecialMeals
        buttonLabel='Details'
        title='{position[0]}'
        rows='10-19'
        passengerNumber='40'
        {options}
      />
    {/each}
  </div>
</div>

<SeatingMap {cabin} />

<div class='h-fit w-full'>
  <div class='w-full flex flex-col-reverse gap-4'>
    {#each serviceZones as position, i}
      <ZoneMealList
        services='{MENU[cabin].food}'
        {cabin}
        showSpecialMeals
        buttonLabel='Details'
        title='{position[1]}'
        rows='10-19'
        passengerNumber='40'
        {options}
      />
    {/each}
  </div>
</div>
</div>
