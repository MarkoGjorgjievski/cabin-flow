<script>
  import { MENU } from "$lib/constants";
  import { BusinessMealListItem } from "../index";
</script>

<div class='flex justify-between gap-4'>
  {#each MENU.economy.food as service}
    <div class='w-full flex flex-col gap-4'>
      {#each service.options as option, i}
        <BusinessMealListItem {option} id='{i+1}' slug='{service.acronym}' />
      {/each}
    </div>
  {/each}
</div>
