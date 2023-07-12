<script>
  import { Card } from "$molecules";
  import { Divider } from "$atoms";
  import { MENU } from "$lib/constants";
  import { PageTitle } from "../../../lib/components/organisms";

  const tabs = [{ slug: '/economy/meals/options', label: 'Options' }, { slug: '/economy/meals/counts/FWD', label: 'Counts' }]
</script>

<PageTitle title='Meals' {tabs} />

<div class='flex flex-col gap-4 h-fit pb-4'>
  <h3 class='pt-4'>Services</h3>

  <div class='flex gap-4'>
    {#each MENU.economy.food as service}
      <Card title={service.name} headline={service.acronym} className='shadow-border' />
    {/each}
  </div>

  <Divider />

  <slot />
</div>
