<script>
  import { PageTitle } from "$organisms";
  import { getContext } from "svelte";

  const { galleys } = getContext('config');
  const mealsZones = [...galleys, { slug: 'total', label: 'Total' }]
</script>

<PageTitle title='Meals' tabs='{mealsZones}' direction='col' />

<slot />
