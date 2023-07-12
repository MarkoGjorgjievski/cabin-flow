<script>
  import { PageTitle, SeatingMap } from "$organisms";
  import { CONFIGURATION } from "$lib/constants";
</script>

<PageTitle title='Zones' tabs='{CONFIGURATION.business.galleys}' direction='col-reverse' />

<div class='flex w-full gap-4'>
  <div class='order-2'>
    <SeatingMap />
  </div>
  <slot />
</div>

