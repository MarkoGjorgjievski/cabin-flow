<script>
  import { getContext } from "svelte";
  import { PageTitle } from "$organisms";

  const { food } = getContext('menu');
  const tabs = food.map(service => ({ slug: service.acronym, label: service.acronym }));
</script>

<PageTitle title='Zones' {tabs} />
<slot />
