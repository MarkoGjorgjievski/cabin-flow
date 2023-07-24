<script>
  import { getContext } from "svelte";
  import { PageTitle } from "$organisms";

  const { galleys } = getContext('config');
  const mealsZones = [...galleys, { slug: 'total', label: 'Total' }]
</script>

<PageTitle title='Meals' tabs='{mealsZones}' direction='col' />
<slot />
