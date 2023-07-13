<script>
  import { Card } from "$molecules";
  import { Divider } from "$atoms";
  import { MENU } from "$lib/constants";
  import { PageTitle } from "$organisms";
  import { MealListItem } from "../../../lib/components/organisms";
</script>

<PageTitle title='Meals' />

<div class='flex flex-col gap-4 h-fit pb-4'>
  <h3 class='pt-4'>Services</h3>

  <div class='flex gap-4'>
    {#each MENU.economy.food as service}
      <Card title={service.name} headline={service.acronym} className='shadow-border' />
    {/each}
  </div>

  <Divider my='1' />

  <slot />

  <Divider my='1' />
  <h2>Total</h2>

  <div class='flex justify-between gap-4'>
    {#each MENU.economy.food as service}
      <div class='w-full flex flex-col gap-4'>
        {#each service.options as option, i}
          <MealListItem {option} id='{i+1}' slug='{service.acronym}' />
        {/each}
      </div>
    {/each}
  </div>
</div>
